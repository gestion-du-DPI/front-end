import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Patient } from '../../models/patient';
import { PATIENTS } from '../../mock-data/patients-temp';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PatientService {
  private apiUrl = environment.apiUrl+'/patients'; //yadra wsh heda

  constructor(private http: HttpClient) {}

  getPatients(): Observable<Patient[]> {
    // return this.http.get<Patient[]>(this.apiUrl); //uncomment it when integrating, for now we return the static value
    return of(PATIENTS);
  }

  addPatient(patient: Patient): Observable<Patient> {
    return this.http.post<Patient>(this.apiUrl, patient);
  }

  editPatient(patient: Patient): Observable<Patient> {
    return this.http.put<Patient>(this.apiUrl, patient);
  }

  deletePatient(patient: Patient): Observable<Patient> {
    return this.http.delete<Patient>(this.apiUrl, {body: patient});
  }
}
