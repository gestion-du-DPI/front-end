import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@Component({
  selector: 'app-root',
  standalone: true, 
  imports: [LoginComponent , DashboardComponent, CommonModule],
  template: `
 <div>
      <ng-container *ngIf="currentPage === 'login'">
        <app-login></app-login>
      </ng-container>
      <ng-container *ngIf="currentPage === 'dashboard'">
        <app-dashboard></app-dashboard>
      </ng-container>
    </div>
  `,
})
export class AppComponent {
  currentPage: string = 'dashboard'; 
  title = 'projet-igl';
}
