import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../doctor-components/header/header.component';
import { StatisticsGraphComponent } from '../../../admin/admin-components/statistics-graph/statistics-graph.component';
import { RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-workspace',
  imports: [ 
      CommonModule,
        HeaderComponent,
        StatisticsGraphComponent,
        RouterLink,
  ],
  template:`
    <div class="flex flex-col">
      <div class="flex flex-col gap-4 lg:mx-12 mx-3">
        <div
          class="flex flex-col lg:flex-row justify-between items-center gap-4 lg:gap-12"
        >
          <div class="p-4">
            <h1 class="text-xl" style="color: black; font-weight:400">
              Welcome in
              <span class="text-main font-semibold">Hope Springs Healing</span>
            </h1>
            <h2 class="text-2xl font-semibold text-main">{{ name }}</h2>
          </div>
          <app-header></app-header>
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

        <!-- Requested Tasks -->
        <div
          class="w-full h-auto lg:h-[704px] bg-white border-2 border-[#F4F2F2] rounded-[16px] p-6 flex flex-col"
        >
          <h3 class="text-[20px] font-semibold text-main mb-4">
            Requested Tasks
          </h3>
          <!-- Placeholder for requested tasks -->
          <div></div>
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
export class WorkspaceComponent {
  name: string = 'Dr. Sadoun';
  recentPatients = [
    {
      name: 'Phoenix Baker',
      phone: '0661805577',
      socialNumber: '0001823838',
      email: 'a.denai@esi.dz',
      address: 'Bechar, Algeria',
      emergencyContact: 'Father',
      emergencyPhone: '0661805577',
      profilePicture: 'patient-avatar.svg',
      qrCode: 'QR.svg',
      date: '2024-12-01',
    },
    {
      name: 'Phoenix Baker',
      phone: '0661805577',
      socialNumber: '0001823838',
      email: 'a.denai@esi.dz',
      address: 'Bechar, Algeria',
      emergencyContact: 'Father',
      emergencyPhone: '0661805577',
      profilePicture: 'patient-avatar.svg',
      qrCode: 'QR.svg',
      date: '2024-12-02',
    },
    {
      name: 'Phoenix Baker',
      phone: '0661805577',
      socialNumber: '0001823838',
      email: 'a.denai@esi.dz',
      address: 'Bechar, Algeria',
      emergencyContact: 'Father',
      emergencyPhone: '0661805577',
      profilePicture: 'patient-avatar.svg',
      qrCode: 'QR.svg',
      date: '2024-12-03',
    },
    {
      name: 'Phoenix Baker',
      phone: '0661805577',
      socialNumber: '0001823838',
      email: 'a.denai@esi.dz',
      address: 'Bechar, Algeria',
      emergencyContact: 'Father',
      emergencyPhone: '0661805577',
      profilePicture: 'patient-avatar.svg',
      qrCode: 'QR.svg',
      date: '2024-12-04',
    },
  ];


  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.testProtectedEndpoint();
  }

  testProtectedEndpoint() {
    this.http.get('http://localhost:8000/protected').subscribe(
      response => {
        console.log('Protected endpoint response:', response);
      },
      error => {
        console.error('Error accessing protected endpoint:', error);
      }
    );
  }


}
