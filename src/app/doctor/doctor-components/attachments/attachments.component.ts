import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ResultsPopupComponent } from '../../../lab-technician/lab-technician-components/results-popup/results-popup.component';

@Component({
  selector: 'app-attachments',
  imports: [ CommonModule, FormsModule, ResultsPopupComponent ],
  template: `
    <div class="popup" *ngIf="showResultsPopup">
      <app-results-popup
        [showPopup]="showPopup"
        [selectedResult]="selectedResult" 
        (closePopup)="closePopup()"
      ></app-results-popup>
    </div>
    <div class="bg-white p-5 border rounded-md shadow-md h-full">
      <h3 class="font-semibold text-main">Consultation's Results</h3>
      <ul class="mt-4 space-y-4">
        <li *ngFor="let result of Results; let i = index" (click)="openResultsPopup(result); $event.preventDefault()">
          <div class="flex items-center space-x-4">
            <!-- Image -->
            <img [src]="result.fileName.startsWith('/image') ? result.fileName : getFileIcon(result.fileType)" 
              alt="uploaded" class="w-10 h-10 object-cover rounded-md" />
            <!-- Text Info -->
            <div class="flex-1 overflow-hidden">
              <a href="#" class="font-medium hover:underline truncate">{{ result.fileName }}</a>
              <p class="text-sm text-gray-500">
                by {{ result.owner }} at {{ result.date }}
              </p>
            </div>
            <!-- Delete Image -->
            <img src="delete.svg" alt="Delete" class="w-6 h-6 cursor-pointer ml-auto" 
              (click)="deleteFile(i); $event.preventDefault()" />
          </div>
        </li>
      </ul>
    </div>
  `,
  styles: ``
})
export class AttachmentsComponent {

  showPopup: boolean = false;

  selectedResult: { fileName: string; fileType: string; owner: string; date: string; fileContent: File | undefined } | null = null;

  showResultsPopup: boolean = false;

  openResultsPopup(result: any) {
    this.selectedResult = result; // Pass the single file object
    this.showResultsPopup = true;
  }

  getFileIcon(fileType: string): string {
    return fileType === 'image' ? 'uploaded-img.svg' : 'uploaded-doc.svg';
  }

  deleteFile(index: number) {
    // Remove the file at the specified index from the Results array
    this.Results.splice(index, 1);
  }

  closePopup() {
    this.showResultsPopup = false;
    this.selectedResult = null; // Reset the selectedResult after closing popup
  }

  Results: { fileName: string; fileType: string; owner: string; date: string; fileContent: File | undefined }[] = [
    {
      fileName: 'blood_test_report.pdf',
      fileType: 'document',
      owner: 'Dr. John Doe',
      date: '2025-01-02 14:30',
      fileContent: undefined 
    },
    {
      fileName: 'xray_image.jpg',
      fileType: 'image',
      owner: 'Dr. Jane Smith',
      date: '2025-01-01 10:00',
      fileContent: undefined
    },
    {
      fileName: 'urine_test_results.docx',
      fileType: 'document',
      owner: 'Dr. Emily Brown',
      date: '2024-12-30 08:45',
      fileContent: undefined
    },
    {
      fileName: 'ultrasound_scan.png',
      fileType: 'image',
      owner: 'Dr. Michael Johnson',
      date: '2024-12-28 16:20',
      fileContent: undefined
    }
  ];
}
