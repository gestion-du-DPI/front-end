import { Component } from '@angular/core';
import { DoctorActionsConsultationComponent } from '../../../doctor-components/doctor-actions-consultation/doctor-actions-consultation.component';
import { CreatePrescriptionComponent } from "../../../doctor-components/create-prescription/create-prescription.component";
import { MOCK_PRESCRIPTIONS } from '../../../../mock-data/mock-prescriptions';
import { PrescriptionPopupComponent } from "../../../doctor-components/prescription-popup/prescription-popup.component";
import { CommonModule } from '@angular/common';
import { PatientInfosComponent } from '../../../doctor-components/patient-infos/patient-infos.component';
import { AttachmentsComponent } from '../../../doctor-components/attachments/attachments.component';

@Component({
  selector: 'app-prescription',
  imports: [DoctorActionsConsultationComponent,PatientInfosComponent,AttachmentsComponent, CreatePrescriptionComponent, PrescriptionPopupComponent, CommonModule],
  template: `





<div class="flex flex-row gap-5 p-5">
      <app-patient-infos ></app-patient-infos>

      <app-doctor-actions-consultation></app-doctor-actions-consultation>
    </div>
    <div class="flex flex-row gap-5 p-5">
    <app-create-prescription class="flex-grow" (preview)="showPopup()"></app-create-prescription>
    <app-attachments class="flex-grow"></app-attachments>

    </div>
     <app-prescription-popup
        *ngIf="isPrescriptionsPopupVisible"
        [prescription]="selectedPrescription"
        [prescriptions]="mockPrescriptions"
        (close)="hidePopup()"
      ></app-prescription-popup>
  `,
  styles: ``,
})
export class PrescriptionComponent {
  isPrescriptionsPopupVisible = false;
  mockPrescriptions = MOCK_PRESCRIPTIONS;
  selectedPrescription = this.mockPrescriptions[0];

  showPopup(): void {
    this.isPrescriptionsPopupVisible = true;
  }

  hidePopup(): void {
    this.isPrescriptionsPopupVisible = false;
  }
}
