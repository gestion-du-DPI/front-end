import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { DocHome } from '../../../models/doc-dashboard';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EditProfileService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}
  
  updateUserProfile(formData: FormData): Observable<any> {
    return this.http.patch<any>(`${this.apiUrl}/doctor/modifymyuser`, formData);
  }
}
