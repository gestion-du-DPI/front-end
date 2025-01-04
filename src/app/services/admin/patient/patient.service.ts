import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Patient } from '../../../models/admin-patient';
import { environment } from '../../../../environments/environment';
import { EditPatient, PatientToSend } from '../../../models/edit-patient';

@Injectable({
  providedIn: 'root',
})
export class PatientService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getPatients(): Observable<Patient[]> {
    return this.http.get<Patient[]>(`${this.apiUrl}/admin/patients`).pipe(
      catchError((error) => {
        console.error('Error fetching patients:', error);
        // Return an empty array or a fallback value in case of an error
        return of([]); // Returning an empty array as a fallback
      })
    );
  }

  addPatient(patient: Patient): Observable<Patient> {
    console.log('Adding patient:', patient);
    return this.http.post<Patient>(
      `${this.apiUrl}/admin/create/patient`,
      patient
    );
  }

  editPatient(patient: EditPatient): Observable<PatientToSend> {
    const patientToSend: PatientToSend = {
      first_name: patient.first_name,
      last_name: patient.last_name,
      nss: patient.nss,
      address: patient.address,
      phone_number: patient.phone_number,
      email: patient.email,
      emergency_contact_name: patient.emergency_contact_name,
      emergency_contact_phone: patient.emergency_contact_phone,
    };
    console.log('Patient to send:', patientToSend);
    return this.http
      .patch<PatientToSend>(
        `${this.apiUrl}/admin/modifypatient/${patient.user_id}`,
        patientToSend
      )
      .pipe(
        catchError((error) => {
          console.error('Error editing patient:', error);
          return throwError(() => new Error('Error editing patient'));
        })
      );
  }

  editpfpPatient(formData: FormData, userId: number): Observable<any> {
    return this.http
      .patch(`${this.apiUrl}/admin/modifyworker/${userId.toString()}`, formData) // Send the FormData to the backend
      .pipe(
        catchError((error) => {
          console.error('Error editing worker:', error);
          return throwError(() => new Error('Error editing worker'));
        })
      );
  }

  deletePatient(patientId: number): Observable<void> {
    return this.http
      .delete<void>(`${this.apiUrl}/admin/deleteuser/${patientId.toString()}`)
      .pipe(
        catchError((error) => {
          console.error('Error deleting patient:', error);
          return throwError(() => new Error('Error deleting patient'));
        })
      );
  }
}
