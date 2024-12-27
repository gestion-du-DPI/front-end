import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private tokenKey = 'authToken'; // LocalStorage key for the JWT

  constructor(private http: HttpClient, private router: Router) {}

  // Login method
  login(email: string, password: string, rememberMe: boolean) {
    const loginData = {
      email: email,
      password: password,
    };

    return this.http
      .post<{ token: string }>('http://127.0.0.1:8000/login', loginData)
      .subscribe((response) => {
        console.log(response);
        const token = response.token;
        rememberMe
          ? localStorage.setItem(this.tokenKey, token) // Store token in localStorage
          : sessionStorage.setItem(this.tokenKey, token); // Store token in sessionStorage
        this.router.navigate(['/']); // Navigate to home or dashboard
      });
  }

  // Decode JWT to extract payload
  private decodeToken(): any {
    const token = this.getToken();
    return token ? jwtDecode(token) : null;
  }

  // Get the user role from the JWT
  getUserRole(): string | null {
    const decoded = this.decodeToken();
    return decoded ? decoded.role : null;
  }

  // Get the user ID from the JWT
  getUserId(): string | null {
    const decoded = this.decodeToken();
    return decoded ? decoded.id : null;
  }

  // Retrieve the JWT from localStorage
  getToken(): string | null {
    let token = localStorage.getItem(this.tokenKey); // Try localStorage first
    if (!token) {
      token = sessionStorage.getItem(this.tokenKey); // Fall back to sessionStorage
    }
    return token;
  }

  // Check if the user is authenticated
  isAuthenticated(): boolean {
    return !!this.getToken();
  }

  // Logout the user
  logout() {
    localStorage.removeItem(this.tokenKey);
    sessionStorage.removeItem(this.tokenKey);
    console.log('Logged out');
    this.router.navigate(['/login']);
  }
}
