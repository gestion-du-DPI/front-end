import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Patient } from '../../../../models/admin-patient';
import { PatientService } from '../../../../services/admin/patient/patient.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-new-patient-form',
  imports: [FormsModule, CommonModule],
  template: `
    <div
      class="flex flex-col bg-white py-5 rounded-xl lg:w-[860px] m-10 h-[90vh]"
    >
      <div class="flex flex-row justify-between px-7 pb-3">
        <h1 class="font-extrabold text-2xl text-main">New Patient</h1>
        <img
          src="cancel-icon.svg"
          class="w-7 cursor-pointer"
          alt="Cancel"
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

          <!-- Gender -->
          <div class="flex flex-col gap-1">
            <label class="font-medium text-sm">
              Gender <span class="text-red-600">*</span>
            </label>
            <select
              class="border-[1px] rounded-md w-96 p-2 text-sm"
              [(ngModel)]="formData.gender"
              name="gender"
              required
              #gender="ngModel"
              [ngClass]="{
                'border-red-600': gender?.invalid && gender?.touched
              }"
            >
              <option value="" disabled selected>Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            <div
              *ngIf="gender?.invalid && gender?.touched"
              class="text-red-600 text-xs"
            >
              Gender is required.
            </div>
          </div>

          <!-- Date of Birth -->
          <div class="flex flex-col gap-1">
            <label class="font-medium text-sm">
              Date of Birth <span class="text-red-600">*</span>
            </label>
            <input
              type="date"
              class="border-[1px] rounded-md w-96 p-2 text-sm"
              [(ngModel)]="formData.date_of_birth"
              name="date_of_birth"
              required
              #dateOfBirth="ngModel"
              [ngClass]="{
                'border-red-600': dateOfBirth?.invalid && dateOfBirth?.touched
              }"
            />
            <div
              *ngIf="dateOfBirth?.invalid && dateOfBirth?.touched"
              class="text-red-600 text-xs"
            >
              Date of birth is required.
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
              [(ngModel)]="formData.place_of_birth"
              name="place_of_birth"
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

          <!-- Medical Condition -->
          <div class="flex flex-col gap-1">
            <label class="font-medium text-sm">
              Medical Condition <span class="text-red-600">*</span>
            </label>
            <textarea
              class="border-[1px] rounded-md w-96 p-2 text-sm"
              placeholder="e.g. Diabetes, Hypertension"
              [(ngModel)]="formData.medical_condition"
              name="medical_condition"
              required
              #medicalCondition="ngModel"
              [ngClass]="{
                'border-red-600':
                  medicalCondition?.invalid && medicalCondition?.touched
              }"
            ></textarea>
            <div
              *ngIf="medicalCondition?.invalid && medicalCondition?.touched"
              class="text-red-600 text-xs"
            >
              Medical condition is required.
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
export class NewPatientFormComponent {
  @Output() cancel = new EventEmitter<void>();
  @Output() confirm = new EventEmitter<void>();

  formData: Patient = {
    id:'',
    email: '',
    first_name: '',
    last_name: '',
    phone_number: '',
    address: '',
    gender: '',
    nss: '',
    date_of_birth: '',
    place_of_birth: '',
    emergency_contact_name: '',
    emergency_contact_phone: '',
    medical_condition: '',
    profile_picture: '',
  };

  constructor(private patientService: PatientService) {}

  submitForm(form: NgForm) {
    if (form.valid) {
      this.patientService.addPatient(this.formData).subscribe({
        next: (response) => {
          console.log('Patient added successfully:', response);
          this.confirm.emit();
        },
        error: (error) => {
          console.error('Error adding patient:', error);
          window.alert(error.error.message);
        },
      });
    } else {
      Object.values(form.controls).forEach((control) => {
        control.markAsTouched();
      });
    }
  }

  
  onCancel() {
    this.cancel.emit();
  }
}
