import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SidebarComponent, RouterOutlet],
  template: `
    <app-sidebar></app-sidebar>
    <div class="sm:ml-24">
      <router-outlet></router-outlet>
    </div>
  `,
})
export class AppComponent {
  title = 'projet-igl';
}
