import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delivery-boy-login',
  templateUrl: './delivery-boy-login.component.html',
  styleUrls: ['./delivery-boy-login.component.scss']
})
export class DeliveryBoyLoginComponent {
  deliveryBoyForm!: FormGroup;
  isRegisterMode = false;
  errorMessage = '';
  latitude: number | null = null;
  longitude: number | null = null;

  currentPosition: { lat: number; lng: number } | null = null;

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) {
    this.createForm();
  }
  ngOnInit(): void {
    this.getCurrentLocation();
  }

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

  createForm() {
    if (this.isRegisterMode) {
      // Registration Mode
      this.deliveryBoyForm = this.fb.group({
        name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        role: ['deliveryBoy', Validators.required]
      });
    } else {
      // Login Mode
      this.deliveryBoyForm = this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]]
      });
    }
  }

  toggleMode() {
    this.isRegisterMode = !this.isRegisterMode;
    this.errorMessage = '';
    this.createForm();
  }

  onSubmit() {
    if (this.deliveryBoyForm.invalid) {
      return;
    }

    const apiUrl = this.isRegisterMode
      ? 'http://localhost:5000/api/auth/signup'
      : 'http://localhost:5000/api/auth/login';

    this.http.post(apiUrl, this.deliveryBoyForm.value).subscribe(
      (response: any) => {
        alert(this.isRegisterMode ? 'Registration successful!' : 'Login successful!');
        if (this.isRegisterMode) {
          this.toggleMode();
        }
        this.getCurrentLocation();
        //   this.router.navigate(['/delivery-dashboard']);
        localStorage.setItem('deliveryBoyLocation', JSON.stringify(this.currentPosition));
      },
      (error) => {
        this.errorMessage = error.error.message || 'An error occurred!';
      }
    );
  }
  trackNearestDeliveryBoy(): void {
    if (this.currentPosition) {
      console.log('Tracking Delivery Boy at:', this.currentPosition);
    } else {
      console.error('Location not available');
    }
  }


}

