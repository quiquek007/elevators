import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from 'app/redux/root-interface';
import ElevatorManagerSettingsActions from 'app/redux/elevator-manager-settings/elevator-manager-settings.actions';
import Elevator from 'app/shared/classes/elevator.class';
import { IElevator } from 'app/shared/Elevator/elevator.model';
import { ObjectManagerService } from 'app/services/object-manager.service';
import { ResetKeys } from './reset-keys.model';
import { filter } from 'rxjs/operators';

@Component({
    selector: 'elevators-manager',
    templateUrl: './elevators-manager.component.html',
    styleUrls: ['./elevators-manager.component.less']
})
export class ElevatorsManagerComponent implements OnInit {
    private tooltipPosition: string = 'right';
    private subscriptions: Subscription[] = [];
    private elevatorObject: THREE.Object3D;

    public selectedElevator: Elevator;
    public wallColor: THREE.Color | string;
    public wallOpacity: number;
    public wallTransparent: boolean;
    public elevatorCapacity: number;
    public elevatorSpeed: number;
    public elevatorCoveredFloors: number;
    public elevatorCurrentFloor: number;
    public isWireframesShowed: boolean;
    public wireframesColor: THREE.Color;

    constructor(private store: Store<AppState>, private objectManager: ObjectManagerService, private changeDetector: ChangeDetectorRef) {}

    public ngOnInit() {
        this.subscriptions.push(
            this.store.select(state => state.settingsPanel.formPosition).subscribe(position => this.tooltipPosition = position),
            this.store.select(state => state.elevatorManagerSettings.defaultElevator.wallColor).subscribe(color => this.wallColor = color),
            this.store.select(state => state.elevatorManagerSettings.defaultElevator.wallOpacity).subscribe(opacity => this.wallOpacity = opacity),
            this.store
                .select(state => state.elevatorManagerSettings.defaultElevator.wallTransparent)
                .subscribe(value => this.wallTransparent = value),
            this.store
                .select(state => state.elevatorManagerSettings.defaultElevator.capacity)
                .subscribe(capacity => this.elevatorCapacity = capacity),
            this.store.select(state => state.elevatorManagerSettings.defaultElevator.speed).subscribe(speed => this.elevatorSpeed = speed),
            this.store
                .select(state => state.elevatorManagerSettings.defaultElevator.coveredFloors)
                .subscribe(coveredFloors => this.elevatorCoveredFloors = coveredFloors),
            this.store
                .select(state => state.elevatorManagerSettings.defaultElevator.currentFloor)
                .subscribe(floor => this.elevatorCurrentFloor = floor),
            this.store
                .select(state => state.elevatorManagerSettings.wireframes.isWireframesShowed)
                .subscribe(isWireframesShowed => this.isWireframesShowed = isWireframesShowed),
            this.store.select(state => state.elevatorManagerSettings.wireframes.color).subscribe(color => this.wireframesColor = color),
            this.store
                .select(state => state.elevatorManagerSettings.selectedElevator)
                .subscribe(elevator => {
                    this.changeDetector.markForCheck();
                    this.selectedElevator = elevator;

                    if (!elevator) return;

                    this.wallColor = elevator.wallColor;
                    this.wallOpacity = elevator.wallOpacity;
                    this.wallTransparent = elevator.wallTransparent;
                    this.elevatorCapacity = elevator.capacity;
                    this.elevatorSpeed = elevator.speed;
                    this.elevatorCoveredFloors = elevator.coveredFloors;
                    this.elevatorCurrentFloor = elevator.currentFloor;
                    this.elevatorObject = this.objectManager.getObjectById(this.selectedElevator.id);
                })
        );
    }

    public getTooltipPosition(): string {
        return this.tooltipPosition === 'left' ? 'right' : 'top';
    }

    public onAddElevator(): void {
        const elevatorConfig = this.getElevatorConfiguration();
        const elevator = this.objectManager.createElevatorConfiguration(elevatorConfig);
        const object = this.objectManager.buildElevatorObject(elevator);

        this.objectManager.addToScene(object);
        this.store.dispatch(new ElevatorManagerSettingsActions.AddNewElevator(elevator));
    }

    public onDeleteElevator(): void {}

    public onWallColorChange(color: THREE.Color): void {
        if (!this.selectedElevator) return;

        this.getWallObjects().forEach((element: THREE.Object3D) => (<any>element).material.color.set(color));
        this.store.dispatch(new ElevatorManagerSettingsActions.SetElevatorWallColor(color));
    }

    public onWallOpacityChange(opacity: number): void {
        if (!this.selectedElevator) return;

        this.getWallObjects().forEach((element: THREE.Object3D) => (<any>element).material.opacity = opacity);
        this.store.dispatch(new ElevatorManagerSettingsActions.SetElevatorWallOpacity(opacity));
    }

    public onWallTransparentChange(): void {
        if (!this.selectedElevator) return;

        this.getWallObjects().forEach((element: THREE.Object3D) => (<any>element).material.transparent = this.wallTransparent);
        this.store.dispatch(new ElevatorManagerSettingsActions.SetElevatorWallTransparent(this.wallTransparent));
    }

    public onElevatorCapacityChange(capacity: number): void {
        if (!this.selectedElevator) return;

        this.store.dispatch(new ElevatorManagerSettingsActions.SetElevatorCapacity(capacity));
    }

    public onElevatorSpeedChange(speed: number): void {
        if (!this.selectedElevator) return;

        this.store.dispatch(new ElevatorManagerSettingsActions.SetElevatorSpeed(speed));
    }

    public onElevatorCoveredFloorsChange(coveredFloors: number): void {
        if (!this.selectedElevator) return;

        this.store.dispatch(new ElevatorManagerSettingsActions.SetElevatorCoveredFloors(coveredFloors));
    }

    public onElevatorCurrentFloorChange(floor: number): void {
        if (!this.selectedElevator) return;

        this.store.dispatch(new ElevatorManagerSettingsActions.SetElevatorCurrentFloor(floor));
    }

    private getElevatorConfiguration(): IElevator {
        return {
            capacity: this.elevatorCapacity,
            coveredFloors: this.elevatorCapacity,
            currentFloor: this.elevatorCurrentFloor,
            speed: this.elevatorSpeed,
            wallColor: this.wallColor,
            wallOpacity: this.wallOpacity,
            wallTransparent: this.wallTransparent,
            wireframes: {
                isWireframesShowed: this.isWireframesShowed,
                color: this.wireframesColor
            }
        };
    }

    public onResetAllSettings(key: number): void {
        switch (key) {
            case ResetKeys.TAB_ELEVATORS_PLUS_SETTINGS:
                this.store.dispatch(new ElevatorManagerSettingsActions.ResetAllSettings());
                this.objectManager.getElevators().forEach(elevator => this.objectManager.removeObject(this.objectManager.getObjectById(elevator.id)));
                this.objectManager.setElevators([]);
                break;
            case ResetKeys.TAB_SETTINGS:
                this.store.dispatch(new ElevatorManagerSettingsActions.ResetAllSettings());
                this.store.dispatch(new ElevatorManagerSettingsActions.SetAllElevators([...this.objectManager.getElevators()]));
                break;
            case ResetKeys.TAB_ELEVATORS:
                this.objectManager.getElevators().forEach(elevator => this.objectManager.removeObject(this.objectManager.getObjectById(elevator.id)));
                this.objectManager.setElevators([]);
                this.store.dispatch(new ElevatorManagerSettingsActions.SetAllElevators([]));
                break;
        }
    }

    private getWallObjects(): THREE.Object3D[] {
        const walls = this.elevatorObject.children.filter(element => element.name === 'wall');

        walls.push(this.elevatorObject.children.find(element => element.name === 'floor'));
        walls.push(this.elevatorObject.children.find(element => element.name === 'ceiling'));

        return walls;
    }
}
