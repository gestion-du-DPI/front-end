import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WorkersTableComponent } from './components/workers-table/workers-table.component';
import { WorkersComponent } from './workers/workers.component';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  imports: [WorkersComponent, LoginComponent],
  template: '<app-workers></app-workers>',
})
export class AppComponent {
  title = 'projet-igl';
}
