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
  private dataCache: AdminDashboard | null = null;

  constructor(private http: HttpClient) {}

  getcachedData() {
    if (this.dataCache) {
      return this.dataCache;
    } else {
      return this.getDashboardData();
    }
  }

  updateCachedData(data: AdminDashboard) {
    this.dataCache = data;
  }

  // Fetches the admin dashboard data
  getDashboardData() {
    return this.http.get<AdminDashboard>(`${this.baseUrl}/admin/home`);
  }
}
