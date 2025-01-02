import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewConsultationPopupComponent } from '../new-consultation-popup/new-consultation-popup.component';
import { UserBadgeComponent } from '../../../components/user-badge/user-badge.component';

@Component({
  selector: 'app-header',
  imports: [UserBadgeComponent, CommonModule , NewConsultationPopupComponent],
  template: `
    <div class="flex flex-row items-center gap-5">
      <button
        class=" w-60 bg-second flex flex-row gap-3 items-center justify-center py-4 rounded-md"
        (click)="onAddConsultation()"
      >
        <img src="new-cons.svg" class="" alt="" /><span
          class="text-main font-bold text-base"
          >New Consultation</span
        >
      </button>
      <app-user-badge></app-user-badge>
    </div>

    <div class="popup" *ngIf="showNewPatientForm">
      <app-new-consultation-popup
        (cancel)="onCancelPatientForm()"
      ></app-new-consultation-popup>
    </div>
  `,
})
export class HeaderComponent {
  showNewPatientForm = false;

  onAddConsultation() {
    console.log('Add new patient');
    this.showNewPatientForm = true;
  }

  onCancelPatientForm() {
    this.showNewPatientForm = false;
  }
}
