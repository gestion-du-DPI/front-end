import { Component, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PreviewPopupComponent } from '../preview-popup/preview-popup.component';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-nurse-observations',
  imports: [PreviewPopupComponent, CommonModule, FormsModule],
  template: `
    <div class="popup" *ngIf="showPopup">
      <!-- Pass the image URL to PreviewPopupComponent -->
      <app-preview-popup [imageUrl]="imageUrl" (closePopup)="closePopup()"></app-preview-popup>
    </div>

    <div class="bg-white rounded-lg shadow p-5 flex flex-col gap-4">
      <h2 class="text-main font-semibold text-xl px-5">observations</h2>

      <form class="p-2" (ngSubmit)="onSubmit()">
        <label for="title" class="block text-base text-[#3C3C3C] font-medium mb-2">Title</label>
        <input type="text" id="title" [(ngModel)]="title" name="title" class="w-full border px-3 py-2 rounded mb-2" placeholder="eg. Mr. Bouboutani Observations" />
        <label for="notes" class="block text-base text-[#3C3C3C] font-medium mb-2">Notes</label>
        <textarea id="notes" name="notes" [(ngModel)]="notes" class="w-full border px-3 py-2 rounded mb-2" rows="4" placeholder="eg. Mild interstitial markings suggestive of early fibrosis. No acute pathology noted."></textarea>
        <div class="flex justify-end gap-2 mt-3">
          <button type="button" class="bg-white text-main px-4 py-2 rounded font-semibold border-2 border-main" (click)="togglePopup()">Preview</button>
          <button type="submit" class="bg-main text-white px-4 py-2 rounded font-semibold">Submit</button>
        </div>
      </form>

      <!-- Hidden div for creating image -->
      <div #contentDiv class="hidden p-5 bg-white w-full max-w-lg">
        <div class="flex flex-col justify-between items-center">
        <h2 class="text-main text-2xl font-semibold mt-0 self-center pb-3">{{ title }}</h2>
        <p class="text-gray-500 text-sm">by {{ owner }} at {{ date }}</p>

        </div>
        
        
        <h3 class="text-black font-medium text-lg">Observations:</h3>
        <p class="text-black font-medium ml-2">{{ notes }}</p>
      </div>
    </div>
  `,
  styles: []
})
export class NurseObservationsComponent {
  title: string = '';
  notes: string = '';
  owner: string = 'Mr. Bouboutani';  // Mock owner name
  date: string = '2024-12-7 15:82';  // Mock date
  
  showPopup: boolean = false;
  imageUrl: string | null = null; // Property to store the image URL

  @ViewChild('contentDiv', { static: false }) contentDiv!: ElementRef;

  togglePopup() {
    // Generate the image first
    this.createImageFromDiv();
    
    // Delay showing the popup until the image is ready
    setTimeout(() => {
      this.showPopup = !this.showPopup;
      console.log('Image URL on Popup Toggle:', this.imageUrl); // Now the image URL should be set
    }, 100); // Small delay to ensure image generation
  }

  closePopup() {
    this.showPopup = false;
  }

  onSubmit() {
    console.log('Title:', this.title); // Capture the title
    console.log('Notes:', this.notes); // Capture the latest notes

    // Now perform your logic
    this.createImageFromDiv(); // Or whatever you need to do after submission
    // Optionally reset the values
    this.title = '';
    this.notes = '';
  }

  createImageFromDiv() {
    const contentDivElement = this.contentDiv.nativeElement;
  
    // Temporarily show the content div to capture it as an image
    contentDivElement.style.display = 'block';
  
    html2canvas(contentDivElement).then((canvas) => {
      // Get the image URL from the canvas as a data URL
      this.imageUrl = canvas.toDataURL('image/png');
      console.log('Image URL:', this.imageUrl); // Log the image URL to ensure it's set
  
      // Hide the content div again after capturing the image
      contentDivElement.style.display = 'none';
    });
  }
}
