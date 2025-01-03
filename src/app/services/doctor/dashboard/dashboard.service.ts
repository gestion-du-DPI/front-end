import { DocHome } from './../../../models/doc-dashboard';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  private baseUrl = environment.apiUrl;
  private dataCache: DocHome | null = null;

  constructor(private http: HttpClient) {}

  getcachedData() {
    if (this.dataCache) {
      return this.dataCache;
    } else {
      return this.getDashboardData();
    }
  }

  updateCachedData(data: DocHome) {
    this.dataCache = data;
  }

  // Fetches the admin dashboard data
  getDashboardData() {
    return this.http.get<DocHome>(`${this.baseUrl}/doctor/home`);
  }
}
