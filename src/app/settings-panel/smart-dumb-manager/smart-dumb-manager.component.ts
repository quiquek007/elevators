import { Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { ListBoxToolbarConfig } from '@progress/kendo-angular-listbox';
import { AppState } from 'app/redux/root-interface';
import Elevator from 'app/shared/classes/elevator.class';
import { ObjectManagerService } from 'app/services/object-manager.service';
import ElevatorManagerSettingsActions from 'app/redux/elevator-manager-settings/elevator-manager-settings.actions';

@Component({
    selector: 'smart-dumb-manager',
    templateUrl: './smart-dumb-manager.component.html',
    styleUrls: ['./smart-dumb-manager.component.less']
})
export class SmartDumbManagerComponent implements OnInit, OnDestroy {
    private subscriptions: Subscription[] = [];

    public allElevators: Elevator[];
    public dumbElevators: string[] = [];
    public smartElevators: string[] = [];
    public toolbarSettings: ListBoxToolbarConfig = { tools: ['transferTo', 'transferFrom'] };

    constructor(private store: Store<AppState>, private objectManager: ObjectManagerService, private changeDetector: ChangeDetectorRef) {}

    public ngOnInit(): void {
        this.subscriptions.push(
            this.store
                .select(state => state.elevatorManagerSettings.elevators)
                .pipe(debounceTime(50))
                .subscribe(elevators => this.setSmartDumbElevators(elevators))
        );
    }

    public ngOnDestroy(): void {
        this.subscriptions.forEach(sub => sub.unsubscribe());
    }

    public onChangeElevatorType(): void {
        const allElevators = [...this.allElevators];
        const updatedElevators = allElevators.map(elevator => {
            const { name } = this.objectManager.getObjectById(elevator.id);
            if (this.dumbElevators.includes(name)) {
                return { ...elevator, isSmart: false };
            } else {
                return { ...elevator, isSmart: true };
            }
        });

        this.store.dispatch(new ElevatorManagerSettingsActions.SetAllElevators(updatedElevators));
    }

    private setSmartDumbElevators(elevators: Elevator[]): void {
        this.allElevators = elevators;
        const smartElevators = elevators.filter(elevator => elevator.isSmart);
        const dumbElevators = elevators.filter(elevator => !elevator.isSmart);

        this.smartElevators = smartElevators.reduce((acc, elevator) => {
            acc.push(this.objectManager.getObjectById(elevator.id).name);
            return acc;
        }, []);
        this.dumbElevators = dumbElevators.reduce((acc, elevator) => {
            acc.push(this.objectManager.getObjectById(elevator.id).name);
            return acc;
        }, []);
        this.changeDetector.detectChanges();
    }
}
