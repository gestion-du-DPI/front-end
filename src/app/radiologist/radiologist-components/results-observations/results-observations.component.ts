import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-results-observations',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
      <!-- Upload Results / Observations -->
      <div class="col-span-2 bg-white p-4 border rounded-md shadow-md">
        <div class="flex gap-4">
          <button
            class="px-4 py-2 rounded font-semibold"
            [ngClass]="{
              'bg-none text-main': !showUpload,
              'bg-main text-white': showUpload
            }"
            (click)="showUpload = true"
          >
            Upload Results
          </button>
          <button
            class="px-4 py-2 rounded font-semibold"
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
              placeholder="eg. Mr. Bouboutani Observations"
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
        <ul class="mt-4 space-y-4">
          <li *ngFor="let result of mockResults">
            <div class="flex items-center space-x-4">
              <!-- Image -->
              <img
              [src]="getFileIcon(result.fileType)"
                alt="uploaded"
                class="w-10 h-10 object-cover rounded-md"
              />
              <!-- Text Info -->
              <div>
                <a href="#" class="font-medium hover:underline">
                  {{ result.fileName }}
                </a>
                <p class="text-sm text-gray-500">
                  by {{ result.owner }} at {{ result.date }}
                </p>
              </div>
              <!-- Delete Image -->
              <img
                src="delete.svg"
                alt="Delete"
                class="w-6 h-6 cursor-pointer ml-auto"
              />
            </div>
          </li>
        </ul>
      </div>
    </div>
  `,
  styles: [],
})
export class ResultsObservationsComponent {
  showUpload = true;

// Mock data for uploaded results
mockResults = [
  {
    fileName: 'Leg radio.jpg',
    fileType: 'image', // file type ('image' or 'document')
    owner: 'Mr. Bouboutani',
    date: '2024-12-7 15:82',
  },
  {
    fileName: 'Report.pdf',
    fileType: 'document', 
    owner: 'Mr. Bouboutani',
    date: '2024-12-7 15:82',
  },
  {
    fileName: 'Wrist radio.jpg',
    fileType: 'image', 
    owner: 'Mr. Bouboutani',
    date: '2024-12-7 15:82',
  },
];

// Function to determine the icon based on file type
getFileIcon(fileType: string): string {
  if (fileType === 'image') {
    return 'uploaded-img.svg'; // Image icon
  } else if (fileType === 'document') {
    return 'uploaded-doc.svg'; // Document icon
  }
  return 'unknown-file.svg'; // Default fallback icon
}
}
