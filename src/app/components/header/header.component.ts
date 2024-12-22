import { Component } from '@angular/core';
import { AdminBadgeComponent } from '../admin-badge/admin-badge.component';
import { AddNewPatientPopupComponent } from '../popups/add-new-patient-popup/add-new-patient-popup.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-header',
  imports: [
    AdminBadgeComponent, 
    AddNewPatientPopupComponent,
    CommonModule,
  ],
  template: `
    <div class="flex flex-row items-center gap-5">
      <button
        class=" w-60 bg-main flex flex-row gap-3 items-center justify-center py-4 rounded-md"
        (click)="togglePopup()"

      >
        <img src="add-icon-white.svg" class="" alt="" /><span
          class="text-white font-bold text-base"
          >New Patient</span
        >
      </button>
      <app-admin-badge></app-admin-badge>
    </div>

    <div class="popup" *ngIf="showPopup">
      <app-add-new-patient-popup (closePopup)="closePopup()"></app-add-new-patient-popup >
    </div>


  `,
})
export class HeaderComponent {
  showPopup: boolean = false;

  togglePopup() {
    this.showPopup = !this.showPopup;
  }

  closePopup() {
    this.showPopup = false;
  }

}
