import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { GetConsultationService } from '../../../services/doctor/getConsultation/get-consultation.service';
import { Consultation } from '../../../models/doc-getConsultation';

@Component({
  selector: 'app-patient-infos-consultation-archived',
  imports: [CommonModule, FormsModule, RouterLink],
  template: `
    <div class="bg-white rounded-lg shadow p-5 flex flex-col gap-4">
      <!-- Patient Info Section -->
      <div class="flex flex-row items-center justify-between w-full gap-5">
        <!-- Profile Picture and Basic Info -->
        <div class="flex flex-row md:flex-nowrap flex-wrap  items-center gap-4">
          <img
            [src]="consultation.profile_image || 'patient-info-avatar.svg'"
            alt="Profile Picture"
            class="w-16 h-16 rounded-full"
          />
          <div class="flex flex-col">
            <div class="flex flex-row items-center">
              <img src="worker-name.svg" alt="name" class="w-6 h-6 mr-2" />
              <h2 class="font-semibold text-lg">{{ consultation.name }}</h2>
            </div>
            <div class="text-black text-sm flex flex-row items-center mt-2">
              <img src="consulId.svg" alt="Consult ID" class="w-10 h-10 mr-2" />
              <span>{{ consultation.user_id }}</span>
            </div>
          </div>
        </div>

        <!-- Additional Patient Details -->
        <div class="flex flex-col items-start gap-4">
          <!-- First Row -->
          <div
            class="flex flex-row md:flex-nowrap flex-wrap  items-center gap-4"
          >
            <div class="text-sm text-gray-700 flex items-center gap-2">
              <img src="birthday.svg" alt="Calendar" class="w-4 h-4" />
              <span>{{ consultation.date_of_birth }}</span>
            </div>
            <div class="text-sm text-gray-700 flex items-center gap-2">
              <img src="socialNumber.svg" alt="ID Card" class="w-4 h-4" />
              <span>{{ consultation.nss }}</span>
            </div>
            <div class="text-sm text-gray-700 flex items-center gap-2">
              <img src="worker-phoneNumber.svg" alt="Phone" class="w-4 h-4" />
              <span>{{ consultation.phone_number }}</span>
            </div>
          </div>

          <!-- Second Row -->
          <div
            class="flex flex-row md:flex-nowrap flex-wrap  items-center gap-4"
          >
            <div class="text-sm text-gray-700 flex items-center gap-2">
              <img src="phone.svg" alt="Phone" class="w-4 h-4" />
              <span>{{ consultation.phone_number }}</span>
            </div>
            <div class="text-sm text-gray-700 flex items-center gap-2">
              <img src="email.svg" alt="Email" class="w-4 h-4" />
              <span>{{ consultation.email }}</span>
            </div>
            <div class="text-sm text-gray-700 flex items-center gap-2">
              <img src="worker.svg" alt="User" class="w-4 h-4" />
              <span>{{ consultation.emergency_contact_name }}</span>
              <span>{{ consultation.emergency_contact_phone }}</span>
            </div>
          </div>
        </div>
        <div class="flex items-center gap-2 p-1">
          <img src="archived.svg" class="w-4 h-4" alt="" />
          <p class="text-[#667085] font-bold text-xs		">
            This consultation is archived
          </p>
        </div>
      </div>

      <div class="flex flex-row justify-between items-start">
        <div class="text-black text-sm font-medium">
          <span>{{ consultation.resume }}</span>
        </div>
        <button
          class="bg-[#F5F6FA] border border-[#F4F2F2] rounded flex items-center gap-2 px-4 py-2 text-main font-medium text-sm whitespace-nowrap h-auto"
          routerLink="/doctor/patients"
        >
          <!-- this button is supposed to take you to parient-details:id but id isn't ready -->

          <img src="Forward.svg" alt="" class="w-4 h-4" />
          Back To Previous Page
        </button>
      </div>
    </div>
  `,
  styles: ``,
})
export class PatientInfosConsultationArchivedComponent {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private getConsultationService: GetConsultationService
  ) {}

  consultation: Consultation = {
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
    const ConsultationId = this.route.snapshot.paramMap.get('id');
    console.log(ConsultationId);

    if (ConsultationId) {
      this.getConsultationService
        .getConsultationByIdCashed(ConsultationId)
        .subscribe({
          next: (data) => {
            this.consultation = data;
            this.getConsultationService.updateConsultationCache(
              ConsultationId,
              data
            );
            console.log('Consultation:', data);
          },
          error: (err) => console.error(err),
        });
    }
  }
}
