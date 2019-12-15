import {
    Component,
    OnInit
} from '@angular/core';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/redux/root-interface';
import BackgroundActions from '../../../redux/background/background.actions';

@Component({
    selector: 'grid-settings',
    templateUrl: './grid-settings.component.html',
    styleUrls: ['./grid-settings.component.less']
})
export class GridSettingsComponent implements OnInit {
    public gridColor: string;
    public tooltipPosition: string = 'right';
    public gridSettingsExpanded: boolean;
    public gridEnable: boolean;

    private subscriptions: Subscription[] = [];

    constructor(private store: Store<AppState>) {}

    public ngOnInit(): void {
        this.subscriptions.push(
            this.store.select(state => state.settingsForm.formPosition)
                .subscribe(position => this.tooltipPosition = position),
            this.store.select(state => state.background.gridColor)
                .subscribe(gridColor => this.gridColor = gridColor),
            this.store.select(state => state.background.gridSettingsExpanded)
                .subscribe(expanded => this.gridSettingsExpanded = expanded),
            this.store.select(state => state.background.gridEnable)
                .subscribe(enable => this.gridEnable = enable),
        );
    }

    public ngOnDestroy(): void {
        this.subscriptions.forEach(sub => sub.unsubscribe());
    }

    public getTooltipPosition(): string {
        return this.tooltipPosition === 'left' ? 'right' : 'top';
    }

    public onGridColorChange(color: string): void {
        this.store.dispatch(new BackgroundActions.SetGridColor(color));
	}
	
    public onGridColorReset(): void {
        this.store.dispatch(new BackgroundActions.ResetGridColor());
        // TODO: remove if ok
        // this.gridColor = (this.store.source as any).value.background.gridColor;
    }

    public onChangeSwitch(event: Event): void {
        event.stopPropagation();
        this.store.dispatch(new BackgroundActions.SetGridEnable(this.gridEnable));
    }

    public onGridSettingsExpanded(event: Event): void {
        this.store.dispatch(new BackgroundActions.SetGridSettingsExpand(event[0].expanded));
    }
}
