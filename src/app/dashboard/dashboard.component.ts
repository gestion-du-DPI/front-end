import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, SidebarComponent],
  template: `
    <div class="flex h-screen overflow-hidden">
      <!-- Sidebar -->
      <app-sidebar></app-sidebar> 

      
      
    </div>
  `,
  styles: [],
})
export class DashboardComponent {}
