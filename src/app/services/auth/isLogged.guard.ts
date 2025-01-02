import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class IsLoggedGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) { }

  async canActivate(): Promise<boolean> {
    const isLogged = this.authService.isAuthenticated();
    if (isLogged) {
      const userRole = await this.authService.getUserRole();
      const routes: Record<string, string> = {
        admin: '/admin',
        doctor: '/doctor',
        nurse: '/nurse',
        radiologist: '/radiologist',
        labtechnician: '/labTechnician',
        patient: '/patient',
      };

      const roleRoute = routes[userRole?.toLowerCase() ?? ''];

      if (roleRoute) {
        this.router.navigate([roleRoute]);
        return false;  
      } else {
        this.router.navigate(['/unauthorized']); 
        return false;
      }
    }
    return true;
  }
}