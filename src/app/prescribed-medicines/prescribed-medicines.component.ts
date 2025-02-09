import { Component } from '@angular/core';

@Component({
  selector: 'app-prescribed-medicines',
  templateUrl: './prescribed-medicines.component.html',
  styleUrls: ['./prescribed-medicines.component.scss']
})
export class PrescribedMedicinesComponent {
  nearestDeliveryBoy: string = 'John Doe';

  orders = [
    {
      name: 'Alice Johnson',
      location: '789 Boulevard, Metro',
      medicine: 'Amoxicillin',
      geoLocation: '34.0522° N, 118.2437° W',
      prescriptionImage: 'assets/prescriptions/prescription1.jpg'
    },
    {
      name: 'Bob Williams',
      location: '101 Street, Suburb',
      medicine: 'Cetirizine',
      geoLocation: '51.5074° N, 0.1278° W',
      prescriptionImage: 'assets/prescriptions/prescription2.jpg'
    }
  ];
}
