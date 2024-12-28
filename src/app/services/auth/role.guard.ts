import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { UserRole } from '../../models/user-role';

@Injectable({
  providedIn: 'root',
})
export class RoleGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: any): boolean {
    const expectedRole: UserRole = route.data.role;
    const userRole: UserRole = this.authService.getUserRole() as UserRole;

    if (userRole === expectedRole) {
      return true;
    }

    this.router.navigate(['/unauthorized']);
    return false;
  }
}
