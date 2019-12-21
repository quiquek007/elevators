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

    public onDumpingChange(): void {
        this.store.dispatch(new BackgroundActions.SetControlsDumping(this.controls));
    }

    public onControlsSettingsExpanded(event: Event): void {
        this.store.dispatch(new BackgroundActions.SetControlsSettingsExpand(event[0].expanded));
    }

    // public onOpacityChange(opacity: number): void {
    //     if (opacity === null) this.store.dispatch(new BackgroundActions.SetGridOpacity(BACKGROUND.gridOpacity));
    //     else this.store.dispatch(new BackgroundActions.SetGridOpacity(opacity));
    // }
}
