import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EngineComponent } from './engine/engine.component';
import { ObjectManagerService } from './services/object-manager.service';

@NgModule({
  declarations: [
    AppComponent,
    EngineComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  exports: [],
  providers: [ObjectManagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
