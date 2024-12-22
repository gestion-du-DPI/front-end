import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-admin-info-popup',
  template: `
    <div class="bg-white flex-col flex justify-center p-4 rounded-xl lg:w-[630px] mx-5">
      <img
        class="ml-auto cursor-pointer w-5"
        src="cancel-icon.svg"
        (click)="closePopup.emit()"
      />
      <div>
        <div class="flex flex-row items-center gap-5 mx-3">
          <img
            src="admin-pfp.jpg"
            class="w-16 h-16 object-cover rounded-full"
            alt="profile"
          />
          <h2 class=" font-semibold text-main text-xl">Dr. Sadoun</h2>
          <img src="edit-profile-icon.svg" class=" ml-auto w-6 cursor-pointer" alt="" />
          <img src="logout-icon.svg" class="w-6 cursor-pointer" alt="" />
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
          <p class="text-[#ADADAD] text-[10px] font-semibold">Patients number</p>
          <p class=" font-medium text-xs">Hope Mental Hospital</p>
        </div>
      </div>
    </div>
  `,
  styles: ``,
})
export class AdminInfoPopupComponent {
  @Output() closePopup = new EventEmitter<void>();
}
