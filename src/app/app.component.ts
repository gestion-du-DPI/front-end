import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WorkersTableComponent } from './components/workers-table/workers-table.component';
import { WorkersComponent } from './workers/workers.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@Component({
  selector: 'app-root',
  imports: [WorkersComponent, LoginComponent, SidebarComponent],
  template: ` <app-sidebar></app-sidebar>
    <app-workers></app-workers>`,
})
export class AppComponent {
  title = 'projet-igl';
}
