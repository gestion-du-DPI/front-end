import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LabTechSidebarComponent } from './lab-technician-components/lab-tech-sidebar/lab-tech-sidebar.component';

@Component({
  selector: 'app-lab-technician',
  imports: [CommonModule, RouterOutlet, LabTechSidebarComponent],
    template: `
      <div>
        <app-lab-tech-sidebar></app-lab-tech-sidebar>
        <div class="ml-24">
          <router-outlet></router-outlet>
        </div>
      </div>
    `,
  styles: ``
})

//collect exports here for cleaner routing
export class Main {
}
export { PatientsComponent } from './lab-technician-pages/patients/patients.component';
export { TicketsHistoryComponent } from './lab-technician-pages/tickets-history/tickets-history.component';
export { WorkspaceComponent } from './lab-technician-pages/workspace/workspace.component';
export { EditProfileComponent } from './lab-technician-pages/edit-profile/edit-profile.component';
