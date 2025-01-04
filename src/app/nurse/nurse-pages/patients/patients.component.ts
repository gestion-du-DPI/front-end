import { Component, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Patient } from '../../../models/patient';
import { PatientService } from '../../../services/admin/patient/patient.service';
import { PatientsTableComponent } from '../../nurse-components/patients-table/patients-table.component';
import { QrScannerComponent } from '../../nurse-components/qr-scanner/qr-scanner.component';
import { UserBadgeComponent } from '../../nurse-components/user-badge/user-badge.component';

@Component({
  selector: 'app-patients',
  imports: [
    PatientsTableComponent,
    CommonModule,
    FormsModule,
    UserBadgeComponent,
    QrScannerComponent,
  ],
  template: `
    <div class="flex flex-col gap-5 my-5 lg:mx-10">
      <div class="flex flex-col gap-4 mx-3">
        <div
          class="flex flex-row items-center justify-center flex-wrap md:flex-nowrap gap-3 md:gap-12"
        >
          <h1 class="font-semibold text-main text-4xl">Patients</h1>
          <span
            class="rounded-full bg-[#DBE4FF] font-medium text-xs text-[#3D6DFE] py-1 px-3"
            >{{ patientsNumber }} patients</span
          >
          <div class="md:ml-auto">
            <app-user-badge></app-user-badge>
          </div>
        </div>
        <div class="flex flex-row gap-3">
          <div
            class="flex flex-row overflow-hidden items-center bg-white rounded-lg border-[1.5px] p-2 w-96 gap-3"
          >
            <img src="search-icon.svg" alt="" />
            <input
              type="text"
              placeholder="Search Patient by NSS here ..."
              class="bg-transparent border-0 focus:outline-none flex-1"
              [(ngModel)]="searchQuery"
              (input)="onSearch()"
            />
          </div>
          <button
            class="bg-white border-[1.5px] w-10 flex justify-center items-center rounded-lg"
            (click)="onShowQRscan()"
          >
            <img src="qr-icon.svg" alt="" />
          </button>
        </div>
      </div>
      <app-patients-table [patients]="filteredPatients" />
      <span *ngIf="patientNotFound" class="text-center font-semibold text-xl">
        Ooops! it seems like the patient you're looking for isn't here...
      </span>
    </div>
    <div class="popup" *ngIf="showscanQRpopup">
      <app-qr-scanner
        (closePopup)="onHideQRscan()"
        (nssValidated)="onNSSValidated($event)"
      />
    </div>
  `,
  styles: `
  span{
    font-family: 'Plus Jakarta Sans', sans-serif;
  }
  `,
})
export class PatientsComponent implements OnInit {
  patientsNumber = 0; // Dynamically update based on the number of patients
  searchQuery = ''; // Tracks the input query

  showscanQRpopup = false;

  patients: Patient[] = [];
  filteredPatients: Patient[] = []; // Tracks the filtered patients

  constructor(private patientService: PatientService) {}

  patientNotFound(): boolean {
    return this.filteredPatients.length == 0;
  }

  ngOnInit(): void {
    this.loadPatients();
  }

  loadPatients(): void {
    this.patientService.getPatients().subscribe((data) => {
      this.patients = data;
      this.filteredPatients = data; // Update filteredPatients here
      this.patientsNumber = data.length; // Update the patients count
    });
  }

  onShowQRscan() {
    this.showscanQRpopup = true;
  }

  onHideQRscan(): void {
    this.showscanQRpopup = false;
  }

  onNSSValidated(nss: string): void {
    const foundPatient = this.patients.find((patient) => patient.nss === nss);
    this.filteredPatients = foundPatient ? [foundPatient] : [];
  }

  onSearch(): void {
    const query = this.searchQuery.replace(/-/g, '').toLowerCase(); // Remove '-' from query and convert to lowercase
    this.filteredPatients = this.patients.filter((patient) => {
      const nssWithoutDash = patient.nss.replace(/-/g, '').toLowerCase(); // Remove '-' from NSS and convert to lowercase
      return nssWithoutDash.includes(query);
    });
  }
}
