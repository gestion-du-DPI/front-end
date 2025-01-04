import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { UserProfile } from '../../../models/doc-getDPI';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PatientService {
  private apiUrl = environment.apiUrl; // API URL for fetching patients

  constructor(private http: HttpClient) {}

  getDPIById(patientId: string): Observable<UserProfile> {
    return this.http
      .get<UserProfile>(`${this.apiUrl}/doctor/dpi/get/${patientId}`)
      .pipe(
        catchError((error) => {
          console.error('Error fetching patient:', error);
          return throwError(() => new Error('Error fetching patient'));
        })
      );
  }
}
