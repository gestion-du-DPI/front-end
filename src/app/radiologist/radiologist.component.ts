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
      <div class="ml-24">
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
  styles: ``
})

//gathered up the expprts all in one place so the routing can be cleaner
export class Main {}
export { PatientsComponent } from './radiologist-pages/patients/patients.component';
export { TicketsHistoryComponent } from './radiologist-pages/tickets-history/tickets-history.component';
export { WorkspaceComponent } from './radiologist-pages/workspace/workspace.component';
export { EditProfileComponent } from './radiologist-pages/edit-profile/edit-profile.component';
