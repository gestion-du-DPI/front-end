import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class IsLoggedGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    const isLogged = this.authService.isAuthenticated();

    if (isLogged) {
      const userRole = this.authService.getUserRole()?.toLowerCase();

      switch (userRole) {
        case 'admin':
          this.router.navigate(['/admin']);
          return false;
        case 'doctor':
          this.router.navigate(['/doctor']);
          return false;
        case 'nurse':
          this.router.navigate(['/nurse']);
          return false;
        case 'radiologist':
          this.router.navigate(['/radiologist']);
          return false;
        case 'labtechnician':
          this.router.navigate(['/lab-technician']);
          return false;
        case 'patient':
          this.router.navigate(['/patient']);
          return false;
        default:
          return true;
      }
    } else {
      return true;
    }
  }
}
