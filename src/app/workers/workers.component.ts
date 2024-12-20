import { Component } from '@angular/core';
import { WorkersTableComponent } from '../components/workers-table/workers-table.component';
import { HeaderComponent } from '../components/header/header.component';
import { NewWorkerFormComponent } from '../components/forms/new-worker-form/new-worker-form.component';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../components/sidebar/sidebar.component';

@Component({
  selector: 'app-workers',
  imports: [
    WorkersTableComponent,
    HeaderComponent,
    NewWorkerFormComponent,
    CommonModule,
  ],
  template: `
    <div class="flex flex-col gap-5 my-5 lg:mx-10">
      <div class="flex flex-col gap-4  mx-3">
        <div class="flex flex-row items-center gap-12">
          <h1 class=" font-semibold text-main text-4xl">Medical Staff</h1>
          <span
            class=" rounded-full bg-[#DBE4FF] font-medium text-xs text-[#3D6DFE] py-1 px-3"
            >{{ workersNumber }} workers</span
          >
          <div class="ml-auto">
            <app-header></app-header>
          </div>
        </div>
        <div class="flex flex-row gap-3">
          <div
            class="flex flex-row items-center bg-white rounded-lg border-[1.5px] p-2 w-96 gap-3"
          >
            <img src="search-icon.svg" alt="" />
            <input
              type="text"
              placeholder="Search Worker by Name here ..."
              class="bg-transparent border-0 focus:outline-none flex-1"
            />
          </div>
          <button
            class="bg-white border-[1.5px] w-10 flex justify-center items-center rounded-lg"
          >
            <img src="filter-icon.svg" alt="" />
          </button>
          <button
            class="ml-auto w-56 border-[1.5px] border-main flex flex-row justify-center items-center gap-4 rounded-md lg:mr-10"
            (click)="onAddWorker()"
          >
            <img src="add-icon.svg" alt="" /><span
              class="text-main text-sm font-semibold"
              >Add new worker</span
            >
          </button>
        </div>
      </div>
      <app-workers-table />

      <div class="popup" *ngIf="showNewWorkerForm">
        <app-new-worker-form
          (cancel)="onCancelWorkerForm()"
        ></app-new-worker-form>
      </div>
    </div>
  `,
  styles: `
  span{
    font-family: 'Plus Jakarta Sans', sans-serif;
  }
  `,
})
export class WorkersComponent {
  workersNumber = 100;
  showNewWorkerForm = false;

  onAddWorker() {
    console.log('Add new worker');
    this.showNewWorkerForm = true;
  }

  onCancelWorkerForm() {
    this.showNewWorkerForm = false;
  }
}
