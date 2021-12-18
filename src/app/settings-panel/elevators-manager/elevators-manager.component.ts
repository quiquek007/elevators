import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from 'app/redux/root-interface';
import ElevatorManagerSettingsActions from 'app/redux/elevator-manager-settings/elevator-manager-settings.actions';
import Elevator from 'app/shared/classes/elevator.class';
import { IElevator } from 'app/shared/Elevator/elevator.model';
import { ObjectManagerService } from 'app/services/object-manager.service';
import { IWireframes } from 'app/shared/Elevator/childs/wireframes.model';

@Component({
    selector: 'elevators-manager',
    templateUrl: './elevators-manager.component.html',
    styleUrls: ['./elevators-manager.component.less']
})
export class ElevatorsManagerComponent implements OnInit {
    public selectedElevator: Elevator;
    public wallColor: THREE.Color | string;
    public wallOpacity: number;
    public wallTransparent: boolean;
    public elevatorCapacity: number;
    public elevatorSpeed: number;
    public elevatorCoveredFloors: number;
    public elevatorCurrentFloor: number;
    public isWireframesShowed: boolean;
    public wireframesColor: THREE.Color | number | string;

    private tooltipPosition: string = 'right';
    private subscriptions: Subscription[] = [];

    constructor(private store: Store<AppState>, private objectManager: ObjectManagerService) {}

    public ngOnInit() {
        this.subscriptions.push(
            this.store
                .select(state => state.settingsPanel.formPosition)
                .subscribe(position => this.tooltipPosition = position),
            this.store
                .select(state => state.elevatorManagerSettings.defaultElevator.wallColor)
                .subscribe(color => this.wallColor = color),
            this.store
                .select(state => state.elevatorManagerSettings.defaultElevator.wallOpacity)
                .subscribe(opacity => this.wallOpacity = opacity),
            this.store
                .select(state => state.elevatorManagerSettings.defaultElevator.wallTransparent)
                .subscribe(value => this.wallTransparent = value),
            this.store
                .select(state => state.elevatorManagerSettings.defaultElevator.capacity)
                .subscribe(capacity => this.elevatorCapacity = capacity),
            this.store
                .select(state => state.elevatorManagerSettings.defaultElevator.speed)
                .subscribe(speed => this.elevatorSpeed = speed),
            this.store
                .select(state => state.elevatorManagerSettings.defaultElevator.coveredFloors)
                .subscribe(coveredFloors => this.elevatorCoveredFloors = coveredFloors),
            this.store
                .select(state => state.elevatorManagerSettings.defaultElevator.currentFloor)
                .subscribe(floor => this.elevatorCurrentFloor = floor),
            this.store
                .select(state => state.elevatorManagerSettings.wireframes.isWireframesShowed)
                .subscribe(isWireframesShowed => this.isWireframesShowed = isWireframesShowed),
            this.store
                .select(state => state.elevatorManagerSettings.wireframes.color)
                .subscribe(color => this.wireframesColor = color)
        );
    }

    public getTooltipPosition(): string {
        return this.tooltipPosition === 'left' ? 'right' : 'top';
    }

    public onAddElevator(): void {
        const elevatorConfig = this.getElevatorConfiguration();
        const wireframesConfig = this.getWireframesConfiguration();
        const elevator = this.objectManager.createElevatorConfiguration(elevatorConfig, wireframesConfig);
        const elevatorObj = this.objectManager.buildElevator(elevator);

        console.log('elevator', elevatorObj);

        this.objectManager.addToScene(elevatorObj);
        // this.store.dispatch(new elevatorManagerSettingsActions.CreateNewElevator(newElevator));
        // // to nullify store
        // this.store.dispatch(new elevatorManagerSettingsActions.CreateNewElevator(null));
    }

    public onDeleteElevator(): void {}

    public onWallColorChange(color: string): void {
        if (this.selectedElevator) {
        } else {
            this.store.dispatch(new ElevatorManagerSettingsActions.SetElevatorWallColor(color));
        }
    }

    public onWallOpacityChange(opacity: number): void {
        if (this.selectedElevator) {
        } else {
            this.store.dispatch(new ElevatorManagerSettingsActions.SetElevatorWallOpacity(opacity));
        }
    }

    public onWallTransparentChange(): void {
        if (this.selectedElevator) {
        } else {
            this.store.dispatch(new ElevatorManagerSettingsActions.SetElevatorWallTransparent(this.wallTransparent));
        }
    }

    public onElevatorCapacityChange(capacity: number): void {
        if (this.selectedElevator) {
        } else {
            this.store.dispatch(new ElevatorManagerSettingsActions.SetElevatorCapacity(capacity));
        }
    }

    public onElevatorSpeedChange(speed: number): void {
        if (this.selectedElevator) {
        } else {
            this.store.dispatch(new ElevatorManagerSettingsActions.SetElevatorSpeed(speed));
        }
    }

    public onElevatorCoveredFloorsChange(coveredFloors: number): void {
        if (this.selectedElevator) {
        } else {
            this.store.dispatch(new ElevatorManagerSettingsActions.SetElevatorCoveredFloors(coveredFloors));
        }
    }

    public onElevatorCurrentFloorChange(floor: number): void {
        if (this.selectedElevator) {
        } else {
            this.store.dispatch(new ElevatorManagerSettingsActions.SetElevatorCurrentFloor(floor));
        }
    }

    private getElevatorConfiguration(): IElevator {
        return {
            capacity: this.elevatorCapacity,
            coveredFloors: this.elevatorCapacity,
            currentFloor: this.elevatorCurrentFloor,
            speed: this.elevatorSpeed,
            wallColor: this.wallColor,
            wallOpacity: this.wallOpacity,
            wallTransparent: this.wallTransparent
        };
    }

    private getWireframesConfiguration(): IWireframes {
        return {
            isWireframesShowed: this.isWireframesShowed,
            color: this.wireframesColor
        };
    }

    public onResetAllSettings(): void {
        this.store.dispatch(new ElevatorManagerSettingsActions.ResetAllSettings());
    }
}
