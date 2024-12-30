import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RadiologistSidebarComponent } from './radiologist-components/radiologist-sidebar/radiologist-sidebar.component';

@Component({
  selector: 'app-radiologist',
  imports: [CommonModule, RouterOutlet, RadiologistSidebarComponent],
  template: `
    <div>
      <app-radiologist-sidebar></app-radiologist-sidebar>
      <div class="sm:ml-24">
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
  styles: ``
})

//gathered up the expprts all in one place so the routing can be cleaner
export class Main {}
