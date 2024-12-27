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
  login(email: string, password: string) {
    const loginData = {
      email: email,
      password: password,
    };

    return this.http
      .post<{ token: string }>('http://127.0.0.1:8000/login', loginData)
      .subscribe((response) => {
        console.log(response);
        const token = response.token;
        localStorage.setItem(this.tokenKey, JSON.stringify({ token })); // Store token as JSON
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
    return localStorage.getItem(this.tokenKey);
  }

  // Check if the user is authenticated
  isAuthenticated(): boolean {
    return !!this.getToken();
  }

  // Logout the user
  logout() {
    localStorage.removeItem(this.tokenKey);
    this.router.navigate(['/login']);
  }
}
