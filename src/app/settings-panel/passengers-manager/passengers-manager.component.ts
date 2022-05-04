import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from 'app/redux/root-interface';
import { ChangeDetectorRef, Component, OnDestroy, OnInit, QueryList, ViewChildren } from '@angular/core';
import Elevator from 'app/shared/classes/elevator.class';
import { NumericTextBoxComponent } from '@progress/kendo-angular-inputs';
import ElevatorManagerSettingsActions from 'app/redux/elevator-manager-settings/elevator-manager-settings.actions';
import Floor from 'app/shared/classes/floor.class';
import Passenger from 'app/shared/classes/passenger.class';

@Component({
    selector: 'passengers-manager',
    templateUrl: './passengers-manager.component.html',
    styleUrls: ['./passengers-manager.component.less']
})
export class PassengersManagerComponent implements OnInit, OnDestroy {
    private tooltipPosition: string = 'right';
    private subscriptions: Subscription[] = [];

    public selectedElevator: Elevator;
    public allElevators: Elevator[];

    @ViewChildren(NumericTextBoxComponent)
    public ntextboxes: QueryList<NumericTextBoxComponent>;

    constructor(private store: Store<AppState>, private changeDetector: ChangeDetectorRef) {}

    public ngOnInit(): void {
        this.subscriptions.push(
            this.store.select(state => state.settingsPanel.formPosition).subscribe(position => this.tooltipPosition = position),
            this.store.select(state => state.elevatorManagerSettings.elevators).subscribe(elevators => this.allElevators = elevators),
            this.store
                .select(state => state.elevatorManagerSettings.selectedElevator)
                .subscribe(elevator => {
                    this.selectedElevator = elevator;
                    this.changeDetector.markForCheck(); // yes, this needed
                })
        );
    }

    public ngOnDestroy(): void {
        this.subscriptions.forEach(sub => sub.unsubscribe());
    }

    public getTooltipPosition(): string {
        return this.tooltipPosition === 'left' ? 'right' : 'top';
    }

    public onClearPassengers(floorNumber: number): void {
        const selectedElevator = { ...this.selectedElevator, supportedFloors: [...this.selectedElevator.supportedFloors] };
        const idx = this.allElevators.findIndex(elevator => elevator.id === selectedElevator.id);
        const allElevators = [...this.allElevators];

        selectedElevator.supportedFloors[floorNumber] = new Floor([]);
        allElevators[idx] = selectedElevator;
        this.store.dispatch(new ElevatorManagerSettingsActions.SetSelectedElevator(selectedElevator));
        this.store.dispatch(new ElevatorManagerSettingsActions.SetAllElevators(allElevators));
    }

    public onAddPassenger(floorNumber: number): void {
        const selectedElevator = { ...this.selectedElevator, supportedFloors: [...this.selectedElevator.supportedFloors] };
        const { passengers } = selectedElevator.supportedFloors[floorNumber];
        const idx = this.allElevators.findIndex(elevator => elevator.id === selectedElevator.id);
        const allElevators = [...this.allElevators];

        selectedElevator.supportedFloors[floorNumber] = new Floor([...passengers, new Passenger(floorNumber, this.getRandomNumber(floorNumber))]);
        allElevators[idx] = selectedElevator;
        this.store.dispatch(new ElevatorManagerSettingsActions.SetSelectedElevator(selectedElevator));
        this.store.dispatch(new ElevatorManagerSettingsActions.SetAllElevators(allElevators));
    }

    public onRemovePassenger(floorNumber: number, passengerIndex: number): void {
        const selectedElevator = { ...this.selectedElevator, supportedFloors: [...this.selectedElevator.supportedFloors] };
        const passengers = [...selectedElevator.supportedFloors[floorNumber].passengers];
        const idx = this.allElevators.findIndex(elevator => elevator.id === selectedElevator.id);
        const allElevators = [...this.allElevators];

        passengers.splice(passengerIndex, 1);
        allElevators[idx] = selectedElevator;
        selectedElevator.supportedFloors[floorNumber] = new Floor(passengers);
        this.store.dispatch(new ElevatorManagerSettingsActions.SetSelectedElevator(selectedElevator));
        this.store.dispatch(new ElevatorManagerSettingsActions.SetAllElevators(allElevators));
    }

    public onChangeDestinationFloor(ntextbox: NumericTextBoxComponent, newDestination: number, floorNumber: number, passengerIndex: number): void {
        const selectedElevator = { ...this.selectedElevator, supportedFloors: [...this.selectedElevator.supportedFloors] };
        const passengers = [...selectedElevator.supportedFloors[floorNumber].passengers];
        const idx = this.allElevators.findIndex(elevator => elevator.id === selectedElevator.id);
        const allElevators = [...this.allElevators];

        passengers[passengerIndex] = new Passenger(floorNumber, newDestination);
        selectedElevator.supportedFloors[floorNumber] = new Floor(passengers);
        allElevators[idx] = selectedElevator;
        this.store.dispatch(new ElevatorManagerSettingsActions.SetSelectedElevator(selectedElevator));
        this.store.dispatch(new ElevatorManagerSettingsActions.SetAllElevators(allElevators));
        this.focusNumbericTextbox(ntextbox);
    }

    public onClearAllFloors(): void {
        const selectedElevator = { ...this.selectedElevator, supportedFloors: [...this.selectedElevator.supportedFloors] };
        const idx = this.allElevators.findIndex(elevator => elevator.id === selectedElevator.id);
        const allElevators = [...this.allElevators];

        selectedElevator.supportedFloors = Array.from({ length: selectedElevator.coveredFloors }).fill(new Floor()) as Floor[];
        allElevators[idx] = selectedElevator;
        this.store.dispatch(new ElevatorManagerSettingsActions.SetSelectedElevator(selectedElevator));
        this.store.dispatch(new ElevatorManagerSettingsActions.SetAllElevators(allElevators));
    }

    public trackByMethod(index: number): number {
        return index;
    }

    private getRandomNumber(notEqualNumber: number): number {
        const number = Math.floor(Math.random() * this.selectedElevator.coveredFloors);

        return number === notEqualNumber ? this.getRandomNumber(notEqualNumber) : number;
    }

    private focusNumbericTextbox(ntextbox: NumericTextBoxComponent): void {
        const idx = this.ntextboxes.toArray().findIndex(control => control === ntextbox);
        // because of recreation
        setTimeout(() => this.ntextboxes.toArray()[idx].focus());
    }
}
