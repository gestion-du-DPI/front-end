import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Patient } from '../../../models/patient';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PatientService {
  private apiUrl = environment.apiUrl;

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

  addPatient(patient: Patient): Observable<Patient> {
    console.log('Adding patient:', patient);
    return this.http.post<Patient>(
      `${this.apiUrl}/admin/create/patient`,
      patient
    );
  }

  editPatient(patient: Patient): Observable<Patient> {
    return this.http.put<Patient>(`${this.apiUrl}`, patient).pipe(
      catchError((error) => {
        console.error('Error editing patient:', error);
        return throwError(() => new Error('Error editing patient'));
      })
    );
  }

  deletePatient(patientId: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${patientId}`).pipe(
      catchError((error) => {
        console.error('Error deleting patient:', error);
        return throwError(() => new Error('Error deleting patient'));
      })
    );
  }
}
