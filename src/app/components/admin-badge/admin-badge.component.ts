import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminInfoPopupComponent } from '../popups/admin-info-popup/admin-info-popup.component';

@Component({
  selector: 'app-admin-badge',
  standalone: true,
  imports: [CommonModule, AdminInfoPopupComponent],
  template: `
    <div
      class="flex flex-row items-center gap-2 cursor-pointer hover:bg-slate-100 p-3 rounded-lg"
      (click)="togglePopup()"
    >
      <img
        src="admin-pfp.jpg"
        class="w-12 h-12 object-cover rounded-full"
        alt="Admin Profile Picture"
      />
      <p class="font-semibold text-base">{{ name }}</p>
    </div>

    <div class="popup" *ngIf="showPopup">
      <app-admin-info-popup (closePopup)="closePopup()"></app-admin-info-popup>
    </div>
  `,
  styles:``,
})

export class AdminBadgeComponent {
  name: string = 'Dr. Sadoun';
  showPopup: boolean = false;

  togglePopup() {
    this.showPopup = !this.showPopup;
  }

  closePopup() {
    this.showPopup = false;
  }
}
