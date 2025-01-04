import { Component } from '@angular/core';
import { HeaderComponent } from './patient-components/header/header.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-patient',
  imports: [HeaderComponent, RouterOutlet],
  template: `
    <app-header></app-header>
    <router-outlet></router-outlet>
  `,
  styles: ``
})
export class PatientComponent {

}
