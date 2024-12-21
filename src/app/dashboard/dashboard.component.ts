import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  template: `
    <div 
    class="flex-1 flex flex-col"
    >
      <!-- Top Section -->
      <div class="flex justify-between items-center p-4 bg-white w-[1,310px] h-[98px]"  style="margin-left: 50px; margin-right: 50px;">
        <!-- Welcome Section -->
        <div >
          <h1 class="text-xl " style="color: black; font-weight:400">
            Welcome in <span style="color: #373C9E; font-weight:400">Hope Springs Healing</span>
          </h1>
          <h2 class="text-2xl font-semibold " style="color: #373C9E">Dr. MOSTEFAI mounir</h2>
        </div>

        <!-- Actions Section -->
        <div class="flex items-center" style="gap: 80px; ">
          <!-- New Patient Button -->
          <button
  class="flex items-center justify-center text-white font-medium rounded-lg transition duration-300 space-x-2"
  style="background-color: #373C9E; width: 235px; height: 62px;"
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
          <div class="flex items-center space-x-2 cursor-pointer  w-[161px] h-[38px]">
            <img
              src="admin-pfp.jpg"
              alt="Doctor Avatar"
              class="w-10 h-10 rounded-full"
            />
            <span class="text-black" style="font-weight:600 ; font-size:14px ; ">Dr. Mostefai</span>
          </div>
        </div>
      </div>

        <!-- Gray Separator Line -->
        <div class="border-b" style="color: #F0F0F0;"></div>
        <div class="pl-24 pt-4">
          <h2 class="text-xl" style="font-weight:600; color: #373C9E; ">DASHBOARD OVERVIEW</h2>
        </div>
        <div class=" flex justify-start pt-4 gap-7" style="margin-left: 75px; margin-right: 50px;">
  <!-- Dashboard Card 1 -->
  <div class="w-[214px] h-[110px] bg-[#999BFD] rounded-lg p-4 border-2 border-[#F0F0F0] flex flex-col gap-2">
    <div class="flex justify-between items-center">
      <p class="font-semibold text-sm opacity-60">Total Patients</p>
      <img src="dashboard-patient.svg" alt="patientImage" />
    </div>
    <div class="flex justify-between items-center">
      <p class="text-3xl font-bold">911</p>
      <p class="text-sm font-light opacity-60">+25%</p>
    </div>
  </div>

  <!-- Dashboard Card 2 -->
  <div class="w-[214px] h-[110px] bg-[#A7DAF8] rounded-lg p-4 border-2 border-[#F0F0F0] flex flex-col gap-2">
    <div class="flex justify-between items-center">
      <p class="font-semibold text-sm opacity-60">Total Patients</p>
      <img src="dashboard-patient.svg" alt="patientImage" />
    </div>
    <div class="flex justify-between items-center">
      <p class="text-3xl font-bold">911</p>
      <p class="text-sm font-light opacity-60">+25%</p>
    </div>
  </div>

  <!-- Dashboard Card 3 -->
  <div class="w-[214px] h-[110px] bg-[#8FDBF2] rounded-lg p-4 border-2 border-[#F0F0F0] flex flex-col gap-2">
    <div class="flex justify-between items-center">
      <p class="font-semibold text-sm opacity-60">Total Patients</p>
      <img src="dashboard-patient.svg" alt="patientImage" />
    </div>
    <div class="flex justify-between items-center">
      <p class="text-3xl font-bold">911</p>
      <p class="text-sm font-light opacity-60">+25%</p>
    </div>
  </div>

  <!-- Dashboard Card 4 -->
  <div class="w-[214px] h-[110px] bg-[#92E2EE] rounded-lg p-4 border-2 border-[#F0F0F0] flex flex-col gap-2">
    <div class="flex justify-between items-center">
      <p class="font-semibold text-sm opacity-60">Total Patients</p>
      <img src="dashboard-patient.svg" alt="patientImage" />
    </div>
    <div class="flex justify-between items-center">
      <p class="text-3xl font-bold">911</p>
      <p class="text-sm font-light opacity-60">+25%</p>
    </div>
  </div>

  <!-- Dashboard Card 5 -->
  <div class="w-[214px] h-[110px] bg-[#94E9E9] rounded-lg p-4 border-2 border-[#F0F0F0] flex flex-col gap-2">
    <div class="flex justify-between items-center">
      <p class="font-semibold text-sm opacity-60">Total Patients</p>
      <img src="dashboard-patient.svg" alt="patientImage" />
    </div>
    <div class="flex justify-between items-center">
      <p class="text-3xl font-bold">911</p>
      <p class="text-sm font-light opacity-60">+25%</p>
    </div>
  </div>


</div>



      
      </div>

      


   
    
  `,
  styles: [],
})
export class DashboardComponent {}
