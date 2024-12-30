import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AdminSidebarComponent } from './admin-components/admin-sidebar/admin-sidebar.component';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule, AdminSidebarComponent, RouterOutlet],
  template: `
    <div>
      <app-admin-sidebar></app-admin-sidebar>
      <div class="ml-24">
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
})
export class Main {
}
