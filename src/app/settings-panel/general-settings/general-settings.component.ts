import {
    Component,
    OnInit,
    OnDestroy,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { localStorageProject } from 'src/app/constants/project.constants';
import { AppState } from 'src/app/redux/root-interface';
import GeneralSettingsActions from '../../redux/general-settings/general-settings.actions';

@Component({
    selector: 'general-settings',
    templateUrl: './general-settings.component.html',
	styleUrls: ['./general-settings.component.less']
})
export class GeneralSettingsComponent implements OnInit, OnDestroy {
    public backgroundColor: string;
    public tooltipPosition: string = 'right';
    private subscriptions: Subscription[] = [];
    private state: AppState;

    constructor(private store: Store<AppState>) {}

    public ngOnInit(): void {
        this.subscriptions.push(
            this.store.select(state => state.settingsForm.formPosition)
                .subscribe(position => this.tooltipPosition = position),
            this.store.select(state => state.generalSettings.backgroundColor)
                .subscribe(backgroundColor => this.backgroundColor = backgroundColor),
            this.store.select(state => state).subscribe(state => this.state = state),
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
        localStorage.setItem(localStorageProject, JSON.stringify(this.state));
    }
}
