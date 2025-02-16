import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmDeletePatientPopupComponent } from '../popups/confirm-delete-patient-popup/confirm-delete-patient-popup.component';
import { EditPatientFormComponent } from '../forms/edit-patient-form/edit-patient-form.component';
import { PatientService } from '../../../services/admin/patient/patient.service';

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
          <th class="hidden lg:table-cell">Consul</th>
          <th class="hidden lg:table-cell w-10"></th>
          <th class="hidden lg:table-cell w-10"></th>
        </tr>
      </thead>
      <tbody class="border-[1px] bg-white rounded-lg overflow-hidden">
        <tr *ngFor="let patient of patients" class="hover:bg-slate-50">
          <td class="flex flex-row gap-4 items-center">
            <div class="relative w-10 h-10 rounded-full cursor-pointer group">
              <img
                [src]="patient.profile_image || 'no-pfp.png'"
                class="w-full h-full object-cover rounded-full"
                alt="Profile Picture"
              />
              <div
                class="absolute inset-0 bg-black bg-opacity-50 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100"
                (click)="onProfilePictureClick(fileInput)"
              >
                <img
                  src="edit-pfp-worker-fi-admin.png"
                  class="rounded-xl w-7 h-7"
                  alt="edit"
                />
              </div>
            </div>
            <input
              type="file"
              #fileInput
              class="hidden"
              (change)="onImageUpload($event, patient)"
            />
            <div class="flex flex-col">
              <span class="font-bold text-sm text-left">{{
                patient.name
              }}</span>
            </div>
          </td>
          <td>{{ patient.email }}</td>
          <td>{{ patient.phone_number }}</td>
          <td class="hidden lg:table-cell">{{ patient.nss }}</td>
          <td class="hidden lg:table-cell">{{ patient.address }}</td>
          <td class="hidden lg:table-cell">
            {{ patient.emergency_contact_name }}
          </td>
          <td class="hidden lg:table-cell">
            {{ patient.emergency_contact_phone }}
          </td>
          <td class="hidden lg:table-cell">{{ patient.consultation_count }}</td>
          <td class="icon cursor-pointer px-0" (click)="onEdit(patient)">
            <img
              src="edit-icon.svg"
              class="hover:bg-slate-100 rounded-lg p-2"
              alt="edit"
            />
          </td>
          <td class="icon cursor-pointer px-0">
            <img
              src="delete-icon.svg"
              class="hover:bg-slate-100 rounded-lg p-2"
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
        [formData]="selectedPatient"
        (cancel)="onCancelEdit()"
        (save)="onSaveEdit()"
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
        padding: 0px;
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
    this.selectedPatient = { ...patient }; // Create a shallow copy of the patient object
    console.log('Editing patient:', this.selectedPatient);
    this.showEditPatientsPopup = true;
  }

  onSaveEdit(): void {
    // Save changes to the patient data and update the list
    this.showEditPatientsPopup = false;
    this.reloadPatients();
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
      console.log('Deleting patient:', this.patientToDelete);
      this.patientService
        .deletePatient(this.patientToDelete.user_id)
        .subscribe({
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
    window.location.reload();
  }

  onProfilePictureClick(fileInput: HTMLInputElement): void {
    fileInput.click();
  }

  /**
   * Handles image upload for updating a patient's profile picture.
   * @param event The file input change event.
   * @param patient The patient whose profile picture is being updated.
   */
  onImageUpload(event: Event, patient: any): void {
    const input = event.target as HTMLInputElement; // Access the file input
    if (input.files && input.files[0]) {
      const file = input.files[0];
      const allowedExtensions = ['jpg', 'jpeg', 'png', 'gif', 'bmp']; // Add allowed extensions
      const fileExtension = file.name.split('.').pop()?.toLowerCase(); // Extract the file extension

      // Validate file extension
      if (!fileExtension || !allowedExtensions.includes(fileExtension)) {
        console.error('Selected file does not have a valid image extension.');
        return;
      }
      // Create FormData and append the file and any additional fields
      const formData = new FormData();
      formData.append('image', file); // Append the image with the key 'image'
      console.log(formData);
      // Call the service method to send the request
      this.patientService.editpfpPatient(formData, patient.user_id).subscribe({
        next: () => {
          window.location.reload();
          console.log('Profile picture updated successfully');
        },
        error: (err: any) =>
          console.error('Error updating profile picture:', err),
      });
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
