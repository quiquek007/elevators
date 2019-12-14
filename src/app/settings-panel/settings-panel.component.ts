import { Component, Input, ViewEncapsulation  } from '@angular/core';

@Component({
    selector: 'settings-panel',
    templateUrl: './settings-panel.component.html',
    styleUrls: ['./settings-panel.component.less'],
    encapsulation: ViewEncapsulation.None
})
export class SettingsPanelComponent {
    @Input()
    public selectedOption: string;
}
