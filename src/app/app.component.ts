import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WorkersComponent } from './workers/workers.component';
import { LoginComponent } from './login/login.component';
import { HttpClient, provideHttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, SidebarComponent, RouterOutlet],
  template: `
    <div>
    <app-sidebar></app-sidebar>
    <div class="ml-24">
    <router-outlet></router-outlet></div>
    </div>
  `,

})
export class AppComponent {
  title = 'projet-igl';
}
