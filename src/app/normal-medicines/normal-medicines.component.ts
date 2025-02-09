import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-normal-medicines',
  templateUrl: './normal-medicines.component.html',
  styleUrls: ['./normal-medicines.component.scss'],
})
export class NormalMedicinesComponent implements OnInit {
  nearestDeliveryBoy: string = 'John Doe';
  orders = [
    {
      name: 'John Doe',
      location: '123 Street, City',
      medicine: 'Paracetamol',
      geoLocation: '37.7749° N, 122.4194° W',
    },
    {
      name: 'Jane Smith',
      location: '456 Avenue, Town',
      medicine: 'Ibuprofen',
      geoLocation: '40.7128° N, 74.0060° W',
    },
  ];

  currentPosition: { lat: number; lng: number } | null = null;
  selectedDeliveryBoyLocation: { lat: number; lng: number } | null = null;
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.selectedDeliveryBoyLocation = this.getDeliveryBoyLocationFromLocalStorage();
  console.log('Delivery Boy Location:', this.selectedDeliveryBoyLocation)
  this.getCurrentLocation(); }

  getCurrentLocation(): void {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          this.currentPosition = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          console.log('Current Position:', this.currentPosition);
        },
        (error) => {
          console.error('Error getting location', error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }

  getDeliveryBoyLocationFromLocalStorage(): { lat: number; lng: number } | null {
    const location = localStorage.getItem('deliveryBoyLocation');
    if (location) {
console.log("hello")
// this.getCurrentLocation();

      return JSON.parse(location);
    }
    return null;
  }
  calculateDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
    const R = 6371; // Radius of Earth in kilometers
    const dLat = this.degreesToRadians(lat2 - lat1);
    const dLon = this.degreesToRadians(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(this.degreesToRadians(lat1)) *
        Math.cos(this.degreesToRadians(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c; // Distance in kilometers
  }

  // Convert degrees to radians
  degreesToRadians(degrees: number): number {
    return degrees * (Math.PI / 180);
  }

  // Get the distance between the pharmacist and delivery boy
  getDistance(): number | null {
    if (this.currentPosition && this.selectedDeliveryBoyLocation) {
      return this.calculateDistance(
        this.currentPosition.lat,
        this.currentPosition.lng,
        this.selectedDeliveryBoyLocation.lat,
        this.selectedDeliveryBoyLocation.lng
      );
    }
    return null;
  }
}
