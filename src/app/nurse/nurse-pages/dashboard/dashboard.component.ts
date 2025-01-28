import { Component } from '@angular/core';
import { NurseInfoComponent } from '../../nurse-components/nurse-info/nurse-info.component';
import { NurseObservationsComponent } from '../../nurse-components/nurse-observations/nurse-observations.component';
import { MedicalCardsContainerComponent } from "../../../nurse/nurse-components/medical-cards-container/medical-cards-container.component";
import { UserBadgeComponent } from '../../nurse-components/user-badge/user-badge.component';

@Component({
  selector: 'app-dashboard',
  imports: [NurseInfoComponent, NurseObservationsComponent, UserBadgeComponent, MedicalCardsContainerComponent],
  template: `
  <div class="flex flex-col gap-5 my-5 lg:mx-10 pb-10">
    <!-- Top Section: Workspace Header -->
    <div
      class="flex flex-row items-center justify-center flex-wrap md:flex-nowrap gap-3 md:gap-12 mx-3"
    >
      <h1 class="font-semibold text-main text-4xl">Workspace</h1>
      <span
        class="rounded-full bg-[#DBE4FF] font-medium text-xs text-[#3D6DFE] py-1 px-3"
      >
        {{ ticketsNumber }} Tickets
      </span>
      <div class="md:ml-auto">
        <app-user-badge></app-user-badge>
      </div>
    </div>

    <!-- Main Content -->
    <div class="flex flex-row gap-4">
      <!-- Left Section-->
      <div class="w-[30%]">
        <app-medical-cards-container />
      </div>

      <!-- Right Section-->
      <div class="flex-1 flex flex-col gap-4">
        <app-nurse-info></app-nurse-info>
        <app-nurse-observations></app-nurse-observations>
      </div>
    </div>
  </div>
`,
  styles: ``
})
export class DashboardComponent {
  ticketsNumber = 100; // Dynamically update based on the number of tickets

}
