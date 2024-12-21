import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  template: `
    <div 
    class="flex-1 flex flex-col"
    >
      <!-- Top Section -->
      <div class="flex justify-between items-center p-4 bg-white "  style="margin-left: 50px; margin-right: 50px;">
        <!-- Welcome Section -->
        <div >
          <h1 class="text-xl " style="color: black; font-weight:400">
            Welcome in <span style="color: #373C9E;">Hope Springs Healing</span>
          </h1>
          <h2 class="text-2xl font-semibold " style="color: #373C9E">Dr. MOSTEFAI mounir</h2>
        </div>

        <!-- Actions Section -->
        <div class="flex items-center" style="gap: 80px;">
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
          <div class="flex items-center space-x-2 cursor-pointer  w-[161pxpx] h-[38px]">
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
      

      <!-- Placeholder for Dashboard Content -->
      <div class="p-6  h-full">
        <p class="text-gray-500">Dashboard content goes here...</p>
      </div>
    </div>
  `,
  styles: [],
})
export class DashboardComponent {}
