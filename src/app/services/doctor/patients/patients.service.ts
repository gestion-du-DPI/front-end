import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { DocPatients } from '../../../models/doc-patients';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PatientService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getPatients(): Observable<DocPatients> {
    return this.http.get<DocPatients>(`${this.apiUrl}/doctor/patients`).pipe(
      catchError((error) => {
        console.error('Error fetching patients:', error);
        // Return an empty array or a fallback value in case of an error
        return of({ patients: [] }); // Returning an empty DocPatients object as a fallback
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
