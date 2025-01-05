import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { GetConsultationService } from '../../../services/doctor/getConsultation/get-consultation.service';
import { ConsultationAttachment } from '../../../models/doc-consultationAttachment';

@Component({
  selector: 'app-results-popup',
  imports: [CommonModule],
  template: `
    <div
      class="bg-white rounded-xl max-w-[600px] max-h-[90vh] p-6 flex flex-col items-center gap-5 overflow-hidden"
    >
      <h2 class="text-main font-semibold text-xl">
        {{ selectedResult.title }}
      </h2>
      <p class="font-normal text-[#71717A] text-sm">
        {{ selectedResult.made_by }} - {{ selectedResult.created_at }}
      </p>

      <!-- Display image or download link based on file type -->
      <div>
        <!-- Display Image Preview with dynamic resizing -->
        <img
          [src]=""
          alt="Uploaded Image"
          class="w-full max-h-[400px] object-contain"
        />
      </div>

      <div>
        <!-- Display Download Link for Non-Image Files -->
        <a [href]="" download>Download {{ selectedResult.title }}</a>
      </div>

      <div class="flex flex-col gap-4 items-center">
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
  @Input() selectedResult!: ConsultationAttachment;
  @Output() closePopup = new EventEmitter<void>();

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private getConsultationService: GetConsultationService
  ) {}

  ngOnInit() {
    // this.getConsultationService
    //   .getAttachmentFile(
    //     this.selectedResult.attachment_id.toString(),
    //     this.selectedResult.type
    //   )
    //   .subscribe({
    //     next: (data) => {
    //       console.log('File:', data);
    //     },
    //     error: (err) => console.error(err),
    //   });
  }

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
