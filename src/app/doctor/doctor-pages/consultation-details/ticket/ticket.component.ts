import { Component } from '@angular/core';
import { OpenTicketComponent } from "../../../doctor-components/open-ticket/open-ticket.component";
import { DoctorActionsConsultationComponent } from "../../../doctor-components/doctor-actions-consultation/doctor-actions-consultation.component";

@Component({
  selector: 'app-ticket',
  imports: [DoctorActionsConsultationComponent, OpenTicketComponent],
  template: `
   <div class="flex flex-col gap-5 p-5">
    <div class="flex flex-row">
      <!-- space for info -->
       <app-doctor-actions-consultation class="ml-auto"></app-doctor-actions-consultation>
    </div>
  <div class="flex flex-row">
    <app-open-ticket class="flex-1"></app-open-ticket>
<!-- space for attachements -->
  </div>
   </div>
  `,
  styles: ``
})
export class TicketComponent {

}
