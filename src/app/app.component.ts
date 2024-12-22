import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WorkersComponent } from './workers/workers.component';
import { LoginComponent } from './login/login.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, SidebarComponent, DashboardComponent, WorkersComponent, LoginComponent,EditProfileComponent],
  template: `
    <div *ngIf="currentPage === 'login'" class="h-screen flex items-center justify-center bg-white ">
      <app-login></app-login>
    </div>

    <div *ngIf="currentPage !== 'login'" class="flex">
      <app-sidebar class="sidebar"></app-sidebar>
      <div [ngClass]="sidebarCollapsed ? 'ml-24' : 'ml-48'" class="flex-1 ">
        <app-dashboard *ngIf="currentPage === 'dashboard'"></app-dashboard>
        <app-workers *ngIf="currentPage === 'workers'"></app-workers>
        <app-edit-profile *ngIf="currentPage === 'editProfile'"></app-edit-profile>
      </div>
    </div>
  `,
})
export class AppComponent {
  currentPage: string = 'editProfile'; // Default to dashboard page
  sidebarCollapsed: boolean = true; // Sidebar state

  toggleSidebar(collapsed: boolean) {
    this.sidebarCollapsed = collapsed;
  }

  title = 'projet-igl';
}
