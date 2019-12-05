import { Component, Input  } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../redux/root-interface';
import * as BackgroundActions from '../redux/background/background.actions';

@Component({
    selector: 'settings-panel',
    templateUrl: './settings-panel.component.html',
    styleUrls: ['./settings-panel.component.less']
})
export class SettingsPanelComponent {
    public selectedColor: string = '#f9d9ab';

    @Input() selectedItem: string;

    constructor(private store: Store <AppState>) {}

    public onBackgroundColorChange(color: string): void {
        this.store.dispatch(new BackgroundActions.SetColor(color));
    }
}
