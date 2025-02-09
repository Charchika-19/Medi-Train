import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent {
  pharmacist: any = {};
  notifications: number = 5; // Example: Notifications count

  constructor(private router: Router) {
  }



  goToNormalOrders() {
    this.router.navigate(['/orders/normal']);
  }


  goToPrescribedOrders() {
    this.router.navigate(['/orders/prescribed']);
  }

  goToUpdateStocks(): void {
    this.router.navigate(['/update-stocks']);
  }
  // Track ongoing deliveries
  trackDelivery() {
    this.router.navigate(['/track-delivery']);
  }



  // Logout and redirect to the login page
  logout() {
    localStorage.removeItem('currentUser'); // Clear user session
    this.router.navigate(['/phar-login']); // Redirect to login page
  }


}
