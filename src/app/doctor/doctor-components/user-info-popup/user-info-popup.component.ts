import { AuthService } from './../../../services/auth/auth.service';
import { Component, EventEmitter, Output } from '@angular/core';
import { ConfirmLogoutPopupComponent } from '../confirm-logout-popup/confirm-logout-popup.component';
import { CommonModule } from '@angular/common';
import { DashboardService } from '../../../services/doctor/dashboard/dashboard.service';

@Component({
  selector: 'app-user-info-popup',
  imports: [ConfirmLogoutPopupComponent, CommonModule],
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
        <div class="flex flex-row items-center gap-5 mx-3">
          <img
            [src]="pfp || 'admin-pfp.jpg'"
            class="w-16 h-16 object-cover rounded-full"
            alt="profile"
          />
          <h2 class=" font-semibold text-main text-xl">{{ doctorName }}</h2>
          <img
            src="logout-icon.svg"
            (click)="onLogout()"
            class="ml-auto w-13 cursor-pointer hover:bg-slate-100 p-3 rounded-2xl"
            alt=""
          />
        </div>
      </div>
      <div class="flex flex-row flex-wrap justify-center gap-5 mt-2 p-3 ">
        <div class="flex flex-col gap-1 min-w-[170px]">
          <p class="text-[#ADADAD] text-[10px] font-semibold">company Name</p>
          <p class=" font-medium text-xs">{{ doctorHospital }}</p>
        </div>
        <div class="flex flex-col  gap-1 w-[170px] ">
          <p class="text-[#ADADAD] text-[10px] font-semibold">Address</p>
          <p class=" font-medium text-xs">{{ doctorAddress }}</p>
        </div>
        <div class="flex flex-col  gap-1 w-[170px] ">
          <p class="text-[#ADADAD] text-[10px] font-semibold">Email-Address</p>
          <p class=" font-medium text-xs">{{ doctorEmail }}</p>
        </div>
        <div class="flex flex-col  gap-1 w-[170px] ">
          <p class="text-[#ADADAD] text-[10px] font-semibold">Phone number</p>
          <p class=" font-medium text-xs">{{ doctorPhoneNumber }}</p>
        </div>
        <div class="flex flex-col  gap-1 w-[170px] ">
          <p class="text-[#ADADAD] text-[10px] font-semibold">Social number</p>
          <p class=" font-medium text-xs">{{ nss }}</p>
        </div>
      </div>
      <div class="popup" *ngIf="showLogoutPopup">
        <app-confirm-logout-popup
          (cancel)="onCancelLogout()"
          (confirm)="onConfirmLogout()"
        ></app-confirm-logout-popup>
      </div>
    </div>
  `,
  styles: ``,
})
export class UserInfoPopupComponent {
  @Output() closePopup = new EventEmitter<void>();
  showLogoutPopup = false;

  doctorName = '';
  doctorHospital = '';
  doctorAddress = '';
  doctorPhoneNumber = '';
  doctorEmail = '';
  nss = '';
  pfp = '';

  constructor(
    private dashboardService: DashboardService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    const cachedData = this.dashboardService.getcachedData();

    if ('doctor_info' in cachedData) {
      this.doctorName = cachedData.doctor_info.name;
      this.doctorHospital = cachedData.doctor_info.hospital;
      this.doctorAddress = cachedData.doctor_info.address;
      this.doctorPhoneNumber = cachedData.doctor_info.phone_number;
      this.doctorEmail = cachedData.doctor_info.email;
      this.nss = cachedData.doctor_info.nss;
      this.pfp = cachedData.doctor_info.profile_image;
    } else {
      cachedData.subscribe((dataFetched: any) => {
        if ('doctor_info' in dataFetched) {
          this.doctorName = dataFetched.doctor_info.name;
          this.doctorHospital = dataFetched.doctor_info.hospital;
          this.doctorAddress = dataFetched.doctor_info.address;
          this.doctorPhoneNumber = dataFetched.doctor_info.phone_number;
          this.doctorEmail = dataFetched.doctor_info.email;
          this.nss = dataFetched.doctor_info.nss;
          this.pfp = dataFetched.doctor_info.profile_image;
        }
      });
    }
  }

  onLogout() {
    this.showLogoutPopup = true;
  }

  onCancelLogout() {
    this.showLogoutPopup = false;
  }

  onConfirmLogout() {
    this.authService.logout();
    this.showLogoutPopup = false;
  }
}
