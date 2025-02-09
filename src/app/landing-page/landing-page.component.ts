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
    this.loadPharmacistData();
  }

  // Load pharmacist data (Example: From localStorage)
  loadPharmacistData() {
    const user = localStorage.getItem('currentUser');
    if (user) {
      this.pharmacist = JSON.parse(user);
    }
  }

  // Navigate to Normal Medicines Orders
  goToNormalOrders() {
    this.router.navigate(['/orders/normal']);
  }


  // Navigate to Prescribed Medicines Orders
  goToPrescribedOrders() {
    this.router.navigate(['/orders/prescribed']);
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
