import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule],
  template: `
    <div
      class="bg-main top-0 text-white transition-all duration-300 flex flex-col justify-between h-full fixed"
      [class.w-24]="isSidebarCollapsed"
      [class.w-48]="!isSidebarCollapsed"
      (click)="toggleSidebar()"
    >
      <!-- Logo Section -->
      <div class="flex items-center justify-center h-16 gap-2">
        <img src="logo.png" alt="Logo" class="h-9 w-auto" />
        <span *ngIf="showText" class="font-bold">Doctify</span>
      </div>

      <!-- Main Navigation -->
      <ul class="list-none p-0 m-0 flex flex-col items-start self-center gap-10">
        <li
          class="flex gap-4 cursor-pointer"
          (click)="$event.stopPropagation()"
        >
          <img src="sidebar-home.svg" class="h-5" />
          <span *ngIf="showText" class="mt-1 font-bold align-text-bottom">Home</span>
        </li>
        <li
          class="flex gap-4 cursor-pointer"
          (click)="$event.stopPropagation()"
        >
          <img src="sidebar-patient.svg" class="h-6" />
          <span *ngIf="showText" class="mt-1 font-bold">Patients</span>
        </li>
        <li
          class="flex gap-4 cursor-pointer"
          (click)="$event.stopPropagation()"
        >
          <img src="sidebar-doctor.svg" class="h-6" />
          <span *ngIf="showText" class="mt-1 font-bold">Workers</span>
        </li>
      </ul>

      <!-- Footer Buttons -->
      <div class="flex flex-col items-start self-center gap-6 mb-4">
        <div
          class="flex gap-4 cursor-pointer"
          (click)="$event.stopPropagation()"
        >
          <img src="sidebar-edit.svg" class="h-6" />
          <span *ngIf="showText" class="font-bold">Edit Profile</span>
        </div>
        <div
          class="flex gap-4 cursor-pointer"
          (click)="$event.stopPropagation()"
        >
          <img src="sidebar-logout.svg" class="h-6" />
          <span *ngIf="showText" class="font-bold">Log out</span>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class SidebarComponent {
  isSidebarCollapsed = true;
  showText = false;

  toggleSidebar() {
    if (this.isSidebarCollapsed) {
      this.isSidebarCollapsed = false; // Expand sidebar
      setTimeout(() => {
        this.showText = true; // Show text after delay
      }, 100); // Delay for 300ms
    } else {
      this.showText = false; // Hide text immediately
        this.isSidebarCollapsed = true; // Collapse sidebar after delay
    }
  }
}
