import { Component, Output , EventEmitter ,Input } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-preview-popup',
  imports: [CommonModule],
  template: `
       <div class="bg-white rounded-xl max-w-[600px] max-h-[90vh] p-6 flex flex-col items-center gap-5 overflow-hidden">
       
      <img *ngIf="imageUrl" [src]="imageUrl" alt="Preview" />
      <button (click)="close()" class="text-white bg-main rounded font-semibold p-2 w-full">
          Close
        </button>     
       </div>
  `,
  styles: ``
})
export class PreviewPopupComponent {
  @Input() imageUrl: string | null = null; // Accept the image URL as an input

    @Output() closePopup = new EventEmitter<void>();

    close() {
      this.closePopup.emit();
    }
  

}
