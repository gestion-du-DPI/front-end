import { Component } from '@angular/core';
import { DoctorActionsConsultationComponent } from '../../../doctor-components/doctor-actions-consultation/doctor-actions-consultation.component';

@Component({
  selector: 'app-prescription',
  imports: [DoctorActionsConsultationComponent],
  template: `
    <div class="flex flex-col gap-5 p-5">
      <div class="flex flex-row">
        <!-- space for info -->
        <app-doctor-actions-consultation
          class="ml-auto"
        ></app-doctor-actions-consultation>
      </div>
      <div class="flex flex-row">
        <!-- space for attachements -->
      </div>
    </div>
  `,
  styles: ``,
})
export class PrescriptionComponent {}
