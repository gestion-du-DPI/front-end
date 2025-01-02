import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Prescription } from '../../../models/prescription';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-prescription-popup',
  imports: [CommonModule],
  template: `
  <div class="popup inset-0 bg-gray-700 bg-opacity-50 flex items-center justify-center z-50">
  <div class="bg-white pt-6 rounded-lg max-w-lg w-full shadow-xl relative max-h-[90vh]">
    <button
      (click)="closePopup()"
      class="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
    >
      ✕
    </button>
    <h2 class="text-2xl font-bold text-main ml-7 mb-3">Prescriptions</h2>

    <!-- Scrollable Content -->
    <div class="overflow-y-auto max-h-[70vh] px-6">
      <h3 class="text-lg font-semibold text-center mb-6">{{ prescription.hospital }}</h3>
      <div class="grid grid-cols-2 gap-2 text-sm mb-4">
        <p><span class="font-bold">Doctor:</span> {{ prescription.doctor }}</p>
        <p><span class="font-bold">Patient:</span> {{ prescription.patient.name }}</p>
        <p><span class="font-bold">Specialty:</span> {{ prescription.specialty }}</p>
        <p><span class="font-bold">Age:</span> {{ prescription.patient.age }}</p>
        <p><span class="font-bold">Date:</span> {{ prescription.date }}</p>
        <p><span class="font-bold">Gender:</span> {{ prescription.patient.gender }}</p>
      </div>
      <h4 class="font-bold text-base mb-2">Medications</h4>
      <ul class="list-disc text-sm list-inside ml-2 mb-2">
        <li *ngFor="let med of prescription.medications">
          {{ med.name }} {{ med.dosage }} {{ med.frequency }}.
        </li>
      </ul>
      <h4 class="font-bold text-base mb-2">Additional Notes</h4>
      <ul class="list-disc text-sm list-inside ml-2 mb-2">
        <li *ngFor="let note of prescription.additionalNotes">{{ note }}</li>
      </ul>
      <h4 class="font-bold text-sm mb-2">Signature</h4>
      <div class="border-t mt-4 h-5"></div>
    </div>

    <div class="flex justify-between items-center align-middle h-10 mx-3 mb-2">
      <button class="flex flex-row items-center gap-2 text-[#667085] font-semibold hover:bg-slate-100 rounded-lg py-1 px-2" (click)="previous()"><img src="previous-icon.svg" class="w-3 h-3 object-scale-down" alt=""> Previous</button>
      <button class="flex flex-row items-center gap-2 text-[#667085] font-semibold hover:bg-slate-100 rounded-lg py-1 px-2" (click)="next()">Next<img src="next-icon.svg" class="w-3 h-3 object-scale-down" alt=""> </button>
    </div>
  </div>
</div>

  `,
})
export class PrescriptionPopupComponent {
  @Output() close= new EventEmitter<void>();
  @Input() prescription!: Prescription;
  @Input() prescriptions!: Prescription[];
  private currentIndex = 0;

  previous(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.prescription = this.prescriptions[this.currentIndex];
    }
  }

  next(): void {
    if (this.currentIndex < this.prescriptions.length - 1) {
      this.currentIndex++;
      this.prescription = this.prescriptions[this.currentIndex];
    }
  }

  closePopup(): void {
    this.close.emit()
  }
}
