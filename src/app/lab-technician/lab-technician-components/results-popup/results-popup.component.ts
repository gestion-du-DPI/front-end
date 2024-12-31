import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-results-popup',
  imports: [CommonModule],
  template: `
    <div class="bg-white rounded-xl w-[400px] p-6 flex flex-col items-center gap-5">
      <h2>{{ selectedResult?.fileName }}</h2>

      <!-- Display image or download link based on file type -->
      <div *ngIf="selectedResult?.fileType?.startsWith('image/') && selectedResult?.fileContent">
  <!-- Display Image Preview -->
  <img [src]="getImageUrl(selectedResult?.fileContent)" alt="Uploaded Image" class="w-full h-auto">
</div>

<div *ngIf="!selectedResult?.fileType?.startsWith('image/') && selectedResult?.fileContent">
  <!-- Display Download Link for Non-Image Files -->
  <a [href]="getImageUrl(selectedResult?.fileContent)" download>Download {{ selectedResult?.fileName }}</a>
</div>


      <p>{{ selectedResult?.owner }} - {{ selectedResult?.date }}</p>
      <button (click)="close()">Close</button>
    </div>
  `,
  styles: []
})
export class ResultsPopupComponent {
  @Input() showPopup: boolean = false;
  @Input() selectedResult: { fileName: string; fileType: string; owner: string; date: string; fileContent: File | undefined } | null = null;
  @Output() closePopup = new EventEmitter<void>();

  getImageUrl(file: File | undefined): string {
    if (file) {
      return URL.createObjectURL(file);
    }
    return '';
  }

  ngOnInit() {
    // Debugging: Check if selectedResult exists and if fileContent is defined
    console.log('Selected result:', this.selectedResult);
  }

  close() {
    this.closePopup.emit();
  }
}
