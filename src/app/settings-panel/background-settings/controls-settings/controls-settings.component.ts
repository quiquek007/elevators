import {
    Component,
    OnInit
} from '@angular/core';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/redux/root-interface';
import BackgroundActions from '../../../redux/background/background.actions';

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
            this.store.select(state => state.background.controls.controlsSettingsExpanded)
                .subscribe(enable => this.controlsSettingsExpanded = enable),
            this.store.select(state => state.background.controls.enableDamping)
                .subscribe(enable => this.enableDamping = enable),
            this.store.select(state => state.background.controls.dampingFactor)
                .subscribe(factor => this.dampingFactor = factor),
            this.store.select(state => state.background.controls.cameraMinDistance)
                .subscribe(distance => this.cameraMinDistance = distance),
            this.store.select(state => state.background.controls.cameraMaxDistance)
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
    
    public onCameraMinDistanceChange(): void {
        if (this.cameraMinDistance === null) this.cameraMinDistance = 0;
        if (this.cameraMinDistance >= this.cameraMaxDistance) {
            this.cameraMaxDistance = this.cameraMinDistance;
            this.onCameraMaxDistanceChange();
        }
        this.store.dispatch(new BackgroundActions.SetControlsCameraMinDistance(this.cameraMinDistance));
    }
    
    public onCameraMaxDistanceChange(): void {
        if (this.cameraMaxDistance === null) this.cameraMaxDistance = 500;
        if (this.cameraMaxDistance < this.cameraMinDistance) {
            this.cameraMinDistance = this.cameraMaxDistance;
            this.onCameraMinDistanceChange();
        }
        this.store.dispatch(new BackgroundActions.SetControlsCameraMaxDistance(this.cameraMaxDistance));
    }
}
