import { Component, Input, ViewEncapsulation  } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppState } from 'app/redux/root-interface';

@Component({
    selector: 'settings-panel',
    templateUrl: './settings-panel.component.html',
    styleUrls: ['./settings-panel.component.less'],
    encapsulation: ViewEncapsulation.None
})
export class SettingsPanelComponent {
    @Input()
    public selectedOption: string;

    private subscribtions: Subscription[] = [];

    constructor(private store: Store<AppState>) {}

    public ngOnInit(): void {
        this.subscribtions.push(
            this.store.select(state => state.settingsPanel.selectedTab)
                .subscribe(selectedTab => this.selectedOption = selectedTab)
        );
    }

    public ngOnDestroy(): void {
        this.subscribtions.forEach(sub => sub.unsubscribe());
    }
}
