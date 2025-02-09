import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PharLoginComponent } from './phar-login/phar-login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NormalMedicinesComponent } from './normal-medicines/normal-medicines.component';
import { PrescribedMedicinesComponent } from './prescribed-medicines/prescribed-medicines.component';
import { HttpClientModule } from '@angular/common/http';
import { DeliveryBoyLoginComponent } from './delivery-boy-login/delivery-boy-login.component';
import { Landing1Component } from './landing1/landing1.component';
import { UpdateStocksComponent } from './update-stocks/update-stocks.component';

@NgModule({
  declarations: [
    AppComponent,
    PharLoginComponent,
    LandingPageComponent,
    NormalMedicinesComponent,
    PrescribedMedicinesComponent,
    DeliveryBoyLoginComponent,
    Landing1Component,
    UpdateStocksComponent
  ],
  imports: [

    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule, // Import this for forms
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
