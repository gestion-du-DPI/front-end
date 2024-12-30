import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-patients-table',
  imports: [
    CommonModule,
  ],
  template: `
    <table class="border-collapse justify-self-center table-auto w-full">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email Address</th>
          <th>Phone Number</th>
          <th class="hidden lg:table-cell">NSS</th>
          <th class="hidden lg:table-cell">Address</th>
          <th class="hidden lg:table-cell">E^ Contact</th>
          <th class="hidden lg:table-cell">E^ Phone</th>
          <th class="hidden lg:table-cell">Consultations</th>
          <th class="hidden lg:table-cell">DPI</th>
        </tr>
      </thead>
      <tbody class="border-[1px] bg-white rounded-lg overflow-hidden">
        <tr *ngFor="let patient of patients" class="hover:bg-slate-50">
          <td class="flex flex-row gap-4 items-center">
            <img
              [src]="patient.profilePicture"
              class="w-10 h-10 rounded-full"
              alt="Profile Picture"
            />
            <div class="flex flex-col">
              <span class="font-bold text-sm text-left">{{
                patient.name
              }}</span>
            </div>
          </td>
          <td>{{ patient.email }}</td>
          <td>{{ patient.phone }}</td>
          <td class="hidden lg:table-cell">{{ patient.socialNumber }}</td>
          <td class="hidden lg:table-cell">{{ patient.address }}</td>
          <td class="hidden lg:table-cell">{{ patient.emergencyContact }}</td>
          <td class="hidden lg:table-cell">{{ patient.emergencyPhone }}</td>
          <td class="hidden lg:table-cell">{{ patient.consultations }}</td>
          <td class="icon cursor-pointer px-0" (click)="onDPI(patient)">
            <img
              src="dpi-icon.svg"
              class="hover:bg-slate-100 rounded-xl p-2 w-9 h-9"
              alt="edit"
            />
          </td>
        </tr>
      </tbody>
    </table>
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
      .icon {
        padding: 10px 3px;
      }
    `,
  ],
})
export class PatientsTableComponent {
  @Input() patients: any[] = []; // Accept filtered workers list as input
  selectedPatient: any = null; // Stores the patient data to pass to the edit form

  onDPI(patient: any): void {
    this.selectedPatient = patient; // Pass the patient data to the popup
  }
}
