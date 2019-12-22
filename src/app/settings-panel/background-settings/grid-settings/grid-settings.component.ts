import {
    Component,
    OnInit
} from '@angular/core';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/redux/root-interface';
import BackgroundActions from '../../../redux/background/background.actions';
import BACKGROUND from 'src/app/constants/background.constants';
import { GridSizeModel } from 'src/app/shared/grid-size.model';

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
    public gridOpacity: number;
    public gridSize: GridSizeModel;

    private subscriptions: Subscription[] = [];

    constructor(private store: Store<AppState>) {}

    public ngOnInit(): void {
        this.subscriptions.push(
            this.store.select(state => state.settingsForm.formPosition)
                .subscribe(position => this.tooltipPosition = position),
            this.store.select(state => state.background.grid.gridColor)
                .subscribe(gridColor => this.gridColor = gridColor),
            this.store.select(state => state.background.grid.gridSettingsExpanded)
                .subscribe(expanded => this.gridSettingsExpanded = expanded),
            this.store.select(state => state.background.grid.gridEnable)
                .subscribe(enable => this.gridEnable = enable),
            this.store.select(state => state.background.grid.gridOpacity)
                .subscribe(opacity => this.gridOpacity = opacity),
            this.store.select(state => state.background.grid.gridSize)
                .subscribe(size => {
                    // avoid mutilate basic constant
                    this.gridSize = Object.assign({}, size);
                }), 
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
    }

    public onChangeSwitch(event: Event): void {
        event.stopPropagation();
        this.store.dispatch(new BackgroundActions.SetGridEnable(this.gridEnable));
    }

    public onGridSettingsExpanded(event: Event): void {
        this.store.dispatch(new BackgroundActions.SetGridSettingsExpand(event[0].expanded));
    }

    public onOpacityChange(opacity: number): void {
        if (opacity === null) this.store.dispatch(new BackgroundActions.SetGridOpacity(BACKGROUND.grid.gridOpacity));
        else this.store.dispatch(new BackgroundActions.SetGridOpacity(opacity));
    }

    public onGridSizeChange(): void {
        const defaultValue = 5;
        for (let key in this.gridSize) {
            if (this.gridSize[key] === null) this.gridSize[key] = defaultValue;
        }       
        this.store.dispatch(new BackgroundActions.SetGridSize(this.gridSize));
    }

    public onGridSizeReset(): void {
        this.store.dispatch(new BackgroundActions.ResetGridSize());
    }
}
