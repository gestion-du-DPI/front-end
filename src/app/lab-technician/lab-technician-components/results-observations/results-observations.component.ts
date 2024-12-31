import { Component, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GraphPopUpComponent } from '../graph-pop-up/graph-pop-up.component';
import { ResultsPopupComponent } from '../results-popup/results-popup.component';
import { FormsModule } from '@angular/forms';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-results-observations',
  imports: [
    CommonModule,
    GraphPopUpComponent,
    ResultsPopupComponent,
    FormsModule,
  ],
  template: `
    <div class="popup" *ngIf="showResultsPopup">
      <app-results-popup
        [showPopup]="showPopup"
        [selectedResult]="selectedResult"
        (closePopup)="closePopup()"
      ></app-results-popup>
    </div>

    <div class="popup" *ngIf="showPopup">
      <app-graph-pop-up
        (closeGraphPopup)="closeGraphPopup()"
        (createGraph)="handleGraphCreation($event)"
      >
      </app-graph-pop-up>
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
            class="border border-dashed bg-[#F8F8FF] rounded-md p-8 flex flex-col items-center justify-center"
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
            <p class="font-normal text-[#676767] text-xs pt-5">
              Supported formats: JPEG, JPG, PNG, DICOM, TIFF, NIfTI
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
                    class="h-full rounded bg-main"
                    [style.width.%]="uploadProgress"
                  ></div>
                </div>
              </div>
            </div>

            <h4 class="text-lg font-medium text-[#3C3C3C] mt-6">
              Uploaded {{ uploadedFiles.length }} files
            </h4>

            <div
              *ngFor="let file of uploadedFiles"
              class="border-2 border-green-400 rounded-md p-4 mt-2"
            >
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
        <!-- Hidden div for creating image -->
        <div
          #contentDiv
          class="hidden p-5"
          style="background-color: white; width: 100%; max-width: 600px;  font-size: 12px; font-weight:600 "
        >
          <h2>{{ title }}</h2>
           
          
            <p>{{ notes }}</p>
          
        </div>

        <div *ngIf="!showUpload" class="mt-4">
          <form (ngSubmit)="onSubmit()">
            <label
              for="title"
              class="block text-base text-[#3C3C3C] font-medium"
              >Title</label
            >
            <input
              type="text"
              id="title"
              [(ngModel)]="title"
              name="title"
              class="w-full border px-3 py-2 rounded mb-2"
              placeholder="eg. Mr. Bouboutani Observations"
            />
            <label
              for="notes"
              [(ngModel)]="notes"
              name="notes"
              class="block text-base text-[#3C3C3C] font-medium"
              >Notes</label
            >
            <textarea
  id="notes"
  [(ngModel)]="notes"  
  name="notes"
  class="w-full border px-3 py-2 rounded mb-2"
  rows="4"
  placeholder="Enter your notes here"
></textarea>
            <button
              type="submit"
              class="bg-main text-white px-4 py-2 rounded w-full mt-3 font-semibold"
            >
              Submit Results
            </button>
          </form>
        </div>
      </div>

      <!-- Consultation Results -->
      <div class="bg-white p-5 border rounded-md shadow-md">
        <h3 class="font-semibold text-main">Consultation's Results</h3>
        <ul class="mt-4 space-y-4">
          <li
            *ngFor="let result of uploadedResults"
            (click)="openResultsPopup(result); $event.preventDefault()"
          >
            <div class="flex items-center space-x-4">
              <!-- Image -->
              <img
                [src]="
                  result.fileName.startsWith('data:image')
                    ? result.fileName
                    : getFileIcon(result.fileType)
                "
                alt="uploaded"
                class="w-10 h-10 object-cover rounded-md"
              />
              <!-- Text Info -->
              <div class="flex-1 overflow-hidden">
                <a href="#" class="font-medium hover:underline truncate">{{
                  result.fileName
                }}</a>
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
  styles: [``],
})
export class ResultsObservationsComponent {
  title: string = '';
  notes: string = ''
  @ViewChild('contentDiv', { static: false }) contentDiv!: ElementRef;
  ngOnInit(): void {
    this.showUpload = true;
  }
  onSubmit() {
    console.log('Title:', this.title);  // Capture the title
    console.log('Notes:', this.notes);  // Capture the latest notes
  
    // Now perform your logic
    this.createImageFromDiv();  // Or whatever you need to do after submission
    // Optionally reset the values
  this.title = '';
  this.notes = '';
  }
  

  onNotesChange(value: string) {
    console.log('Notes changed:', value); // Check if the notes are updating
  }

  createImageFromDiv() {
    const contentDivElement = this.contentDiv.nativeElement;

    // Temporarily show the content div to capture it as an image
    contentDivElement.style.display = 'block';

    html2canvas(contentDivElement).then((canvas) => {
      const image = canvas.toDataURL('image/png');
      this.uploadImage(image);

      // Hide the content div again after capturing the image
      contentDivElement.style.display = 'none';
    });
  }

  uploadImage(image: string) {
    console.log('Uploading image:', image);

    // Convert the image data URI into a Blob
    const blob = this.dataURItoBlob(image);

    // Create a File object from the Blob
    const file = new File([blob], 'Observation.png', {
      type: 'image/png',
      lastModified: Date.now(), // Add lastModified property
    });

    // Push the File object into the uploadedFiles array
    this.uploadedFiles.push(file);

    // Update progress and store results
    this.uploadProgress = 100;

    // Push the result with file content as a File object
    this.uploadedResults.push({
      fileName: file.name, // Use the name of the File object
      fileType: file.type,
      owner: 'User',
      date: new Date().toLocaleString(),
      fileContent: file,
    });
  }

  showResultsPopup: boolean = false;
  openResultsPopup(result: any) {
    this.selectedResult = result; // Pass the file object
    this.showResultsPopup = true;
  }

  graphs: string[] = [];
  handleGraphCreation(imageData: string) {
    const blob = this.dataURItoBlob(imageData);

    // Ensure that you're creating a File object with the necessary properties
    const graphFile = new File([blob], `Graph-${Date.now()}.png`, {
      type: 'image/png',
      lastModified: Date.now(), // Adding the lastModified property
    });

    this.uploadingFiles.push(graphFile);
    this.totalFiles++;
    this.startFileUpload();
  }

  dataURItoBlob(dataURI: string): Blob {
    const byteString = atob(dataURI.split(',')[1]);
    const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);
    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([ab], { type: mimeString });
  }

  showUpload = true;
  isDragging = false;
  showPopup: boolean = false;

  uploadingFiles: File[] = [];
  uploadedFiles: File[] = [];
  currentUploadingFile: File | null = null;
  uploadProgress = 0;
  currentFileIndex = 0;
  totalFiles = 0;

  uploadedResults: {
    fileName: string;
    fileType: string;
    owner: string;
    date: string;
    fileContent: File;
  }[] = [];

  onDragOver(event: DragEvent): void {
    event.preventDefault();
    this.isDragging = true;
  }

  onDragLeave(event: DragEvent): void {
    event.preventDefault();
    this.isDragging = false;
  }

  onDrop(event: DragEvent): void {
    event.preventDefault();
    this.isDragging = false;

    if (event.dataTransfer && event.dataTransfer.files.length > 0) {
      const files = event.dataTransfer.files;
      this.handleFileUpload(files);
    }
  }

  handleFileUpload(files: FileList): void {
    this.uploadingFiles = Array.from(files);
    this.totalFiles = this.uploadingFiles.length;
    this.currentFileIndex = 0;
    this.uploadProgress = 0;
    this.startFileUpload();
  }

  startFileUpload(): void {
    if (this.currentFileIndex < this.uploadingFiles.length) {
      this.currentUploadingFile = this.uploadingFiles[this.currentFileIndex];
      this.simulateFileUpload();
    }
  }

  simulateFileUpload(): void {
    this.uploadProgress = 0;
    const interval = setInterval(() => {
      if (this.uploadProgress < 100) {
        this.uploadProgress += 10;
      } else {
        clearInterval(interval);
        if (this.currentUploadingFile) {
          this.uploadedFiles.push(this.currentUploadingFile);
        }
        this.currentFileIndex++;
        this.startFileUpload();
      }
    }, 300);
  }

  submitResults() {
    this.uploadedFiles.forEach((file) => {
      this.uploadedResults.push({
        fileName: file.name,
        fileType: file.type,
        owner: 'User',
        date: new Date().toLocaleString(),
        fileContent: file,
      });
    });

    this.uploadedFiles = [];
    alert('Results uploaded successfully!');
    this.resetUploadState();
  }

  resetUploadState() {
    this.uploadingFiles = [];
    this.currentUploadingFile = null;
    this.uploadProgress = 0;
    this.currentFileIndex = 0;
    this.totalFiles = 0;
  }

  getFileIcon(fileType: string): string {
    return fileType === 'image' ? 'uploaded-img.svg' : 'uploaded-doc.svg';
  }

  togglePopup() {
    this.showPopup = !this.showPopup;
  }

  selectedResult: {
    fileName: string;
    fileType: string;
    owner: string;
    date: string;
    fileContent: File | undefined;
  } | null = null;

  openPopup(result: any) {
    this.selectedResult = result;
    this.showPopup = true;
  }

  closePopup() {
    this.showResultsPopup = false;
    this.selectedResult = null;
  }

  closeGraphPopup() {
    this.showPopup = false;
  }
}
