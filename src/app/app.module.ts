import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DesignutilityService } from './appServices/designutility.service';
import { Card1Component } from './card1/card1.component';
import { Card2Component } from './card2/card2.component';
import { AccountComponent } from './account/account.component';
import { NewAccountComponent } from './new-account/new-account.component';
import { AccountService } from './appServices/account.service';
import { LoggingServiceService } from './appServices/logging-service.service';


@NgModule({
  declarations: [
    AppComponent,
    Card1Component,
    Card2Component,
    AccountComponent,
    NewAccountComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [DesignutilityService,AccountService,LoggingServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
