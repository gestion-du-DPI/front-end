import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-patient-infos',
  imports: [CommonModule, FormsModule],
  template: `
    <div class="bg-white rounded-lg shadow p-5 flex flex-col gap-4">
      <!-- Patient Info Section -->
      <div class="flex flex-row items-center justify-between w-full gap-5">
        <!-- Profile Picture and Basic Info -->
        <div class="flex flex-row items-center gap-4">
          <img
            [src]="avatarUrl"
            alt="Profile Picture"
            class="w-16 h-16 rounded-full"
          />
          <div class="flex flex-col">
            <div class="flex flex-row items-center">
              <img src="worker-name.svg" alt="name" class="w-6 h-6 mr-2" />
              <h2 class="font-semibold text-lg">{{ name }}</h2>
            </div>
          </div>
        </div>

        <!-- Additional Patient Details -->
        <div class="flex flex-col items-start gap-4">
          <!-- First Row -->
          <div class="flex flex-row items-center gap-4">
            <div class="text-sm text-gray-700 flex items-center gap-2">
              <img src="birthday.svg" alt="Calendar" class="w-4 h-4" />
              <span>{{ birthday }}</span>
            </div>
            <div class="text-sm text-gray-700 flex items-center gap-2">
              <img src="socialNumber.svg" alt="ID Card" class="w-4 h-4" />
              <span>{{ socialNumber }}</span>
            </div>
            <div class="text-sm text-gray-700 flex items-center gap-2">
              <img src="worker-phoneNumber.svg" alt="Phone" class="w-4 h-4" />
              <span>{{ phoneNumber }}</span>
            </div>
          </div>

          <!-- Second Row -->
          <div class="flex flex-row items-center gap-4">
            <div class="text-sm text-gray-700 flex items-center gap-2">
              <img src="phone.svg" alt="Phone" class="w-4 h-4" />
              <span>{{ phoneNumber }}</span>
            </div>
            <div class="text-sm text-gray-700 flex items-center gap-2">
              <img src="email.svg" alt="Email" class="w-4 h-4" />
              <span>{{ email }}</span>
            </div>
            <div class="text-sm text-gray-700 flex items-center gap-2">
              <img src="worker.svg" alt="User" class="w-4 h-4" />
              <span>{{ emergencyContact }}</span>
            </div>
          </div>
        </div>
      </div>

      <div class="flex flex-row items-center mt-4 w-full">
        <h3 class="font-semibold text-lg mr-10">Past Medical Condition</h3>
        <img src="edit-cond.svg" alt="Edit" (click)="toggleEdit()" />
      </div>

      <div class="flex gap-2 flex-wrap items-center">
        <!-- Tags will stay visible, the X will only appear when editing -->
        <span
          *ngFor="let tag of tags"
          class="bg-[#DBE4FF] text-black px-3 py-1 rounded flex items-center"
        >
          {{ tag }}
          <!-- X mark only shows if editing -->
          <button
            *ngIf="isEditing"
            class="ml-2 text-black"
            (click)="deleteTag(tag)"
          >
            X
          </button>
        </span>
      </div>

      <div *ngIf="isEditing" class=" flex gap-2 items-center">
        <!-- Input field and button next to each other -->
        <input
          [(ngModel)]="newTag"
          class="border rounded-md px-2 py-1"
          placeholder="Add a new condition"
        />
        <button
          (click)="addTag()"
          class="bg-main text-white px-4 py-1 rounded-md"
        >
          Add
        </button>
      </div>

      <div class="text-black text-sm  font-medium">
        <ul class="list-disc ml-5">
          <li *ngFor="let condition of conditions" class="font-medium text-base	">{{ condition }}</li>
        </ul>
      </div>
    </div>
  `,
  styles: ``,
})
export class PatientInfosComponent {
  tags: string[] = ['Hypertension', 'Obesity', 'Anemia' , 'Depression']; 
  newTag: string = '';
  isEditing: boolean = false; 

  toggleEdit(): void {
    this.isEditing = !this.isEditing;
  }

  addTag(): void {
    if (this.newTag.trim()) {
      this.tags.push(this.newTag.trim()); 
      this.newTag = ''; 
    }
  }

  deleteTag(tag: string): void {
    this.tags = this.tags.filter((t) => t !== tag); 
  }
  name = 'Lewis Hamilton';
  avatarUrl = 'patient-info-avatar.svg';
  consultId = '123456';
  birthday = '24/06/2004';
  socialNumber = '0001823838';
  phoneNumber = '0558235011';
  email = 'a.denai@esi.dz';
  emergencyContact = 'Mehdi';
  assignedDoctor = 'Mostefai';
  doctorId = '123456';
  conditions = [
    'Patient requires a follow-up in 4 weeks to assess blood pressure control and review lab results for renal function.',
    'Initiated Metformin 500 mg daily for newly diagnosed Type 2 Diabetes Mellitus. Monitor for gastrointestinal side effects and reassess HbA1c in 3 months.',
  ];
}
