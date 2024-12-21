import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  template: `
    <div class="flex-1 flex flex-col">
      <!-- Top Section -->
      <div
        class="flex justify-between items-center p-4 bg-white w-[1,310px] h-[98px]"
        style="margin-left: 50px; margin-right: 50px;"
      >
        <!-- Welcome Section -->
        <div>
          <h1 class="text-xl " style="color: black; font-weight:400">
            Welcome in
            <span class="text-main" style="font-weight:400"
              >Hope Springs Healing</span
            >
          </h1>
          <h2 class="text-2xl font-semibold text-main ">Dr. MOSTEFAI mounir</h2>
        </div>

        <!-- Actions Section -->
        <div class="flex items-center" style="gap: 80px; ">
          <!-- New Patient Button -->
          <button
            class="bg-main flex items-center justify-center text-white font-medium rounded-lg transition duration-300 space-x-2"
            style=" width: 235px; height: 62px;"
          >
            <img
              src="add-icon-white.svg"
              alt="Add Icon"
              class="w-5 h-5"
              style="margin-right: 5px;"
            />
            <span style="font-weight: 700; font-size:16px;">New Patient</span>
          </button>

          <!-- Doctor Info Button -->
          <div
            class="flex items-center space-x-2 cursor-pointer  w-[161px] h-[38px]"
          >
            <img
              src="admin-pfp.jpg"
              alt="Doctor Avatar"
              class="w-10 h-10 rounded-full"
            />
            <span class="text-black" style="font-weight:600 ; font-size:14px ; "
              >Dr. Mostefai</span
            >
          </div>
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
        class=" flex justify-start pt-4 gap-7"
        style="margin-left: 75px; margin-right: 50px;"
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
            <p class="text-3xl font-bold font-plus-jakarta">911</p>
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
      <div class="flex justify-between items-center pt-8">
        <!-- STATISTICS AND RECENT PATIENTS -->
        <div class="w-[900px] h-[704px] gap-7" style="margin-left: 50px;">
          <!-- STATISTICS -->
          <div
            class="bg-white w-[900px] h-[338px] border-2 border-[#F4F2F2] rounded-[16px] pt-6 pl-6 pb-6 pr-12"
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
            <div class="flex justify-between items-center pr-4">
              <p class="text-main" style="font-weight: 600; font-size:20px">
                Recent Patients
              </p>
              <div
                class="w-[162.8px] h-[18px] flex justify-between items-center  gap-[14px] "
              >
                <p
                  class="font-plus-jakarta font-bold text-[11px] text-[#667085]"
                >
                  SEE ALL PATIENTS
                </p>
                <img src="dashboard-seeall.svg" alt="" />
              </div>
            </div>

            <!-- Patients Section -->
            <div
              class="w-full h-auto pt-6 px-6 pb-2 overflow-x-auto table-container"
            >
              <div class="grid grid-cols-8 gap-y-4 font-plus-jakarta">
                <!-- Table Headers -->
                <div class="table-header">Name</div>
                <div class="table-header">Social Number</div>
                <div class="table-header">Phone</div>
                <div class="table-header">Email address</div>
                <div class="table-header">Address</div>
                <div class="table-header">E Contact</div>
                <div class="table-header">E Phone</div>
                <div class="table-header flex justify-center items-center">
                  QR Code
                </div>

                <!-- Patient 1 -->
                <div class="flex items-center space-x-2">
                  <img
                    src="patient-avatar.svg"
                    alt="Profile Picture"
                    class="w-8 h-8 rounded-full"
                  />
                  <div>
                    <div class="table-body">Phoenix Baker</div>
                    <div class="table-body">02/02/2022</div>
                  </div>
                </div>
                <div class="table-body">123456789</div>
                <div class="table-body">+123 456 789</div>
                <div class="table-body">john.doe&#64;example.com</div>
                <div class="table-body">123 Main St, Cityville</div>
                <div class="table-body">Jane Doe</div>
                <div class="table-body">+123 987 654</div>
                <div class="flex justify-center items-center">
                  <img src="QR.svg" alt="QR Code" class="w-4 h-4" />
                </div>

                <!-- Patient 2 -->
                <div class="flex items-center space-x-2">
                  <img
                    src="patient-avatar.svg"
                    alt="Profile Picture"
                    class="w-8 h-8 rounded-full"
                  />
                  <div>
                    <div class="table-body">Phoenix Baker</div>
                    <div class="table-body">02/02/2022</div>
                  </div>
                </div>
                <div class="table-body">987654321</div>
                <div class="table-body">+234 567 890</div>
                <div class="table-body">mary.smith&#64;example.com</div>
                <div class="table-body">456 Elm St, Townsville</div>
                <div class="table-body">Mark Smith</div>
                <div class="table-body">+234 890 123</div>
                <div class="flex justify-center items-center">
                  <img src="QR.svg" alt="QR Code" class="w-4 h-4" />
                </div>

                <!-- Patient 3 -->
                <div class="flex items-center space-x-2">
                  <img
                    src="patient-avatar.svg"
                    alt="Profile Picture"
                    class="w-8 h-8 rounded-full"
                  />
                  <div>
                    <div class="table-body">Phoenix Baker</div>
                    <div class="table-body">02/02/2022</div>
                  </div>
                </div>
                <div class="table-body">456789123</div>
                <div class="table-body">+345 678 901</div>
                <div class="table-body">james.brown&#64;example.com</div>
                <div class="table-body">789 Pine St, Village</div>
                <div class="table-body">Lucy Brown</div>
                <div class="table-body">+345 901 234</div>
                <div class="flex justify-center items-center">
                  <img src="QR.svg" alt="QR Code" class="w-4 h-4" />
                </div>

                <!-- Patient 4 -->
                <div class="flex items-center patient-avatar.svg">
                  <img
                    src="patient-avatar.svg"
                    alt="Profile Picture"
                    class="w-8 h-8 rounded-full"
                  />
                  <div>
                    <div class="table-body">Phoenix Baker</div>
                    <div class="table-body">02/02/2022</div>
                  </div>
                </div>
                <div class="table-body">321654987</div>
                <div class="table-body">+456 789 012</div>
                <div class="table-body">susan.lee&#64;example.com</div>
                <div class="table-body">101 Maple St, Hamlet</div>
                <div class="table-body">David Lee</div>
                <div class="table-body">+456 012 345</div>
                <div class="flex justify-center items-center">
                  <img src="QR.svg" alt="QR Code" class="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [],
})
export class DashboardComponent {}
