import { Component } from '@angular/core';
import { PatientInfosComponent } from '../../patient-components/patient-infos/patient-infos.component';
import { PatientActionsComponent } from '../../patient-components/patient-actions/patient-actions.component';
import { MedicalRecordComponent } from '../../patient-components/medical-record/medical-record.component';

@Component({
  selector: 'app-consultation-details',
  imports: [PatientInfosComponent, PatientActionsComponent, MedicalRecordComponent ],
  template: `
    <div class="flex flex-row gap-5 p-5">
      <app-patient-infos></app-patient-infos>

      <app-patient-actions></app-patient-actions>
    </div>

    <app-medical-record></app-medical-record>
  `,
  styles: ``
})
export class ConsultationDetailsComponent {

}
