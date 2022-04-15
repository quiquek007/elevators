import * as THREE from 'three';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from 'app/redux/root-interface';
import ElevatorManagerSettingsActions from 'app/redux/elevator-manager-settings/elevator-manager-settings.actions';
import elevatorManagerSettings from 'app/constants/elevator-manager-settings.constants';
import Elevator from 'app/shared/classes/elevator.class';
import { IElevator } from 'app/shared/Elevator/elevator.model';
import { ObjectManagerService } from 'app/services/object-manager.service';
import { ResetKeys } from './reset-keys.model';

@Component({
    selector: 'elevators-manager',
    templateUrl: './elevators-manager.component.html',
    styleUrls: ['./elevators-manager.component.less']
})
export class ElevatorsManagerComponent implements OnInit {
    private tooltipPosition: string = 'right';
    private subscriptions: Subscription[] = [];
    private elevatorObject: THREE.Object3D;
    private allElevators: Elevator[];

    public selectedElevator: Elevator;
    public wallColor: THREE.Color;
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
            this.store.select(state => state.elevatorManagerSettings.elevators).subscribe(elevators => this.allElevators = elevators),
            this.store
                .select(state => state.elevatorManagerSettings.selectedElevator)
                .subscribe(elevator => {
                    this.changeDetector.markForCheck(); // yes, this needed
                    this.selectedElevator = elevator;

                    if (!elevator) {
                        this.elevatorObject = null;
                        return;
                    }

                    this.wallTransparent = elevator.wallTransparent;
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
        object.translateX(this.allElevators.length * elevatorManagerSettings.distanceBetweenElevators);
        this.store.dispatch(new ElevatorManagerSettingsActions.AddNewElevator(elevator));
    }

    public onDeleteElevator(): void {
        if (!this.selectedElevator) return;

        const removedIndex = this.allElevators.findIndex(elevator => this.selectedElevator.id === elevator.id);
        for (let i = removedIndex + 1, len = this.allElevators.length; i < len; i++) {
            this.objectManager.getObjectById(this.allElevators[i].id).translateX(-elevatorManagerSettings.distanceBetweenElevators);
        }
        const removedElevatorId = this.allElevators.find(elevator => this.selectedElevator.id === elevator.id).id;
        const filteredList = this.allElevators.filter(elevator => elevator.id !== removedElevatorId);
        this.objectManager.removeObject(this.objectManager.getObjectById(removedElevatorId));
        this.store.dispatch(new ElevatorManagerSettingsActions.SetSelectedElevator(null));
        this.store.dispatch(new ElevatorManagerSettingsActions.SetAllElevators(filteredList));
    }

    public onWallColorChange(color: THREE.Color): void {
        this.store.dispatch(new ElevatorManagerSettingsActions.SetElevatorWallColor(color));

        if (!this.selectedElevator) return;
        const [modifiedElevator, modifiedAllElevators] = this.getModifiedElevators('wallColor', color);
        this.getWallObjects().forEach((element: THREE.Object3D) => (<any>element).material.color.set(color));
        this.store.dispatch(new ElevatorManagerSettingsActions.SetSelectedElevator(modifiedElevator));
        this.store.dispatch(new ElevatorManagerSettingsActions.SetAllElevators(modifiedAllElevators));
    }

    public onGetRandomColor(): void {
        const color = new THREE.Color(Math.random() * 0xffffff);
        const newColor: any = '#' + color.getHexString();
        this.store.dispatch(new ElevatorManagerSettingsActions.SetElevatorWallColor(newColor));

        if (!this.selectedElevator) return;
        const [modifiedElevator, modifiedAllElevators] = this.getModifiedElevators('wallColor', newColor);
        this.getWallObjects().forEach((element: THREE.Object3D) => (<any>element).material.color.set(newColor));
        this.store.dispatch(new ElevatorManagerSettingsActions.SetSelectedElevator(modifiedElevator));
        this.store.dispatch(new ElevatorManagerSettingsActions.SetAllElevators(modifiedAllElevators));
    }

    public onWallOpacityChange(opacity: number): void {
        this.store.dispatch(new ElevatorManagerSettingsActions.SetElevatorWallOpacity(opacity));

        if (!this.selectedElevator) return;
        const [modifiedElevator, modifiedAllElevators] = this.getModifiedElevators('wallOpacity', opacity);
        this.getWallObjects().forEach((element: THREE.Object3D) => (<any>element).material.opacity = opacity);
        this.store.dispatch(new ElevatorManagerSettingsActions.SetSelectedElevator(modifiedElevator));
        this.store.dispatch(new ElevatorManagerSettingsActions.SetAllElevators(modifiedAllElevators));
    }

    public onWallTransparentChange(): void {
        this.store.dispatch(new ElevatorManagerSettingsActions.SetElevatorWallTransparent(this.wallTransparent));

        if (!this.selectedElevator) return;
        const [modifiedElevator, modifiedAllElevators] = this.getModifiedElevators('wallTransparent', this.wallTransparent);
        this.getWallObjects().forEach((element: THREE.Object3D) => (<any>element).material.transparent = this.wallTransparent);
        this.store.dispatch(new ElevatorManagerSettingsActions.SetSelectedElevator(modifiedElevator));
        this.store.dispatch(new ElevatorManagerSettingsActions.SetAllElevators(modifiedAllElevators));
    }

    public onElevatorCapacityChange(capacity: number): void {
        this.store.dispatch(new ElevatorManagerSettingsActions.SetElevatorCapacity(capacity));

        if (!this.selectedElevator) return;
        const [modifiedElevator, modifiedAllElevators] = this.getModifiedElevators('capacity', capacity);
        this.store.dispatch(new ElevatorManagerSettingsActions.SetSelectedElevator(modifiedElevator));
        this.store.dispatch(new ElevatorManagerSettingsActions.SetAllElevators(modifiedAllElevators));
    }

    public onElevatorSpeedChange(speed: number): void {
        this.store.dispatch(new ElevatorManagerSettingsActions.SetElevatorSpeed(speed));

        if (!this.selectedElevator) return;
        const [modifiedElevator, modifiedAllElevators] = this.getModifiedElevators('speed', speed);
        this.store.dispatch(new ElevatorManagerSettingsActions.SetSelectedElevator(modifiedElevator));
        this.store.dispatch(new ElevatorManagerSettingsActions.SetAllElevators(modifiedAllElevators));
    }

    public onElevatorCoveredFloorsChange(coveredFloors: number): void {
        this.store.dispatch(new ElevatorManagerSettingsActions.SetElevatorCoveredFloors(coveredFloors));

        if (!this.selectedElevator) return;
        const [modifiedElevator, modifiedAllElevators] = this.getModifiedElevators('coveredFloors', coveredFloors);
        this.store.dispatch(new ElevatorManagerSettingsActions.SetSelectedElevator(modifiedElevator));
        this.store.dispatch(new ElevatorManagerSettingsActions.SetAllElevators(modifiedAllElevators));
    }

    public onElevatorCurrentFloorChange(floor: number): void {
        this.store.dispatch(new ElevatorManagerSettingsActions.SetElevatorCurrentFloor(floor));

        if (!this.selectedElevator) return;
        const [modifiedElevator, modifiedAllElevators] = this.getModifiedElevators('currentFloor', floor);
        this.store.dispatch(new ElevatorManagerSettingsActions.SetSelectedElevator(modifiedElevator));
        this.store.dispatch(new ElevatorManagerSettingsActions.SetAllElevators(modifiedAllElevators));
    }

    private getElevatorConfiguration(): IElevator {
        return {
            capacity: this.selectedElevator?.capacity || this.elevatorCapacity,
            coveredFloors: this.selectedElevator?.coveredFloors || this.elevatorCoveredFloors,
            currentFloor: this.selectedElevator?.currentFloor || this.elevatorCurrentFloor,
            speed: this.selectedElevator?.speed || this.elevatorSpeed,
            wallColor: this.selectedElevator?.wallColor || this.wallColor,
            wallOpacity: this.selectedElevator?.wallOpacity || this.wallOpacity,
            wallTransparent: this.selectedElevator?.wallTransparent || this.wallTransparent,
            wireframes: {
                isWireframesShowed: this.selectedElevator?.wireframes?.isWireframesShowed || this.isWireframesShowed,
                color: this.selectedElevator?.wireframes?.color || this.wireframesColor
            }
        };
    }

    public onResetAllSettings(key: number): void {
        switch (key) {
            case ResetKeys.TAB_ELEVATORS_PLUS_SETTINGS:
                this.allElevators.forEach(elevator => this.objectManager.removeObject(this.objectManager.getObjectById(elevator.id)));
                this.store.dispatch(new ElevatorManagerSettingsActions.SetSelectedElevator(null));
                this.store.dispatch(new ElevatorManagerSettingsActions.ResetAllSettings());
                break;
            // TODO: maybe delete it later
            // case ResetKeys.TAB_SETTINGS:
            //     const savedElevators = [...this.allElevators];
            //     this.store.dispatch(new ElevatorManagerSettingsActions.ResetAllSettings());
            //     this.store.dispatch(new ElevatorManagerSettingsActions.SetAllElevators(savedElevators));
            //     break;
            case ResetKeys.TAB_ELEVATORS:
                this.allElevators.forEach(elevator => this.objectManager.removeObject(this.objectManager.getObjectById(elevator.id)));
                this.store.dispatch(new ElevatorManagerSettingsActions.SetAllElevators([]));
                this.store.dispatch(new ElevatorManagerSettingsActions.SetSelectedElevator(null));
                break;
        }
    }

    private getWallObjects(): THREE.Object3D[] {
        const walls = this.elevatorObject.children.filter(element => element.name === 'wall');

        walls.push(this.elevatorObject.children.find(element => element.name === 'floor'));
        walls.push(this.elevatorObject.children.find(element => element.name === 'ceiling'));
        walls.push(this.elevatorObject.children.find(element => element.name === 'door-right'));
        walls.push(this.elevatorObject.children.find(element => element.name === 'door-left'));

        return walls;
    }

    private getModifiedElevators(property: string, value: any): [Elevator, Elevator[]] {
        const modifiedElevator = { ...this.selectedElevator, [property]: value } as Elevator;
        const idx = this.allElevators.findIndex(item => modifiedElevator.id === item.id);
        const modifiedAllElevators = [...this.allElevators];
        modifiedAllElevators[idx] = modifiedElevator;

        return [modifiedElevator, modifiedAllElevators];
    }
}
