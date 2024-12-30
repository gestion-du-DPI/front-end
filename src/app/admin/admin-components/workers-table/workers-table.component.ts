import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ConfirmDeleteWorkerPopupComponent } from '../popups/confirm-delete-worker-popup/confirm-delete-worker-popup.component';
import { EditWorkerFormComponent } from '../forms/edit-worker-form/edit-worker-form.component';
import { WorkerService } from '../../../services/worker/worker.service';
@Component({
  selector: 'app-workers-table',
  imports: [
    CommonModule,
    ConfirmDeleteWorkerPopupComponent,
    EditWorkerFormComponent,
  ],
  template: `
    <table class="border-collapse justify-self-center table-auto w-full">
      <thead>
        <tr>
          <th>Name</th>
          <th>Role</th>
          <th class="hidden md:table-cell">Email Address</th>
          <th>Phone Number</th>
          <th class="hidden lg:table-cell">Social Number</th>
          <th class="hidden lg:table-cell">Address</th>
          <th class="hidden lg:table-cell">Date of Hire</th>
        </tr>
      </thead>
      <tbody class="border-[1px] bg-white rounded-lg overflow-hidden">
        <tr *ngFor="let worker of workers" class="hover:bg-slate-50">
          <td class="flex flex-row gap-4 items-center">
            <img
              [src]="worker.profilePicture || 'no-pfp.png'"
              class="w-10 object-cover h-10 rounded-full cursor-pointer"
              alt="Profile Picture"
              (click)="onProfilePictureClick(fileInput)"
            />
            <input
              type="file"
              #fileInput
              class="hidden"
              (change)="onImageUpload($event, worker)"
            />
            <div class="flex flex-col">
              <span class="font-bold text-sm text-left">{{ worker.name }}</span>
              <span class="text-sm text-left font-normal text-[#667085]">
                {{ worker.tag }}
              </span>
            </div>
          </td>
          <td>{{ worker.role }}</td>
          <td class="hidden md:table-cell">{{ worker.email }}</td>
          <td>{{ worker.phone }}</td>
          <td class="hidden lg:table-cell">{{ worker.socialNumber }}</td>
          <td class="hidden lg:table-cell">{{ worker.address }}</td>
          <td class="hidden lg:table-cell">{{ worker.dateOfHire }}</td>
          <td class="icon cursor-pointer px-0" (click)="onEdit(worker)">
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
              (click)="onDeleteWorker(worker)"
              alt="delete"
            />
          </td>
        </tr>
      </tbody>
    </table>
    <div class="popup" *ngIf="showConfirmDeletePopup">
      <app-confirm-delete-worker-popup
        (confirm)="onConfirmDelete()"
        (cancel)="onCancelDelete()"
      ></app-confirm-delete-worker-popup>
    </div>
    <div class="popup" *ngIf="showEditWorkersPopup">
      <app-edit-worker-form
        [formData]="selectedWorker"
        (cancel)="onCancelEdit()"
        (save)="onSaveEdit()"
      ></app-edit-worker-form>
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
      .conslt {
        text-align: center;
      }
      .icon {
        padding: 10px 3px;
      }
    `,
  ],
})
export class WorkersTableComponent {
  @Input() workers: any[] = []; // Accept filtered workers list as input

  showConfirmDeletePopup = false;
  showEditWorkersPopup = false;

  selectedWorker: any = null; // Stores the worker data to pass to the edit form
  workerToDelete: any = null; // Stores the worker we wanna delete from the table

  constructor(private workerService: WorkerService) {}
  
  onEdit(worker: any): void {
    this.selectedWorker = {...worker}; // Pass the worker data to the popup
    this.showEditWorkersPopup = true;
  }

  onDeleteWorker(worker: any): void {
    this.workerToDelete = worker;
    this.showConfirmDeletePopup = true;
  }

  onSaveEdit(): void {
    // Save changes to the patient data and update the list
    this.showEditWorkersPopup = false;
    this.reloadWorkers();
  }

  onCancelEdit() {
    this.showEditWorkersPopup = false;
    this.selectedWorker = null; // Clear the selected worker
  }

 /**
   * Confirms and deletes the selected patient, then reloads the patient list.
   */
 onConfirmDelete(): void {
  if (this.workerToDelete) {
    this.workerService.deleteWorker(this.workerToDelete.id).subscribe({
      next: () => {
        console.log('Patient deleted successfully');
        this.showConfirmDeletePopup = false;
        this.reloadWorkers();
      },
      error: (err) => console.error('Error deleting patient:', err),
      complete: () => (this.workerToDelete = null),
    });
  }
}

  onCancelDelete() {
    this.showConfirmDeletePopup = false;
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
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      const reader = new FileReader();
      reader.onload = (e: any) => {
        const updatedProfilePicture = e.target.result;
        patient.profilePicture = updatedProfilePicture;

        this.workerService
          .editWorker({ ...patient, profilePicture: updatedProfilePicture })
          .subscribe({
            next: () => console.log('Profile picture updated successfully'),
            error: (err) => console.error('Error updating profile picture:', err),
          });
      };
      reader.readAsDataURL(file);
    }
  }

  reloadWorkers(): void {
    this.workerService.getWorkers().subscribe({
      next: (workers) => (this.workers = workers),
      error: (err) => console.error('Error fetching patients:', err),
    });
  }
}
