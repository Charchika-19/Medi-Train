import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  pharmacist: any = null;
  notifications: number = 0; // Simulated new medicine requests
  stockLevel: number = 20; // Example stock level
  nearestDeliveryBoy: string = 'Loading...';

  constructor(private router: Router) {}

  ngOnInit() {
    this.pharmacist = JSON.parse(localStorage.getItem('currentUser') || '{}');

    if (!this.pharmacist || !this.pharmacist.email) {
      this.router.navigate(['/pharmacist-login']);
    }

    this.checkNotifications();
    this.checkStockLevel();
    this.findNearestDeliveryBoy();
  }

  checkNotifications() {
    this.notifications = Math.floor(Math.random() * 5);
  }

  checkStockLevel() {
    this.stockLevel = Math.floor(Math.random() * 50) + 10;
  }

  findNearestDeliveryBoy() {
    // Simulated logic: In a real app, this would be fetched from an API
    const deliveryBoys = ['Rahul (1.2 km away)', 'Amit (0.8 km away)', 'Priya (2.5 km away)'];
    this.nearestDeliveryBoy = deliveryBoys[Math.floor(Math.random() * deliveryBoys.length)];
  }

  goToOrders() {
    this.router.navigate(['/pharmacist-orders']);
  }

  trackDelivery() {
    this.router.navigate(['/delivery-tracking']);
  }

  manageStock() {
    this.router.navigate(['/stock-management']);
  }

  trackNearestDeliveryBoy() {
    this.router.navigate(['/delivery-boy-tracking']);
  }

  goToProfile() {
    this.router.navigate(['/pharmacist-profile']);
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.router.navigate(['/phar-login']);
  }
}
