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
          <th class="hidden md:table-cell">NSS</th>
          <th class="hidden lg:table-cell">Address</th>
          <th class="hidden lg:table-cell">E^ Contact</th>
          <th class="hidden sm:table-cell">E^ Phone</th>
          <th class="hidden lg:table-cell">Consultations</th>
        </tr>
      </thead>
      <tbody class="border-[1px] bg-white rounded-lg overflow-hidden">
        <tr *ngFor="let patient of patients" class="hover:bg-slate-50">
          <td class="flex flex-row gap-4 items-center">
            <img
              [src]="patient.profilePicture || 'no-pfp.png'"
              class="w-10 h-10 object-cover rounded-full"
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
          <td class="hidden md:table-cell">{{ patient.socialNumber }}</td>
          <td class="hidden lg:table-cell">{{ patient.address }}</td>
          <td class="hidden lg:table-cell">{{ patient.emergencyContact }}</td>
          <td class="hidden sm:table-cell">{{ patient.emergencyPhone }}</td>
          <td class="hidden lg:table-cell">{{ patient.consultations }}</td>
          
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

  
}
