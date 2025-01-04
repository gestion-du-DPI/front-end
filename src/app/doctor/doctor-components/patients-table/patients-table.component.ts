import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Patient } from '../../../models/patient';

@Component({
  selector: 'app-patients-table',
  imports: [CommonModule],
  template: `
    <table class="border-collapse justify-self-center table-auto w-full">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email Address</th>
          <th>Phone Number</th>
          <th class="hidden md:table-cell">NSS</th>
          <th class="hidden lg:table-cell">Address</th>
          <th class="hidden lg:table-cell">E^ Contact</th>
          <th class="hidden sm:table-cell">E^ Phone</th>
          <th class="min-w-14">DPI</th>
        </tr>
      </thead>
      <tbody class="border-[1px] bg-white rounded-lg overflow-hidden">
        <tr *ngFor="let patient of patients" class="hover:bg-slate-50">
          <td class="flex flex-row gap-4 items-center">
            <img
              [src]="patient.profile_picture || 'no-pfp.png'"
              class="w-10 h-10 object-cover rounded-full"
              alt="Profile Picture"
            />
            <div class="flex flex-col">
              <span class="font-bold text-sm text-left">{{
                patient.first_name + ' ' + patient.last_name
              }}</span>
            </div>
          </td>
          <td>{{ patient.email }}</td>
          <td>{{ patient.phone_number }}</td>
          <td class="hidden md:table-cell">{{ patient.nss }}</td>
          <td class="hidden lg:table-cell">{{ patient.address }}</td>
          <td class="hidden lg:table-cell">
            {{ patient.emergency_contact_name }}
          </td>
          <td class="hidden sm:table-cell">
            {{ patient.emergency_contact_phone }}
          </td>
          <td class="cursor-pointer px-0" (click)="onDPI(patient)">
            <img
              src="dpi-icon.svg"
              class="hover:bg-slate-100 rounded-xl p-1 w-9 h-9"
              alt="dpi"
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
        padding: 0px;
      }
    `,
  ],
})
export class PatientsTableComponent {
  @Input() patients: Patient[] = []; // Accept filtered workers list as input
  selectedPatient: any = null; // Stores the patient data to pass to the edit form

  constructor(private router: Router) {}

  onDPI(patient: any): void {
    this.router.navigate(['/doctor/patient-details', patient.id]);
  }
}
