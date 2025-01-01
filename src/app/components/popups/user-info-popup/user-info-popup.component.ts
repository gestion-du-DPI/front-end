import { AuthService } from './../../../services/auth/auth.service';
import { Component, EventEmitter, Output } from '@angular/core';
import { ConfirmLogoutPopupComponent } from '../confirm-logout-popup/confirm-logout-popup.component';
import { CommonModule } from '@angular/common';
import { DashboardService } from '../../../services/admin/dashboard/dashboard.service';

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
            src=[src]="title.pfp || 'admin-pfp.jpg'"
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
          <p class="text-[#ADADAD] text-[10px] font-semibold">Hospital name</p>
          <p class=" font-medium text-xs">{{ doctorHospital }}</p>
        </div>
        <div class="flex flex-col  gap-1 w-[170px] ">
          <p class="text-[#ADADAD] text-[10px] font-semibold">Address</p>
          <p class=" font-medium text-xs">{{ doctorAddress }}</p>
        </div>
        <div class="flex flex-col  gap-1 w-[170px] ">
          <p class="text-[#ADADAD] text-[10px] font-semibold">E-mail address</p>
          <p class=" font-medium text-xs">{{ doctorEmail }}</p>
        </div>
        <div class="flex flex-col  gap-1 w-[170px] ">
          <p class="text-[#ADADAD] text-[10px] font-semibold">Phone number</p>
          <p class=" font-medium text-xs">{{ doctorPhoneNumber }}</p>
        </div>
        <div class="flex flex-col  gap-1 w-[170px] ">
          <p class="text-[#ADADAD] text-[10px] font-semibold">Staff number</p>
          <p class=" font-medium text-xs">{{ staffNumber }}</p>
        </div>
        <div class="flex flex-col  gap-1 w-[170px] ">
          <p class="text-[#ADADAD] text-[10px] font-semibold">
            Patients number
          </p>
          <p class=" font-medium text-xs">{{ patientsNumber }}</p>
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
  staffNumber = '';
  patientsNumber = '';
  pfp = '';

  constructor(
    private dashboardService: DashboardService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    const cachedData = this.dashboardService.getcachedData();

    if ('admin_info' in cachedData && 'role_counts' in cachedData) {
      this.doctorName = cachedData.admin_info.name;
      this.doctorHospital = cachedData.admin_info.hospital;
      this.doctorAddress = cachedData.admin_info.address;
      this.doctorPhoneNumber = cachedData.admin_info.phone_number;
      this.doctorEmail = cachedData.admin_info.email;
      this.staffNumber = cachedData.role_counts.doctors.toString();
      this.patientsNumber = cachedData.role_counts.patients.toString();
      this.pfp = cachedData.admin_info.profile_image;
    } else {
      cachedData.subscribe((dataFetched: any) => {
        if ('admin_info' in dataFetched && 'role_counts' in dataFetched) {
          this.doctorName = dataFetched.admin_info.name;
          this.doctorHospital = dataFetched.admin_info.hospital;
          this.doctorAddress = dataFetched.admin_info.address;
          this.doctorPhoneNumber = dataFetched.admin_info.phone_number;
          this.doctorEmail = dataFetched.admin_info.email;
          this.staffNumber = dataFetched.role_counts.doctors.toString();
          this.patientsNumber = dataFetched.role_counts.patients.toString();
          this.pfp = dataFetched.admin_info.profile_image;
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
