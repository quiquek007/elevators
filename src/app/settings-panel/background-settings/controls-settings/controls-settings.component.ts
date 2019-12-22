import {
    Component,
    OnInit
} from '@angular/core';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/redux/root-interface';
import BackgroundActions from '../../../redux/background/background.actions';
import { Controls } from 'src/app/shared/controls.model';

@Component({
    selector: 'controls-settings',
    templateUrl: './controls-settings.component.html',
    styleUrls: ['./controls-settings.component.less']
})
export class ControlsSettingsComponent implements OnInit {
    public controlsSettingsExpanded: boolean;
    public controls: Controls;

    private tooltipPosition: string = 'right';
    private subscriptions: Subscription[] = [];

    constructor(private store: Store<AppState>) {}

    public ngOnInit(): void {
        this.subscriptions.push(
            this.store.select(state => state.background.controlsSettingsExpanded)
                .subscribe(enable => this.controlsSettingsExpanded = enable),
            this.store.select(state => state.background.controls)
                .subscribe(controls => this.controls = Object.assign({}, controls)),
        );
    }

    public ngOnDestroy(): void {
        this.subscriptions.forEach(sub => sub.unsubscribe());
    }

    public getTooltipPosition(): string {
        return this.tooltipPosition === 'left' ? 'right' : 'top';
    }

    public onDumpingChange(): void {
        this.store.dispatch(new BackgroundActions.SetControlsDumping(this.controls));
    }

    public onControlsSettingsExpanded(event: Event): void {
        this.store.dispatch(new BackgroundActions.SetControlsSettingsExpand(event[0].expanded));
    }

    // public ononDampingFactorReset(event: Event): void {
    //     this.store.dispatch(new BackgroundActions.SetControlsSettingsExpand(event[0].expanded));
    // }
    
    public onGridSizeChange(): void {
        // const defaultValue = 5;
        // for (let key in this.controls) {
        //     if (this.controls[key] === null) this.controls[key] = defaultValue;
        // }       
        this.store.dispatch(new BackgroundActions.SetControlsDumpingFactor(this.controls));
    }
}
