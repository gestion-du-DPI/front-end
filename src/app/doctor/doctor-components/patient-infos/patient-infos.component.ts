import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Patient } from '../../../models/patient';
import { PatientService } from '../../../services/doctor/patient/patient.service';
import { UserProfile } from '../../../models/doc-getDPI';

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
            [src]="avatarUrl || 'patient-info-avatar.svg'"
            alt="Profile Picture"
            class="w-16 h-16 rounded-full"
          />
          <div class="flex flex-col">
            <div class="flex flex-row items-center">
              <img src="worker-name.svg" alt="name" class="w-6 h-6 mr-2" />
              <h2 class="font-semibold text-lg">{{ patient?.name }}</h2>
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
              <span>{{ birthday }}</span>
            </div>
            <div class="text-sm text-gray-700 flex items-center gap-2">
              <img src="socialNumber.svg" alt="ID Card" class="w-4 h-4" />
              <span>{{ socialNumber }}</span>
            </div>
            <div class="text-sm text-gray-700 flex items-center gap-2">
              <img src="worker-phoneNumber.svg" alt="Phone" class="w-4 h-4" />
              <span>{{ phoneNumber }}</span>
            </div>
          </div>

          <!-- Second Row -->
          <div
            class="flex flex-row md:flex-nowrap flex-wrap  items-center gap-4"
          >
            <div class="text-sm text-gray-700 flex items-center gap-2">
              <img src="phone.svg" alt="Phone" class="w-4 h-4" />
              <span>{{ phoneNumber }}</span>
            </div>
            <div class="text-sm text-gray-700 flex items-center gap-2">
              <img src="email.svg" alt="Email" class="w-4 h-4" />
              <span>{{ email }}</span>
            </div>
            <div class="text-sm text-gray-700 flex items-center gap-2">
              <img src="worker.svg" alt="User" class="w-4 h-4" />
              <span>{{ emergencyContact }}</span>
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
  patient: UserProfile | null = null;

  constructor(
    private route: ActivatedRoute,
    private patientService: PatientService
  ) {}

  ngOnInit(): void {
    const patientId = this.route.snapshot.paramMap.get('id');
    console.log('Patient ID:', patientId);
    if (patientId) {
      this.patientService.getDPIById(patientId).subscribe({
        next: (data) => {
          this.patient = data;
          console.log('Patient:', data);
          this.name = data.name;
          this.avatarUrl = data.profile_image;
          this.birthday = data.date_of_birth;
          this.socialNumber = data.nss;
          this.phoneNumber = data.phone_number;
          this.email = data.email;
          this.emergencyContact = data.emergency_contact_name;
          this.conditions = data.medical_condition.split('\n');
        },
        error: (err: any) => console.error('Error fetching patient:', err),
      });
    }
  }

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
