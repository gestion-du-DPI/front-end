import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { DashboardService } from '../../../services/admin/dashboard/dashboard.service';

// components
import { HeaderComponent } from '../../admin-components/header/header.component';
import { StatisticsGraphComponent } from '../../admin-components/statistics-graph/statistics-graph.component';
import { CardComponent } from '../../admin-components/dashboard-card/dashboard-card.component';

@Component({
  selector: 'app-dashboard',
  imports: [
    CommonModule,
    HeaderComponent,
    StatisticsGraphComponent,
    CardComponent,
    RouterLink,
  ],
  template: `
    <div class="flex flex-col">
      <div class="flex flex-col gap-4 lg:mx-12 mx-3">
        <div
          class="flex flex-col lg:flex-row justify-between items-center gap-4 lg:gap-12"
        >
          <div class="p-4">
            <h1 class="text-xl" style="color: black; font-weight:400">
              Welcome in
              <span class="text-main font-semibold"> {{ hospitalName }} </span>
            </h1>
            <h2 class="text-2xl font-semibold text-main">{{ name }}</h2>
          </div>
          <app-header (reload)="reloadPage()"></app-header>
        </div>
      </div>

      <!-- Gray Separator Line -->
      <div class="border-b" style="color: #F0F0F0;"></div>
      <div class="pl-4 lg:pl-16 pt-4">
        <h2 class="text-xl" style="font-weight:600; color: #373C9E;">
          DASHBOARD OVERVIEW
        </h2>
      </div>

      <!-- DASHBOARD OVERVIEW -->
      <div class="flex flex-wrap justify-between  pt-4 mx-3 lg:mx-12">
        <app-card
          [title]="'Total Patients'"
          [count]="totalPatients"
          [color]="'bg-main'"
          [icon]="'dashboard-patient.svg'"
        ></app-card>

        <app-card
          [title]="'Total Doctors'"
          [count]="totalDoctors"
          [color]="'bg-secondary'"
          [icon]="'dashboard-doctor.svg'"
        ></app-card>

        <app-card
          [title]="'Total Nurses'"
          [count]="totalNurses"
          [color]="'bg-tertiary'"
          [icon]="'dashboard-nurse.svg'"
        ></app-card>

        <app-card
          [title]="'Lab/Radiologists'"
          [count]="totalRadiologists"
          [color]="'bg-quaternary'"
          [icon]="'dashboard-add.svg'"
        ></app-card>

        <app-card
          [title]="'Total Consultations'"
          [count]="totalConsultations"
          [color]="'bg-fifth'"
          [icon]="'dashboard-cons.svg'"
        ></app-card>
      </div>

      <!-- DASHBOARD CONTENT -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-4 pt-4 mx-3 lg:mx-12">
        <!-- STATISTICS AND RECENT PATIENTS -->
        <div
          class="w-full lg:col-span-2 h-auto lg:h-[704px] flex flex-col justify-between"
        >
          <!-- STATISTICS -->
          <div
            class="bg-white w-full lg:w-auto xl:w-auto h-auto lg:h-[338px] border-2 border-[#F4F2F2] rounded-[16px] p-6 mb-4 lg:mb-0"
          >
            <div class="flex justify-between items-center pb-4">
              <p class="text-main" style="font-weight: 600; font-size:20px;">
                Statistics
              </p>
              <img src="dashboard-stat.svg" alt="" />
            </div>
            <div class="graph-container w-full">
              <app-statistics-graph></app-statistics-graph>
            </div>
          </div>
          <!-- RECENT PATIENTS -->
          <div
            class="bg-white w-full lg:w-auto xl:w-auto h-auto lg:h-[338px] border-2 border-[#F4F2F2] rounded-[16px] p-6"
          >
            <div class="flex justify-between items-center">
              <p class="text-main" style="font-weight: 600; font-size:20px;">
                Recent Patients
              </p>
              <div class="mt-4 text-right flex gap-5">
                <a
                  href="#"
                  class="text-[#667085] font-bold text-[10px] cursor-pointer hover:underline font-plus-jakarta"
                  style="letter-spacing: 1px;"
                  routerLink="/patients"
                  >SEE ALL PATIENTS</a
                >
                <img src="dashboard-seeall.svg" alt="" />
              </div>
            </div>
            <!-- RECENT PATIENTS TABLE -->
            <div class="overflow-x-auto h-full">
              <table class="min-w-full table-auto mt-6">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email Address</th>
                    <th>Phone Number</th>
                    <th>Social Number</th>
                    <th>Address</th>
                    <th>E^Contact</th>
                    <th>E^Phone</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody
                  class="bg-white rounded-lg overflow-hidden h-[calc(100%-40px)]"
                >
                  <tr
                    *ngFor="let patient of recentPatients"
                    class="hover:bg-slate-50"
                  >
                    <td class="flex flex-row gap-4 items-center">
                      <img
                        [src]="patient.profilePicture"
                        class="w-8 h-8 rounded-full cursor-pointer"
                        alt="Profile Picture"
                      />
                      <div class="flex flex-col">
                        <span class="font-semibold text-[12px] w-[8] text-left">
                          {{ patient.name }}
                        </span>
                      </div>
                    </td>
                    <td>{{ patient.email }}</td>
                    <td>{{ patient.phone }}</td>
                    <td>{{ patient.socialNumber }}</td>
                    <td>{{ patient.address }}</td>
                    <td>{{ patient.emergencyContact }}</td>
                    <td>{{ patient.emergencyPhone }}</td>
                    <td>
                      <img
                        [src]="patient.qrCode"
                        alt="QR Code"
                        class="w-10 h-10 pl-4"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <!-- Top Medical Staff -->
        <div
          class="w-full h-auto lg:h-[704px] bg-white border-2 border-[#F4F2F2] rounded-[16px] p-6 flex flex-col"
        >
          <h3 class="text-[20px] font-semibold text-main mb-4">
            Top Medical Staff
          </h3>

          <ul class="space-y-6 overflow-y-auto max-h-[1000px] flex-grow">
            <!-- Loop through the top medical staff data -->
            <li *ngFor="let staff of topMedicalStaff" class="flex flex-col">
              <div class="w-full lg:min-w-[210px] h-[47px] flex gap-x-6">
                <img
                  [src]="staff.profilePicture"
                  alt="Doctor Avatar"
                  class="w-10 h-10 rounded-full"
                />
                <div class="pl-4">
                  <p class="font-bold text-black text-[13px] text-left">
                    {{ staff.name }}
                  </p>
                  <p class="font-normal text-[#667085] text-[13px] text-left">
                    {{ staff.role }}
                  </p>
                </div>
              </div>
            </li>
          </ul>
          <div class="mt-4 text-left flex gap-5">
            <a
              href="#"
              class="text-[#667085] font-bold text-[10px] cursor-pointer hover:underline font-plus-jakarta"
              style="letter-spacing: 1px;"
              routerLink="/staff"
              >SEE ALL WORKERS</a
            >
            <img src="dashboard-seeall.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      td {
        width: 80px;
        text-align: center;
        font-size: 12px;
        font-weight: 600;
        font-family: 'Plus Jakarta Sans', sans-serif;
      }
      th {
        width: 80px;
        padding: 10px 0px;
        font-weight: 500;
        font-size: 12px;
        color: #667085;
        font-family: 'Plus Jakarta Sans', sans-serif;
      }
      span {
        font-family: 'Plus Jakarta Sans', sans-serif;
      }
      .icon {
        padding: 10px 3px;
      }
    `,
  ],
})
export class DashboardComponent {
  private baseUrl = environment.apiUrl;

  constructor(
    private dashboardService: DashboardService,
    private http: HttpClient
  ) {}

  hospitalName: string = '';
  name: string = '';
  recentPatients: {
    name: string;
    phone: string;
    socialNumber: string;
    email: string;
    address: string;
    emergencyContact: string;
    emergencyPhone: string;
    profilePicture: string;
    qrCode: string;
    date: string;
  }[] = [];

  topMedicalStaff: { name: string; role: string; profilePicture: string }[] =
    [];

  totalPatients: number = 0;
  totalDoctors: number = 0;
  totalNurses: number = 0;
  totalRadiologists: number = 0;
  totalConsultations: number = 0;

  ngOnInit() {
    console.log('Dashboard component initialized');
    this.getData();
  }

  getData() {
    this.dashboardService.getDashboardData().subscribe(
      (data) => {
        console.log('Dashboard data fetched successfully');
        this.dashboardService.updateCachedData(data);

        this.hospitalName = data.admin_info.hospital;
        this.name = data.admin_info.name;

        this.totalPatients = data.role_counts.patients;
        this.totalDoctors = data.role_counts.doctors;
        this.totalNurses = data.role_counts.nurses;
        this.totalRadiologists =
          data.role_counts.radiologists + data.role_counts.lab_technicians;
        this.totalConsultations = data.role_counts.consultations;

        this.recentPatients = data.recent_patients.map((patient: any) => ({
          name: patient.name,
          phone: patient.phone_number,
          socialNumber: patient.nss,
          email: patient.email,
          address: patient.address,
          emergencyContact: patient.emergency_contact_name,
          emergencyPhone: patient.emergency_contact_phone,
          profilePicture: 'patient-avatar.svg',
          qrCode: 'QR.svg',
          date: patient.date,
        }));

        this.topMedicalStaff = data.top_staff.map((staff: any) => ({
          name: staff.name,
          role: staff.role,
          profilePicture: 'doctor-avatar.svg',
        }));
      },
      (error) => {
        console.error('Failed to fetch dashboard data');
      }
    );
  }

  reloadPage() {
    window.location.reload();
  }
}
