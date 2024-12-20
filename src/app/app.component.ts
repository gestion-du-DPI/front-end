import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
<<<<<<< HEAD
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
=======
import { WorkersTableComponent } from './components/workers-table/workers-table.component';
import { WorkersComponent } from './workers/workers.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@Component({
  selector: 'app-root',
  imports: [WorkersComponent, LoginComponent, SidebarComponent],
  template: ` <app-sidebar></app-sidebar>
    <app-workers></app-workers>`,
>>>>>>> origin/Amel
})
export class AppComponent {
  currentPage: string = 'dashboard'; 
  title = 'projet-igl';
}
