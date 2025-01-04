import { Component, OnInit } from '@angular/core';
import { Consultation, consultations } from '../../../mock-data/consultations';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-medical-record',
  imports: [CommonModule],
  template: `
    <div
      class="overflow-x-auto bg-white m-5 rounded-xl border-[1.5px] border-slate-100 h-[400px] p-2 flex flex-col gap-3"
    >
      <div class=" flex flex-row m-3 gap-2 align-middle items-center">
        <span
          class="bg-[#DBE1FF] rounded-full font-regular text-xs text-[#403DFE] px-2 py-1"
          >{{ consultations.length + ' ' }} consul
        </span>
        <h3 class="text-2xl font-semibold text-main">Medical Record</h3>
      </div>
      <div
        class="flex flex-col md:mx-6 mt-5"
        *ngFor="let consultation of consultations; let i = index"
      >
      <div class="flex flex-row">
        <div
          (click)="onConsultation(consultation)"
          class="flex flex-1 flex-row group cursor-pointer md:max-h-12  items-start"
        >
          <!-- Timeline Connector -->
          <div
            class="md:flex hidden -mt-6 flex-col items-center justify-between gap-[2px] overflow-visible"
          >
            <div class="bg-[#667085] rounded-full h-9 w-[3px]"></div>
            <div
              class=" border-[3px] rounded-full h-5 group group-hover:border-main border-[#667085] w-5"
            ></div>
            <div
              [ngClass]="{
                'h-10': !dropdownStates[i],
                'h-40': dropdownStates[i]
              }"
              class="bg-[#667085] w-[3px] rounded-full"
            ></div>
          </div>

          <!-- Date Field -->
          <div
            class=" w-full self-center text-base text-center font-bold text-[#667085]"
          >
            {{ consultation.date }}
          </div>

          <!-- Doctor Field -->
          <div class="flex flex-col w-full">
            <span class="font-bold text-[#667085] text-xs">Doctor</span>
            <span class=" text-sm font-medium">{{ consultation.doctor }}</span>
          </div>

          <!-- Created On Field -->
          <div class="flex flex-col w-full">
            <span class="font-bold text-[#667085] text-xs">Created On</span>
            <span class=" text-sm font-medium">{{
              consultation.createdOn
            }}</span>
          </div>

          <!-- Lasted For Field -->
          <div class="hidden md:flex flex-col w-full">
            <span class="font-bold text-[#667085] text-xs">Lasted For</span>
            <span class=" text-sm font-medium">{{
              consultation.lastedFor
            }}</span>
          </div>

          <!-- Status Field -->
          <div class="flex flex-col w-full">
            <span class="font-bold text-[#667085] text-xs">SGPH</span>

            <ng-container [ngSwitch]="consultation.status">
              <span
                *ngSwitchCase="'pending'"
                class="flex flex-row items-center gap-1 text-xs font-semibold text-yellow-800"
                ><img src="pending-icon.svg" class="w-4 object-cover" alt="" />
                Pending</span
              >
              <span
                *ngSwitchCase="'completed'"
                class="flex flex-row items-center gap-1 text-xs font-semibold text-main"
                ><img
                  src="completed-icon.svg"
                  class="w-4 object-cover"
                  alt=""
                />
                Completed</span
              >
              <span
                *ngSwitchCase="'failed'"
                class="flex flex-row items-center gap-1 text-xs font-semibold text-red-900"
                ><img src="failed-icon.svg" class="w-3 object-cover" alt="" />
                Failed</span
              >
            </ng-container>
          </div>

          <!-- Reason Field -->
          <div class="hidden lg:flex flex-col md:min-w-80">
            <span class="font-bold text-[#667085] text-xs">Reason</span>
            <span class=" text-sm font-medium">{{ consultation.reason }}</span>
          </div>

        
        </div>
          <!-- Actions: Details Button -->
          <button
            class="flex z-40 flex-row justify-center min-w-10 self-center hover:bg-slate-100 rounded-lg p-2"
            (click)="toggleDropdown(i)"
          >
            <img
              [src]="
                dropdownStates[i]
                  ? 'drop-down-up-icon.svg'
                  : 'drop-down-icon.svg'
              "
              alt=""
            />
          </button>
      </div>
        <div
          class="mt-2 border gap-2 -mb-2 z-20 w-[96%] self-end rounded p-2 h-28 font-semibold text-sm flex flex-col bg-[#FBFBFB] overflow-y-scroll"
          *ngIf="dropdownStates[i]"
        >
          <div class="flex flex-row gap-1 text-xs text-[#667085] font-semibold">
            <img src="briefing-icon.svg" class="w-4 " alt="" />Resume
          </div>
          {{ consultation.briefing }}
        </div>
      </div>
    </div>
  `,
  styles: ``,
})
export class MedicalRecordComponent implements OnInit {
  consultations: Consultation[] = consultations;
  dropdownStates: boolean[] = []; // Array to track dropdown state

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.dropdownStates = this.consultations.map(() => false);
  }

  toggleDropdown(index: number): void {
    this.dropdownStates[index] = !this.dropdownStates[index]; // Toggle the dropdown state for the clicked index
  }

  onConsultation(consultation: any): void {
    this.router.navigate(['/doctor/consultation-details', consultation.id]);
  }
}
