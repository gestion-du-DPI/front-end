import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewPatientFormComponent } from '../forms/new-patient-form/new-patient-form.component';
import { UserBadgeComponent } from '../../../components/user-badge/user-badge.component';

@Component({
  selector: 'app-header',
  imports: [UserBadgeComponent, NewPatientFormComponent, CommonModule],
  template: `
    <div class="flex flex-row items-center gap-5">
      <button
        class=" w-60 bg-main flex flex-row gap-3 items-center justify-center py-4 rounded-md"
        (click)="onAddPatient()"
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
      ></app-new-patient-form>
    </div>
  `,
})
export class HeaderComponent {
  showNewPatientForm = false;

  onAddPatient() {
    console.log('Add new patient');
    this.showNewPatientForm = true;
  }

  onCancelPatientForm() {
    this.showNewPatientForm = false;
  }
}
