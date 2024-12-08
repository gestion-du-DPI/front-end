import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-root',
  imports: [LoginComponent],
  template: '<app-login></app-login>',
})
export class AppComponent {
  title = 'projet-igl';
}
