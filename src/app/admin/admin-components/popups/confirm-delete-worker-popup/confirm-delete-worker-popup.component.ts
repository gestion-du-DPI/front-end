import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-confirm-delete-worker-popup',
  template: `
    <div
      class="bg-white rounded-xl w-[400px] p-6 flex flex-col items-center gap-5"
    >
      <img
        src="confirm-delete-icon.svg"
        class=" w-16 border rounded-3xl"
        alt=""
      />
      <h2 class=" font-semibold text-xl text-warning-red">Confirm Delete</h2>
      <p class="font-semibold text-center text-base">
        Are you sure you want to delete this worker? This action cannot be
        undone.
      </p>
      <div class="flex w-full justify-center gap-2">
        <button
          type="button"
          (click)="onCancel()"
          class="flex-1 p-2 border-2 border-warning-red text-warning-red rounded-lg font-semibold"
        >
          Cancel
        </button>
        <button
          type="button"
          (click)="onConfirm()"
          class="flex-1 p-2 bg-warning-red text-white rounded-lg font-semibold"
        >
          Delete
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
export class ConfirmDeleteWorkerPopupComponent {
  @Input() worker!: Worker;
  @Output() confirm = new EventEmitter<void>();
  @Output() cancel = new EventEmitter<void>();

  onConfirm() {
    this.confirm.emit();
  }

  onCancel() {
    this.cancel.emit();
  }
}
