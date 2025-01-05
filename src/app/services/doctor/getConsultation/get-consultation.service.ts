import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { Consultation } from '../../../models/doc-getConsultation';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class GetConsultationService {
  private apiUrl = `${environment.apiUrl}/doctor`;

  constructor(private http: HttpClient) {}

  private cachedData: { [id: string]: Consultation } = {};

  getConsultationByIdCashed(id: string): Observable<Consultation> {
    if (this.cachedData[id]) {
      return of(this.cachedData[id]);
    } else {
      return this.http.get<Consultation>(`${this.apiUrl}/consultation/get/${id}`).pipe(
        tap(data => this.cachedData[id] = data)
      );
    }
  }

  updateConsultationCache(id: string, consultation: Consultation) {
    this.cachedData[id] = consultation;
  }

  getConsultationById(id: string): Observable<Consultation> {
    return this.http.get<Consultation>(`${this.apiUrl}/consultation/get/${id}`);
  }
}
