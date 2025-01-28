import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-results-popup',
  imports: [CommonModule],
  template: `
    <div
      class="bg-white rounded-xl max-w-[600px] max-h-[90vh] p-6 flex flex-col items-center gap-5 overflow-hidden"
    >
      <h2 class="text-main font-semibold text-xl">
        {{ selectedResult?.fileName }}
      </h2>
      <p class="font-normal text-[#71717A] text-sm">
        {{ selectedResult?.owner }} - {{ selectedResult?.date }}
      </p>

      <!-- Display image or download link based on file type -->
      <div
        *ngIf="
          selectedResult?.fileType?.startsWith('image/') &&
          selectedResult?.fileContent
        "
      >
        <!-- Display Image Preview with dynamic resizing -->
        <img
          [src]="getImageUrl(selectedResult?.fileContent)"
          alt="Uploaded Image"
          class="w-full max-h-[400px] object-contain"
        />
      </div>

      <div
        *ngIf="
          !selectedResult?.fileType?.startsWith('image/') &&
          selectedResult?.fileContent
        "
      >
        <!-- Display Download Link for Non-Image Files -->
        <a [href]="getImageUrl(selectedResult?.fileContent)" download
          >Download {{ selectedResult?.fileName }}</a
        >
      </div>

      <div class="flex flex-col gap-4 items-center">
        <button class="text-main bg-second rounded font-semibold p-4 w-full">
          <div class="flex gap-2 items-center">
            <img src="gmail.svg" alt="gmail" class="w-5 h-5" />
            Send it Via Email Address
          </div>
        </button>

        <button
          (click)="close()"
          class="text-white bg-main rounded font-semibold p-2 w-full"
        >
          Close
        </button>
      </div>
    </div>
  `,
  styles: [],
})
export class ResultsPopupComponent {
  @Input() showPopup: boolean = false;
  @Input() selectedResult: {
    fileName: string;
    fileType: string;
    owner: string;
    date: string;
    fileContent: File | undefined;
  } | null = null;
  @Output() closePopup = new EventEmitter<void>();

  getImageUrl(file: File | undefined): string {
    if (file) {
      return URL.createObjectURL(file);
    }
    return '';
  }

  close() {
    this.closePopup.emit();
  }
}
