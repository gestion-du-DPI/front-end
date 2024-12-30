import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NurseSidebarComponent } from "./nurse-components/nurse-sidebar/nurse-sidebar.component";

@Component({
  selector: 'app-radiologist',
  imports: [CommonModule, RouterOutlet, NurseSidebarComponent],
  template: `
    <div>
      <app-nurse-sidebar></app-nurse-sidebar>
      <div class="sm:ml-24">
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
  styles: ``
})

//gathered up the expprts all in one place so the routing can be cleaner
export class NurseComponent{}
