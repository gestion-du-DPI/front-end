// data.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { AdminDashboard } from '../../../models/admin-dashboard';

@Injectable({
  providedIn: 'root', // Makes this service available application-wide
})
export class DashboardService {
  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  // Fetches the admin dashboard data
  getDashboardData() {
    return this.http.get<AdminDashboard>(`${this.baseUrl}/admin/home`);
  }
}
