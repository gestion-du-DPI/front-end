import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { UserRole } from '../../models/user-role';

@Injectable({
  providedIn: 'root',
})
export class RoleGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) { }

  

  async canActivate(route: any): Promise<boolean> {
    const expectedRole: UserRole = route.data.role;

    // Wait for the role to be fully loaded
    const userRole: UserRole = await this.authService.getUserRole() as UserRole;


    if (userRole === expectedRole) {
      return true;
    }
    return false;
    this.router.navigate(['/unauthorized']); //removed for now
  }
}