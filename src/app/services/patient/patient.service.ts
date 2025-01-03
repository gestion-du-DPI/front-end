import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Patient } from '../../models/patient';
import { environment } from '../../../environments/environment';
import { mock_patients } from '../../mock-data/mock-patients';

@Injectable({
  providedIn: 'root',
})
export class PatientService {
  private apiUrl = environment.apiUrl + '/patients'; // API URL for fetching patients

  constructor(private http: HttpClient) {}
  getPatients(): Observable<Patient[]> {
    // Uncomment this section if you intend to fetch patients from an API:
    // return this.http.get<Patient[]>(this.apiUrl).pipe(
    //   catchError((error) => {
    //     console.error('Error fetching patients:', error);
    //     // Return an empty array or a fallback value in case of an error
    //     return of([]); // Returning an empty array as a fallback
    //   })
    // );
  
    // Simulating the use of mock data for now
    return of(mock_patients);
  }
  
  getPatientById(patientId: string): Observable<Patient> {
    // Uncomment this section if you intend to fetch patient data from an API:
    // return this.http.get<Patient>(`${this.apiUrl}/${patientId}`).pipe(
    //   catchError((error) => {
    //     console.error('Error fetching patient:', error);
    //     return throwError(() => new Error('Error fetching patient'));
    //   })
    // );
  
    // Using mock data to find the patient by ID
    const patient = mock_patients.find((p) => p.id === patientId);
    if (patient) {
      return of(patient); // Return the found patient wrapped as an observable
    } else {
      console.error(`Patient with ID ${patientId} not found.`);
      return throwError(() => new Error('Patient not found'));
    }
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
