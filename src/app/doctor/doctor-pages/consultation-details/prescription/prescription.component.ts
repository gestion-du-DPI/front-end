import { Component } from '@angular/core';
import { DoctorActionsConsultationComponent } from '../../../doctor-components/doctor-actions-consultation/doctor-actions-consultation.component';
import { CreatePrescriptionComponent } from '../../../doctor-components/create-prescription/create-prescription.component';
import { MOCK_PRESCRIPTIONS } from '../../../../mock-data/mock-prescriptions';
import { PrescriptionPopupComponent } from '../../../doctor-components/prescription-popup/prescription-popup.component';
import { CommonModule } from '@angular/common';
import { PatientInfosComponent } from '../../../doctor-components/patient-infos/patient-infos.component';
import { AttachmentsComponent } from '../../../doctor-components/attachments/attachments.component';
import { ActivatedRoute } from '@angular/router';
import { GetConsultationService } from '../../../../services/doctor/getConsultation/get-consultation.service';
import { Consultation } from '../../../../models/doc-getConsultation';

@Component({
  selector: 'app-prescription',
  imports: [
    DoctorActionsConsultationComponent,
    PatientInfosComponent,
    AttachmentsComponent,
    CreatePrescriptionComponent,
    PrescriptionPopupComponent,
    CommonModule,
  ],
  template: `
    <div class="flex flex-row gap-5 p-5">
      <app-patient-infos></app-patient-infos>

      <app-doctor-actions-consultation></app-doctor-actions-consultation>
    </div>
    <div class="flex flex-row gap-5 p-5">
      <app-create-prescription
        class="flex-grow"
        (preview)="showPopup()"
      ></app-create-prescription>
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
  constructor(
    private route: ActivatedRoute,
    private getConsultationService: GetConsultationService
  ) {}

  Consultation: Consultation = {
    user_id: 0,
    profile_image: '',
    consultation_id: 0,
    name: '',
    date_of_birth: '',
    nss: '',
    email: '',
    phone_number: '',
    emergency_contact_name: '',
    emergency_contact_phone: '',
    resume: '',
    archived: false,
  };

  ngOnInit(): void {
    let ConsultationId = '';
    const fullPath = window.location.pathname;

    // Extract the ID using a regex or split
    const match = fullPath.match(/consultation-details\/(\d+)/);
    if (match) {
      ConsultationId = match[1]; // Capture group 1 contains the ID
    } else {
      console.error('Consultation ID not found in URL');
    }

    if (ConsultationId) {
      this.getConsultationService
        .getConsultationById(ConsultationId)
        .subscribe({
          next: (data) => {
            this.Consultation = data;
            console.log('Consultation:', data);
          },
          error: (err) => console.error(err),
        });
    }
  }

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
