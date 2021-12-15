import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { TooltipModule } from '@progress/kendo-angular-tooltip';
import { InputsModule } from '@progress/kendo-angular-inputs';

import { SettingsPanelComponent } from './settings-panel/settings-panel.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EngineComponent } from './engine/engine.component';
import { ObjectManagerService } from './services/object-manager.service';
import { rootReducer } from './redux/root-reducer';
import { GeneralSettingsComponent } from './settings-panel/general-settings/general-settings.component';
import { GridSettingsComponent } from './settings-panel/general-settings/grid-settings/grid-settings.component';
import { FormsModule } from '@angular/forms';
import { RendererSettingsComponent } from './settings-panel/general-settings/renderer-settings/renderer-settings.component';
import { AttentionSignComponent } from './resouces/attention-sign/attention-sign.component';
import { ControlsSettingsComponent } from './settings-panel/general-settings/controls-settings/controls-settings.component';
import { ElevatorsManagerComponent } from './settings-panel/elevators-manager/elevators-manager.component';
import { WireframesSettingsComponent } from './settings-panel/elevators-manager/wireframes-settings/wireframes-settings.component';

@NgModule({
  declarations: [
    AppComponent,

    EngineComponent,

    SettingsPanelComponent,
    GeneralSettingsComponent,
    GridSettingsComponent,
    RendererSettingsComponent,
    ControlsSettingsComponent,

    ElevatorsManagerComponent,
    WireframesSettingsComponent,

    AttentionSignComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonsModule,
    BrowserAnimationsModule,
    LayoutModule,
    TooltipModule,
    InputsModule,
    FormsModule,
    StoreModule.forRoot(rootReducer),
  ],
  exports: [],
  providers: [ObjectManagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
