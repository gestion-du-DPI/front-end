import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ConfirmLogoutPopupComponent } from '../popups/confirm-logout-popup/confirm-logout-popup.component';

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule, RouterLink, ConfirmLogoutPopupComponent],
  template: `
    <div
      class="bg-main top-0 z-40 sm:rounded-none sm:m-0 text-white transition-all duration-300 sm:h-full flex flex-col justify-between fixed"
      [class.md:w-24]="isSidebarCollapsed"
      [class.w-48]="!isSidebarCollapsed"
      [class.h-full]="!isSidebarCollapsed"
      [class.w-48]="!isSidebarCollapsed"
      [class.rounded-br-xl]="isSidebarCollapsed"
      (click)="toggleSidebar()"
    >
      <!-- Logo Section -->
      <div class="flex items-center justify-center h-16 gap-2">
        <img
          src="logo.png"
          alt="Logo"
          class="h-9 w-auto"
          [class.mx-5]="isSidebarCollapsed"
        />
        <span *ngIf="showText" class="font-bold">Doctify</span>
      </div>

      <!-- Main Navigation -->
      <ul
        class="list-none sm:flex p-0 m-0  flex-col items-start self-center gap-8"
        [class.hidden]="isSidebarCollapsed"
      >
        <li
          class="flex gap-4 cursor-pointer hover:bg-black hover:bg-opacity-40 rounded-full p-4"
          (click)="$event.stopPropagation()"
          routerLink="/home"
        >
          <img src="sidebar-home.svg" class="h-6 w-6" />
          <span *ngIf="showText" class="mt-[1px] font-bold align-text-bottom"
            >Home</span
          >
        </li>
        <li
          class="flex gap-4 cursor-pointer hover:bg-black hover:bg-opacity-40 rounded-full p-4"
          (click)="$event.stopPropagation()"
          routerLink="/patients"
        >
          <img src="sidebar-patient.svg" class="h-6 w-6" />
          <span *ngIf="showText" class="mt-1 font-bold">Patients</span>
        </li>
        <li
          class="flex gap-4 cursor-pointer hover:bg-black hover:bg-opacity-40 rounded-full p-4"
          (click)="$event.stopPropagation()"
          routerLink="/staff"
        >
          <img src="sidebar-doctor.svg" class="h-6 w-6" />
          <span *ngIf="showText" class="mt-1 font-bold">Staff</span>
        </li>
      </ul>

      <!-- Footer Buttons -->
      <div
        class="sm:flex flex-col items-start self-center gap-3 mb-4"
        [class.hidden]="isSidebarCollapsed"
      >
        <div
          class="flex gap-4 cursor-pointer hover:bg-black hover:bg-opacity-40 rounded-full p-4"
          (click)="$event.stopPropagation()"
          routerLink="/editprofile"
        >
          <img src="sidebar-edit.svg" class="h-6" />
          <span *ngIf="showText" class="font-bold">Edit Profile</span>
        </div>
        <div
          class="flex gap-4 cursor-pointer hover:bg-black hover:bg-opacity-40 rounded-full p-4"
          (click)="onLogout(); $event.stopPropagation()"
        >
          <img src="sidebar-logout.svg" class="h-6" />
          <span *ngIf="showText" class="font-bold">Log out</span>
        </div>
      </div>

      <div class="popup" *ngIf="showLogoutPopup">
        <app-confirm-logout-popup
          (cancel)="onCancelLogout()"
        ></app-confirm-logout-popup>
      </div>
    </div>
  `,
  styles: [],
})
export class SidebarComponent {
  isSidebarCollapsed = true;
  showText = false;
  showLogoutPopup = false;

  onLogout() {
    console.log('Add new patient');
    this.showLogoutPopup = true;
    this.hideSideBar();
  }

  onCancelLogout() {
    this.showLogoutPopup = false;
    this.hideSideBar();
  }

  toggleSidebar() {
    this.isSidebarCollapsed ? this.showSidebar() : this.hideSideBar(); // Toggle sidebar visibility and show text accordingly
  }

  showSidebar() {
    this.isSidebarCollapsed = false; // Expand sidebar
    setTimeout(() => {
      this.showText = true; // Show text after delay
    }, 200); // Delay for 300ms
  }

  hideSideBar() {
    this.isSidebarCollapsed = true;
    this.showText = false;
  }
}
