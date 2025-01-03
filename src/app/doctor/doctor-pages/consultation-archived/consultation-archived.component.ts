import { Component } from '@angular/core';
import { HeaderComponent } from '../../doctor-components/header/header.component';
import { PatientInfosConsultationArchivedComponent } from '../../doctor-components/patient-infos-consultation-archived/patient-infos-consultation-archived.component';
import { RouterOutlet } from '@angular/router';
import { AttachmentsTableComponent } from '../../doctor-components/attachments-table/attachments-table.component';

@Component({
  selector: 'app-consultation-archived',
  imports: [RouterOutlet, HeaderComponent, PatientInfosConsultationArchivedComponent,  AttachmentsTableComponent],
  template: `
  <div class="flex flex-col">
      <div class="flex flex-col gap-4 lg:mx-12 mx-3">
        <div
          class="flex flex-col lg:flex-row justify-between items-center gap-4 lg:gap-12"
        >
          <div class="p-4">
            <h1 class="text-4xl text-main font-semibold">Consultation details</h1>
          </div>

          <app-header></app-header>
        </div>
      </div>
      <div class="p-10 flex flex-col justify-between gap-4">
      <app-patient-infos-consultation-archived></app-patient-infos-consultation-archived>
      <app-attachments-table></app-attachments-table>
      </div>
    </div>

    <router-outlet></router-outlet>

  `,
  styles: ``,
})
export class ConsultationArchivedComponent {}
