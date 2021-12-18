import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from 'app/redux/root-interface';
import GeneralSettingsActions from '../../../redux/general-settings/general-settings.actions';
import generalSettings from 'app/constants/general-settings.constants';
import { GridSizeModel } from 'app/shared/grid-size.model';

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
            this.store.select(state => state.settingsPanel.formPosition).subscribe(position => this.tooltipPosition = position),
            this.store.select(state => state.generalSettings.grid.gridColor).subscribe(gridColor => this.gridColor = gridColor),
            this.store.select(state => state.generalSettings.grid.gridSettingsExpanded).subscribe(expanded => this.gridSettingsExpanded = expanded),
            this.store.select(state => state.generalSettings.grid.gridEnable).subscribe(enable => this.gridEnable = enable),
            this.store.select(state => state.generalSettings.grid.gridOpacity).subscribe(opacity => this.gridOpacity = opacity),
            this.store
                .select(state => state.generalSettings.grid.gridSize)
                .subscribe(size => {
                    // avoid mutaion the original constant
                    this.gridSize = Object.assign({}, size);
                })
        );
    }

    public ngOnDestroy(): void {
        this.subscriptions.forEach(sub => sub.unsubscribe());
    }

    public getTooltipPosition(): string {
        return this.tooltipPosition === 'left' ? 'right' : 'top';
    }

    public onGridColorChange(color: string): void {
        this.store.dispatch(new GeneralSettingsActions.SetGridColor(color));
    }

    public onGridColorReset(): void {
        this.store.dispatch(new GeneralSettingsActions.ResetGridColor());
    }

    public onChangeSwitch(event: Event): void {
        event.stopPropagation();
        this.store.dispatch(new GeneralSettingsActions.SetGridEnable(this.gridEnable));
    }

    public onGridSettingsExpanded(event: Event): void {
        this.store.dispatch(new GeneralSettingsActions.SetGridSettingsExpand(event[0].expanded));
    }

    public onOpacityChange(opacity: number): void {
        if (opacity === null) this.store.dispatch(new GeneralSettingsActions.SetGridOpacity(generalSettings.grid.gridOpacity));
        else this.store.dispatch(new GeneralSettingsActions.SetGridOpacity(opacity));
    }

    public onGridSizeChange(): void {
        const defaultValue = 5;
        for (let key in this.gridSize) {
            if (this.gridSize[key] === null) this.gridSize[key] = defaultValue;
        }
        this.store.dispatch(new GeneralSettingsActions.SetGridSize(this.gridSize));
    }

    public onGridSizeReset(): void {
        this.store.dispatch(new GeneralSettingsActions.ResetGridSize());
    }
}
