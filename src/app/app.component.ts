import { Component, ChangeDetectionStrategy } from '@angular/core';
import {
    DrawerItem,
    DrawerSelectEvent,
} from '@progress/kendo-angular-layout';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
    public contentExpanded: boolean = false;
    public panelOnRightSide: boolean = false;
    public selected: string = 'Inbox';

    public items: Array <DrawerItem> = [{
            text: 'Inbox',
            icon: 'k-i-inbox',
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

    public getTooltipPosition(): string {
        return this.panelOnRightSide ? 'left' : 'right';
    }

    public onSelect(ev: DrawerSelectEvent): void {
        this.selected = ev.item.text;   
    }

    public onHideContent(): void {
        this.contentExpanded = !this.contentExpanded;
    }

    public changeContolPanelSide(): void {
        this.panelOnRightSide = !this.panelOnRightSide;
    }

}
