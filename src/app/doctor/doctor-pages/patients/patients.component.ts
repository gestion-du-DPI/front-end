import { Component, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Patient } from '../../../models/patient';
import { PatientService } from '../../../services/patient/patient.service';
import { QrScannerComponent } from '../../doctor-components/qr-scanner/qr-scanner.component';
import { UserBadgeComponent } from "../../../admin/admin-components/user-badge/user-badge.component";
import { PatientsTableComponent } from '../../doctor-components/patients-table/patients-table.component';

@Component({
  selector: 'app-patients',
  imports: [CommonModule, FormsModule, QrScannerComponent, UserBadgeComponent, PatientsTableComponent],
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
              placeholder="Search Patient by Name here ..."
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
      <div *ngIf="loading" class="self-center mt-10">
        <img src="logo.png" class=" animate-spin" alt="" />
      </div>
      <div *ngIf="!loading">
        <app-patients-table [patients]="filteredPatients" />
      </div>
      <div class="popup" *ngIf="showscanQRpopup">
        <app-qr-scanner
          (closePopup)="onHideQRscan()"
          (nssValidated)="onNSSValidated($event)"
        />
      </div>
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
  loading: boolean = false;
  showscanQRpopup = false;

  patients: Patient[] = [];
  filteredPatients: Patient[] = []; // Tracks the filtered patients

  constructor(private patientService: PatientService) {}

  ngOnInit(): void {
    this.loadPatients();
  }

  loadPatients(): void {
    this.loading = true; // Show loading spinner
    this.patientService.getPatients().subscribe((data) => {
      console.log(data); // Log the data to check if the patients are fetched
      this.patients = data;
      this.filteredPatients = data; // Update filteredPatients here
      this.patientsNumber = data.length; // Update the patients count
      this.loading = false; // Hide loading spinner
    });
  }

  reloadPatients(): void {
    this.loading = true; // Show loading spinner
    this.patientService.getPatients().subscribe({
      next: (patients) => {
        this.patients = patients;
        this.filteredPatients = patients; // Ensure filteredPatients is also updated
        this.patientsNumber = patients.length; // Update the patient count
        this.loading = false; // Hide loading spinner
      },
      error: (err) => {
        console.error('Error fetching patients:', err);
        this.loading = false; // Hide loading spinner
      },
    });
  }

  onSearch(): void {
    const query = this.searchQuery.toLowerCase();
    this.filteredPatients = this.patients.filter((patient) =>
      patient.first_name.toLowerCase().includes(query)
    );
  }

  onShowQRscan(): void {
    this.showscanQRpopup = true;
  }

  onHideQRscan(): void {
    this.showscanQRpopup = false;
  }

  onNSSValidated(nss: string): void {
    const filteredPatient = this.patients.find(
      (patient) => patient.nss === nss
    );

    if (filteredPatient) {
      this.filteredPatients = [filteredPatient]; // Display the patient in the table
      this.showscanQRpopup = false; // Close the popup
    } else {
      alert('No patient found with the provided NSS.');
    }
  }
}
