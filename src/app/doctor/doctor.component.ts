import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DoctorSidebarComponent } from './doctor-components/doctor-sidebar/doctor-sidebar.component';

@Component({
  selector: 'app-radiologist',
  imports: [CommonModule, RouterOutlet, DoctorSidebarComponent, ],
  template: `
    <div>
      <app-doctor-sidebar></app-doctor-sidebar>
      <div class="sm:ml-24">
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
  styles: ``
})

//gathered up the expprts all in one place so the routing can be cleaner
export class DoctorComponent{}