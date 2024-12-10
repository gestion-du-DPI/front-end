import { Component } from '@angular/core';
import { WorkersTableComponent } from '../components/workers-table/workers-table.component';

@Component({
  selector: 'app-workers',
  imports: [WorkersTableComponent],
  template: `
    <div class="flex flex-col gap-5">
      <div class="flex flex-row gap-3 ml-10">
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
        <button class="ml-auto w-56 border-[1.5px] border-main flex flex-row justify-center items-center gap-4 rounded-md mr-16"><img src="add-icon.svg" alt=""><span class="text-main text-sm font-semibold">Add new worker</span></button>
      </div>
      <app-workers-table />
    </div>
  `,
  styles: ``,
})
export class WorkersComponent {}
