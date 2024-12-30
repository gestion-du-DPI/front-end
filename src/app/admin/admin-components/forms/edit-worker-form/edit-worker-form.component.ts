import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Worker } from '../../../../models/worker';
import { WorkerService } from '../../../../services/worker/worker.service';

@Component({
  selector: 'app-edit-worker-form',
  imports: [FormsModule, CommonModule],
  template: `
    <div
      class="flex flex-col bg-white py-5 rounded-xl lg:w-[860px] m-10 h-[90vh]"
    >
      <div class="flex flex-row justify-between px-7 pb-3">
        <h1 class="font-extrabold text-2xl text-main">Edit Worker</h1>
        <img
          src="cancel-icon.svg"
          class="w-7 cursor-pointer"
          alt=""
          (click)="onCancel()"
        />
      </div>
      <form
        #workerForm="ngForm"
        class="flex flex-col gap-2 overflow-y-scroll px-7"
        (ngSubmit)="submitForm(workerForm)"
      >
        <h4 class="text-lg font-semibold text-[#18181B] mt-2">Worker Info</h4>
        <div class="flex flex-row justify-center flex-wrap gap-4">
          <div class="flex flex-col gap-1">
            <label class="font-medium text-sm">
              Full Name <span class="text-red-600">*</span>
            </label>
            <input
              type="text"
              class="border-[1px] rounded-md w-96 p-2 text-sm"
              placeholder="e.g. Mostefai Mounir"
              [(ngModel)]="formData.name"
              name="fullName"
              #fullName="ngModel"
              required
            />
            <div
              *ngIf="fullName.invalid && fullName.touched"
              class="text-red-600 text-xs"
            >
              Full Name is required.
            </div>
          </div>

          <div class="flex flex-col gap-1">
            <label class="font-medium text-sm">
              Gender <span class="text-red-600">*</span>
            </label>
            <select
              class="border-[1px] rounded-md w-96 p-2 text-sm"
              [(ngModel)]="formData.gender"
              name="gender"
              #gender="ngModel"
              required
            >
              <option value="" disabled selected>Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            <div
              *ngIf="gender.invalid && gender.touched"
              class="text-red-600 text-xs"
            >
              Gender is required.
            </div>
          </div>

          <div class="flex flex-col gap-1">
            <label class="font-medium text-sm">
              Birthday <span class="text-red-600">*</span>
            </label>
            <input
              type="date"
              class="border-[1px] rounded-md w-96 p-2 text-sm"
              [(ngModel)]="formData.dateOfBirth"
              name="birthday"
              #birthday="ngModel"
              required
            />
            <div
              *ngIf="birthday.invalid && birthday.touched"
              class="text-red-600 text-xs"
            >
              Birthday is required.
            </div>
          </div>

          <!-- Place of Birth -->
          <div class="flex flex-col gap-1">
            <label class="font-medium text-sm">
              Place of Birth <span class="text-red-600">*</span>
            </label>
            <input
              type="text"
              class="border-[1px] rounded-md w-96 p-2 text-sm"
              placeholder="e.g. Algiers"
              [(ngModel)]="formData.placeOfBirth"
              name="placeOfBirth"
              required
              #placeOfBirth="ngModel"
              [ngClass]="{
                'border-red-600': placeOfBirth?.invalid && placeOfBirth?.touched
              }"
            />
            <div
              *ngIf="placeOfBirth?.invalid && placeOfBirth?.touched"
              class="text-red-600 text-xs"
            >
              Place of birth is required.
            </div>
          </div>

          <!-- Address -->
          <div class="flex flex-col gap-1">
            <label class="font-medium text-sm">
              Address <span class="text-red-600">*</span>
            </label>
            <input
              type="text"
              class="border-[1px] rounded-md w-96 p-2 text-sm"
              placeholder="e.g. 123 Street, City"
              [(ngModel)]="formData.address"
              name="address"
              required
              #address="ngModel"
              [ngClass]="{
                'border-red-600': address?.invalid && address?.touched
              }"
            />
            <div
              *ngIf="address?.invalid && address?.touched"
              class="text-red-600 text-xs"
            >
              Address is required.
            </div>
          </div>

          <!-- Social Number -->
          <div class="flex flex-col gap-1">
            <label class="font-medium text-sm">
              Social Number (NSS) <span class="text-red-600">*</span>
            </label>
            <input
              type="text"
              class="border-[1px] rounded-md w-96 p-2 text-sm"
              placeholder="e.g. 123456789"
              [(ngModel)]="formData.socialNumber"
              name="socialNumber"
              required
              pattern="^[0-9]{9}$"
              #socialNumber="ngModel"
              [ngClass]="{
                'border-red-600': socialNumber?.invalid && socialNumber?.touched
              }"
            />
            <div
              *ngIf="socialNumber?.invalid && socialNumber?.touched"
              class="text-red-600 text-xs"
            >
              Social number must be 9 digits.
            </div>
          </div>

          <div class="flex flex-col gap-1">
            <label class="font-medium text-sm">
              Date of Hire <span class="text-red-600">*</span>
            </label>
            <input
              type="date"
              class="border-[1px] rounded-md w-96 p-2 text-sm"
              [(ngModel)]="formData.dateOfHire"
              name="dateofhire"
              #dateofhire="ngModel"
              required
            />
            <div
              *ngIf="dateofhire.invalid && dateofhire.touched"
              class="text-red-600 text-xs"
            >
              Date of hire is required.
            </div>
          </div>
        </div>
        <h4 class="text-lg font-semibold text-[#18181B] mt-2">Contact</h4>
        <div class="flex flex-row justify-center flex-wrap gap-4">
          <!-- Phone -->
          <div class="flex flex-col gap-1">
            <label class="font-medium text-sm">
              Phone Number <span class="text-red-600">*</span>
            </label>
            <input
              type="tel"
              class="border-[1px] rounded-md w-96 p-2 text-sm"
              placeholder="e.g. +1234567890"
              [(ngModel)]="formData.phone"
              name="phone"
              required
              pattern="^[0-9]{10}$"
              #phone="ngModel"
              [ngClass]="{ 'border-red-600': phone?.invalid && phone?.touched }"
            />
            <div
              *ngIf="phone?.invalid && phone?.touched"
              class="text-red-600 text-xs"
            >
              Phone number must be exactly 10 digits.
            </div>
          </div>

          <!-- Email -->
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
              required
              #email="ngModel"
              [ngClass]="{ 'border-red-600': email?.invalid && email?.touched }"
            />
            <div
              *ngIf="email?.invalid && email?.touched"
              class="text-red-600 text-xs"
            >
              Please enter a valid email.
            </div>
          </div>
        </div>
        <h4 class="text-lg font-semibold text-[#18181B] mt-2">Work Field</h4>

        <div class="flex flex-row justify-center flex-wrap gap-4">
          <div class="flex flex-col gap-1">
            <label class="font-medium text-sm">
              Role <span class="text-red-600">*</span>
            </label>
            <input
              type="text"
              class="border-[1px] rounded-md w-96 p-2 text-sm"
              placeholder="e.g. Manager"
              [(ngModel)]="formData.role"
              name="role"
              #role="ngModel"
              required
            />
            <div
              *ngIf="role.invalid && role.touched"
              class="text-red-600 text-xs"
            >
              Role is required.
            </div>
          </div>

          <div class="flex flex-col gap-1">
            <label class="font-medium text-sm">
              Specialty <span class="text-red-600">*</span>
            </label>
            <input
              type="text"
              class="border-[1px] rounded-md w-96 p-2 text-sm"
              placeholder="e.g. IT Specialist"
              [(ngModel)]="formData.specialty"
              name="specialty"
              #specialty="ngModel"
              required
            />
            <div
              *ngIf="specialty.invalid && specialty.touched"
              class="text-red-600 text-xs"
            >
              Specialty is required.
            </div>
          </div>
        </div>

        <div class="flex flex-row justify-end gap-3">
          <button
            type="button"
            class="text-main border-main font-semibold border-[2px] p-2 w-32 rounded-md mt-4"
            (click)="onCancel()"
          >
            Cancel
          </button>
          <button
            type="submit"
            class="bg-main text-white font-semibold p-2 w-32 rounded-md mt-4"
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
export class EditWorkerFormComponent {
  @Input() formData: Worker = {} as Worker;
  @Output() cancel = new EventEmitter<void>();
  @Output() save = new EventEmitter<void>();

  constructor(private workerService: WorkerService) {}

  submitForm(form: NgForm) {
    if (form.valid) {
      this.workerService.editWorker(this.formData).subscribe({
        next: (response) => {
          console.log('worker updated successfully:', response);
          this.onSave();
        },
        error: (error) => {
          console.error('Error updating worker:', error);
        },
      });
    } else {
      Object.values(form.controls).forEach((control) =>
        control.markAsTouched()
      );
    }
  }

  onCancel() {
    this.cancel.emit();
  }

  onSave() {
    this.save.emit();
  }
}
