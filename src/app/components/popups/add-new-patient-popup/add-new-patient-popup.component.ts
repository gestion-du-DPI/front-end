import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-new-patient-popup',
  imports: [FormsModule],
  template: `
   <div class="bg-white rounded-xl p-7 w-[730px] h-[700px] flex flex-col gap-6 overflow-y-auto">
  <!-- Header -->
  <div class="flex justify-between items-center">
    <h2 class="text-2xl font-bold text-main">New Patient DPI</h2>
    <img
      class="cursor-pointer w-6"
      src="cancel-icon.svg"
      alt="Close"
      (click)="closePopup.emit()"
    />
  </div>

  <!-- Form -->
  <form (ngSubmit)="onSubmit()" class="flex flex-col gap-6">
    <!-- Patient Info -->
    <div>
      <h3 class="text-lg font-semibold text-off-black mb-2">Patient Info</h3>
      <div class="grid grid-cols-2 gap-4">
        <div class="flex flex-col">
          <label class="text-sm font-medium text-gray-600">Full Name <span style="color: #FF0909;">*</span></label>
          <input
            type="text"
            [(ngModel)]="formData.name"
            name="name"
            required
            placeholder="eg. MOSTEFAI mounir"
            class="border border-gray-300 rounded-lg p-2 text-sm"
          />
        </div>
        <div class="flex flex-col">
          <label class="text-sm font-medium text-gray-600">Gender <span style="color: #FF0909;">*</span></label>
          <select
            [(ngModel)]="formData.gender"
            name="gender"
            required
            class="border border-gray-300 rounded-lg p-2 text-sm"
          >
            <option value="" disabled selected>Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <div class="flex flex-col">
          <label class="text-sm font-medium text-gray-600">Date of Birth <span style="color: #FF0909;">*</span></label>
          <input
            type="date"
            [(ngModel)]="formData.dob"
            name="dob"
            required
            class="border border-gray-300 rounded-lg p-2 text-sm"
          />
        </div>
        <div class="flex flex-col">
          <label class="text-sm font-medium text-gray-600">Place of Birth <span style="color: #FF0909;">*</span></label>
          <input
            type="text"
            [(ngModel)]="formData.placeOfBirth"
            name="placeOfBirth"
            required
            placeholder="eg. Oued Samar"
            class="border border-gray-300 rounded-lg p-2 text-sm"
          />
        </div>
        <div class="flex flex-col">
          <label class="text-sm font-medium text-gray-600">Address <span style="color: #FF0909;">*</span></label>
          <input
            type="text"
            [(ngModel)]="formData.address"
            name="address"
            required
            placeholder="eg. Oued Samar"
            class="border border-gray-300 rounded-lg p-2 text-sm"
          />
        </div>
        <div class="flex flex-col">
          <label class="text-sm font-medium text-gray-600">Social Number <span style="color: #FF0909;">*</span></label>
          <input
            type="text"
            [(ngModel)]="formData.socialNumber"
            name="socialNumber"
            required
            placeholder="eg. 0001823838"
            class="border border-gray-300 rounded-lg p-2 text-sm"
          />
        </div>
      </div>
    </div>

    <!-- Contact Info -->
    <div>
      <h3 class="text-lg font-semibold text-gray-700 mb-2">Contact</h3>
      <div class="grid grid-cols-2 gap-4">
        <div class="flex flex-col">
          <label class="text-sm font-medium text-gray-600">Phone Number <span style="color: #FF0909;">*</span></label>
          <input
            type="tel"
            [(ngModel)]="formData.phone"
            name="phone"
            required
            placeholder="eg. 0559 28 19 22"
            class="border border-gray-300 rounded-lg p-2 text-sm"
          />
        </div>
        <div class="flex flex-col">
          <label class="text-sm font-medium text-gray-600">Email <span style="color: #FF0909;">*</span></label>
          <input
            type="email"
            [(ngModel)]="formData.email"
            name="email"
            required
            placeholder="eg. mounir@esi.dz"
            class="border border-gray-300 rounded-lg p-2 text-sm"
          />
        </div>
      </div>
    </div>

    <!-- Emergency Contact -->
    <div>
      <h3 class="text-lg font-semibold text-gray-700 mb-2">Emergency Contact</h3>
      <div class="grid grid-cols-2 gap-4">
        <div class="flex flex-col">
          <label class="text-sm font-medium text-gray-600">Person To Contact <span style="color: #FF0909;">*</span></label>
          <input
            type="text"
            [(ngModel)]="formData.emergencyContactName"
            name="emergencyContactName"
            required
            placeholder="eg. meliouh mahdi"
            class="border border-gray-300 rounded-lg p-2 text-sm"
          />
        </div>
        <div class="flex flex-col">
          <label class="text-sm font-medium text-gray-600">Phone Number <span style="color: #FF0909;">*</span></label>
          <input
            type="tel"
            [(ngModel)]="formData.emergencyContactPhone"
            name="emergencyContactPhone"
            required
            placeholder="eg. 0552 11 22 21"
            class="border border-gray-300 rounded-lg p-2 text-sm"
          />
        </div>
      </div>
    </div>

    <!-- Medical Conditions -->
    <div>
      <h3 class="text-lg font-semibold text-gray-700 mb-2">Medical Conditions</h3>
      <textarea
        [(ngModel)]="formData.medicalConditions"
        name="medicalConditions"
        placeholder="eg. Hypertension (diagnosed in 2018)"
        class="border border-gray-300 rounded-lg p-2 text-sm w-full h-[135px]"
      ></textarea>
    </div>

    <!-- Buttons -->
    <div class="flex justify-end gap-4">
      <button
        type="button"
        class="p-2 border-[1px] border-main text-main rounded-lg font-semibold w-[132px] h-[40px]"
        (click)="closePopup.emit()"
      >
        Cancel
      </button>
      <button
        type="submit"
        class="p-2 bg-main text-white rounded-lg font-semibold w-[132px] h-[40px]"
      >
        Save
      </button>
    </div>
  </form>
</div>

  `,
  styles: [],
})
export class AddNewPatientPopupComponent {
  @Output() closePopup = new EventEmitter<void>();

  formData: any = {
    name: '',
    gender: '',
    dob: '',
    placeOfBirth: '',
    address: '',
    socialNumber: '',
    phone: '',
    email: '',
    emergencyContactName: '',
    emergencyContactPhone: '',
    medicalConditions: '',
  };

  onSubmit() {
    console.log('Form submitted', this.formData);
  }
}
