import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmDeletePopupComponent } from '../popups/confirm-delete-popup/confirm-delete-popup.component';
import { EditWorkerFormComponent } from "../forms/edit-worker-form/edit-worker-form.component";

@Component({
  selector: 'app-workers-table',
  imports: [CommonModule, ConfirmDeletePopupComponent, EditWorkerFormComponent],
  template: `
    <table class="border-collapse justify-self-center w-full">
      <thead>
        <tr>
          <th>Name</th>
          <th>Role</th>
          <th>Email Address</th>
          <th>Phone Number</th>
          <th>Social Number</th>
          <th>Address</th>
          <th>Date of Hire</th>
          <th>Consultations</th>
        </tr>
      </thead>
      <tbody class="border-[1px] bg-white rounded-lg overflow-hidden">
        <tr *ngFor="let worker of workers" class="hover:bg-slate-50">
          <td class="flex flex-row gap-4 items-center">
            <img
              [src]="worker.profilePicture"
              class=" w-10 h-10 rounded-full cursor-pointer"
              alt="Profile Picture"
              (click)="onProfilePictureClick(worker.name)"
            />
            <div class="flex flex-col">
              <span class=" font-bold text-sm text-left">{{ worker.name }}</span>
              <span class=" text-sm text-left font-normal text-[#667085]">{{
                worker.tag
              }}</span>
            </div>
          </td>
          <td>{{ worker.role }}</td>
          <td>{{ worker.email }}</td>
          <td>{{ worker.phone }}</td>
          <td>{{ worker.socialNumber }}</td>
          <td>{{ worker.address }}</td>
          <td>{{ worker.dateOfHire }}</td>
          <td class="conslt">{{ worker.consultations }}</td>
          <td class="icon cursor-pointer px-0" (click)="onEdit(worker)">
            <img src="edit-icon.svg" class=" hover:bg-slate-100 rounded-xl p-2 w-9 h-9"  alt="edit" />
          </td>
          <td class=" icon cursor-pointer px-0">
            <img src="delete-icon.svg" class=" hover:bg-slate-100 rounded-xl p-2 w-9 h-9" (click)="onDeleteWorker()" alt="delete" />
          </td>
        </tr>
      </tbody>
    </table>
    <div class="popup" *ngIf="showConfirmDeletePopup">
      <app-confirm-delete-popup
        (confirm)="onConfirmDelete()"
        (cancel)="onCancelDelete()"
      ></app-confirm-delete-popup>
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
      .conslt{
        text-align:center;
      }
      .icon{
        padding: 10px 3px;
      }
    `,
  ],
})
export class WorkersTableComponent {
  showConfirmDeletePopup = false;
  showEditWorkersPopup = false;

  selectedWorker: any = null; // Stores the worker data to pass to the edit form

  workers = [
    {
      name: 'Alice Johnson',
      role: 'Manager',
      email: 'alice@example.com',
      phone: '123-456-7890',
      socialNumber: '123-45-6789',
      address: '123 Main St, City',
      dateOfHire: '2020-01-15',
      consultations: 10,
      tag: '@manager',
      profilePicture: 'admin.jpg',
    },
    {
      name: 'Bob Smith',
      role: 'Developer',
      email: 'bob@example.com',
      phone: '234-567-8901',
      socialNumber: '234-56-7890',
      address: '456 Elm St, City',
      dateOfHire: '2021-03-22',
      consultations: 5,
      tag: '@developer',
      profilePicture: 'admin.jpg',
    },
    {
      name: 'Charlie Brown',
      role: 'Designer',
      email: 'charlie@example.com',
      phone: '345-678-9012',
      socialNumber: '345-67-8901',
      address: '789 Oak St, City',
      dateOfHire: '2019-07-10',
      consultations: 8,
      tag: '@designer',
      profilePicture: 'admin.jpg',
    },
  ];

  onEdit(worker: any): void {
    this.selectedWorker = worker; // Pass the worker data to the popup
    this.showEditWorkersPopup = true;
  }

  onDelete(name: string): void {
    console.log(`Delete clicked for ${name}`);
  }

  onProfilePictureClick(name: string): void {
    console.log(`Profile picture clicked for ${name}`);
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
}
