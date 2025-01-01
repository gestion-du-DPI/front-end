import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Patient } from '../../../../models/patient';
import { PatientService } from '../../../../services/admin/patient/patient.service';
import { CommonModule } from '@angular/common';
import { EditPatient } from '../../../../models/edit-patient';

@Component({
  selector: 'app-edit-patient-form',
  imports: [FormsModule, CommonModule],
  template: `
    <div
      class="flex flex-col bg-white py-5 rounded-xl lg:w-[860px] m-10 h-[90vh]"
    >
      <div class="flex flex-row justify-between px-7 pb-3">
        <h1 class="font-extrabold text-2xl text-main">Edit Patient</h1>
        <img
          src="cancel-icon.svg"
          class="w-7 cursor-pointer"
          alt=""
          (click)="onCancel()"
        />
      </div>
      <form
        #patientForm="ngForm"
        class="flex flex-col gap-2 overflow-y-scroll px-7"
        (ngSubmit)="submitForm(patientForm)"
      >
        <h4 class="text-lg font-semibold text-[#18181B] mt-2">Patient Info</h4>
        <div class="flex flex-row justify-center flex-wrap gap-4">
          <!-- First Name -->
          <div class="flex flex-col gap-1">
            <label class="font-medium text-sm">
              First Name <span class="text-red-600">*</span>
            </label>
            <input
              type="text"
              class="border-[1px] rounded-md w-96 p-2 text-sm"
              placeholder="e.g. John"
              [(ngModel)]="formData.first_name"
              name="first_name"
              required
              #firstName="ngModel"
              [ngClass]="{
                'border-red-600': firstName?.invalid && firstName?.touched
              }"
            />
            <div
              *ngIf="firstName?.invalid && firstName?.touched"
              class="text-red-600 text-xs"
            >
              First name is required.
            </div>
          </div>

          <!-- Last Name -->
          <div class="flex flex-col gap-1">
            <label class="font-medium text-sm">
              Last Name <span class="text-red-600">*</span>
            </label>
            <input
              type="text"
              class="border-[1px] rounded-md w-96 p-2 text-sm"
              placeholder="e.g. Doe"
              [(ngModel)]="formData.last_name"
              name="last_name"
              required
              #lastName="ngModel"
              [ngClass]="{
                'border-red-600': lastName?.invalid && lastName?.touched
              }"
            />
            <div
              *ngIf="lastName?.invalid && lastName?.touched"
              class="text-red-600 text-xs"
            >
              Last name is required.
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
              placeholder="e.g. 123 Main Street"
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

          <!-- NSS -->
          <div class="flex flex-col gap-1">
            <label class="font-medium text-sm">
              Social Number (NSS) <span class="text-red-600">*</span>
            </label>
            <input
              type="text"
              class="border-[1px] rounded-md w-96 p-2 text-sm"
              placeholder="e.g. 123456789"
              [(ngModel)]="formData.nss"
              name="nss"
              required
              pattern="^[0-9]{9}$"
              #nss="ngModel"
              [ngClass]="{ 'border-red-600': nss?.invalid && nss?.touched }"
            />
            <div
              *ngIf="nss?.invalid && nss?.touched"
              class="text-red-600 text-xs"
            >
              NSS must be 9 digits.
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
              [ngClass]="{
                'border-red-600': email?.invalid && email?.touched
              }"
            />
            <div
              *ngIf="email?.invalid && email?.touched"
              class="text-red-600 text-xs"
            >
              A valid email is required.
            </div>
          </div>

          <!-- Phone Number -->
          <div class="flex flex-col gap-1">
            <label class="font-medium text-sm">
              Phone Number <span class="text-red-600">*</span>
            </label>
            <input
              type="tel"
              class="border-[1px] rounded-md w-96 p-2 text-sm"
              placeholder="e.g. +123456789"
              [(ngModel)]="formData.phone_number"
              name="phone_number"
              required
              #phoneNumber="ngModel"
              [ngClass]="{
                'border-red-600': phoneNumber?.invalid && phoneNumber?.touched
              }"
            />
            <div
              *ngIf="phoneNumber?.invalid && phoneNumber?.touched"
              class="text-red-600 text-xs"
            >
              Phone number is required.
            </div>
          </div>

          <!-- Emergency Contact Name -->
          <div class="flex flex-col gap-1">
            <label class="font-medium text-sm">
              Emergency Contact Name <span class="text-red-600">*</span>
            </label>
            <input
              type="text"
              class="border-[1px] rounded-md w-96 p-2 text-sm"
              placeholder="e.g. Jane Doe"
              [(ngModel)]="formData.emergency_contact_name"
              name="emergency_contact_name"
              required
              #emergencyContactName="ngModel"
              [ngClass]="{
                'border-red-600':
                  emergencyContactName?.invalid && emergencyContactName?.touched
              }"
            />
            <div
              *ngIf="
                emergencyContactName?.invalid && emergencyContactName?.touched
              "
              class="text-red-600 text-xs"
            >
              Emergency contact name is required.
            </div>
          </div>

          <!-- Emergency Contact Phone -->
          <div class="flex flex-col gap-1">
            <label class="font-medium text-sm">
              Emergency Contact Phone <span class="text-red-600">*</span>
            </label>
            <input
              type="tel"
              class="border-[1px] rounded-md w-96 p-2 text-sm"
              placeholder="e.g. +123456789"
              [(ngModel)]="formData.emergency_contact_phone"
              name="emergency_contact_phone"
              required
              #emergencyContactPhone="ngModel"
              [ngClass]="{
                'border-red-600':
                  emergencyContactPhone?.invalid &&
                  emergencyContactPhone?.touched
              }"
            />
            <div
              *ngIf="
                emergencyContactPhone?.invalid && emergencyContactPhone?.touched
              "
              class="text-red-600 text-xs"
            >
              Emergency contact phone is required.
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
            id="selenium_save_patient_button"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  `,
})
export class EditPatientFormComponent {
  @Input() formData!: any;
  @Output() cancel = new EventEmitter<void>();
  @Output() save = new EventEmitter<void>();

  constructor(private patientService: PatientService) {}

  submitForm(form: NgForm) {
    console.log('Rani hna', this.formData);
    const patientToSend: EditPatient = {
      user_id: this.formData.user_id,
      name: this.formData.first_name + ' ' + this.formData.last_name,
      nss: this.formData.nss,
      address: this.formData.address,
      phone_number: this.formData.phone_number,
      email: this.formData.email,
      emergency_contact_name: this.formData.emergency_contact_name,
      emergency_contact_phone: this.formData.emergency_contact_phone,
      created_at: this.formData.created_at || new Date().toISOString(),
      consultation_count: this.formData.consultation_count || 0,
      profile_image: this.formData.profile_image || '',
    };
    if (form.valid) {
      this.patientService.editPatient(patientToSend).subscribe({
        next: (response) => {
          console.log('Patient updated successfully:', response);
          this.onSave();
        },
        error: (error) => {
          console.error('Error updating patient:', error);
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
