import { Component } from '@angular/core';
import { DoctorActionsConsultationComponent } from '../../../doctor-components/doctor-actions-consultation/doctor-actions-consultation.component';
import { CreatePrescriptionComponent } from "../../../doctor-components/create-prescription/create-prescription.component";
import { MOCK_PRESCRIPTIONS } from '../../../../mock-data/mock-prescriptions';
import { PrescriptionPopupComponent } from "../../../doctor-components/prescription-popup/prescription-popup.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-prescription',
  imports: [DoctorActionsConsultationComponent, CreatePrescriptionComponent, PrescriptionPopupComponent, CommonModule],
  template: `
    <div class="flex flex-col gap-5 p-5">
      <div class="flex flex-row">
        <!-- space for info -->
        <app-doctor-actions-consultation
          class="ml-auto"
        ></app-doctor-actions-consultation>
      </div>
      <div class="flex flex-row">
        <app-create-prescription class="flex-1" (preview)="showPopup()"></app-create-prescription>
        <!-- space for attachements -->
      </div>
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
