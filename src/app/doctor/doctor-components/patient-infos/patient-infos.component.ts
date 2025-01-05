import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserProfile } from '../../../models/doc-getDPI';
import { GetConsultationService } from '../../../services/doctor/getConsultation/get-consultation.service';
import { Consultation } from '../../../models/doc-getConsultation';

@Component({
  selector: 'app-patient-infos',
  imports: [CommonModule, FormsModule],
  template: `
    <div
      class="bg-white rounded-lg shadow w-[100%] h-full flex-grow p-5 flex flex-col gap-4"
    >
      <!-- Patient Info Section -->
      <div class="flex flex-row items-center justify-between w-full gap-5">
        <!-- Profile Picture and Basic Info -->
        <div class="flex flex-row md:flex-nowrap flex-wrap  items-center gap-4">
          <img
            [src]="Consultation.profile_image || 'patient-info-avatar.svg'"
            alt="Profile Picture"
            class="w-16 h-16 rounded-full"
          />
          <div class="flex flex-col">
            <div class="flex flex-row items-center">
              <img src="worker-name.svg" alt="name" class="w-6 h-6 mr-2" />
              <h2 class="font-semibold text-lg">{{ Consultation.name }}</h2>
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
              <span>{{ Consultation.date_of_birth }}</span>
            </div>
            <div class="text-sm text-gray-700 flex items-center gap-2">
              <img src="socialNumber.svg" alt="ID Card" class="w-4 h-4" />
              <span>{{ Consultation.consultation_id }}</span>
            </div>
            <div class="text-sm text-gray-700 flex items-center gap-2">
              <img src="worker-phoneNumber.svg" alt="Phone" class="w-4 h-4" />
              <span>{{ Consultation.emergency_contact_phone }}</span>
            </div>
          </div>

          <!-- Second Row -->
          <div
            class="flex flex-row md:flex-nowrap flex-wrap  items-center gap-4"
          >
            <div class="text-sm text-gray-700 flex items-center gap-2">
              <img src="phone.svg" alt="Phone" class="w-4 h-4" />
              <span>{{ Consultation.phone_number }}</span>
            </div>
            <div class="text-sm text-gray-700 flex items-center gap-2">
              <img src="email.svg" alt="Email" class="w-4 h-4" />
              <span>{{ Consultation.email }}</span>
            </div>
            <div class="text-sm text-gray-700 flex items-center gap-2">
              <img src="worker.svg" alt="User" class="w-4 h-4" />
              <span>{{ Consultation.emergency_contact_name }}</span>
            </div>
          </div>
        </div>
      </div>

      <div class="text-black text-sm  font-medium">
        <ul class="list-disc ml-5">
          <li
            *ngFor="let condition of conditions"
            class="font-medium text-base	"
          >
            {{ condition }}
          </li>
        </ul>
      </div>
    </div>
  `,
  styles: ``,
})
export class PatientInfosComponent {
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
        .getConsultationByIdCashed(ConsultationId)
        .subscribe({
          next: (data) => {
            this.Consultation = data;
            console.log('Consultation:', data);
          },
          error: (err) => console.error(err),
        });
    }
  }
  patient: UserProfile | null = null;

  name = '';
  avatarUrl = '';
  consultId = '';
  birthday = '';
  socialNumber = '';
  phoneNumber = '';
  email = '';
  emergencyContact = '';
  doctorId = '';
  conditions: string[] = [];
}
