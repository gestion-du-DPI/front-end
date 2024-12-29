import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ConfirmDeleteWorkerPopupComponent } from '../popups/confirm-delete-worker-popup/confirm-delete-worker-popup.component';
import { EditWorkerFormComponent } from '../forms/edit-worker-form/edit-worker-form.component';
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
          <th class="hidden lg:table-cell">Consultations</th>
        </tr>
      </thead>
      <tbody class="border-[1px] bg-white rounded-lg overflow-hidden">
        <tr *ngFor="let worker of workers" class="hover:bg-slate-50">
          <td class="flex flex-row gap-4 items-center">
            <img
              [src]="worker.profilePicture || 'default-profile.png'"
              class="w-10 h-10 rounded-full cursor-pointer"
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
          <td class="conslt hidden lg:table-cell">
            {{ worker.consultations }}
          </td>
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
              (click)="onDeleteWorker()"
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
        [workerData]="selectedWorker"
        (cancel)="onCancelEdit()"
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

  onEdit(worker: any): void {
    this.selectedWorker = worker; // Pass the worker data to the popup
    this.showEditWorkersPopup = true;
  }

  onDelete(name: string): void {
    console.log(`Delete clicked for ${name}`);
  }

  onDeleteWorker() {
    this.showConfirmDeletePopup = true;
  }

  onCancelEdit() {
    this.showEditWorkersPopup = false;
    this.selectedWorker = null; // Clear the selected worker
  }

  onConfirmDelete() {
    this.showConfirmDeletePopup = false;
    console.log('Worker deleted');
  }

  onCancelDelete() {
    this.showConfirmDeletePopup = false;
  }

  onProfilePictureClick(fileInput: HTMLInputElement): void {
    fileInput.click(); // Trigger the file input's click programmatically
  }

  onImageUpload(event: Event, worker: any): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        worker.profilePicture = e.target.result; // Update the worker's profile picture
      };
      reader.readAsDataURL(input.files[0]); // Read the selected image file
    }
  }
}
