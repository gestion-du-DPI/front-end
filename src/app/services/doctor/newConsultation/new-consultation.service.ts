import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Consultation } from '../../../models/consultation';

@Injectable({
  providedIn: 'root',
})
export class NewConsultationService {
  private apiUrl = `${environment.apiUrl}/doctor/consultation/create`;

  constructor(private http: HttpClient) {}

  createConsultation(consultation: Consultation) {
    return this.http.post<Consultation>(this.apiUrl, consultation);
  }
}
