import { Component, Input } from '@angular/core';
import { Patient } from '../../../models/patient';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-consultation-form',
  imports: [CommonModule, FormsModule],
  template: `
   
   <div *ngIf="searchPerformed && patients && patients.length === 0">
  No patients found.
</div>

<div 
  class="bg-white rounded-lg shadow p-4 space-y-4 overflow-y-auto max-h-[80vh]" 
  *ngIf="patients && patients.length > 0"
>
  <div 
    *ngFor="let patient of patients" 
    class="flex flex-col gap-4 p-4  rounded-lg shadow-md bg-gray-50"
  >
    <!-- Patient Info Section -->
    <div class="flex flex-row items-center justify-between gap-5">
      <!-- Profile Picture and Basic Info -->
      <div class="flex flex-row items-center gap-4">
        <img
          [src]="patient.profilePicture"
          alt="Profile Picture"
          class="w-16 h-16 rounded-full"
        />
        <div class="flex flex-col">
          <div class="flex flex-row items-center">
            <img src="worker-name.svg" alt="name" class="w-6 h-6 mr-2" />
            <h2 class="font-semibold text-lg">{{ patient.name }}</h2>
          </div>
        </div>
      </div>

      <!-- Additional Patient Details -->
      <div class="flex flex-col gap-4">
        <!-- First Row -->
        <div class="flex flex-row items-center gap-4">
          <div class="text-sm text-gray-700 flex items-center gap-2">
            <img src="birthday.svg" alt="Calendar" class="w-4 h-4" />
            <span>{{ patient.dateOfBirth }}</span>
          </div>
          <div class="text-sm text-gray-700 flex items-center gap-2">
            <img src="socialNumber.svg" alt="ID Card" class="w-4 h-4" />
            <span>{{ patient.socialNumber }}</span>
          </div>
        </div>

        <!-- Second Row -->
        <div class="flex flex-row items-center gap-4">
          <div class="text-sm text-gray-700 flex items-center gap-2">
            <img src="phone.svg" alt="Phone" class="w-4 h-4" />
            <span>{{ patient.phone }}</span>
          </div>
          <div class="text-sm text-gray-700 flex items-center gap-2">
            <img src="email.svg" alt="Email" class="w-4 h-4" />
            <span>{{ patient.email }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  `,
})
export class NewConsultationFormComponent {

  @Input() patients: Patient[] = [];
  @Input() searchPerformed: boolean = false; // Accept searchPerformed flag from parent
}
