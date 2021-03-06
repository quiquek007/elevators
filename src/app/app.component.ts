import { Component, ChangeDetectionStrategy, OnInit, OnDestroy, HostListener } from '@angular/core';
import {
    DrawerItem,
    DrawerSelectEvent,
} from '@progress/kendo-angular-layout';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppState } from './redux/root-interface';
import SettingsFormActions from './redux/settings-form/settings-form.actions';
import { localStorageProject } from './constants/project.constants';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit, OnDestroy{
    public contentExpanded: boolean = false;
    public panelOnRightSide: boolean = false;
    public selected: string = 'GlobalSettings';

    private subscribtions: Subscription[] = [];

    public items: Array <DrawerItem> = [
        {
            text: 'ElevatorsManager',
            icon: 'k-i-plus-outline'
        },
        {
            text: 'GlobalSettings',
            icon: 'k-i-gear',
            selected: true
        },
        {
            text: 'Calendar',
            icon: 'k-i-calendar'
        },
        // {
        //     separator: true
        // },
        {
            text: 'Attachments',
            icon: 'k-i-hyperlink-email'
        },
        {
            text: 'Favourites',
            icon: 'k-i-star-outline'
        }
    ];

    @HostListener('window:beforeunload', ['$event'])
    publiccanDeactivate(event: any) {
        localStorage.setItem(localStorageProject, JSON.stringify((this.store.source as any).value));
    }

    constructor(private store: Store<AppState>) {}

    public ngOnInit(): void {
        this.subscribtions.push(
            this.store.select(state => state.settingsForm.formPosition)
                .subscribe(position => this.panelOnRightSide = position === 'right'),
            this.store.select(state => state.settingsForm.formOpened)
                .subscribe(formOpened => this.contentExpanded = formOpened),
        );
    }

    public ngOnDestroy(): void {
        this.subscribtions.forEach(sub => sub.unsubscribe());
    }

    public getTooltipPosition(): string {
        return this.panelOnRightSide ? 'left' : 'right';
    }

    public onSelect(ev: DrawerSelectEvent): void {
        this.selected = ev.item.text;   
    }

    public onHideContent(): void {
        this.store.dispatch(new SettingsFormActions.SetFormOpened(!this.contentExpanded));
    }

    public changeContolPanelSide(): void {
        this.store.dispatch(new SettingsFormActions.SetFormPosition(this.getTooltipPosition()));
    }
}
