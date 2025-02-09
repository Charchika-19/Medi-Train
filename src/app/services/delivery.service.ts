import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DeliveryService {
  private apiUrl = 'http://localhost:5000/api'; // URL of your backend

  constructor(private http: HttpClient) {}

  // Update delivery boy's location
  updateLocation(deliveryBoyId: string, latitude: number, longitude: number): Observable<any> {
    const locationData = { deliveryBoyId, latitude, longitude };
    return this.http.post(`${this.apiUrl}/update-location`, locationData);
  }

  // Get delivery boy's location
  getLocation(deliveryBoyId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/get-delivery-boy-location?deliveryBoyId=${deliveryBoyId}`);
  }
}
