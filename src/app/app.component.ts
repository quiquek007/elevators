import { Component, ChangeDetectionStrategy, OnInit, OnDestroy, HostListener } from '@angular/core';
import { DrawerItem, DrawerSelectEvent } from '@progress/kendo-angular-layout';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppState } from './redux/root-interface';
import SettingsPanelActions from './redux/settings-panel/settings-panel.actions';
import { localStorageProject } from './constants/project.constants';
import GeneralSettingsActions from 'app/redux/general-settings/general-settings.actions';
import CameraSettingsActions from 'app/redux/camera-settings/camera-settings.actions';
import { EngineService } from 'app/services/engine.service';
import { CameraSettings } from 'app/redux/camera-settings/camera-settings.model';
import cameraSettings from 'app/constants/camera-settings.constants';
import ElevatorManagerSettingsActions from './redux/elevator-manager-settings/elevator-manager-settings.actions';
import { ObjectManagerService } from './services/object-manager.service';
import Elevator from './shared/classes/elevator.class';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit, OnDestroy {
    private subscribtions: Subscription[] = [];
    private plainStore: AppState;
    private cameraSettings: CameraSettings = { ...cameraSettings };
    private allElevators: Elevator[];

    public contentExpanded: boolean = false;
    public panelOnRightSide: boolean = false;
    public selectedTab: string;
    public items: Array<DrawerItem> = [
        {
            text: 'ElevatorsManager',
            icon: 'k-i-plus-outline'
        },
        {
            text: 'Passangers',
            icon: 'k-i-myspace-box'
        },
        {
            text: 'GlobalSettings',
            icon: 'k-i-gear',
            selected: true
        },
        {
            text: 'SmartDumbManager',
            icon: 'k-i-hyperlink'
        },
        {
            text: 'Favourites',
            icon: 'k-i-star-outline'
        }
        // {
        //     separator: true
        // },
        // {
        //     text: 'Reset All',
        //     icon: 'k-i-reload'
        // }
    ];

    @HostListener('window:beforeunload', ['$event'])
    public canDeactivate(event: any) {
        localStorage.setItem(localStorageProject, JSON.stringify(this.plainStore));
    }

    constructor(private store: Store<AppState>, private engServ: EngineService, private objectManager: ObjectManagerService) {}

    public ngOnInit(): void {
        this.subscribtions.push(
            this.store.select(state => state).subscribe(x => this.plainStore = x),
            this.store.select(state => state.settingsPanel.formPosition).subscribe(position => this.panelOnRightSide = position === 'right'),
            this.store.select(state => state.settingsPanel.formOpened).subscribe(formOpened => this.contentExpanded = formOpened),
            this.store
                .select(state => state.settingsPanel.selectedTab)
                .subscribe(selectedTab => {
                    this.selectedTab = selectedTab;
                    this.items.forEach(item => item.selected = false);
                    this.items.find(({ text }) => text === selectedTab).selected = true;
                }),
            this.store
                .select(state => state.cameraSettings.cameraPosition)
                .subscribe(cameraPosition => this.cameraSettings.cameraPosition = cameraPosition),
            this.store
                .select(state => state.cameraSettings.controlsTarget)
                .subscribe(controlsTarget => this.cameraSettings.controlsTarget = controlsTarget),
            this.store.select(state => state.elevatorManagerSettings.elevators).subscribe(elevators => this.allElevators = elevators)
        );
    }

    public ngOnDestroy(): void {
        this.subscribtions.forEach(sub => sub.unsubscribe());
    }

    public getTooltipPosition(): string {
        return this.panelOnRightSide ? 'left' : 'right';
    }

    public onSelect(ev: DrawerSelectEvent): void {
        this.items.forEach(item => item.selected = false);
        this.items.find(({ text }) => text === ev.item.text).selected = true;
        this.store.dispatch(new SettingsPanelActions.SetSelectedTab(ev.item.text));
    }

    public onHideContent(): void {
        this.store.dispatch(new SettingsPanelActions.SetPanelOpened(!this.contentExpanded));
    }

    public changeContolPanelSide(): void {
        this.store.dispatch(new SettingsPanelActions.SetPanelPosition(this.getTooltipPosition()));
    }

    public onResetAllSettings(): void {
        this.allElevators.forEach(elevator => this.objectManager.removeObject(this.objectManager.getObjectById(elevator.id)));
        this.store.dispatch(new ElevatorManagerSettingsActions.ResetAllSettings());

        this.store.dispatch(new GeneralSettingsActions.ResetAllSettings());

        this.store.dispatch(new CameraSettingsActions.ResetCameraPosition());
        this.store.dispatch(new CameraSettingsActions.ResetControlsTarget());
        this.engServ.setInitialCameraPosition(this.cameraSettings);
    }
}
