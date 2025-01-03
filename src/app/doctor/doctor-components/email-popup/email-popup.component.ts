import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-email-popup',
  imports: [],
  template: `
    <div
      class="flex flex-col bg-white py-5 rounded-xl lg:w-[860px] m-10 pt-10"
    >
      <div class="flex flex-row justify-between px-7 pb-3">
        <h1 class="font-extrabold text-2xl text-main">
          Send an Email to this patient
        </h1>
        <img
          src="cancel-icon.svg"
          class="w-7 cursor-pointer"
          alt=""
          (click)="onCancel()"
        />
      </div>

      <form class="flex flex-col justify-between py-5 mx-7">
        <h2 class="font-semibold text-lg	">Title</h2>
        <!-- Reason -->
        <div class="flex flex-col flex-wrap gap-4">
          <div class="flex flex-col gap-1 pt-2">
            <label class="font-medium text-sm">
              Reason <span class="text-red-600">*</span>
            </label>
            <input
              type="text"
              class="border-[1px] rounded-md w-full p-2 text-sm"
              placeholder="eg. Hypertension"
              name="reason"
              required
            />
          </div>
           <!-- Content -->
        <div class="flex flex-col flex-wrap gap-4">
          <div class="flex flex-col gap-1 pt-2">
            <label class="font-semibold text-lg">
            content of the email <span class="text-red-600">*</span>
            </label>
            <textarea
              type="text"
              class="border-[1px] rounded-md w-full p-2 text-sm"
              rows="4"
              placeholder="eg. Hypertension (diagnosed in 2018),"
              name="reason"
              required
            ></textarea>
          </div>
        </div>
        </div>
        <div class="flex flex-row justify-end gap-3">
            <button
              type="button"
              class="text-main border-main font-semibold border-[2px] p-2 w-32 rounded-md mt-4"
              (click)="onCancel()"
            >
              Cancel
            </button>
            <button
              type="submit"
              class="bg-main text-white font-semibold p-2 w-32 rounded-md mt-4"
            >
              Send
            </button>
          </div>
      </form>
    </div>
  `,
  styles: ``,
})
export class EmailPopupComponent {
  @Output() cancel = new EventEmitter<void>();

  onCancel() {
    this.cancel.emit();
  }
}
