import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultsPopupComponent } from '../../../lab-technician/lab-technician-components/results-popup/results-popup.component';
import { ActivatedRoute, Router } from '@angular/router';
import { GetConsultationService } from '../../../services/doctor/getConsultation/get-consultation.service';
import { ConsultationAttachment } from '../../../models/doc-consultationAttachment';

@Component({
  selector: 'app-attachments-table',
  imports: [CommonModule],
  template: `
    <table
      class="border-collapse justify-self-center table-auto w-full border-[1px] bg-white rounded-lg overflow-hidden"
    >
      <thead>
        <tr>
          <th class="hidden md:table-cell">Asset Name</th>
          <th class="hidden md:table-cell">tags</th>
          <th class="hidden md:table-cell">Created at</th>
          <th class="hidden md:table-cell">Done By</th>
          <th class="hidden lg:table-cell">Ticket ID</th>
          <th class="hidden lg:table-cell"></th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let result of Attachments" class="hover:bg-slate-50">
          <td class="flex flex-row gap-4 items-center">
            <img
              [src]="
                result.title.includes('image')
                  ? 'uploaded-img.svg'
                  : 'uploaded-doc.svg'
              "
              class="w-10 h-10 object-cover rounded-md"
              alt="Profile Picture"
            />
            <div class="flex flex-col">
              <span class="font-bold text-sm text-left">{{
                result.title
              }}</span>
            </div>
          </td>
          <td class="hidden md:table-cell">#{{ result.type }}</td>
          <td class="hidden md:table-cell">{{ result.created_at }}</td>
          <td class="flex flex-row  items-center">
            <div class="flex flex-col">
              <span class="font-bold text-sm text-left">{{
                result.made_by
              }}</span>
            </div>
          </td>
          <td class="hidden lg:table-cell">{{ result.attachment_id }}</td>
          <td class="hidden lg:table-cell">
            <button
              class="bg-white border-2 rounded border-[#667085] text-[#667085] font-medium flex flex-row gap-4 items-center p-1	"
              (click)="openResultsPopup(result); $event.preventDefault()"
            >
              <img src="preview.svg" alt="" />
              Download
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  `,
  styles: `
  td {
        padding: 10px 15px;
        text-align: center;
        font-size: 14px;
        font-weight: 600;
        font-family: 'Plus Jakarta Sans', sans-serif;
      }
      th {
        padding: 10px 0px;
        font-weight: 600;
        font-size: 14px;
        color: #000000;
      }
      span {
        font-family: 'Plus Jakarta Sans', sans-serif;
      }
      .icon {
        padding: 10px 3px;
      }
  `,
})
export class AttachmentsTableComponent {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private getConsultationService: GetConsultationService
  ) {}

  ngOnInit(): void {
    let ConsultationId = '';

    ConsultationId = this.route.snapshot.paramMap.get('id') || '';

    if (ConsultationId === '') {
      const fullPath = window.location.pathname;

      // Extract the ID using a regex or split
      const match = fullPath.match(/consultation-details\/(\d+)/);
      if (match) {
        ConsultationId = match[1]; // Capture group 1 contains the ID
      } else {
        console.error('Consultation ID not found in URL');
      }
    }

    if (ConsultationId) {
      this.getConsultationService
        .getConsultationAttachment(ConsultationId)
        .subscribe({
          next: (data) => {
            console.log('Consultation Attachments:', data);
            this.Attachments = data.results;
          },
          error: (err) => console.error(err),
        });
    }
  }

  Attachments: ConsultationAttachment[] = [];

  selectedResult: ConsultationAttachment | null = null;

  showResultsPopup: boolean = false;

  openResultsPopup(result: any) {
    this.selectedResult = result;
    if (this.selectedResult?.attachment_id) {
      this.getConsultationService.getAttachmentFile(
        this.selectedResult.attachment_id.toString(),
        this.selectedResult.type
      );
    } else {
      console.error('Attachment ID is undefined');
    }
  }

  getFileIcon(fileType: string): string {
    return fileType === 'image' ? 'uploaded-img.svg' : 'uploaded-doc.svg';
  }

  closePopup() {
    this.showResultsPopup = false;
    this.selectedResult = null; // Reset the selectedResult after closing popup
  }
}
