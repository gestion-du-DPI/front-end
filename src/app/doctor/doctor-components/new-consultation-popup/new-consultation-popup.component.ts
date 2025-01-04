import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { QrScannerComponent } from '../qr-scanner/qr-scanner.component';
import { Consultation } from '../../../models/consultation';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Patient } from '../../../models/doc-patients';
import { PatientService } from '../../../services/doctor/patients/patients.service';
import { NewConsultationFormComponent } from '../new-consultation-form/new-consultation-form.component';
import { ActivatedRoute } from '@angular/router';
import { NewConsultationService } from '../../../services/doctor/newConsultation/new-consultation.service';

@Component({
  selector: 'app-new-consultation-popup',
  imports: [
    QrScannerComponent,
    CommonModule,
    FormsModule,
    NewConsultationFormComponent,
  ],
  template: `
    <div
      class="flex flex-col bg-white py-5 rounded-xl lg:w-[860px] m-10 h-[90vh]"
    >
      <div class="flex flex-row justify-between px-7 pb-3">
        <h1 class="font-extrabold text-2xl text-main">New Consultation</h1>
        <img
          src="cancel-icon.svg"
          class="w-7 cursor-pointer"
          alt=""
          (click)="onCancel()"
        />
      </div>

      <div class="flex flex-col gap-2 overflow-y-scroll px-7">
        <h4 class="text-lg font-semibold text-[#18181B] mt-2">Patient Info</h4>

        <div *ngIf="!isPatientDetailsPage" class="flex items-center gap-2 mt-4">
          <div class="flex items-center border rounded-md px-2 w-[300px]">
            <img src="search-icon.svg" class="w-5 h-5" alt="Search Icon" />
            <input
              type="text"
              class="flex-grow h-10 px-2 py-1 outline-none"
              placeholder="Search for a patient"
              [(ngModel)]="searchQuery"
              (input)="onSearch()"
            />
          </div>
          <button
            class="bg-white border-[1.5px] w-10 h-10 flex justify-center items-center rounded-lg"
            (click)="onShowQRscan()"
          >
            <img src="qr-icon.svg" alt="" />
          </button>
        </div>
        <div *ngIf="!loading">
          <app-new-consultation-form
            [patients]="filteredPatients"
            [searchPerformed]="searchPerformed"
            (patientSelected)="onPatientSelected($event)"
          />
        </div>
        <form *ngIf="filteredPatients.length > 0">
          <h4 class="text-lg font-semibold text-[#18181B] mt-2">
            Patient condition
          </h4>

          <div class="flex flex-row justify-center flex-wrap gap-4">
            <div class="flex flex-col gap-1 pt-2">
              <label class="font-medium text-sm">
                Reason <span class="text-red-600">*</span>
              </label>
              <input
                type="text"
                class="border-[1px] rounded-md w-96 p-2 text-sm"
                placeholder="eg: Broken leg"
                [(ngModel)]="formData.reason"
                name="reason"
                required
                #reason="ngModel"
                [ngClass]="{
                  'border-red-600': reason?.invalid && reason?.touched
                }"
                pattern="[a-zA-Z ]+"
              />
              <div
                *ngIf="reason?.invalid && reason?.touched"
                class="text-red-600 text-xs"
              >
                Reason is required and should contain only letters.
              </div>
            </div>

            <div class="flex flex-col gap-1 pt-2">
              <label class="font-medium text-sm">
                severity <span class="text-red-600">*</span>
              </label>
              <select
                class="border-[1px] rounded-md w-96 p-2 text-sm"
                [(ngModel)]="formData.priority"
                name="priority"
                required
                #priority="ngModel"
                [ngClass]="{
                  'border-red-600': priority?.invalid && priority?.touched
                }"
              >
                <option value="" disabled selected>Select priority</option>
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="Critical">Critical</option>
              </select>
              <div
                *ngIf="priority?.invalid && priority?.touched"
                class="text-red-600 text-xs"
              >
                priority is required.
              </div>
            </div>
          </div>

          <div class="flex flex-row justify-end gap-3">
            <button
              type="button"
              class="text-main border-main font-semibold border-[2px] p-2 w-32 rounded-md mt-4"
              (click)="onCancel()"
            >
              Cancel
            </button>
            <button
              type="submit"
              class="bg-main text-white font-semibold p-2 w-32 rounded-md mt-4"
              (click)="onSubmit()"
            >
              Create
            </button>
          </div>
        </form>
      </div>

      <div *ngIf="loading" class="self-center mt-10">
        <img src="logo.png" class="animate-spin" alt="" />
      </div>

      <div class="popup" *ngIf="showscanQRpopup">
        <app-qr-scanner
          (closePopup)="onHideQRscan()"
          (nssValidated)="onNSSValidated($event)"
        />
      </div>
    </div>
  `,
  styles: ``,
})
export class NewConsultationPopupComponent implements OnInit {
  selecltedPatient: Patient | null = null;

  onPatientSelected(patient: Patient): void {
    this.selecltedPatient = patient;
    this.formData.patient_id = patient.user_id;
  }

  dropdownOpen: boolean = false;
  selectedOption: { label: string; value: string; icon: string } | null = null;

  selectOption(option: { label: string; value: string; icon: string }) {
    this.selectedOption = option; // This will always set selectedOption to a valid option object
    console.log('Selected Option:', this.selectedOption); // Check if this updates correctly
    this.dropdownOpen = false;
  }

  // Options with labels and icons
  options = [
    { label: 'Low', value: 'Low', icon: 'low.svg' },
    { label: 'Medium', value: 'Medium', icon: 'medium.svg' },
    { label: 'Critical', value: 'Critical', icon: 'critical.svg' },
  ];

  toggleDropdown() {
    console.log('Before Toggle:', this.dropdownOpen);
    this.dropdownOpen = !this.dropdownOpen;
    console.log('After Toggle:', this.dropdownOpen);
  }

  closeDropdown() {
    this.dropdownOpen = false;
  }

  formData: Consultation = {} as Consultation;

  searchPerformed: boolean = false;

  patients: Patient[] = [];
  filteredPatients: Patient[] = []; // Start with an empty array
  loading: boolean = false;
  searchQuery: string = '';
  showscanQRpopup: boolean = false;
  isPatientDetailsPage: boolean = false;

  constructor(
    private patientService: PatientService,
    private route: ActivatedRoute,
    private newConsultationService: NewConsultationService
  ) {}

  ngOnInit(): void {
    this.loadPatients(); // Load patients only once on initialization
  }

  // Check if we are on the "doctor/patient-details/:id" route
  checkRoute(): void {
    const patientId = this.route.snapshot.paramMap.get('id');
    if (patientId) {
      this.isPatientDetailsPage = true;
      // Ensure both ids are treated as strings for comparison
      this.filteredPatients = this.patients.filter(
        (patient) => patient.user_id.toString() === patientId
      );
      console.log(this.filteredPatients);
      console.log(patientId);
    } else {
      this.isPatientDetailsPage = false;
    }
    console.log(this.isPatientDetailsPage);
  }

  // Load patients from the service
  loadPatients(): void {
    this.loading = true;
    this.patientService.getPatients().subscribe({
      next: (response: any) => {
        this.patients = response.patients.map((patient: Patient) => ({
          ...patient,
          first_name: patient.name.split(' ')[0],
          last_name: patient.name.split(' ')[1],
        }));
        console.log('Patients:', this.patients);
        this.filteredPatients = []; // Start with an empty list of filtered patients
        this.loading = false;
        this.checkRoute();
      },
      error: (err: any) => {
        console.error('Error fetching patients:', err);
        this.loading = false; // Hide loading spinner
      },
    });
  }

  // Filter patients based on the search query
  onSearch(): void {
    if (this.searchQuery.trim()) {
      const query = this.searchQuery.toLowerCase();
      this.filteredPatients = this.patients.filter(
        (patient) =>
          patient.name.toLowerCase().includes(query) ||
          patient.nss.includes(query)
      );
    } else {
      this.filteredPatients = []; // If the search query is empty, show no results
    }
    this.searchPerformed = true; // Mark search as performed
  }

  onShowQRscan(): void {
    this.showscanQRpopup = true;
  }

  @Output() cancel = new EventEmitter<void>();

  onCancel() {
    this.cancel.emit();
  }

  onSubmit(): void {
    console.log('Form Data:', this.formData);
    this.newConsultationService.createConsultation(this.formData).subscribe({
      next: (response: any) => {
        console.log('Consultation created:', response);
        this.cancel.emit(); // Close the popup
      },
      error: (err: any) => {
        console.error('Error creating consultation:', err);
        alert('Error creating consultation. Please try again.');
      },
    });
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
