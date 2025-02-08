import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-phar-login',
  templateUrl: './phar-login.component.html',
  styleUrls: ['./phar-login.component.scss']
})
export class PharLoginComponent {
  pharLoginForm!: FormGroup;
  isRegisterMode = false; // Default: Login mode
  errorMessage = '';

  constructor(private fb: FormBuilder, private router: Router) {
    this.createForm();
  }

  // Create Form based on Login/Register Mode
  createForm() {
    if (this.isRegisterMode) {
      // Registration Mode
      this.pharLoginForm = this.fb.group({
        name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]]
      });
    } else {
      // Login Mode
      this.pharLoginForm = this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]]
      });
    }
  }

  // Toggle Login/Register Mode
  toggleMode() {
    this.isRegisterMode = !this.isRegisterMode;
    this.errorMessage = '';
    this.createForm();
  }

  // Submit Form
  onSubmit() {
    if (this.pharLoginForm.invalid) {
      return;
    }

    const formData = this.pharLoginForm.value;
    const users = JSON.parse(localStorage.getItem('users') || '[]');

    if (this.isRegisterMode) {
      // Registration Logic
      const userExists = users.some((user: any) => user.email === formData.email);

      if (userExists) {
        this.errorMessage = 'Email is already registered!';
        return;
      }

      users.push(formData); // Save new user
      localStorage.setItem('users', JSON.stringify(users));
      alert('Registration successful! You can now log in.');
      this.toggleMode(); // Switch to login mode
    } else {
      // Login Logic
      const user = users.find((user: any) => user.email === formData.email && user.password === formData.password);

      if (!user) {
        this.errorMessage = 'Invalid email or password!';
        return;
      }

      localStorage.setItem('currentUser', JSON.stringify(user)); // Store logged-in user
      alert('Login successful!');
      this.router.navigate(['/landing']); // Redirect to landing page
    }
  }
}
