import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Worker } from '../../../../models/worker';
import { WorkerService } from '../../../../services/admin/worker/worker.service';

@Component({
  selector: 'app-edit-worker-form',
  imports: [FormsModule, CommonModule],
  template: `
    <div
      class="flex flex-col bg-white py-5 rounded-xl lg:w-[860px] m-10 h-auto"
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
        class="flex flex-col gap-4 overflow-y-scroll px-7"
        (ngSubmit)="submitForm(workerForm)"
      >
        <!-- Worker Info Section -->
        <h4 class="text-lg font-semibold text-[#18181B] mt-2">Worker Info</h4>

        <div class="flex flex-row justify-center flex-wrap gap-4">
          <!-- First Name -->
          <div class="flex flex-col gap-1">
            <label class="font-medium text-sm">
              First Name <span class="text-red-600">*</span>
            </label>
            <input
              type="text"
              class="border rounded-md w-96 p-2 text-sm"
              placeholder="e.g. Mounir"
              [(ngModel)]="formData.first_name"
              name="firstName"
              #firstName="ngModel"
              required
            />
            <div
              *ngIf="firstName.invalid && firstName.touched"
              class="text-red-600 text-xs"
            >
              First Name is required.
            </div>
          </div>

          <!-- Last Name -->
          <div class="flex flex-col gap-1">
            <label class="font-medium text-sm">
              Last Name <span class="text-red-600">*</span>
            </label>
            <input
              type="text"
              class="border rounded-md w-96 p-2 text-sm"
              placeholder="e.g. Doe"
              [(ngModel)]="formData.last_name"
              name="lastName"
              #lastName="ngModel"
              required
            />
            <div
              *ngIf="lastName.invalid && lastName.touched"
              class="text-red-600 text-xs"
            >
              Last Name is required.
            </div>
          </div>
        </div>

        <div class="flex flex-row justify-center flex-wrap gap-4">
          <!-- Address -->
          <div class="flex flex-col gap-1">
            <label class="font-medium text-sm">
              Address <span class="text-red-600">*</span>
            </label>
            <input
              type="text"
              class="border rounded-md w-96 p-2 text-sm"
              placeholder="e.g. 123 Street, City"
              [(ngModel)]="formData.address"
              name="address"
              #address="ngModel"
              required
            />
            <div
              *ngIf="address.invalid && address.touched"
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
              class="border rounded-md w-96 p-2 text-sm"
              placeholder="e.g. 123456789"
              [(ngModel)]="formData.nss"
              name="socialNumber"
              pattern="^[0-9]{9}$"
              #socialNumber="ngModel"
              required
            />
            <div
              *ngIf="socialNumber.invalid && socialNumber.touched"
              class="text-red-600 text-xs"
            >
              Social number must be 9 digits.
            </div>
          </div>
        </div>

        <!-- Contact Section -->
        <h4 class="text-lg font-semibold text-[#18181B] mt-2">Contact</h4>

        <div class="flex flex-row justify-center flex-wrap gap-4">
          <!-- Phone -->
          <div class="flex flex-col gap-1">
            <label class="font-medium text-sm">
              Phone Number <span class="text-red-600">*</span>
            </label>
            <input
              type="tel"
              class="border rounded-md w-96 p-2 text-sm"
              placeholder="e.g. +1234567890"
              [(ngModel)]="formData.phone_number"
              name="phone"
              pattern="^[0-9]{10}$"
              #phone="ngModel"
              required
            />
            <div
              *ngIf="phone.invalid && phone.touched"
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
              class="border rounded-md w-96 p-2 text-sm"
              placeholder="e.g. example@example.com"
              [(ngModel)]="formData.email"
              name="email"
              #email="ngModel"
              required
            />
            <div
              *ngIf="email.invalid && email.touched"
              class="text-red-600 text-xs"
            >
              Please enter a valid email.
            </div>
          </div>
        </div>

        <!-- Buttons -->
        <div class="flex flex-row justify-end gap-3">
          <button
            type="button"
            class="text-main border-main font-semibold border-2 p-2 w-32 rounded-md mt-4"
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
  @Input() formData!: any;
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
          window.alert('Error updating worker');
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
