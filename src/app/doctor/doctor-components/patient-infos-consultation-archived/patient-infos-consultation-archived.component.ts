import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-patient-infos-consultation-archived',
  imports: [CommonModule, FormsModule],
  template: `
    <div class="bg-white rounded-lg shadow p-5 flex flex-col gap-4">
      <!-- Patient Info Section -->
      <div class="flex flex-row items-center justify-between w-full gap-5">
        <!-- Profile Picture and Basic Info -->
        <div class="flex flex-row items-center gap-4">
          <img
            [src]="avatarUrl"
            alt="Profile Picture"
            class="w-16 h-16 rounded-full"
          />
          <div class="flex flex-col">
            <div class="flex flex-row items-center">
              <img src="worker-name.svg" alt="name" class="w-6 h-6 mr-2" />
              <h2 class="font-semibold text-lg">{{ name }}</h2>
            </div>
            <div class="text-black text-sm flex flex-row items-center mt-2">
              <img src="consulId.svg" alt="Consult ID" class="w-10 h-10 mr-2" />
              <span>{{ consultId }}</span>
            </div>
          </div>
        </div>

        <!-- Additional Patient Details -->
        <div class="flex flex-col items-start gap-4">
          <!-- First Row -->
          <div class="flex flex-row items-center gap-4">
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
          <div class="flex flex-row items-center gap-4">
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
        <div class="flex items-center gap-2 p-1">
          <img src="archived.svg" class="w-4 h-4" alt="" />
          <p class="text-[#667085] font-bold text-xs		">
            This consultation is archived
          </p>
        </div>
      </div>

      <div class="flex flex-row items-center mt-4 w-full">
        <h3 class="font-semibold text-lg mr-10">Past Medical Condition</h3>
      </div>

      <div class="flex gap-2 flex-wrap items-center">
        <!-- Tags will stay visible, the X will only appear when editing -->
        <span
          *ngFor="let tag of tags"
          class="bg-[#DBE4FF] text-black px-3 py-1 rounded flex items-center"
        >
          {{ tag }}
        </span>
      </div>

      <div class="flex flex-row justify-between items-start">
        <div class="text-black text-sm font-medium">
          <ul class="list-disc ml-5">
            <li
              *ngFor="let condition of conditions"
              class="font-medium text-base"
            >
              {{ condition }}
            </li>
          </ul>
        </div>
        <button
          class="bg-[#F5F6FA] border border-[#F4F2F2] rounded flex items-center gap-2 px-4 py-2 text-main font-medium text-sm whitespace-nowrap h-auto"
          routerLink="/doctor/prescription"
          (click)="onPres()"
        >
          <img src="Forward.svg" alt="" class="w-4 h-4" />
          Back To Previous Page
        </button>
      </div>
    </div>
  `,
  styles: ``,
})
export class PatientInfosConsultationArchivedComponent {
  constructor(private router: Router) {}

  onPres(): void {
    this.router.navigate(['/doctor/prescription']);
  }
  tags: string[] = ['Hypertension', 'Obesity', 'Anemia', 'Depression'];

  name = 'Lewis Hamilton';
  avatarUrl = 'patient-info-avatar.svg';
  consultId = '123456';
  birthday = '24/06/2004';
  socialNumber = '0001823838';
  phoneNumber = '0558235011';
  email = 'a.denai@esi.dz';
  emergencyContact = 'Mehdi';
  assignedDoctor = 'Mostefai';
  doctorId = '123456';
  conditions = [
    'Patient requires a follow-up in 4 weeks to assess blood pressure control and review lab results for renal function.',
    'Initiated Metformin 500 mg daily for newly diagnosed Type 2 Diabetes Mellitus. Monitor for gastrointestinal side effects and reassess HbA1c in 3 months.',
  ];
}
