import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';


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
