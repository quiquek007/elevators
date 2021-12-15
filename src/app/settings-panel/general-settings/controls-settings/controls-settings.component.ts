import {
    Component,
    OnInit
} from '@angular/core';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from 'app/redux/root-interface';
import GeneralSettingsActions from '../../../redux/general-settings/general-settings.actions';

@Component({
    selector: 'controls-settings',
    templateUrl: './controls-settings.component.html',
    styleUrls: ['./controls-settings.component.less']
})
export class ControlsSettingsComponent implements OnInit {
    public controlsSettingsExpanded: boolean;
    public enableDamping: boolean;
    public dampingFactor: number;
    public cameraMinDistance: number;
    public cameraMaxDistance: number;

    private tooltipPosition: string = 'right';
    private subscriptions: Subscription[] = [];

    constructor(private store: Store<AppState>) {}

    public ngOnInit(): void {
        this.subscriptions.push(
            this.store.select(state => state.settingsPanel.formPosition)
                .subscribe(position => this.tooltipPosition = position),
            this.store.select(state => state.generalSettings.controls.controlsSettingsExpanded)
                .subscribe(enable => this.controlsSettingsExpanded = enable),
            this.store.select(state => state.generalSettings.controls.enableDamping)
                .subscribe(enable => this.enableDamping = enable),
            this.store.select(state => state.generalSettings.controls.dampingFactor)
                .subscribe(factor => this.dampingFactor = factor),
            this.store.select(state => state.generalSettings.controls.cameraMinDistance)
                .subscribe(distance => this.cameraMinDistance = distance),
            this.store.select(state => state.generalSettings.controls.cameraMaxDistance)
                .subscribe(distance => this.cameraMaxDistance = distance),
        );
    }

    public ngOnDestroy(): void {
        this.subscriptions.forEach(sub => sub.unsubscribe());
    }

    public getTooltipPosition(): string {
        return this.tooltipPosition === 'left' ? 'right' : 'top';
    }

    public onControlsSettingsExpanded(event: Event): void {
        this.store.dispatch(new GeneralSettingsActions.SetControlsSettingsExpand(event[0].expanded));
    }

    public onDumpingEnableChange(): void {
        this.store.dispatch(new GeneralSettingsActions.SetControlsDumping(this.enableDamping));
    }

    public onDampingFactorReset(): void {
        this.store.dispatch(new GeneralSettingsActions.ResetControlsDumpingFactor());
    }

    public onDampingFactorChange(): void {
        if (this.dampingFactor === null) this.dampingFactor = 0.01;
        this.store.dispatch(new GeneralSettingsActions.SetControlsDumpingFactor(this.dampingFactor));
    }

    public onCameraMinDistanceChange(): void {
        if (this.cameraMinDistance === null) this.cameraMinDistance = 0;
        if (this.cameraMinDistance >= this.cameraMaxDistance) {
            this.cameraMaxDistance = this.cameraMinDistance;
            this.onCameraMaxDistanceChange();
        }
        this.store.dispatch(new GeneralSettingsActions.SetControlsCameraMinDistance(this.cameraMinDistance));
    }

    public onCameraMaxDistanceChange(): void {
        if (this.cameraMaxDistance === null) this.cameraMaxDistance = 500;
        if (this.cameraMaxDistance < this.cameraMinDistance) {
            this.cameraMinDistance = this.cameraMaxDistance;
            this.onCameraMinDistanceChange();
        }
        this.store.dispatch(new GeneralSettingsActions.SetControlsCameraMaxDistance(this.cameraMaxDistance));
    }
}
