import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Patient } from '../../../models/patient';
import { PatientService } from '../../../services/patient/patient.service';
import { CommonModule } from '@angular/common';
import { MedicalRecordComponent } from '../../doctor-components/medical-record/medical-record.component';
import { DoctorActionsComponent } from '../../doctor-components/doctor-actions/doctor-actions.component';
import { HeaderComponent } from '../../doctor-components/header/header.component';
import { PatientInfosComponent } from '../../doctor-components/patient-infos/patient-infos.component';

@Component({
  selector: 'app-patient-details',
  imports: [
    CommonModule,
    MedicalRecordComponent,
    DoctorActionsComponent,
    HeaderComponent,
    PatientInfosComponent,
  ],
  template: ` <div class="flex flex-col">
      <div class="flex flex-col gap-4 lg:mx-12 mx-3">
        <div
          class="flex flex-col lg:flex-row justify-between items-center gap-4 lg:gap-12"
        >
          <div class="p-4">
            <h1 class="text-4xl text-main font-semibold">Patient Details</h1>
          </div>

          <app-header></app-header>
        </div>
      </div>
    </div>

    <div class="flex flex-row gap-5 p-5">
      <app-patient-infos></app-patient-infos>

      <app-doctor-actions></app-doctor-actions>
    </div>

    <app-medical-record></app-medical-record>

    
    `,
  styles: `

`,
})
export class PatientDetailsComponent implements OnInit {
  patient: Patient | null = null;

  constructor(
    private route: ActivatedRoute,
    private patientService: PatientService
  ) {}

  ngOnInit(): void {
    const patientId = this.route.snapshot.paramMap.get('id');
    if (patientId) {
      this.patientService.getPatientById(patientId).subscribe({
        next: (data) => (this.patient = data),
        error: (err) => console.error('Error fetching patient:', err),
      });
    }

    // Initialize dropdownStates with 'false' (closed) for each consultation
  }
}
