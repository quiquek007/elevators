import {
    Component,
    OnInit
} from '@angular/core';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from 'app/redux/root-interface';
import Elevator from 'app/shared/classes/elevator.class';
import ElevatorManagerSettingsActions from 'app/redux/elevator-manager-settings/elevator-manager-settings.actions';

@Component({
    selector: 'wireframes-settings',
    templateUrl: './wireframes-settings.component.html',
    styleUrls: ['./wireframes-settings.component.less']
})
export class WireframesSettingsComponent implements OnInit {
    private tooltipPosition: string = 'right';
    private subscriptions: Subscription[] = [];

    public wireframesSettingsExpanded: boolean;
    public isWireframesShowed: boolean;
    public wireframesColor: THREE.Color | number | string;
    public selectedElevator: Elevator;

    constructor(private store: Store<AppState>) {}

    public ngOnInit(): void {
        this.subscriptions.push(
            this.store.select(state => state.elevatorManagerSettings.wireframes.wireframesSettingsExpanded)
                .subscribe(expanded => this.wireframesSettingsExpanded = expanded),
            this.store.select(state => state.elevatorManagerSettings.wireframes.isWireframesShowed)
                .subscribe(isWireframesShowed => this.isWireframesShowed = isWireframesShowed),
            this.store.select(state => state.elevatorManagerSettings.wireframes.color)
                .subscribe(color => this.wireframesColor = color),
        );
    }

    public ngOnDestroy(): void {
        this.subscriptions.forEach(sub => sub.unsubscribe());
    }

    public getTooltipPosition(): string {
        return this.tooltipPosition === 'left' ? 'right' : 'top';
    }

    public onWireframesSettingsExpanded(event: Event): void {
        this.store.dispatch(new ElevatorManagerSettingsActions.SetWireframesExpand(event[0].expanded));
    }

    public onShowWireframeChange(event: Event): void {
        event.stopPropagation();
        this.store.dispatch(new ElevatorManagerSettingsActions.SetWireframesShowed(this.isWireframesShowed));
    }

    public onWireframesColorChange(color: string): void {
        this.store.dispatch(new ElevatorManagerSettingsActions.SetWireframesColor(color));
    }
}
