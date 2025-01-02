import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-lab-technician-info',
  imports: [CommonModule],
  template:`
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
            <div class="text-gray-500 text-sm flex flex-row items-center mt-2">
              <img src="consulId.svg" alt="Consult ID" class="w-10 h-10 mr-2" />
              <span>{{ consultId }}</span>
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

      <!-- Requested Test and Doctor Info -->
      <div class="flex flex-row items-center mt-4 justify-between w-full">
        <!-- Requested Test -->
        <h3 class="font-semibold text-lg mr-10">Requested Test: {{ requestedTest }}</h3>

        <!-- Doctor Info -->
        <div class="flex items-center gap-4 text-gray-700 ml-10">
          <div class="flex items-center gap-2">
            <img src="worker-doc.svg" alt="Doctor" class="w-4 h-4" />
            <span>Dr. {{ assignedDoctor }}</span>
          </div>
          <div class="text-sm">{{ doctorId }}</div>
          <div>
            <img
              src="worker-docId.svg"
              alt="ID"
              class="w-5 h-5 text-blue-500 cursor-pointer"
            />
          </div>
        </div>
      </div>

      <div class="text-black text-sm mt-2 font-medium">
        <ul class="list-disc ml-5">
          <li *ngFor="let task of tasks">{{ task }}</li>
        </ul>
      </div>
    </div>
  `,
  styles: ``
})
export class LabTechnicianInfoComponent {

   name = 'Lewis Hamilton';
   avatarUrl = 'radiologist-avatar.svg';
   consultId = '123456';
   birthday = '24/06/2004';
   socialNumber = '0001823838';
   phoneNumber = '0558235011';
   email = 'a.denai@esi.dz';
   emergencyContact = 'Mehdi'; 
   assignedDoctor = 'Mostefai';
   requestedTest = 'Covid-19 PCR Test';
   doctorId = '123456';
   tasks = [
     'Ensure the sample is collected via nasopharyngeal swab and properly labeled with the patient’s details.',
     'Prioritize this test as the patient is symptomatic and requires urgent results for isolation measures',
     'Verify the accuracy of the test run and report a Ct (Cycle threshold) value if available for better clinical interpretation.'
   ];

}
