import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GraphPopUpComponent } from '../graph-pop-up/graph-pop-up.component';


@Component({
  selector: 'app-results-observations',
  imports: [CommonModule, 
    GraphPopUpComponent,
  ],
  template: `
  <div class="popup" *ngIf="showPopup">
      <app-graph-pop-up (closePopup)="closePopup()"></app-graph-pop-up>
    </div>
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
        <!-- Drag & Drop Zone -->
        <div
          class="border border-dashed bg-[#F8F8FF] rounded-md p-8 flex flex-col items-center justify-center "
          [ngClass]="{ 'bg-blue-200': isDragging }"
          (dragover)="onDragOver($event)"
          (dragleave)="onDragLeave($event)"
          (drop)="onDrop($event)"
          style="border-color: rgba(56, 78, 183, 0.3); cursor: default;"
        >
          <img
            src="createGraph.svg"
            alt="Graph Icon"
            class="w-16 h-16 mb-2"
          />
          <p class="text-black text-center">
            Drag & drop files or
            <span
              class="font-semibold text-main underline cursor-pointer"
               (click)="togglePopup()"
            >
            CREATE Graphs
            </span>
          </p>
          <p class="font-normal text-[#676767] text-xs pt-5 ">
          Supported formates: JPEG, JPG, PNG, DICOM, TIFF, NIfTI
          </p>
        </div>
       
        <!-- Upload Progress Section -->
        <div *ngIf="uploadingFiles.length > 0" class="mt-6">
          <h4 class="text-lg font-medium text-[#3C3C3C]">
            Uploading {{ currentFileIndex }}/{{ totalFiles }} files
          </h4>

          <div
            *ngIf="currentUploadingFile"
            class="flex items-center border-2 border-main rounded-md p-4 mt-2"
          >
          <div class="flex-1">
            <p class="font-medium">{{ currentUploadingFile.name }}</p>
            <div class="h-2 bg-gray-200 rounded mt-2">
              <div
                class="h-full  rounded bg-main"
                [style.width.%]="uploadProgress"
              ></div>
            </div>
          </div>
          </div>

          <h4 class="text-lg font-medium text-[#3C3C3C] mt-6">
            Uploaded  {{ uploadedFiles.length }} files
          </h4>

          <div *ngFor="let file of uploadedFiles" class="border-2 border-green-400 rounded-md p-4 mt-2">
            <p class="font-medium">{{ file.name }}</p>
          </div>

          <button
            class="bg-main text-white px-4 py-2 rounded mt-4"
            (click)="submitResults()"
          >
            UPLOAD RESULTS
          </button>
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
          <button type="submit" class="bg-main text-white px-4 py-2 rounded w-full mt-3 font-semibold">
          Submit Results
          </button>
        </form>
      </div>
    </div>

    <!-- Consultation Results -->
    <div class="bg-white p-5 border rounded-md shadow-md">
      <h3 class="font-semibold text-main">Consultation's Results</h3>
      <ul class="mt-4 space-y-4">
        <li *ngFor="let result of uploadedResults">
          <div class="flex items-center space-x-4">
            <!-- Image -->
            <img
              [src]="getFileIcon(result.fileType)"
              alt="uploaded"
              class="w-10 h-10 object-cover rounded-md"
            />
            <!-- Text Info -->
            <div class="flex-1 overflow-hidden">
              <a href="#" class="font-medium hover:underline truncate">
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
  styles: ``
})
export class ResultsObservationsComponent {

  showUpload = true;
  isDragging = false;
  showPopup: boolean = false;

  togglePopup() {
    this.showPopup = !this.showPopup;
  }

  closePopup() {
    this.showPopup = false;
  }

  uploadingFiles: File[] = [];
  uploadedFiles: File[] = [];
  currentUploadingFile: File | null = null;
  uploadProgress = 0; // Progress in percentage (0-100)
  currentFileIndex = 0; // Index of the file being uploaded
  totalFiles = 0; // Total number of files

  // Handle drag-over event
  onDragOver(event: DragEvent): void {
    event.preventDefault(); // Prevent default browser behavior
    this.isDragging = true;
  }

  // Handle drag-leave event
  onDragLeave(event: DragEvent): void {
    event.preventDefault(); // Prevent default behavior when leaving drag area
    this.isDragging = false;
  }

  // Handle drop event
  onDrop(event: DragEvent): void {
    event.preventDefault(); // Prevent default behavior when dropping files
    this.isDragging = false;

    if (event.dataTransfer && event.dataTransfer.files.length > 0) {
      const files = event.dataTransfer.files;
      this.handleFileUpload(files); // Call the upload handler
    }
  }

  // Handle file selection through the "Browse" button
  onFileSelect(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const files = input.files;
      this.handleFileUpload(files); // Call the upload handler
    }
  }

  // Common file upload handler
  handleFileUpload(files: FileList): void {
    // Convert FileList to an array and update state
    this.uploadingFiles = Array.from(files);
    this.totalFiles = this.uploadingFiles.length;
    this.currentFileIndex = 0; // Reset index for new uploads
    this.uploadProgress = 0; // Reset progress for new upload
    this.startFileUpload(); // Start uploading the first file
  }

  // Start uploading files one by one
  startFileUpload(): void {
    if (this.currentFileIndex < this.uploadingFiles.length) {
      this.currentUploadingFile = this.uploadingFiles[this.currentFileIndex];
      this.simulateFileUpload(); // Simulate the upload
    }
  }

  // Simulate file upload process
  simulateFileUpload(): void {
    this.uploadProgress = 0;

    const interval = setInterval(() => {
      if (this.uploadProgress < 100) {
        this.uploadProgress += 10; // Simulate upload progress
      } else {
        clearInterval(interval);

        // Move file from uploading to uploaded list
        if (this.currentUploadingFile) {
          this.uploadedFiles.push(this.currentUploadingFile);
        }

        // Reset progress and move to the next file
        this.currentFileIndex++;
        this.startFileUpload();
      }
    }, 300); // Simulate progress every 300ms
  }

  // Submit results button handler
  submitResults(): void {
    console.log('Uploaded files:', this.uploadedFiles);
    
    // Add uploaded files to the uploadedResults array
    this.uploadedFiles.forEach(file => {
      this.uploadedResults.push({
        fileName: file.name,
        fileType: file.type.includes('image') ? 'image' : 'document',  // Add logic to determine file type
        owner: 'Mr. Bouboutani',  // Static owner for now
        date: new Date().toLocaleString() // Use the current date and time
      });
    });
  
    // Clear uploadedFiles after moving to uploadedResults
    this.uploadedFiles = [];
  
    alert('Results uploaded successfully!');
    this.resetUploadState();
  }
  
  
  // Reset only the uploading files, not the uploaded ones
  resetUploadState(): void {
    this.uploadingFiles = [];
    this.currentUploadingFile = null;
    this.uploadProgress = 0;
    this.currentFileIndex = 0;
    this.totalFiles = 0;
  }

  // Function to determine the icon based on file type
  getFileIcon(fileType: string): string {
    if (fileType === 'image') {
      return 'uploaded-img.svg'; // Image icon
    } else if (fileType === 'document') {
      return 'uploaded-doc.svg'; // Document icon
    }
    return 'unknown-file.svg'; // Default fallback icon
  }

  uploadedResults: { fileName: string, fileType: string, owner: string, date: string }[] = [];


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

}
