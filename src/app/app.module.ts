import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DesignutilityService } from './appServices/designutility.service';
import { Card1Component } from './card1/card1.component';
import { Card2Component } from './card2/card2.component';

@NgModule({
  declarations: [
    AppComponent,
    Card1Component,
    Card2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [DesignutilityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
