import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppState } from 'src/app/redux/root-interface';
import BackgroundActions from '../../../redux/background/background.actions';

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
            this.store.select(state => state.background.rendererSettingsExpanded)
                .subscribe(expanded => this.rendererSettingsExpanded = expanded),
            this.store.select(state => state.background.rendererAlpha)
                .subscribe(alpha => this.rendererAlpha = alpha),
            this.store.select(state => state.background.rendererAntialias)
                .subscribe(antialias => this.rendererAntialias = antialias),
        );
    }

    public ngOnDestroy(): void {
        this.subscriptions.forEach(sub => sub.unsubscribe());
    }

    public onRendererSettingsExpanded(event: Event): void {
        this.store.dispatch(new BackgroundActions.SetRendererExpand(event[0].expanded));
    }

    public onAlphaSwitch(): void {
        this.store.dispatch(new BackgroundActions.SetRendererAlpha(this.rendererAlpha));
    }

    public onAntialiasSwitch(): void {
        this.store.dispatch(new BackgroundActions.SetRendererAntialias(this.rendererAntialias));
    }
}
