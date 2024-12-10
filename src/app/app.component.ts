import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WorkersTableComponent } from './components/workers-table/workers-table.component';
import { WorkersComponent } from './workers/workers.component';

@Component({
  selector: 'app-root',
  imports: [LoginComponent, WorkersComponent],
  template: '<app-workers></app-workers>',
})
export class AppComponent {
  title = 'projet-igl';
}
