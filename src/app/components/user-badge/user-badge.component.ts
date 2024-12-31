import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserInfoPopupComponent } from '../popups/user-info-popup/user-info-popup.component';

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
        src="admin-pfp.jpg"
        class="w-12 h-12 object-cover rounded-full"
        alt="Admin Profile Picture"
      />
      <p class="font-semibold text-base">{{ name }}</p>
    </div>

    <div class="popup" *ngIf="showPopup">
      <app-user-info-popup (closePopup)="closePopup()"></app-user-info-popup>
    </div>
  `,
  styles: ``,
})
export class UserBadgeComponent {
  @Input() title!: { id: number; name: string };

  name: string = '';
  showPopup: boolean = false;

  ngOnInit() {
    this.name = this.title.name;
    console.log(this.title);
  }

  togglePopup() {
    this.showPopup = !this.showPopup;
  }

  closePopup() {
    this.showPopup = false;
  }
}
