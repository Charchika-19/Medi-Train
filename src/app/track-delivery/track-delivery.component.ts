import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-track-delivery',
  templateUrl: './track-delivery.component.html',
  styleUrls: ['./track-delivery.component.scss']
})
export class TrackDeliveryComponent implements OnInit {
  deliveryBoyLocation = { lat: 37.7749, lng: -122.4194 };  // Replace with actual dynamic location

  constructor() { }

  ngOnInit(): void {
  }

}
