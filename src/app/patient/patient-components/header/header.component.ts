import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientBadgeComponent } from '../patient-badge/patient-badge.component';
@Component({
  selector: 'app-header',
  imports: [ CommonModule , PatientBadgeComponent  ],
  template: `
    <div class="flex flex-row items-center justify-between bg-white px-20">
      <h1 class="text-main font-semibold text-2xl">Consultation details</h1>
      <app-patient-badge></app-patient-badge>
    </div>

    
  `,
  styles: ``
})
export class HeaderComponent {



}
