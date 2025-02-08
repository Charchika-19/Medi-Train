import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticated = false;

  constructor(private router: Router) {}

  login(email: string, password: string): boolean {
    // Simulate authentication (Replace with API call later)
    if (email === 'pharmacist@example.com' && password === 'password') {
      localStorage.setItem('pharmacist', email);
      this.isAuthenticated = true;
      return true;
    }
    return false;
  }

  logout() {
    localStorage.removeItem('pharmacist');
    this.isAuthenticated = false;
    this.router.navigate(['/phar-login']);
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('pharmacist') !== null;
  }
}
