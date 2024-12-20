import { Component } from '@angular/core';
import { AdminBadgeComponent } from '../admin-badge/admin-badge.component';

@Component({
  selector: 'app-header',
  imports: [AdminBadgeComponent],
  template: `
    <div class="flex flex-row items-center gap-5">
      <button
        class=" w-60 bg-main flex flex-row gap-3 items-center justify-center py-4 rounded-md"
      >
        <img src="add-icon-white.svg" class="" alt="" /><span
          class="text-white font-bold text-base"
          >New Patient</span
        >
      </button>
      <app-admin-badge></app-admin-badge>
    </div>
  `,
})
export class HeaderComponent {}
