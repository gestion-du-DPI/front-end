import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientBadgeInfosComponent } from '../patient-badge-infos/patient-badge-infos.component';


@Component({
  selector: 'app-patient-badge',
  imports: [CommonModule, PatientBadgeInfosComponent],
  template: `
   <div
      class="flex flex-row items-center gap-2 cursor-pointer hover:bg-slate-100 p-3 rounded-lg"
      (click)="togglePopup()"
    >
      <img
        src="admin-pfp.jpg"
        class="w-12 h-12 object-cover rounded-full"
        alt="Admin Profile Picture"
      />
      <p class="font-semibold text-base">{{ name }}</p>
    </div>

    <div class="popup" *ngIf="showPopup">
      <app-patient-badge-infos (closePopup)="closePopup()"></app-patient-badge-infos>
    </div>
  `,
  styles: ``
})
export class PatientBadgeComponent {
  name: string = 'Atir';
  showPopup: boolean = false;

  togglePopup() {
    this.showPopup = !this.showPopup;
  }

  closePopup() {
    this.showPopup = false;
  }
}
