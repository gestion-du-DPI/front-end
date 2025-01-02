import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { jwtVerify } from 'jose';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private tokenKey = 'authToken';
  private secretKey = new TextEncoder().encode('helloWorld'); //change it after depl with the same backend secret key

  constructor(private http: HttpClient, private router: Router) { }

  login(email: string, password: string, rememberMe: boolean) {
    const loginData = { email, password };

    return this.http
      .post<{ token: string }>('http://127.0.0.1:8000/login', loginData)
      .subscribe(
        async (response) => {
          const token = response.token;
          try {
            await this.verifyToken(token);
            rememberMe ? localStorage.setItem(this.tokenKey, token)
              : sessionStorage.setItem(this.tokenKey, token);
            this.redirectBasedOnRole();
          } catch {
            console.error('Invalid token signature');
            this.router.navigate(['/unauthorized']);
          }
        },
        (error) => {
          console.error('Login failed');
          alert('Login failed: Account does not exist or incorrect credentials.');
        }
      );
  }

  private async verifyToken(token: string): Promise<void> {
    await jwtVerify(token, this.secretKey);
  }

  private async decodeToken(): Promise<any> {
    const token = this.getToken();
    if (!token) return null;
    try {
      await this.verifyToken(token);
      return jwtDecode(token);
    } catch {
      this.logout();
      return null;
    }
  }

  async getUserRole(): Promise<string | null> {
    const decoded = await this.decodeToken();
    return decoded?.role || null;
  }

  async getUserId(): Promise<string | null> {
    const decoded = await this.decodeToken();
    return decoded?.id || null;
  }

  getToken(): string | null {
    if (typeof window !== 'undefined' && window.localStorage) {
      return localStorage.getItem('token') || sessionStorage.getItem(this.tokenKey);
    } else {
      return null
    }
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }

  private async redirectBasedOnRole() {
    const userRole = await this.getUserRole();
    const routes: Record<string, string> = {
      admin: '/admin',
      doctor: '/doctor',
      nurse: '/nurse',
      radiologist: '/radiologist',
      labtechnician: '/lab-technician',
      patient: '/patient'
    };
    this.router.navigate([routes[userRole?.toLowerCase() ?? ''] || '/unauthorized']);
  }

  logout() {
    localStorage.removeItem(this.tokenKey);
    sessionStorage.removeItem(this.tokenKey);
    this.router.navigate(['/login']);
  }
}