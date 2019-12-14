import {
    Component,
    OnInit,
    OnDestroy,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppState } from 'src/app/redux/root-interface';
import BackgroundActions from '../../redux/background/background.actions';

@Component({
    selector: 'background-settings',
    templateUrl: './background-settings.component.html',
	styleUrls: ['./background-settings.component.less']
})
export class BackgroundSettingsComponent implements OnInit, OnDestroy {
    public backgroundColor: string;

    public tooltipPosition: string = 'right';
    private subscriptions: Subscription[] = [];

    constructor(private store: Store<AppState>) {}

    public ngOnInit(): void {
        this.subscriptions.push(
            this.store.select(state => state.settingsForm.formPosition)
                .subscribe(position => this.tooltipPosition = position),
            this.store.select(state => state.background.backgroundColor)
                .subscribe(backgroundColor => this.backgroundColor = backgroundColor),
        );
    }

    public ngOnDestroy(): void {
        this.subscriptions.forEach(sub => sub.unsubscribe());
    }

    public getTooltipPosition(): string {
        return this.tooltipPosition === 'left' ? 'right' : 'top';
    }

    public onBackgroundColorChange(color: string): void {
		this.backgroundColor = color;
        this.store.dispatch(new BackgroundActions.SetBackgroundColor(color));
	}
	
    public onBackgroundColorReset(): void {
        this.store.dispatch(new BackgroundActions.ResetBackgroundColor());
        this.backgroundColor = (this.store.source as any).value.background.backgroundColor;
    }
}
