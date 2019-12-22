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
    public enableDamping: boolean;
    public dampingFactor: number;

    private tooltipPosition: string = 'right';
    private subscriptions: Subscription[] = [];

    constructor(private store: Store<AppState>) {}

    public ngOnInit(): void {
        this.subscriptions.push(
            this.store.select(state => state.background.controls.controlsSettingsExpanded)
                .subscribe(enable => this.controlsSettingsExpanded = enable),
            this.store.select(state => state.background.controls.enableDamping)
                .subscribe(enable => this.enableDamping = enable),
            this.store.select(state => state.background.controls.dampingFactor)
                .subscribe(factor => this.dampingFactor = factor),
        );
    }

    public ngOnDestroy(): void {
        this.subscriptions.forEach(sub => sub.unsubscribe());
    }

    public getTooltipPosition(): string {
        return this.tooltipPosition === 'left' ? 'right' : 'top';
    }

    public onControlsSettingsExpanded(event: Event): void {
        this.store.dispatch(new BackgroundActions.SetControlsSettingsExpand(event[0].expanded));
    }

    public onDumpingEnableChange(): void {
        this.store.dispatch(new BackgroundActions.SetControlsDumping(this.enableDamping));
    }

    public onDampingFactorReset(): void {
        this.store.dispatch(new BackgroundActions.ResetControlsDumpingFactor());
    }
    
    public onDampingFactorChange(): void {
        if (this.dampingFactor === null) this.dampingFactor = 0.01;
        this.store.dispatch(new BackgroundActions.SetControlsDumpingFactor(this.dampingFactor));
    }
}
