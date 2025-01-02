import { Component } from '@angular/core';
import { PatientInfosArchivedConsultationComponent } from '../../patient-components/patient-infos-archived-consultation/patient-infos-archived-consultation.component';
import { AttachmentsTableComponent } from '../../patient-components/attachments-table/attachments-table.component';

@Component({
  selector: 'app-archived-consultation',
  imports: [
    PatientInfosArchivedConsultationComponent,
    AttachmentsTableComponent,
  ],
  template: `
    <div class="flex flex-col">
     
      <div class="p-10 flex flex-col justify-between gap-4">
        <app-patient-infos-archived-consultation></app-patient-infos-archived-consultation>
        <app-attachments-table></app-attachments-table>
      </div>
    </div>
  `,
  styles: ``,
})
export class ArchivedConsultationComponent {}
