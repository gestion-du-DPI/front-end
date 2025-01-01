import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Patient } from '../../../models/patient';
import { PatientService } from '../../../services/patient/patient.service';
import { CommonModule } from '@angular/common';
import { MedicalRecordComponent } from '../../doctor-components/medical-record/medical-record.component';

@Component({
  selector: 'app-patient-details',
  imports: [CommonModule, MedicalRecordComponent],
  template: `
    <app-medical-record></app-medical-record>`,
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
