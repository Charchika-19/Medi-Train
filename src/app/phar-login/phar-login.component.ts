import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-phar-login',
  templateUrl: './phar-login.component.html',
  styleUrls: ['./phar-login.component.scss']
})
export class PharLoginComponent {
  pharLoginForm!: FormGroup;
  isRegisterMode = false;
  errorMessage = '';

  constructor(private fb: FormBuilder, private http: HttpClient,private router:Router) {
    this.createForm();
  }

  createForm() {
    if (this.isRegisterMode) {
      // Registration Mode
      this.pharLoginForm = this.fb.group({
        name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        role: ['pharmacist', Validators.required]      });
    } else {
      // Login Mode
      this.pharLoginForm = this.fb.group({
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
    if (this.pharLoginForm.invalid) {
      return;
    }

    const apiUrl = this.isRegisterMode
      ? 'http://localhost:5000/api/auth/signup'
      : 'http://localhost:5000/api/auth/login';

    this.http.post(apiUrl, this.pharLoginForm.value).subscribe(
      (response: any) => {
        alert(this.isRegisterMode ? 'Registration successful!' : 'Login successful!');
        this.router.navigate(['/landing']);
        if (this.isRegisterMode) {
          this.toggleMode();
        }
      },
      (error) => {
        this.errorMessage = error.error.message || 'An error occurred!';
      }
    );
  }

// ))

//     const formData = this.pharLoginForm.value;
//     const users = JSON.parse(localStorage.getItem('users') || '[]');

//     if (this.isRegisterMode) {
//       const userExists = users.some((user: any) => user.email === formData.email);

//       if (userExists) {
//         this.errorMessage = 'Email is already registered!';
//         return;
//       }

//       users.push(formData);
//       localStorage.setItem('users', JSON.stringify(users));
//       alert('Registration successful! You can now log in.');
//       this.toggleMode();
//     } else {
//       const user = users.find((user: any) => user.email === formData.email && user.password === formData.password);

//       if (!user) {
//         this.errorMessage = 'Invalid email or password!';
//         return;
//       }

//       localStorage.setItem('currentUser', JSON.stringify(user));
//       alert('Login successful!');
//     }
  }

