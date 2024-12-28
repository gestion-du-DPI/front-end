import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmDeletePatientPopupComponent } from '../popups/confirm-delete-patient-popup/confirm-delete-patient-popup.component';
import { EditPatientFormComponent } from '../forms/edit-patient-form/edit-patient-form.component';
import { PatientService } from '../../../services/patient/patient.service';

@Component({
  selector: 'app-patients-table',
  imports: [
    CommonModule,
    ConfirmDeletePatientPopupComponent,
    EditPatientFormComponent,
  ],
  template: `
    <table class="border-collapse justify-self-center table-auto w-full">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th class="hidden lg:table-cell">NSS</th>
          <th class="hidden lg:table-cell">Address</th>
          <th class="hidden lg:table-cell">E^ Contact</th>
          <th class="hidden lg:table-cell">E^ Phone</th>
          <th class="hidden lg:table-cell">Consultations</th>
        </tr>
      </thead>
      <tbody class="border-[1px] bg-white rounded-lg overflow-hidden">
        <tr *ngFor="let patient of patients" class="hover:bg-slate-50">
          <td class="flex flex-row gap-4 items-center">
            <img
              [src]="patient.profilePicture || 'no-pfp.png'"
              class="w-10 h-10 rounded-full object-cover cursor-pointer"
              alt="Profile Picture"
              (click)="onProfilePictureClick(fileInput)"
            />
            <input
              type="file"
              #fileInput
              class="hidden"
              (change)="onImageUpload($event, patient)"
            />
            <div class="flex flex-col">
              <span class="font-bold text-sm text-left">{{ patient.name }}</span>
            </div>
          </td>
          <td>{{ patient.email }}</td>
          <td>{{ patient.phone }}</td>
          <td class="hidden lg:table-cell">{{ patient.socialNumber }}</td>
          <td class="hidden lg:table-cell">{{ patient.address }}</td>
          <td class="hidden lg:table-cell">{{ patient.emergencyContact }}</td>
          <td class="hidden lg:table-cell">{{ patient.emergencyPhone }}</td>
          <td class="hidden lg:table-cell">{{ patient.consultations }}</td>
          <td class="icon cursor-pointer px-0" (click)="onEdit(patient)">
            <img
              src="edit-icon.svg"
              class="hover:bg-slate-100 rounded-xl p-2 w-9 h-9"
              alt="edit"
            />
          </td>
          <td class="icon cursor-pointer px-0">
            <img
              src="delete-icon.svg"
              class="hover:bg-slate-100 rounded-xl p-2 w-9 h-9"
              (click)="onDeletePatient(patient)"
              alt="delete"
            />
          </td>
        </tr>
      </tbody>
    </table>
    <div class="popup" *ngIf="showConfirmDeletePopup">
      <app-confirm-delete-patient-popup
        (confirm)="onConfirmDelete()"
        (cancel)="onCancelDelete()"
      ></app-confirm-delete-patient-popup>
    </div>
    <div class="popup" *ngIf="showEditPatientsPopup">
      <app-edit-patient-form
        [patientData]="selectedPatient"
        (cancel)="onCancelEdit()"
      ></app-edit-patient-form>
    </div>
  `,
  styles: [
    `
      td {
        padding: 10px 15px;
        text-align: center;
        font-size: 14px;
        font-weight: 600;
        font-family: 'Plus Jakarta Sans', sans-serif;
      }
      th {
        padding: 10px 0px;
        font-weight: 500;
        font-size: 12px;
        color: #667085;
      }
      span {
        font-family: 'Plus Jakarta Sans', sans-serif;
      }
      .icon {
        padding: 10px 3px;
      }
    `,
  ],
})
export class PatientsTableComponent {
  @Input() patients: any[] = []; // Input list of patients
  showConfirmDeletePopup = false; // Controls delete confirmation popup visibility
  showEditPatientsPopup = false; // Controls edit form popup visibility


  selectedPatient: any = null; // Holds the patient data for editing
  patientToDelete: any = null; // Holds the patient data for deletion

  constructor(private patientService: PatientService) {}

  /**
   * Opens the edit patient form for the selected patient.
   * @param patient The patient to edit.
   */
  onEdit(patient: any): void {
    this.selectedPatient = patient;
    this.showEditPatientsPopup = true;
  }

  /**
   * Opens the delete confirmation popup for the selected patient.
   * @param patient The patient to delete.
   */
  onDeletePatient(patient: any): void {
    this.patientToDelete = patient;
    this.showConfirmDeletePopup = true;
  }

  /**
   * Hides the edit patient form and resets the selected patient.
   */
  onCancelEdit(): void {
    this.showEditPatientsPopup = false;
    this.selectedPatient = null;
  }

  /**
   * Confirms and deletes the selected patient, then reloads the patient list.
   */
  onConfirmDelete(): void {
    if (this.patientToDelete) {
      this.patientService.deletePatient(this.patientToDelete.id).subscribe({
        next: () => {
          console.log('Patient deleted successfully');
          this.showConfirmDeletePopup = false;
          this.reloadPatients();
        },
        error: (err) => console.error('Error deleting patient:', err),
        complete: () => (this.patientToDelete = null),
      });
    }
  }

  /**
   * Reloads the list of patients from the server.
   */
  reloadPatients(): void {
    this.patientService.getPatients().subscribe({
      next: (patients) => (this.patients = patients),
      error: (err) => console.error('Error fetching patients:', err),
    });
  }

  /**
   * Triggers the file input for selecting a new profile picture.
   * @param fileInput The file input element.
   */
  onProfilePictureClick(fileInput: HTMLInputElement): void {
    fileInput.click();
  }

  /**
   * Handles image upload for updating a patient's profile picture.
   * @param event The file input change event.
   * @param patient The patient whose profile picture is being updated.
   */
  onImageUpload(event: Event, patient: any): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      const reader = new FileReader();
      reader.onload = (e: any) => {
        const updatedProfilePicture = e.target.result;
        patient.profilePicture = updatedProfilePicture;

        this.patientService
          .editPatient({ ...patient, profilePicture: updatedProfilePicture })
          .subscribe({
            next: () => console.log('Profile picture updated successfully'),
            error: (err) => console.error('Error updating profile picture:', err),
          });
      };
      reader.readAsDataURL(file);
    }
  }

  /**
   * Hides the delete confirmation popup and resets the selected patient to delete.
   */
  onCancelDelete(): void {
    this.showConfirmDeletePopup = false;
    this.patientToDelete = null;
  }
}
