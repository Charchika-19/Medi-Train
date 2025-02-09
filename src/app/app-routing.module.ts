import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PharLoginComponent } from './phar-login/phar-login.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NormalMedicinesComponent } from './normal-medicines/normal-medicines.component';
import { PrescribedMedicinesComponent } from './prescribed-medicines/prescribed-medicines.component';
import { TrackDeliveryComponent } from './track-delivery/track-delivery.component';
import { DeliveryBoyLoginComponent } from './delivery-boy-login/delivery-boy-login.component';
import { Landing1Component } from './landing1/landing1.component';
import { UpdateStocksComponent } from './update-stocks/update-stocks.component';

const routes: Routes = [
  { path: 'phar-login', component: PharLoginComponent },
  { path: 'landing', component: LandingPageComponent },
  { path: 'orders/normal', component: NormalMedicinesComponent },
  { path: 'orders/prescribed', component: PrescribedMedicinesComponent },
  { path: '', redirectTo: 'phar-login', pathMatch: 'full' },
  { path: 'track-delivery/:name', component: TrackDeliveryComponent },
  { path: 'delivery-boy-login', component: DeliveryBoyLoginComponent },
  { path: 'landing1', component: Landing1Component},
  { path: 'update-stocks', component: UpdateStocksComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
