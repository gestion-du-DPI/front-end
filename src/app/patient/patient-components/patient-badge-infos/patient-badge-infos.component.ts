import { Component, EventEmitter, Output } from '@angular/core';
import { ConfirmLogoutPopupComponent } from '../../../components/popups/confirm-logout-popup/confirm-logout-popup.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';



@Component({
  selector: 'app-patient-badge-infos',
  imports: [ConfirmLogoutPopupComponent,  CommonModule ],
  template: `
    <div
      class="bg-white flex-col flex justify-center p-4 rounded-xl lg:w-[630px] mx-5"
    >
      <img
        class="ml-auto cursor-pointer w-5"
        src="cancel-icon.svg"
        (click)="closePopup.emit()"
      />
      <div>
        <div class="flex flex-row items-center justify-between mx-3">
        <div class="flex flex-row gap-4 items-center">
          <img
            src="admin-pfp.jpg"
            class="w-16 h-16 object-cover rounded-full"
            alt="profile"
          />
          <h2 class=" font-semibold text-main text-xl">Dr. Sadoun</h2>
          </div>
          <div class="flex flex-row gap-4 items-center">
          <img src="edit-profile-icon.svg" alt="" class="ml-auto w-13 cursor-pointer hover:bg-slate-100 p-3 rounded-2xl" (click)="onPres()">
          <img
            src="logout-icon.svg"
            (click)="onLogout()"
            class="ml-auto w-13 cursor-pointer hover:bg-slate-100 p-3 rounded-2xl"
            alt=""
            
          />
          </div>
        </div>
      </div>
      <div class="flex flex-row flex-wrap justify-center gap-5 mt-2 p-3 ">
        <div class="flex flex-col gap-1 min-w-[170px]">
          <p class="text-[#ADADAD] text-[10px] font-semibold">Hospital name</p>
          <p class=" font-medium text-xs">Hope Mental Hospital</p>
        </div>
        <div class="flex flex-col  gap-1 w-[170px] ">
          <p class="text-[#ADADAD] text-[10px] font-semibold">Address</p>
          <p class=" font-medium text-xs">Hope Mental Hospital</p>
        </div>
        <div class="flex flex-col  gap-1 w-[170px] ">
          <p class="text-[#ADADAD] text-[10px] font-semibold">E-mail address</p>
          <p class=" font-medium text-xs">Hope Mental Hospital</p>
        </div>
        <div class="flex flex-col  gap-1 w-[170px] ">
          <p class="text-[#ADADAD] text-[10px] font-semibold">Phone number</p>
          <p class=" font-medium text-xs">Hope Mental Hospital</p>
        </div>
        <div class="flex flex-col  gap-1 w-[170px] ">
          <p class="text-[#ADADAD] text-[10px] font-semibold">Staff number</p>
          <p class=" font-medium text-xs">Hope Mental Hospital</p>
        </div>
        <div class="flex flex-col  gap-1 w-[170px] ">
          <p class="text-[#ADADAD] text-[10px] font-semibold">
            Patients number
          </p>
          <p class=" font-medium text-xs">Hope Mental Hospital</p>
        </div>
      </div>
      <div class="popup" *ngIf="showLogoutPopup">
        <app-confirm-logout-popup
          (cancel)="onCancelLogout()"
        ></app-confirm-logout-popup>
      </div>
    </div>
  `,
  styles: ``
})
export class PatientBadgeInfosComponent {

  constructor(private router: Router) {}

  onPres(): void {
    this.router.navigate(['/patient/edit-profile']);
  }

  @Output() closePopup = new EventEmitter<void>();
  showLogoutPopup = false;

  onLogout() {
    this.showLogoutPopup = true;
  }

  onCancelLogout() {
    this.showLogoutPopup = false;
  }
}
