import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Patient } from '../../../models/doc-patients';
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
        class="flex flex-col gap-4 p-4 rounded-lg shadow-md bg-gray-50"
      >
        <div
          class="flex flex-row md:flex-nowrap flex-wrap items-center justify-between gap-5"
        >
          <div class="flex flex-row items-center gap-4">
            <img
              [src]="patient.profile_image"
              alt="Profile Picture"
              class="w-16 h-16 rounded-full"
            />
            <div class="flex flex-col">
              <div class="flex flex-row items-center">
                <img src="worker-name.svg" alt="name" class="w-6 h-6 mr-2" />
                <h2 class="font-semibold text-lg">
                  {{ patient.name }}
                </h2>
              </div>
            </div>
          </div>

          <div class="flex flex-col gap-4">
            <div class="flex flex-row items-center gap-4">
              <div class="text-sm text-gray-700 flex items-center gap-2">
                <img src="birthday.svg" alt="Calendar" class="w-4 h-4" />
                <span>"patient.date_of_birth"</span>
              </div>
              <div class="text-sm text-gray-700 flex items-center gap-2">
                <img src="socialNumber.svg" alt="ID Card" class="w-4 h-4" />
                <span>{{ patient.nss }}</span>
              </div>
            </div>

            <div class="flex flex-row items-center gap-4">
              <div class="text-sm text-gray-700 flex items-center gap-2">
                <img src="phone.svg" alt="Phone" class="w-4 h-4" />
                <span>{{ patient.phone_number }}</span>
              </div>
              <div class="text-sm text-gray-700 flex items-center gap-2">
                <img src="email.svg" alt="Email" class="w-4 h-4" />
                <span>{{ patient.email }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Selection Button -->
        <button
          (click)="selectPatient(patient)"
          [class.bg-blue-500]="selectedPatient !== patient"
          [class.bg-green-500]="selectedPatient === patient"
          class="text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          {{ selectedPatient === patient ? 'Selected' : 'Select Patient' }}
        </button>
      </div>
    </div>
  `,
})
export class NewConsultationFormComponent {
  @Input() patients: Patient[] = [];
  @Input() searchPerformed: boolean = false;

  @Output() patientSelected: EventEmitter<Patient> =
    new EventEmitter<Patient>();

  selectedPatient: Patient | null = null;

  ngOnInit() {
    if (this.patients.length === 1) {
      this.selectedPatient = this.patients[0];
      this.patientSelected.emit(this.patients[0]);
    }
  }

  selectPatient(patient: Patient): void {
    this.selectedPatient = patient;
    this.patientSelected.emit(patient);
  }
}
