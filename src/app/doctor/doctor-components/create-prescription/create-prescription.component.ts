import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-prescription',
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <div class="container max-w-4xl mx-auto p-6 bg-white border-2 border-slate-100 rounded-xl">
      <h2 class="text-2xl font-bold text-main mb-6">Create Prescription</h2>
      <form [formGroup]="prescriptionForm" (ngSubmit)="onSubmit()">
        <div formArrayName="medications">
          <div
            *ngFor="let medication of medications.controls; let i = index"
            [formGroupName]="i"
            class="grid grid-cols-6 gap-4 items-start mb-4 w-full"
          >
            <div class="col-span-6 sm:col-span-1">
              <input
                type="text"
                formControlName="name"
                class="border p-2 rounded-lg w-full"
                placeholder="Med Name"
              />
              <div
                *ngIf="medication.get('name')?.invalid && medication.get('name')?.touched"
                class="text-red-500 text-xs mt-1"
              >
                Medication name is required.
              </div>
            </div>
            <input
              type="text"
              formControlName="dosage"
              class="border p-2 rounded-lg"
              placeholder="Dosage"
            />
            <input
              type="text"
              formControlName="frequency"
              class="border p-2 rounded-lg"
              placeholder="Frequency"
            />
            <input
              type="text"
              formControlName="duration"
              class="border p-2 rounded-lg"
              placeholder="Duration"
            />
            <input
              type="text"
              formControlName="instructions"
              class="border p-2 rounded-lg"
              placeholder="Instructions"
            />
            <button
              type="button"
              (click)="removeMedication(i)"
              [hidden]="i === 0"
              class="text-red-500 font-bold text-lg mt-4"
            >
              <img src="cancel-medication-icon.svg" alt="Delete">
            </button>
          </div>
        </div>
        <button
          type="button"
          (click)="addMedication()"
          class="bg-main text-white p-2 rounded-lg mb-4 hover:bg-main-dark"
        >
          <img src="add-icon-white.svg" class="w-4 h-4" alt="Add Medication">
        </button>
        <textarea
          formControlName="additionalNotes"
          class="w-full border p-2 rounded-lg min-h-32"
          placeholder="Additional Notes"
        ></textarea>
        <div class="flex justify-end gap-4 mt-6">
          <button
            type="button"
            class="border-2 border-main w-40 px-4 py-2 rounded-lg text-main"
            (click)="previewClicked()"
          >
            Preview
          </button>
          <button
            type="submit"
            class="bg-main w-40 text-white px-4 py-2 rounded-lg hover:bg-main-dark"
          >
            Create
          </button>
        </div>
      </form>
    </div>
  `,
  styles: [
    `
button {
  font-weight: 600;
}
input {
  border: 2px solid #DBDBDB;
}
    `,
  ],
})
export class CreatePrescriptionComponent {
  prescriptionForm: FormGroup;
  @Output() preview = new EventEmitter<void>();

  previewClicked(){
    this.preview.emit();
  }

  constructor(private fb: FormBuilder) {
    this.prescriptionForm = this.fb.group({
      medications: this.fb.array([this.createMedicationGroup()]),
      additionalNotes: [''],
    });
  }

  createMedicationGroup(): FormGroup {
    return this.fb.group({
      name: ['', Validators.required],
      dosage: ['', Validators.required],
      frequency: ['', Validators.required],
      duration: ['', Validators.required],
      instructions: ['', Validators.required],
    });
  }

  get medications(): FormArray {
    return this.prescriptionForm.get('medications') as FormArray;
  }

  addMedication(): void {
    this.medications.push(this.createMedicationGroup());
  }

  removeMedication(index: number): void {
    if (index !== 0) {
      this.medications.removeAt(index);
    }
  }

  onSubmit(): void {
    if (this.prescriptionForm.invalid) {
      this.prescriptionForm.markAllAsTouched();
      console.log('Form is invalid');
      return;
    }

    console.log('Prescription Submitted:', this.prescriptionForm.value);
  }
}
