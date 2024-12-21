import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../components/header/header.component';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, HeaderComponent],
  template: `
    <div class="flex flex-col">
      <div class="flex flex-col gap-4 lg:mx-16 mx-3">
        <div class="flex justify-between  items-center gap-12">
          <div class="p-4">
            <h1 class="text-xl " style="color: black; font-weight:400">
              Welcome in
              <span class="text-main font-semibold">Hope Springs Healing</span>
            </h1>
            <h2 class="text-2xl font-semibold text-main ">{{ name }}</h2>
          </div>
          <app-header></app-header>
        </div>
      </div>

      <!-- Gray Separator Line -->
      <div class="border-b" style="color: #F0F0F0;"></div>
      <div class="pl-24 pt-4">
        <h2 class="text-xl" style="font-weight:600; color: #373C9E; ">
          DASHBOARD OVERVIEW
        </h2>
      </div>

      <!-- DASHBOARD OVERVIEW -->
      <div
        class=" flex justify-start pt-4 gap-9"
        style="margin-left: 95px; margin-right: 50px;"
      >
        <!-- Dashboard Card 1 -->
        <div
          class="w-[214px] h-[110px] bg-[#999BFD] rounded-lg p-4 border-2 border-[#F0F0F0] flex flex-col gap-2"
        >
          <div class="flex justify-between items-center">
            <p class="font-semibold text-sm opacity-60 font-plus-jakarta">
              Total Patients
            </p>
            <img src="dashboard-patient.svg" alt="patientImage" />
          </div>
          <div class="flex justify-between items-center">
            <p class="text-3xl font-bold font-plus-jakarta   ">911</p>
            <p class="text-sm font-light opacity-60 font-plus-jakarta">+25%</p>
          </div>
        </div>

        <!-- Dashboard Card 2 -->
        <div
          class="w-[214px] h-[110px] bg-[#A7DAF8] rounded-lg p-4 border-2 border-[#F0F0F0] flex flex-col gap-2"
        >
          <div class="flex justify-between items-center">
            <p class="font-semibold text-sm opacity-60 font-plus-jakarta">
              Total Doctors
            </p>
            <img src="dashboard-doctor.svg" alt="patientImage" />
          </div>
          <div class="flex justify-between items-center">
            <p class="text-3xl font-bold font-plus-jakarta">911</p>
            <p class="text-sm font-light opacity-60 font-plus-jakarta">+25%</p>
          </div>
        </div>

        <!-- Dashboard Card 3 -->
        <div
          class="w-[214px] h-[110px] bg-[#8FDBF2] rounded-lg p-4 border-2 border-[#F0F0F0] flex flex-col gap-2"
        >
          <div class="flex justify-between items-center">
            <p class="font-semibold text-sm opacity-60 font-plus-jakarta">
              Total Nurses
            </p>
            <img src="dashboard-nurse.svg" alt="patientImage" />
          </div>
          <div class="flex justify-between items-center">
            <p class="text-3xl font-bold font-plus-jakarta">911</p>
            <p class="text-sm font-light opacity-60 font-plus-jakarta">+25%</p>
          </div>
        </div>

        <!-- Dashboard Card 4 -->
        <div
          class="w-[214px] h-[110px] bg-[#92E2EE] rounded-lg p-4 border-2 border-[#F0F0F0] flex flex-col gap-2"
        >
          <div class="flex justify-between items-center">
            <p class="font-semibold text-sm opacity-60 font-plus-jakarta">
              lab/radiologists
            </p>
            <img src="dashboard-add.svg" alt="patientImage" />
          </div>
          <div class="flex justify-between items-center">
            <p class="text-3xl font-bold font-plus-jakarta">911</p>
            <p class="text-sm font-light opacity-60 font-plus-jakarta">+25%</p>
          </div>
        </div>

        <!-- Dashboard Card 5 -->
        <div
          class="w-[214px] h-[110px] bg-[#94E9E9] rounded-lg p-4 border-2 border-[#F0F0F0] flex flex-col gap-2"
        >
          <div class="flex justify-between items-center">
            <p class="font-semibold text-sm opacity-60 font-plus-jakarta">
              Total Consultations
            </p>
            <img src="dashboard-cons.svg" alt="patientImage" />
          </div>
          <div class="flex justify-between items-center">
            <p class="text-3xl font-bold font-plus-jakarta">911</p>
            <p class="text-sm font-light opacity-60 font-plus-jakarta">+25%</p>
          </div>
        </div>
      </div>

      <!-- DASHBORAD CONTENT -->
      <div class="flex justify-between items-center pt-8 w-[1310px] gap-9">
        <!-- STATISTICS AND RECENT PATIENTS -->
        <div
          class="w-[900px] h-[704px] gap-7"
          style="margin-left: 50px;margin-right:0px; padding-right:0px; "
        >
          <!-- STATISTICS -->
          <div
            class="bg-white w-[900px] h-[338px] border-2 border-[#F4F2F2] rounded-[16px] pt-6 pl-6 pb-6 pr-12 m-0"
            style="margin-bottom: 30px;"
          >
            <div class="flex justify-between items-center pr-4">
              <p class="text-main" style="font-weight: 600; font-size:20px">
                Statistics
              </p>
              <img src="dashboard-stat.svg" alt="" />
            </div>
          </div>
          <!-- RECENT PATIENTS -->
          <div
            class="bg-white w-[900px] h-[338px] border-2 border-[#F4F2F2] rounded-[16px] pt-6 pl-6 pb-6 pr-12"
          >
            <div class="flex justify-between items-center pr-7">
              <p class="text-main" style="font-weight: 600; font-size:20px">
                Recent Patients
              </p>
              <div class="mt-4 text-right flex  gap-5">
                <a
                  href="#"
                  class="text-[#667085] font-bold text-[10px] cursor-pointer hover:underline font-plus-jakarta"
                  style="letter-spacing: 1px; "
                  >SEE ALL PATIENTS</a
                >
                <img src="dashboard-seeall.svg" alt="" />
              </div>
            </div>
            <!---- RECENT PATIENTS TABLE -->
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
                  class=" bg-white rounded-lg overflow-hidden h-[calc(100%-40px)]"
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
                        <span
                          class="font-semibold text-[12px] w-[8] text-left"
                          >{{ patient.name }}</span
                        >
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
          class="w-full h-[704px] bg-white border-2 border-[#F4F2F2] rounded-[16px] p-6 flex flex-col"
        >
          <h3 class="text-[20px] font-semibold text-main mb-4">
            Top Medical Staff
          </h3>

          <ul class="space-y-6 overflow-y-auto max-h-[1000px] flex-grow">
            <!-- Loop through the top medical staff data -->
            <li *ngFor="let staff of topMedicalStaff" class="flex flex-col ">
              <div class="w-[210px] h-[47px] flex justify-between ">
                <img
                  [src]="staff.profilePicture"
                  alt="Doctor Avatar"
                  class="w-10 h-10 rounded-full "
                />
                <div class="w-[210px] h-[47px] pl-4">
                  <p class="font-bold text-black text-[13px] text-left">
                    {{ staff.name }}
                  </p>
                  <p class="font-normal	text-[#667085] text-[13px] text-left">
                    {{ staff.role }}
                  </p>
                </div>
              </div>
            </li>
          </ul>
          <div class="mt-4 text-left flex   gap-5">
            <a
              href="#"
              class="text-[#667085] font-bold text-[10px] cursor-pointer hover:underline font-plus-jakarta"
              style="letter-spacing: 1px; "
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

  topMedicalStaff = [
    {
      name: 'Jenny Wilson',
      role: 'Doctor@Generalist',
      profilePicture: 'doctor-avatar.svg',
    },
    {
      name: 'Jenny Wilson',
      role: 'Doctor@Cardiologist',
      profilePicture: 'doctor-avatar.svg',
    },
    {
      name: 'Jenny Wilson',
      role: 'Radiologist@X-ray',
      profilePicture: 'doctor-avatar.svg',
    },
    {
      name: 'Jenny Wilson',
      role: 'Radiologist@X-ray',
      profilePicture: 'doctor-avatar.svg',
    },
    {
      name: 'Jenny Wilson',
      role: 'Radiologist@X-ray',
      profilePicture: 'doctor-avatar.svg',
    },
    {
      name: 'Jenny Wilson',
      role: 'Radiologist@X-ray',
      profilePicture: 'doctor-avatar.svg',
    },
    {
      name: 'Jenny Wilson',
      role: 'Radiologist@X-ray',
      profilePicture: 'doctor-avatar.svg',
    },
    {
      name: 'Devon Lane',
      role: 'Doctor@generalist',
      profilePicture: 'doctor-avatar.svg',
    },
    {
      name: 'Jane Cooper',
      role: 'Doctor@generalist',
      profilePicture: 'doctor-avatar.svg',
    },
  ];
}
