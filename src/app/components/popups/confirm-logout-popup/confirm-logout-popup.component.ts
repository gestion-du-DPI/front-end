import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-confirm-logout-popup',
  template: `
    <div
      class="bg-white rounded-xl z-40 w-[400px] p-6 flex flex-col items-center gap-5"
    >
      <img
        src="logout-icon.svg"
        class=" w-10 "
        alt=""
      />
      <h2 class=" font-bold text-xl text-main">Confirm Logout</h2>
      <p class="font-semibold text-black text-center text-base">
        Are you sure you want to log out of Doctify? 
      </p>
      <div class="flex w-full justify-center gap-2">
        <button
          type="button"
          (click)="onCancel()"
          class="flex-1 p-2 border-2 border-main text-main rounded-lg font-semibold"
        >
          Cancel
        </button>
        <button
          type="button"
          (click)="onConfirm()"
          class="flex-1 p-2 bg-main text-white rounded-lg font-semibold"
        >
          Log out
        </button>
      </div>
    </div>
  `,
  styles: [
    `
      h2 {
        font-family: 'Plus Jakarta Sans', sans-serif;
      }
      p {
        font-family: 'Plus Jakarta Sans', sans-serif;
      }
    `,
  ],
})
export class ConfirmLogoutPopupComponent {
  @Output() confirm = new EventEmitter<void>();
  @Output() cancel = new EventEmitter<void>();

  onConfirm() {
    this.confirm.emit();
  }

  onCancel() {
    this.cancel.emit();
  }
}
