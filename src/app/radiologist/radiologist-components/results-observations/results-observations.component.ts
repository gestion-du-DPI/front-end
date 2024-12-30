import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-results-observations',
  imports: [CommonModule],
  template: `
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
      <!-- Upload Results / Observations -->
      <div class="col-span-2 bg-white p-4 border rounded-md shadow-md">
        <div class="flex gap-4">
          <button
            class="px-4 py-2 rounded font-semibold "
            [ngClass]="{
              'bg-none text-main': !showUpload,
              'bg-main text-white': showUpload
            }"
            (click)="showUpload = true"
          >
            Upload Results
          </button>
          <button
            class="px-4 py-2 rounded font-semibold "
            [ngClass]="{
              'bg-none text-main': showUpload,
              'bg-main text-white': !showUpload
            }"
            (click)="showUpload = false"
          >
            Observations
          </button>
        </div>

        <div *ngIf="showUpload" class="mt-4">
          <div class="border p-4 rounded">
            <input type="file" multiple class="mb-2" />
            <button class="bg-main text-white px-4 py-2 rounded">Upload</button>
          </div>
        </div>

        <div *ngIf="!showUpload" class="mt-4">
          <form>
            <label
              for="title"
              class="block text-base text-[#3C3C3C] font-medium"
              >Title</label
            >
            <input
              type="text"
              id="title"
              class="w-full border px-3 py-2 rounded mb-2"
              placeholder="eg. Mr.bouboutani Observations"
            />
            <label
              for="notes"
              class="block text-base text-[#3C3C3C] font-medium"
              >Notes</label
            >
            <textarea
              id="notes"
              class="w-full border px-3 py-2 rounded mb-2"
              rows="4"
              placeholder="eg. Mild interstitial markings suggestive of early fibrosis. No acute pathology noted."
            ></textarea>
            <button type="submit" class="bg-main text-white px-4 py-2 rounded">
              Submit
            </button>
          </form>
        </div>
      </div>

      <!-- Consultation Results -->
      <div class="bg-white p-5 border rounded-md shadow-md">
        <h3 class="font-semibold text-main">Consultation's Results</h3>
        <ul class="mt-4 space-y-2">
          <li>
            <div class="flex flex-row py-4">
              <img
                src="uploaded-img.svg"
                alt="uploaded"
                class="absolute w-15 h-15"
              />
              <a href="#" class="text-main hover:underline">Leg radio.jpg</a>
            </div>
            <span class="text-sm text-gray-500"> by Mr.bouboutani at 2024-12-7 15:82</span>
          </li>
          <li>
            <div class="flex flex-row py-4">
              <img
                src="uploaded-img.svg"
                alt="uploaded"
                class="absolute  w-15 h-15"
              />
              <a href="#" class="text-main hover:underline">Wrist radio.jpg</a>
            </div>
            <span class="text-sm text-gray-500"> by Mr.bouboutani at 2024-12-7 15:82</span>
          </li>
        </ul>
      </div>
    </div>
  `,
  styles: [],
})
export class ResultsObservationsComponent {
  showUpload = true;
}
