import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Patient } from '../../models/patient';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PatientService {
  private apiUrl = environment.apiUrl + '/patients'; // API URL for fetching patients

  constructor(private http: HttpClient) {}

  getPatients(): Observable<Patient[]> {
    return this.http.get<Patient[]>(this.apiUrl).pipe(
      catchError((error) => {
        console.error('Error fetching patients:', error);
        // Return an empty array or a fallback value in case of an error
        return of([]); // Returning an empty array as a fallback
      })
    );
  }

  getPatientById(patientId: string): Observable<Patient> {
    return this.http.get<Patient>(`${this.apiUrl}/${patientId}`).pipe(
      catchError((error) => {
        console.error('Error fetching patient:', error);
        return throwError(() => new Error('Error fetching patient'));
      })
    );
  }

  addPatient(patient: Patient): Observable<Patient> {
    return this.http.post<Patient>(this.apiUrl, patient);
  }

  // editPatient(patient: Patient): Observable<Patient> {
  //   return this.http.put<Patient>(`${this.apiUrl}/${patient.id}`, patient).pipe(
  //     catchError((error) => {
  //       console.error('Error editing patient:', error);
  //       return throwError(() => new Error('Error editing patient'));
  //     })
  //   );
  // }

  deletePatient(patientId: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${patientId}`).pipe(
      catchError((error) => {
        console.error('Error deleting patient:', error);
        return throwError(() => new Error('Error deleting patient'));
      })
    );
  }
}
