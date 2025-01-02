import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PatientsTableComponent } from '../../admin-components/patients-table/patients-table.component';
import { HeaderComponent } from '../../admin-components/header/header.component';
import { PatientService } from '../../../services/admin/patient/patient.service';

@Component({
  selector: 'app-patients',
  imports: [PatientsTableComponent, HeaderComponent, CommonModule, FormsModule],
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
            <app-header (reload)="reloadPatients()"></app-header>
          </div>
        </div>
        <div class="flex flex-row gap-3">
          <div
            class="flex flex-row overflow-hidden items-center bg-white rounded-lg border-[1.5px] p-2 w-96 gap-3"
          >
            <img src="search-icon.svg" alt="Search icon" />
            <input
              type="text"
              [placeholder]="
                searchByName
                  ? 'Search Worker by Name...'
                  : 'Search Worker by Nss...'
              "
              class="bg-transparent border-0 focus:outline-none flex-1"
              [(ngModel)]="searchQuery"
              (input)="onSearch()"
            />
          </div>
          <button
            class="bg-white hover:bg-slate-100 border-[1.5px] w-10 flex justify-center items-center rounded-lg"
            (click)="toggleSearchFilter()"
          >
            <img src="filter-icon.svg" alt="Filter icon" />
          </button>
        </div>
      </div>
      <div *ngIf="loading" class="self-center mt-10">
        <img src="logo.png" class=" animate-spin" alt="" />
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
  searchByName = true;
  loading: boolean = false;
  showscanQRpopup = false;

  patients: any[] = [];
  filteredPatients: any[] = []; // Tracks the filtered patients

  constructor(private patientService: PatientService) {}

  ngOnInit(): void {
    this.loadPatients();
  }

  loadPatients(): void {
    this.loading = true; // Show loading spinner
    this.patientService.getPatients().subscribe({
      next: (response: any) => {
        this.patients = response.patients.map(
          (patient: {
            user_id: number;
            name: string;
            created_at: string;
            nss: string;
            email: string;
            address: string;
            phone_number: string;
            emergency_contact_name: string;
            emergency_contact_phone: string;
            consultation_count: number;
            profile_image: string;
          }) => ({
            ...patient,
            first_name: patient.name.split(' ')[0],
            last_name: patient.name.split(' ')[1],
          })
        );
        this.filteredPatients = [...this.patients]; // Ensure filteredPatients is also updated
        this.patientsNumber = this.patients.length;
        this.loading = false;
        console.log('Patients:', this.patients);
      },
      error: (err: any) => {
        console.error('Error fetching patients:', err);
        this.loading = false; // Hide loading spinner
      },
    });
  }

  toggleSearchFilter(): void {
    this.searchByName = !this.searchByName;
    this.onSearch();
  }

  reloadPatients(): void {
    this.loading = true; // Show loading spinner
    this.loadPatients();
  }

  onSearch(): void {
    const query = this.searchQuery.toLowerCase();
    this.filteredPatients = this.patients.filter((patient) =>
      this.searchByName
        ? patient.first_name.toLowerCase().includes(query) ||
          patient.last_name.toLowerCase().includes(query)
        : patient.nss.toLowerCase().includes(query)
    );
  }
}
