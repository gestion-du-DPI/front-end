import { Component } from '@angular/core';
import { NewConsultationPopupComponent } from '../new-consultation-popup/new-consultation-popup.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-doctor-actions',
  imports: [NewConsultationPopupComponent , CommonModule],
  template: `
  <div class="popup" *ngIf="showNewPatientForm">
      <app-new-consultation-popup
        (cancel)="onCancelPatientForm()"
      ></app-new-consultation-popup>
    </div>
    <div
      class=" bg-white rounded-xl border-2 border-slate-100 flex flex-col w-80 gap-3 py-4 h-full"
    >
      <h2 class="text-main font-semibold text-xl ml-6 text-semibold">
        Doctor actions
      </h2>
      <button
        class="flex hover:text-main flex-row items-center gap-2 group w-full hover:bg-[#ECF1FF] px-4 py-2 font-semibold"
        (click)="onAddConsultation()"
      >
        <div
          class="flex justify-center group-hover:border-[#BBBCFF] w-10 h-10 align-middle items-center rounded-xl border-2 border-slate-200 p-2"
        >
          <img src="new-cons-act.svg" class="w-5 h-5 object-cover" alt="" />
        </div>
        New Consultation
      </button>
      <button
        class="flex hover:text-main flex-row items-center gap-2 group w-full hover:bg-[#ECF1FF] px-4 py-2 font-semibold"
      >
        <div
          class="flex justify-center group-hover:border-[#BBBCFF] w-10 h-10 align-middle items-center rounded-xl border-2 border-slate-200 p-2"
        >
          <img src="email-act.svg" class="w-4 h-4 object-cover" alt="" />
        </div>
        Send An email
      </button>
    </div>
  `,
  styles: ``,
})
export class DoctorActionsComponent {
  showNewPatientForm = false;

  onAddConsultation() {
    console.log('Add new patient');
    this.showNewPatientForm = true;
  }

  onCancelPatientForm() {
    this.showNewPatientForm = false;
  }
}
