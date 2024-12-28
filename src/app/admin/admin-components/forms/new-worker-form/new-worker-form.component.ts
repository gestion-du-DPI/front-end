import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-worker-form',
  imports: [FormsModule],
  template: `
    <div class="flex flex-col bg-white py-5 rounded-xl lg:w-[860px] m-10 h-[90vh]">
      <div class="flex flex-row justify-between px-7 pb-3">
        <h1 class="font-semibold text-2xl text-main">New Worker</h1>
        <img src="cancel-icon.svg" class="w-7 cursor-pointer" alt="" (click)="onCancel()" />
      </div>
      <form class="flex flex-col gap-2 overflow-y-scroll px-7">
        <h4 class=" text-lg font-semibold text-[#18181B] mt-2">Patient info</h4>
        <div class=" flex flex-row justify-center flex-wrap gap-4">
          <div class="flex flex-col gap-1">
            <label class="font-medium text-sm">
              Full Name <span class="text-red-600">*</span>
            </label>
            <input
              type="text"
              class="border-[1px] rounded-md w-96 p-2 text-sm"
              placeholder="e.g. Mostefai Mounir"
              [(ngModel)]="formData.fullName"
              name="fullName"
            />
          </div>

          <div class="flex flex-col gap-1">
            <label class="font-medium text-sm">
              Gender <span class="text-red-600">*</span>
            </label>
            <select
              class="border-[1px] rounded-md w-96 p-2 text-sm"
              [(ngModel)]="formData.gender"
              name="gender"
            >
              <option value="" disabled selected>Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>

          <div class="flex flex-col gap-1">
            <label class="font-medium text-sm">
              Birthday <span class="text-red-600">*</span>
            </label>
            <input
              type="date"
              class="border-[1px] rounded-md w-96 p-2 text-sm"
              [(ngModel)]="formData.birthday"
              name="birthday"
            />
          </div>

          <div class="flex flex-col gap-1">
            <label class="font-medium text-sm">Place of Birth</label>
            <input
              type="text"
              class="border-[1px] rounded-md w-96 p-2 text-sm"
              placeholder="e.g. Algiers"
              [(ngModel)]="formData.placeOfBirth"
              name="placeOfBirth"
            />
          </div>

          <div class="flex flex-col gap-1">
            <label class="font-medium text-sm">Address</label>
            <input
              type="text"
              class="border-[1px] rounded-md w-96 p-2 text-sm"
              placeholder="e.g. 123 Street, City"
              [(ngModel)]="formData.address"
              name="address"
            />
          </div>

          <div class="flex flex-col gap-1">
            <label class="font-medium text-sm">Social Number</label>
            <input
              type="text"
              class="border-[1px] rounded-md w-96 p-2 text-sm"
              placeholder="e.g. 123456789"
              [(ngModel)]="formData.socialNumber"
              name="socialNumber"
            />
          </div>
        </div>
        <h4 class=" text-lg font-semibold text-[#18181B] mt-2">Contact</h4>
        <div class=" flex flex-row justify-center flex-wrap gap-4">
          <div class="flex flex-col gap-1">
            <label class="font-medium text-sm">Phone Number</label>
            <input
              type="tel"
              class="border-[1px] rounded-md w-96 p-2 text-sm"
              placeholder="e.g. +1234567890"
              [(ngModel)]="formData.phoneNumber"
              name="phoneNumber"
            />
          </div>

          <div class="flex flex-col gap-1">
            <label class="font-medium text-sm">
              Email <span class="text-red-600">*</span>
            </label>
            <input
              type="email"
              class="border-[1px] rounded-md w-96 p-2 text-sm"
              placeholder="e.g. example@example.com"
              [(ngModel)]="formData.email"
              name="email"
            />
          </div>
        </div>
        <h4 class=" text-lg font-semibold text-[#18181B] mt-2">Work field</h4>

        <div class=" flex flex-row justify-center flex-wrap gap-4">
          <div class="flex flex-col gap-1">
            <label class="font-medium text-sm">Role</label>
            <input
              type="text"
              class="border-[1px] rounded-md w-96 p-2 text-sm"
              placeholder="e.g. Manager"
              [(ngModel)]="formData.role"
              name="role"
            />
          </div>

          <div class="flex flex-col gap-1">
            <label class="font-medium text-sm">Specialty</label>
            <input
              type="text"
              class="border-[1px] rounded-md w-96 p-2 text-sm"
              placeholder="e.g. IT Specialist"
              [(ngModel)]="formData.specialty"
              name="specialty"
            />
          </div>
        </div>
        <div class="flex flex-row justify-end gap-3">
          <button
            type="button"
            class=" text-main border-main font-semibold border-[2px] p-2 w-32 rounded-md mt-4"
            (click)="onCancel()"
          >
            Cancel
          </button>
          <button
            type="button"
            class="bg-main text-white font-semibold p-2 w-32 rounded-md mt-4"
            (click)="submitForm()"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  `,
  styles: [
    `
      h1 {
        font-family: 'Plus Jakarta Sans', sans-serif;
      }
      form {
        font-family: 'Plus Jakarta Sans', sans-serif;
      }
    `,
  ],
})
export class NewWorkerFormComponent {
  @Output() cancel = new EventEmitter<void>();

  formData = {
    fullName: '',
    gender: '',
    birthday: '',
    placeOfBirth: '',
    address: '',
    socialNumber: '',
    phoneNumber: '',
    email: '',
    role: '',
    specialty: '',
  };

  submitForm() {
    console.log('Form Data:', this.formData);
  }

  onCancel() {
    this.cancel.emit();
  }
}
