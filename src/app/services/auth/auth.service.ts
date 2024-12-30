import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private tokenKey = 'authToken';

  constructor(private http: HttpClient, private router: Router) {}

  // Login method
  login(email: string, password: string, rememberMe: boolean) {
    const loginData = {
      email: email,
      password: password,
    };

    return this.http
      .post<{ token: string }>('http://127.0.0.1:8000/login', loginData)
      .subscribe(
        (response) => {
          console.log('hello', response);
          const token = response.token;
          console.log('Token:', token);
          rememberMe
            ? localStorage.setItem(this.tokenKey, token) // Store token in localStorage
            : sessionStorage.setItem(this.tokenKey, token); // Store token in sessionStorage

          const userRole = this.getUserRole()?.toLowerCase();
          switch (userRole) {
            case 'admin':
              this.router.navigate(['/admin']);
              break;
            case 'doctor':
              this.router.navigate(['/doctor']);
              break;
            case 'nurse':
              this.router.navigate(['/nurse']);
              break;
            case 'radiologist':
              this.router.navigate(['/radiologist']);
              break;
            case 'labtechnician':
              this.router.navigate(['/lab-technician']);
              break;
            case 'patient':
              this.router.navigate(['/patient']);
              break;
            default:
              console.log('Login failed: Unknown role');
              this.router.navigate(['/unauthorized']);
              break;
          }
        },
        (error) => {
          console.error('Login failed');
          alert(
            'Login failed: Account does not exist or incorrect credentials.'
          );
        }
      );
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
    let token: string | null = null;
    try {
      token = localStorage.getItem(this.tokenKey); // Try localStorage first
    } catch (error) {
      // Silent failure if an error occurs during localStorage retrieval
    }

    if (!token) {
      try {
        token = sessionStorage.getItem(this.tokenKey); // Fall back to sessionStorage
      } catch (error) {
        // Silent failure if an error occurs during sessionStorage retrieval
      }
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
