import {
    Component,
    OnInit,
    OnDestroy,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/redux/root-interface';
import BackgroundActions from '../../redux/background/background.actions';
import { Subscription } from 'rxjs';

@Component({
    selector: 'background-settings',
    templateUrl: './background-settings.component.html',
	styleUrls: ['./background-settings.component.less']
})
export class BackgroundSettingsComponent implements OnInit, OnDestroy {
    public selectedColor: string = 'rgb(64,64,64)';
    public tooltipPosition: string = 'right'
    private subscriptions: Subscription[] = [];

    constructor(private store: Store<AppState>) {}

    public ngOnInit(): void {
        this.subscriptions.push(
            this.store.select('settingsForm').subscribe(({ position }) => this.tooltipPosition = position),
            this.store.select('background').subscribe(({ color }) => this.selectedColor = color),
        );
    }

    public ngOnDestroy(): void {
        this.subscriptions.forEach(sub => sub.unsubscribe());
    }

    public getTooltipPosition(): string {
        return this.tooltipPosition === 'left' ? 'right' : 'top';
    }

    public onBackgroundColorChange(color: string): void {
		this.selectedColor = color;
        this.store.dispatch(new BackgroundActions.SetColor(color));
	}
	
    public onBackgroundColorReset(): void {
        this.store.dispatch(new BackgroundActions.ResetColor());
        this.selectedColor = (this.store.source as any).value.background.color;
    }

}
