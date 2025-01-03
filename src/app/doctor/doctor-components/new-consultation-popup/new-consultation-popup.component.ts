import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { QrScannerComponent } from '../../../admin/admin-components/popups/qr-scanner/qr-scanner.component';
import { Consultation } from '../../../models/consultation';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Patient } from '../../../models/patient';
import { PatientService } from '../../../services/patient/patient.service';
import { NewConsultationFormComponent } from '../new-consultation-form/new-consultation-form.component';
import { ActivatedRoute } from '@angular/router';

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

        <!-- Search Bar Section -->
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
          <!-- Only pass the filtered patients to the consultation form -->
          <app-new-consultation-form
            [patients]="filteredPatients"
            [searchPerformed]="searchPerformed"
          />
        </div>
        <form *ngIf="filteredPatients.length > 0">
          <h4 class="text-lg font-semibold text-[#18181B] mt-2">
            Patient condition
          </h4>
          <!-- Reason -->
          <div class="flex flex-row justify-center flex-wrap gap-4">
            <div class="flex flex-col gap-1 pt-2">
              <label class="font-medium text-sm">
                Reason <span class="text-red-600">*</span>
              </label>
              <input
                type="text"
                class="border-[1px] rounded-md w-96 p-2 text-sm"
                placeholder="eg. 0559 28 19 22"
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
            <!-- priority -->

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
          <div>
            <h4 class="text-lg font-semibold text-[#18181B] mt-2 pt-2">
              Privacy Settings
            </h4>
            <p class="p-2">Who can have access to this consulation</p>

            <div class="border rounded p-2 flex flex-wrap gap-2 bg-white">
              <div
                *ngFor="let tag of selectedTags"
                class="flex items-center gap-1 px-2 py-1 bg-[#DBE4FF] text-black rounded "
              >
                {{ tag }}
                <button
                  class="text-black hover:text-red-500"
                  (click)="removeTag(tag)"
                >
                  ✕
                </button>
              </div>
              <input
                [(ngModel)]="inputValue"
                (keydown)="onKeyDown($event)"
                (input)="filterSuggestions()"
                placeholder="Start typing..."
                class="flex-grow focus:outline-none border-none"
              />
            </div>
            <ul
              *ngIf="filteredSuggestions.length > 0"
              class="mt-1 border rounded bg-white shadow max-h-40 overflow-y-auto"
            >
              <li
                *ngFor="let suggestion of filteredSuggestions"
                (click)="selectSuggestion(suggestion)"
                class="p-2 hover:bg-blue-100 cursor-pointer"
              >
                {{ suggestion }}
              </li>
            </ul>
          </div>

          <div>
            <h4 class="text-lg font-semibold text-[#18181B] mt-2 pt-2">
              medical conditions
            </h4>

            <textarea
              id="medicalConditions"
              name="medicalConditions"
              class="w-full border px-3 py-2 rounded mb-2"
              rows="4"
              placeholder="eg. Hypertension (diagnosed in 2018),"
            ></textarea>
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
    private route: ActivatedRoute
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
        (patient) => patient.id === patientId
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
    this.patientService.getPatients().subscribe((data) => {
      console.log(data);
      this.patients = data;
      this.filteredPatients = []; // Start with an empty list of filtered patients
      this.loading = false;
      this.checkRoute();
    });
  }

  // Filter patients based on the search query
  onSearch(): void {
    if (this.searchQuery.trim()) {
      const query = this.searchQuery.toLowerCase();
      this.filteredPatients = this.patients.filter(
        (patient) =>
          patient.first_name.toLowerCase().includes(query) ||
          patient.last_name.toLowerCase().includes(query) ||
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

  allowedWords = [
    'only me',
    'doctors',
    'nurses',
    'technicians',
    'radiologists',
  ];
  selectedTags: string[] = [];
  filteredSuggestions: string[] = [];
  inputValue = '';

  filterSuggestions() {
    const query = this.inputValue.toLowerCase();
    this.filteredSuggestions = this.allowedWords.filter(
      (word) =>
        word.toLowerCase().startsWith(query) &&
        !this.selectedTags.includes(word)
    );
  }

  selectSuggestion(suggestion: string) {
    this.addTag(suggestion);
  }

  addTag(tag: string) {
    if (!this.selectedTags.includes(tag)) {
      this.selectedTags.push(tag);
      this.inputValue = '';
      this.filteredSuggestions = [];
    }
  }

  removeTag(tag: string) {
    this.selectedTags = this.selectedTags.filter((t) => t !== tag);
  }

  onKeyDown(event: KeyboardEvent) {
    if (event.key === 'Enter' || event.key === 'Tab') {
      event.preventDefault();
      const matchedSuggestion = this.filteredSuggestions[0];
      if (matchedSuggestion) {
        this.addTag(matchedSuggestion);
      }
    }
  }
}
