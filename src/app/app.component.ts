import { Component, ChangeDetectionStrategy, OnInit, OnDestroy } from '@angular/core';
import {
    DrawerItem,
    DrawerSelectEvent,
} from '@progress/kendo-angular-layout';
import { Store } from '@ngrx/store';
import { AppState } from './redux/root-interface';
import { Subscription } from 'rxjs';
import SettingsFormActions from './redux/settings-form/settings-form.actions';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit, OnDestroy{
    public contentExpanded: boolean = false;
    public panelOnRightSide: boolean = false;
    public selected: string = 'background';

    private subscribtions: Subscription[] = [];

    public items: Array <DrawerItem> = [{
            text: 'background',
            icon: 'k-i-gear',
            selected: true
        },
        {
            text: 'Notifications',
            icon: 'k-i-bell'
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

    constructor(private store: Store<AppState>) {}

    public ngOnInit(): void {
        this.subscribtions.push(
            this.store.select('settingsForm').subscribe(({ position }) => this.panelOnRightSide = position === 'right'),
            this.store.select('settingsForm').subscribe(({ formOpened }) => this.contentExpanded = formOpened),
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
        this.store.dispatch(new SettingsFormActions.SetPosition(this.getTooltipPosition()));
    }

}
