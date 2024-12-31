import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../admin-components/header/header.component';
import { NewWorkerFormComponent } from '../../admin-components/forms/new-worker-form/new-worker-form.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Worker } from '../../../models/worker';
import { WorkerService } from '../../../services/admin/worker/worker.service';
import { WorkersTableComponent } from '../../admin-components/workers-table/workers-table.component';

@Component({
  selector: 'app-workers',
  imports: [
    WorkersTableComponent,
    HeaderComponent,
    NewWorkerFormComponent,
    CommonModule,
    FormsModule,
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
            >{{ workersNumber }} workers</span
          >
          <div class="md:ml-auto">
            <app-header></app-header>
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
                  : 'Search Worker by Role...'
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
          <button
            class="ml-auto px-5 border-[1.5px] border-main flex flex-row justify-center items-center gap-2 rounded-md sm:mr-5 md:mr-10"
            (click)="onAddWorker()"
          >
            <img src="add-icon.svg" alt="Add icon" />
            <span class="text-main hidden sm:block text-sm font-semibold"
              >New staff member</span
            >
          </button>
        </div>
      </div>
      <div *ngIf="loading" class="self-center mt-10">
        <img src="logo.png" class=" animate-spin" alt="" />
      </div>
      <div *ngIf="!loading">
        <app-workers-table [workers]="filteredWorkers" />
      </div>

      <div class="popup" *ngIf="showNewWorkerForm">
        <app-new-worker-form
          (cancel)="onCancelWorkerForm()"
          (save)="reloadWorkers()"
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
export class WorkersComponent implements OnInit {
  workersNumber = 0; // Dynamically update based on the number of workers
  showNewWorkerForm = false;
  searchQuery = ''; // Tracks the input query
  searchByName = true; // Toggles search filter between name and role
  loading: boolean = false;

  workers: Worker[] = [];
  filteredWorkers: Worker[] = []; // Tracks the filtered workers

  constructor(private workerService: WorkerService) {}

  ngOnInit(): void {
    this.loadWorkers();
  }

  loadWorkers(): void {
    this.loading = true; // Show loading spinner
    this.workerService.getWorkers().subscribe({
      next: (data) => {
        console.log(data); // Log the data to check if the workers are fetched
        this.workers = data;
        this.filteredWorkers = data; // Update filteredWorkers here
        this.workersNumber = data.length; // Update the workers count
        this.loading = false; // Hide loading spinner
      },
      error: (err) => {
        console.error('Error fetching workers:', err);
        this.loading = false; // Hide loading spinner
      },
    });
  }

  reloadWorkers(): void {
    this.showNewWorkerForm = false;
    this.loading = true; // Show loading spinner
    this.workerService.getWorkers().subscribe({
      next: (workers) => {
        this.workers = workers;
        this.filteredWorkers = workers; // Ensure filteredWorkers is also updated
        this.workersNumber = workers.length; // Update the worker count
        this.loading = false; // Hide loading spinner
      },
      error: (err) => {
        console.error('Error fetching workers:', err);
        this.loading = false; // Hide loading spinner
      },
    });
  }

  toggleSearchFilter(): void {
    this.searchByName = !this.searchByName; // Toggle between name and role search
    this.onSearch(); // Apply the current query to the new filter
  }

  onSearch(): void {
    const query = this.searchQuery.toLowerCase();
    this.filteredWorkers = this.workers.filter(
      (worker) =>
        this.searchByName
          ? worker.name.toLowerCase().includes(query) // Filter by name
          : worker.role.toLowerCase().includes(query) // Filter by role
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
