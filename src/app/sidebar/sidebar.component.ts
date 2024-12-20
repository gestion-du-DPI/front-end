import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule],
  template: `
    <div
      class="bg-[#393E9F] text-white transition-all duration-300 flex flex-col justify-between h-full"
      [class.w-16]="isSidebarCollapsed"
      [class.w-48]="!isSidebarCollapsed"
      (click)="toggleSidebar()"
      [ngClass]="{'w-16': isSidebarCollapsed, 'w-48': !isSidebarCollapsed}"
    >
      <!-- Logo Section -->
      <div class="flex items-center justify-center h-16 gap-2">
        <img src="logo.png" alt="Logo" class="h-9 w-auto" />
        <span *ngIf="!isSidebarCollapsed" class="font-bold">Doctify</span>
      </div>

      <!-- Main Navigation -->
      <ul class="list-none p-0 m-0 flex flex-col items-center gap-6">
        <li
          class="flex items-center gap-3 cursor-pointer"
          (click)="$event.stopPropagation()"
        >
          <img src="sidebar-home.png" class="h-6" />
          <span *ngIf="!isSidebarCollapsed" class="font-bold">Home</span>
        </li>
        <li
          class="flex items-center gap-3 cursor-pointer"
          (click)="$event.stopPropagation()"
        >
          <img src="sidebar-patient.png" class="h-6" />
          <span *ngIf="!isSidebarCollapsed" class="font-bold">Patients</span>
        </li>
        <li
          class="flex items-center gap-3 cursor-pointer"
          (click)="$event.stopPropagation()"
        >
          <img src="sidebar-doctors.png" class="h-6" />
          <span *ngIf="!isSidebarCollapsed" class="font-bold">Workers</span>
        </li>
      </ul>

      <!-- Footer Buttons -->
      <div class="flex flex-col items-center gap-6 mb-4">
        <div
          class="flex items-center gap-3 cursor-pointer"
          (click)="$event.stopPropagation()"
        >
          <img src="sidebar-edit.png" class="h-6" />
          <span *ngIf="!isSidebarCollapsed" class="font-bold">Edit Profile</span>
        </div>
        <div
          class="flex items-center gap-3 cursor-pointer"
          (click)="$event.stopPropagation()"
        >
          <img src="sidebar-logout.png" class="h-6" />
          <span *ngIf="!isSidebarCollapsed" class="font-bold">Log out</span>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class SidebarComponent {
  isSidebarCollapsed = false;

  toggleSidebar() {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
  }
}
