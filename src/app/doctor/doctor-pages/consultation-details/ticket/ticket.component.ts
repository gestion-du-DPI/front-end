import { Component } from '@angular/core';
import { OpenTicketComponent } from "../../../doctor-components/open-ticket/open-ticket.component";
import { DoctorActionsConsultationComponent } from "../../../doctor-components/doctor-actions-consultation/doctor-actions-consultation.component";
import { HeaderComponent } from '../../../doctor-components/header/header.component';
import { PatientInfosComponent } from '../../../doctor-components/patient-infos/patient-infos.component';
import { AttachmentsComponent } from '../../../doctor-components/attachments/attachments.component';

@Component({
  selector: 'app-ticket',
  imports: [DoctorActionsConsultationComponent, OpenTicketComponent , PatientInfosComponent, AttachmentsComponent ],
  template: `


    <div class="flex flex-row gap-5 p-5">
      <app-patient-infos></app-patient-infos>

      <app-doctor-actions-consultation></app-doctor-actions-consultation>
    </div>
    <div class="flex flex-row gap-5 p-5">
    <app-open-ticket class="flex-grow"></app-open-ticket>
    <app-attachments class="flex-grow"></app-attachments>

    </div>
  `,
  styles: ``
})
export class TicketComponent {

}
