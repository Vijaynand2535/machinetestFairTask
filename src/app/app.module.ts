import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FairdashboardComponent } from './componnents/fairdashboard/fairdashboard.component';
import { FaircardComponent } from './componnents/faircard/faircard.component';
import { FairdetailsComponent } from './componnents/fairdetails/fairdetails.component';

@NgModule({
  declarations: [
    AppComponent,
    FairdashboardComponent,
    FaircardComponent,
    FairdetailsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
