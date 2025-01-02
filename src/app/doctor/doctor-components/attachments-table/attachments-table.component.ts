import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultsPopupComponent } from '../../../lab-technician/lab-technician-components/results-popup/results-popup.component';

@Component({
  selector: 'app-attachments-table',
  imports: [CommonModule ,  ResultsPopupComponent],
  template: `
   <div class="popup" *ngIf="showResultsPopup">
      <app-results-popup
        [showPopup]="showPopup"
        [selectedResult]="selectedResult" 
        (closePopup)="closePopup()"
      ></app-results-popup>
    </div>
    <table class="border-collapse justify-self-center table-auto w-full border-[1px] bg-white rounded-lg overflow-hidden">
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
      <tbody >
        <tr *ngFor="let result of Results" class="hover:bg-slate-50">
          <td class="flex flex-row gap-4 items-center">
            <img
              [src]="result.fileName.startsWith('/image') ? result.fileName : getFileIcon(result.fileType)" 
              class="w-10 h-10 object-cover rounded-md"
              alt="Profile Picture"
            />
            <div class="flex flex-col">
              <span class="font-bold text-sm text-left">{{
                result.fileName
              }}</span>
            </div>
          </td>
          <td class="hidden md:table-cell">#{{ result.ownerRole }}</td>
          <td class="hidden md:table-cell">{{ result.date }}</td>
          <td class="flex flex-row  items-center">
          <img
              [src]="result.ownerProfilePicture" 
              class="w-10 h-10 object-cover rounded-md"
              alt="Profile Picture"
            />
            <div class="flex flex-col">
              <span class="font-bold text-sm text-left">{{
                result.owner
              }}</span>
            </div>
          </td>
          <td class="hidden lg:table-cell">{{ result.id }}</td>
          <td class="hidden lg:table-cell">
            <button class="bg-white border-2 rounded border-[#667085] text-[#667085] font-medium flex flex-row gap-4 items-center p-1	" (click)="openResultsPopup(result); $event.preventDefault()">
              <img src="preview.svg" alt="">
              preview
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
  `
})
export class AttachmentsTableComponent {

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

  Results: { id: string; fileName: string; fileType: string; owner: string; ownerProfilePicture: string; ownerRole:string;  date: string; fileContent: File | undefined }[] = [
    {
      id: '123456',
      fileName: 'blood_test_report.pdf',
      fileType: 'document',
      owner: 'John Doe',
      ownerProfilePicture: 'sa.svg', 
      ownerRole : 'Radiology', 
      date: '2025-01-02 at 14:30',
      fileContent: undefined 
    },
    {
      id: '123456',
      fileName: 'xray_image.jpg',
      fileType: 'image',
      owner: 'Jane Smith',
      ownerProfilePicture: 'sa.svg', 
      ownerRole : 'Nurse', 
      date: '2025-01-01 at 10:00',
      fileContent: undefined
    },
    {
      id: '123456',
      fileName: 'urine_test_results.docx',
      fileType: 'document',
      owner: 'Emily Brown',
      ownerProfilePicture: 'sa.svg', 
      ownerRole : 'Technician', 
      date: '2024-12-30 at 08:45',
      fileContent: undefined
    },
    {
      id: '123456',
      fileName: 'ultrasound_scan.png',
      fileType: 'image',
      owner: 'Michael Johnson',
      ownerProfilePicture: 'sa.svg', 
      ownerRole : 'Radiology', 
      date: '2024-12-28 at 16:20',
      fileContent: undefined
    }
  ];

}
