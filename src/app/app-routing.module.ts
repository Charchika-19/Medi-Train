import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PharLoginComponent } from './phar-login/phar-login.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

const routes: Routes = [
  { path: 'phar-login', component: PharLoginComponent },
  { path: 'landing', component: LandingPageComponent },
  { path: '', redirectTo: 'phar-login', pathMatch: 'full' } // Redirect to login by default
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
