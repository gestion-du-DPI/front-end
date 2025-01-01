import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EditProfileService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getUserProfile(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/admin/myuser`);
  }

  updateUserProfile(formData: FormData): Observable<any> {
    return this.http.patch<any>(`${this.apiUrl}/admin/modifymyuser`, formData);
  }
}
