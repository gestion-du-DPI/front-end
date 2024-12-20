import { Component } from '@angular/core';
import { WorkersTableComponent } from '../components/workers-table/workers-table.component';
import { HeaderComponent } from '../components/header/header.component';
import { NewWorkerFormComponent } from '../components/forms/new-worker-form/new-worker-form.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-workers',
  imports: [
    WorkersTableComponent,
    HeaderComponent,
    NewWorkerFormComponent,
    CommonModule,
    FormsModule
  ],
  template: `
    <div class="flex flex-col gap-5 my-5 lg:mx-10">
      <div class="flex flex-col gap-4 mx-3">
        <div
          class="flex flex-row items-center justify-center flex-wrap md:flex-nowrap gap-3 md:gap-12"
        >
          <h1 class="font-semibold text-main text-4xl">Medical Staff</h1>
          <span
            class="rounded-full bg-[#DBE4FF] font-medium text-xs text-[#3D6DFE] py-1 px-3"
            >{{workersNumber}} workers</span
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
              [placeholder]="searchByName ? 'Search Worker by Name...' : 'Search Worker by Role...'"
              class="bg-transparent border-0 focus:outline-none flex-1"
              [(ngModel)]="searchQuery"
              (input)="onSearch()"

            />
          </div>
          <button
            class="bg-white hover:bg-slate-100 border-[1.5px] w-10 flex justify-center items-center rounded-lg"
            (click)="toggleSearchFilter()"
          >
            <img src="filter-icon.svg" alt="" />
          </button>
          <button
            class="ml-auto px-5 border-[1.5px] border-main flex flex-row justify-center items-center gap-2 rounded-md sm:mr-5 md:mr-10"
            (click)="onAddWorker()"
          >
            <img src="add-icon.svg" alt="" />
            <span
              class="text-main hidden sm:block text-sm font-semibold"
              >New staff member</span
            >
          </button>
        </div>
      </div>
      <app-workers-table [workers]="filteredWorkers"></app-workers-table>

      <div class="popup" *ngIf="showNewWorkerForm">
        <app-new-worker-form
          (cancel)="onCancelWorkerForm()"
        ></app-new-worker-form>
      </div>
    </div>
  `,
  styles: `
    span {
      font-family: 'Plus Jakarta Sans', sans-serif;
    }
  `,
})
export class WorkersComponent {
  workersNumber = 100;
  showNewWorkerForm = false;

  // New state variables
  searchByName = true; // Tracks if the search is by name
  searchQuery=''; // Tracks the input query
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
  filteredWorkers = [...this.workers]; // Tracks the filtered workers

  toggleSearchFilter(): void {
    this.searchByName = !this.searchByName; // Toggle between name and role
    this.onSearch(); // Apply the filter with the current query
  }

  onSearch(): void {
    const query = this.searchQuery.toLowerCase();
    this.filteredWorkers = this.workers.filter((worker) =>
      this.searchByName
        ? worker.name.toLowerCase().includes(query)
        : worker.role.toLowerCase().includes(query)
    );
  }

  onAddWorker(): void {
    console.log('Add new worker');
    this.showNewWorkerForm = true;
  }

  onCancelWorkerForm(): void {
    this.showNewWorkerForm = false;
  }
}
