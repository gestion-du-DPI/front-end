import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserInfoPopupComponent } from '../user-info-popup/user-info-popup.component';

import { DashboardService } from '../../../services/doctor/dashboard/dashboard.service';

@Component({
  selector: 'app-user-badge',
  standalone: true,
  imports: [CommonModule, UserInfoPopupComponent],
  template: `
    <div
      class="flex flex-row items-center gap-2 cursor-pointer hover:bg-slate-100 p-3 rounded-lg"
      (click)="togglePopup()"
    >
      <img
        [src]="title.pfp || 'admin-pfp.jpg'"
        class="w-12 h-12 object-cover rounded-full"
        alt="Admin Profile Picture"
      />
      <p class="font-semibold text-base">{{ title.name }}</p>
    </div>

    <div class="popup" *ngIf="showPopup">
      <app-user-info-popup (closePopup)="closePopup()"></app-user-info-popup>
    </div>
  `,
  styles: ``,
})
export class UserBadgeComponent {
  title: { id: number; name: string; pfp: string } = {
    id: 0,
    name: '',
    pfp: '',
  };
  constructor(private dashboardService: DashboardService) {}

  showPopup: boolean = false;

  ngOnInit() {
    let data = this.dashboardService.getcachedData();
    if ('doctor_info' in data) {
      this.title.id = data.doctor_info.id;
      this.title.name = data.doctor_info.name;
      this.title.pfp = data.doctor_info.profile_image;
    } else {
      data.subscribe((dataCatched: any) => {
        this.title.id = dataCatched.doctor_info.id;
        this.title.name = dataCatched.doctor_info.name;
        this.title.pfp = dataCatched.doctor_info.profile_image;
      });
    }
    console.log(this.title);
  }

  togglePopup() {
    console.log('toggle');
    this.showPopup = !this.showPopup;
  }

  closePopup() {
    this.showPopup = false;
  }
}
