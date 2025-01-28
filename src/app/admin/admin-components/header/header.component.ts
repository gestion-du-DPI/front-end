import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewPatientFormComponent } from '../forms/new-patient-form/new-patient-form.component';
import { UserBadgeComponent } from '../user-badge/user-badge.component';

@Component({
  selector: 'app-header',
  imports: [UserBadgeComponent, NewPatientFormComponent, CommonModule],
  template: `
    <div class="flex flex-row items-center gap-5">
      <button
        class=" w-60 bg-main flex flex-row gap-3 items-center justify-center py-4 rounded-md"
        (click)="onAddPatient()"
        id="selenium_add_patient_button"
      >
        <img src="add-icon-white.svg" class="" alt="" /><span
          class="text-white font-bold text-base"
          >New Patient</span
        >
      </button>
      <app-user-badge></app-user-badge>
    </div>

    <div class="popup" *ngIf="showNewPatientForm">
      <app-new-patient-form
        (cancel)="onCancelPatientForm()"
        (confirm)="reloadPatients()"
      ></app-new-patient-form>
    </div>
  `,
})
export class HeaderComponent {
  @Output() reload = new EventEmitter<void>();
  showNewPatientForm = false;

  onAddPatient() {
    this.showNewPatientForm = true;
  }

  onCancelPatientForm() {
    this.showNewPatientForm = false;
  }

  //to reload the patients table after adding a new one
  reloadPatients() {
    this.showNewPatientForm = false;
    this.reload.emit();
  }
}
