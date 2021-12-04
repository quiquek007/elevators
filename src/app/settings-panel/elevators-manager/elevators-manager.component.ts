import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/redux/root-interface';
import BuildingSettingsActions from 'src/app/redux/building-settings/building-settings.actions';
import Elevator from 'src/app/shared/classes/elevator.class';
import { DefaultElevator } from 'src/app/shared/default-elevator.model';

@Component({
    selector: 'elevators-manager',
    templateUrl: './elevators-manager.component.html',
    styleUrls: ['./elevators-manager.component.less']
})
export class ElevatorsManagerComponent implements OnInit {
    public selectedElevator: Elevator = null;
    public wallColor: THREE.Color | string;
    public wallOpacity: number;
    public wallTransparent: boolean;
    public elevatorCapacity: number;
    public elevatorSpeed: number;
    public elevatorCoveredFloors: number;
    public elevatorCurrentFloor: number;
    
    private defaultElevator: DefaultElevator;
    private tooltipPosition: string = 'right';
    private subscriptions: Subscription[] = [];

    constructor(private store: Store<AppState>) {}

    public ngOnInit() {
        this.subscriptions.push(
            this.store.select(state => state.settingsForm.formPosition)
                .subscribe(position => this.tooltipPosition = position),
            this.store.select(state => state.buildingSettings.defaultElevator.wallColor)
                .subscribe(color => this.wallColor = color),
            this.store.select(state => state.buildingSettings.defaultElevator.wallOpacity)
                .subscribe(opacity => this.wallOpacity = opacity),
            this.store.select(state => state.buildingSettings.defaultElevator.wallTransparent)
                .subscribe(value => this.wallTransparent = value),
            this.store.select(state => state.buildingSettings.defaultElevator.capacity)
                .subscribe(capacity => this.elevatorCapacity = capacity),
            this.store.select(state => state.buildingSettings.defaultElevator.speed)
                .subscribe(speed => this.elevatorSpeed = speed),
            this.store.select(state => state.buildingSettings.defaultElevator.coveredFloors)
                .subscribe(coveredFloors => this.elevatorCoveredFloors = coveredFloors),
            this.store.select(state => state.buildingSettings.defaultElevator.currentFloor)
                .subscribe(floor => this.elevatorCurrentFloor = floor),
            this.store.select(state => state.buildingSettings.defaultElevator)
                .subscribe(defaultElevator => this.defaultElevator = defaultElevator),
        );
    }

    public getTooltipPosition(): string {
        return this.tooltipPosition === 'left' ? 'right' : 'top';
    }

    public onDeleteElevator(): void {
       
    }

    public onAddElevator(): void {
        this.store.dispatch(new BuildingSettingsActions.CreateNewElevator(this.defaultElevator));
        // to nullify store
        this.store.dispatch(new BuildingSettingsActions.CreateNewElevator(null));
    }

    public onWallColorChange(color: string): void {
        if (this.selectedElevator) {

        } else {
            this.store.dispatch(new BuildingSettingsActions.SetDefaultElevatorWallColor(color));
        }
    }

    public onWallOpacityChange(opacity: number): void {
        if (this.selectedElevator) {

        } else {
            this.store.dispatch(new BuildingSettingsActions.SetDefaultElevatorWallOpacity(opacity));
        }
    }

    public onWallTransparentChange(): void {
        if (this.selectedElevator) {

        } else {
            this.store.dispatch(new BuildingSettingsActions.SetDefaultElevatorWallTransparent(this.wallTransparent));
        }
    }

    public onElevatorCapacityChange(capacity: number): void {
        if (this.selectedElevator) {

        } else {
            this.store.dispatch(new BuildingSettingsActions.SetDefaultElevatorCapacity(capacity));
        }
    }

    public onElevatorSpeedChange(speed: number): void {
        if (this.selectedElevator) {

        } else {
            this.store.dispatch(new BuildingSettingsActions.SetDefaultElevatorSpeed(speed));
        }
    }

    public onElevatorCoveredFloorsChange(coveredFloors: number): void {
        if (this.selectedElevator) {

        } else {
            this.store.dispatch(new BuildingSettingsActions.SetDefaultElevatorCoveredFloors(coveredFloors));
        }
    }

    public onElevatorCurrentFloorChange(floor: number): void {
        if (this.selectedElevator) {

        } else {
            this.store.dispatch(new BuildingSettingsActions.SetDefaultElevatorCurrentFloor(floor));
        }
    }
}
