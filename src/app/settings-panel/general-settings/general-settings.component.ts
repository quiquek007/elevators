import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppState } from 'app/redux/root-interface';
import GeneralSettingsActions from '../../redux/general-settings/general-settings.actions';
import CameraSettingsActions from 'app/redux/camera-settings/camera-settings.actions';
import { CameraSettings } from 'app/redux/camera-settings/camera-settings.model';
import cameraSettings from 'app/constants/camera-settings.constants';
import { EngineService } from 'app/services/engine.service';

@Component({
    selector: 'general-settings',
    templateUrl: './general-settings.component.html',
    styleUrls: ['./general-settings.component.less']
})
export class GeneralSettingsComponent implements OnInit, OnDestroy {
    private subscriptions: Subscription[] = [];
    private cameraSettings: CameraSettings = { ...cameraSettings };

    public backgroundColor: string;
    public tooltipPosition: string = 'right';

    constructor(private store: Store<AppState>, private engServ: EngineService) {}

    public ngOnInit(): void {
        this.subscriptions.push(
            this.store
                .select(state => state.settingsPanel.formPosition)
                .subscribe(position => this.tooltipPosition = position),
            this.store
                .select(state => state.generalSettings.backgroundColor)
                .subscribe(backgroundColor => this.backgroundColor = backgroundColor),
            this.store
                .select(state => state.cameraSettings.cameraPosition)
                .subscribe(cameraPosition => this.cameraSettings.cameraPosition = cameraPosition),
            this.store
                .select(state => state.cameraSettings.controlsTarget)
                .subscribe(controlsTarget => this.cameraSettings.controlsTarget = controlsTarget)
        );
    }

    public ngOnDestroy(): void {
        this.subscriptions.forEach(sub => sub.unsubscribe());
    }

    public getTooltipPosition(): string {
        return this.tooltipPosition === 'left' ? 'right' : 'top';
    }

    public onBackgroundColorChange(color: string): void {
        this.store.dispatch(new GeneralSettingsActions.SetBackgroundColor(color));
    }

    public onBackgroundColorReset(): void {
        this.store.dispatch(new GeneralSettingsActions.ResetBackgroundColor());
    }

    public onResetAllSettings(): void {
        this.store.dispatch(new GeneralSettingsActions.ResetAllSettings());
        this.store.dispatch(new CameraSettingsActions.ResetCameraPosition());
        this.store.dispatch(new CameraSettingsActions.ResetControlsTarget());
        this.engServ.setInitialCameraPosition(this.cameraSettings);
    }
}
