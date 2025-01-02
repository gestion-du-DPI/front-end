import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule, NgForm, Validators } from '@angular/forms';
import { Patient } from '../../../../models/patient';
import { PatientService } from '../../../../services/patient/patient.service';
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
          alt=""
          (click)="onCancel()"
        />
      </div>
      <form
        #patientForm="ngForm"
        class="flex flex-col gap-2 overflow-y-scroll px-7"
        (ngSubmit)="submitForm()"
      >
        <h4 class="text-lg font-semibold text-[#18181B] mt-2">Patient Info</h4>
        <div class="flex flex-row justify-center flex-wrap gap-4">
          <!-- Full Name -->
          <div class="flex flex-col gap-1">
            <label class="font-medium text-sm">
              Full Name <span class="text-red-600">*</span>
            </label>
            <input
              type="text"
              class="border-[1px] rounded-md w-96 p-2 text-sm"
              placeholder="e.g. Mostefai Mounir"
              [(ngModel)]="formData.name"
              name="name"
              required
              #name="ngModel"
              [ngClass]="{ 'border-red-600': name?.invalid && name?.touched }"
              pattern="[a-zA-Z ]+"
            />
            <div
              *ngIf="name?.invalid && name?.touched"
              class="text-red-600 text-xs"
            >
              Name is required and should contain only letters.
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

          <!-- Birthday -->
          <div class="flex flex-col gap-1">
            <label class="font-medium text-sm">
              Birthday <span class="text-red-600">*</span>
            </label>
            <input
              type="date"
              class="border-[1px] rounded-md w-96 p-2 text-sm"
              [(ngModel)]="formData.dateOfBirth"
              name="birthday"
              required
              #birthday="ngModel"
              [ngClass]="{
                'border-red-600': birthday?.invalid && birthday?.touched
              }"
            />
            <div
              *ngIf="birthday?.invalid && birthday?.touched"
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

        <h4 class="text-lg font-semibold text-[#18181B] mt-2">
          Emergency Contact
        </h4>
        <div class="flex flex-row justify-center flex-wrap gap-4">
          <!-- Emergency Contact Name -->
          <div class="flex flex-col gap-1">
            <label class="font-medium text-sm">
              Emergency Contact Name <span class="text-red-600">*</span>
            </label>
            <input
              type="text"
              class="border-[1px] rounded-md w-96 p-2 text-sm"
              placeholder="e.g. John Doe"
              [(ngModel)]="formData.emergencyContact"
              name="emergencyContact"
              required
              pattern="[a-zA-Z ]+"
              #emergencyContact="ngModel"
              [ngClass]="{
                'border-red-600':
                  emergencyContact?.invalid && emergencyContact?.touched
              }"
            />
            <div
              *ngIf="emergencyContact?.invalid && emergencyContact?.touched"
              class="text-red-600 text-xs"
            >
              E^ contact name is required and should contain only letters.
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
              placeholder="e.g. +1234567890"
              [(ngModel)]="formData.emergencyPhone"
              name="emergencyPhone"
              required
              pattern="^[0-9]{10}$"
              #emergencyPhone="ngModel"
              [ngClass]="{
                'border-red-600':
                  emergencyPhone?.invalid && emergencyPhone?.touched
              }"
            />
            <div
              *ngIf="emergencyPhone?.invalid && emergencyPhone?.touched"
              class="text-red-600 text-xs"
            >
              Emergency phone must be exactly 10 digits.
            </div>
          </div>
        </div>

        <h4 class="text-lg font-semibold text-[#18181B] mt-2">Consultations</h4>
        <div class="flex flex-row justify-center flex-wrap gap-4">
          <div class="flex flex-col gap-1">
            <label class="font-medium text-sm">Number of Consultations</label>
            <input
              type="number"
              required
              class="border-[1px] rounded-md w-96 p-2 text-sm"
              placeholder="e.g. 3"
              #consultations="ngModel"
              [(ngModel)]="formData.consultations"
              name="consultations"
              id="selenium_consultations_input"
              [ngClass]="{
                'border-red-600':
                  consultations?.invalid && consultations?.touched
              }"
            />
            <div
              *ngIf="consultations?.invalid && consultations?.touched"
              class="text-red-600 text-xs"
            >
              Consultations number is required.
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
            (click)="submitForm()"
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
    id: '',
    name: '',
    gender: '',
    dateOfBirth: '',
    placeOfBirth: '',
    address: '',
    socialNumber: '',
    phone: '',
    email: '',
    emergencyContact: '',
    emergencyPhone: '',
    consultations: 0,
    profilePicture: '',
  };

  // Injecting PatientsService into the constructor
  constructor(private patientsService: PatientService) {}

  submitForm() {
    console.log('Form Data:', this.formData);

    // Calling the PatientsService to submit the form data
    this.patientsService.addPatient(this.formData).subscribe({
      next: (response) => {
        console.log('Patient added successfully:', response);
        // You can handle any success action here, like closing the form
        this.onCancel();
      },
      error: (error) => {
        console.error('Error adding patient:', error);
        // Handle error, possibly showing an error message to the user
      },
    });
    this.confirm.emit();

    // @Output() save = new EventEmitter<void>();
    //   formData: Patient = {} as Patient;

    //   constructor(private patientService: PatientService) {}

    //   submitForm(form: NgForm) {
    //     if (form.valid) {
    //       console.log('Form Data:', this.formData);

    //       // Calling the PatientsService to submit the form data
    //       this.patientService.addPatient(this.formData).subscribe({
    //         next: (response) => {
    //           console.log('Patient added successfully:', response);
    //           // You can handle any success action here, like closing the form
    //         },
    //         error: (error) => {
    //           console.error('Error adding patient:', error);
    //           // Handle error, possibly showing an error message to the user
    //         },
    //       });
    //       this.onSave();
    //     } else {
    //       // Mark all controls as touched to show error messages
    //       Object.values(form.controls).forEach((control) => {
    //         control.markAsTouched();
    //       });
    //     }
  }

  
  onCancel() {
    this.cancel.emit();
  }
}
