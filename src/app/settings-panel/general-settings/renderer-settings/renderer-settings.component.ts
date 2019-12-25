import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppState } from 'src/app/redux/root-interface';
import GeneralSettingsActions from '../../../redux/general-settings/general-settings.actions';

@Component({
    selector: 'renderer-settings',
    templateUrl: './renderer-settings.component.html',
    styleUrls: ['./renderer-settings.component.less']
})
export class RendererSettingsComponent implements OnInit {
    public attentionText: string = 'Reload required';
    public rendererSettingsExpanded: boolean;
    public rendererAntialias: boolean;
    public rendererAlpha: boolean;

    private subscriptions: Subscription[] = [];

    constructor(private store: Store<AppState>) {}

    public ngOnInit() {
        this.subscriptions.push(
            this.store.select(state => state.generalSettings.renderer.rendererSettingsExpanded)
                .subscribe(expanded => this.rendererSettingsExpanded = expanded),
            this.store.select(state => state.generalSettings.renderer.rendererAlpha)
                .subscribe(alpha => this.rendererAlpha = alpha),
            this.store.select(state => state.generalSettings.renderer.rendererAntialias)
                .subscribe(antialias => this.rendererAntialias = antialias),
        );
    }

    public ngOnDestroy(): void {
        this.subscriptions.forEach(sub => sub.unsubscribe());
    }

    public onRendererSettingsExpanded(event: Event): void {
        this.store.dispatch(new GeneralSettingsActions.SetRendererExpand(event[0].expanded));
    }

    public onAlphaSwitch(): void {
        this.store.dispatch(new GeneralSettingsActions.SetRendererAlpha(this.rendererAlpha));
    }

    public onAntialiasSwitch(): void {
        this.store.dispatch(new GeneralSettingsActions.SetRendererAntialias(this.rendererAntialias));
    }
}
