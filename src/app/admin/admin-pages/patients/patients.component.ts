import { Component, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PatientsTableComponent } from '../../admin-components/patients-table/patients-table.component';
import { HeaderComponent } from '../../admin-components/header/header.component';
import { NewPatientFormComponent } from '../../admin-components/forms/new-patient-form/new-patient-form.component';
import { Patient } from '../../../models/patient';
import { PatientService } from '../../../services/patient/patient.service';


@Component({
  selector: 'app-patients',
  imports: [
    PatientsTableComponent,
    HeaderComponent,
    NewPatientFormComponent,
    CommonModule,
    FormsModule
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
            <app-header></app-header>
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
          >
            <img src="qr-icon.svg" alt="" />
          </button>
          <button
            class="ml-auto px-5 border-[1.5px] border-main flex flex-row justify-center items-center gap-2 rounded-md sm:mr-5 md:mr-10"
            (click)="onAddPatient()"
          >
            <img src="add-icon.svg" alt="" /><span
              class="text-main hidden sm:block text-sm font-semibold"
              >New patient</span
            >
          </button>
        </div>
      </div>
      <app-patients-table [patients]="filteredPatients"/>

      <div class="popup" *ngIf="showNewPatientForm">
        <app-new-patient-form
          (cancel)="onCancelPatientForm()"
        ></app-new-patient-form>
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
  showNewPatientForm = false;
  searchQuery = ''; // Tracks the input query

  patients: Patient[] = [];
  filteredPatients: Patient[] = []; // Tracks the filtered patients

  constructor(private patientService: PatientService) {}

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

  onSearch(): void {
    const query = this.searchQuery.toLowerCase();
    this.filteredPatients = this.patients.filter((patient) =>
      patient.name.toLowerCase().includes(query)
    );
  }

  onAddPatient(): void {
    console.log('Add new patient');
    this.showNewPatientForm = true;
  }

  onCancelPatientForm(): void {
    this.showNewPatientForm = false;
  }
}
