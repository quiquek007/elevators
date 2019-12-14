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
    public gridColor: string;
    public tooltipPosition: string = 'right'
    private subscriptions: Subscription[] = [];

    constructor(private store: Store<AppState>) {}

    public ngOnInit(): void {
        this.subscriptions.push(
            this.store.select('settingsForm').subscribe(({ position }) => this.tooltipPosition = position),
            this.store.select('background').subscribe(({ backgroundColor }) => this.backgroundColor = backgroundColor),
            this.store.select('background').subscribe(({ gridColor }) => this.gridColor = gridColor),
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

    public onGridColorChange(color: string): void {
		this.gridColor = color;
        this.store.dispatch(new BackgroundActions.SetGridColor(color));
	}
	
    public onGridColorReset(): void {
        this.store.dispatch(new BackgroundActions.ResetGridColor());
        this.gridColor = (this.store.source as any).value.background.gridColor;
    }
}
