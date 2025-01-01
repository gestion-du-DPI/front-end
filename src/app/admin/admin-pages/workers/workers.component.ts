import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../admin-components/header/header.component';
import { NewWorkerFormComponent } from '../../admin-components/forms/new-worker-form/new-worker-form.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WorkerService } from '../../../services/admin/worker/worker.service';
import { WorkersTableComponent } from '../../admin-components/workers-table/workers-table.component';

@Component({
  selector: 'app-workers',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    HeaderComponent,
    NewWorkerFormComponent,
    WorkersTableComponent,
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
        <img src="logo.png" class="animate-spin" alt="Loading..." />
      </div>
      <div *ngIf="!loading">
        <app-workers-table [workers]="filteredWorkers"></app-workers-table>
      </div>
      <div class="popup" *ngIf="showNewWorkerForm">
        <app-new-worker-form
          (cancel)="onCancelWorkerForm()"
          (save)="reloadWorkers()"
        ></app-new-worker-form>
      </div>
    </div>
  `,
  styles: [
    `
      span {
        font-family: 'Plus Jakarta Sans', sans-serif;
      }
    `,
  ],
})
export class WorkersComponent implements OnInit {
  workersNumber = 0;
  showNewWorkerForm = false;
  searchQuery = '';
  searchByName = true;
  loading = false;

  workers: any[] = [];
  filteredWorkers: any[] = [];

  constructor(private workerService: WorkerService) {}

  ngOnInit(): void {
    this.loadWorkers();
  }

  loadWorkers(): void {
    this.loading = true;
    this.workerService.getWorkers().subscribe({
      next: (response: any) => {
        this.workers = response.workers.map(
          (worker: {
            user_id: number;
            name: string;
            role: string;
            speciality: string;
            email: string;
            phone_number: string;
            nss: string;
            address: string;
            created_at: string;
          }) => ({
            ...worker,
            first_name: worker.name.split(' ')[0],
            last_name: worker.name.split(' ').slice(1).join(' '),
          })
        );
        this.filteredWorkers = [...this.workers];
        this.workersNumber = this.workers.length;
        this.loading = false;
        console.log('Workers loaded:', this.filteredWorkers);
      },
      error: (err) => {
        console.error('Error fetching workers:', err);
        this.loading = false;
      },
    });
  }

  reloadWorkers(): void {
    this.showNewWorkerForm = false;
    this.loadWorkers();
  }

  toggleSearchFilter(): void {
    this.searchByName = !this.searchByName;
    this.onSearch();
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
    this.showNewWorkerForm = true;
  }

  onCancelWorkerForm(): void {
    this.showNewWorkerForm = false;
  }
}
