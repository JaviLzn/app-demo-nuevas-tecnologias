import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';

import { WINDOW_PROVIDERS } from './window.providers';
import { SampleService } from './services';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule
    
  ],
  providers: [ WINDOW_PROVIDERS, SampleService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
