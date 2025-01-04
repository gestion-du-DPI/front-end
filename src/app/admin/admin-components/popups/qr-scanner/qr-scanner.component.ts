import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  NgxScannerQrcodeModule,
  LOAD_WASM,
  ScannerQRCodeResult,
} from 'ngx-scanner-qrcode';

@Component({
  selector: 'app-qr-scanner',
  standalone: true,
  imports: [NgxScannerQrcodeModule, CommonModule, FormsModule],
  providers: [
    {
      provide: LOAD_WASM,
      useValue: 'assets/wasm/ngx-scanner-qrcode.wasm',
    },
  ],
  template: `
    <div
      class="bg-white flex-col flex justify-between items-center gap-2 p-4 rounded-xl lg:w-[700px] mx-5"
    >
      <img
        class="ml-auto cursor-pointer w-5"
        src="cancel-icon.svg"
        (click)="closePopup.emit()"
      />
      <h2 class="text-main text-2xl font-semibold">Scan Patient's QR code</h2>
      <div class="w-[400px] rounded-xl overflow-hidden">
        <ngx-scanner-qrcode
          #action="scanner"
          (event)="onScanSuccess($event)"
        ></ngx-scanner-qrcode>
      </div>
      <button
        class="bg-main rounded-lg w-52 text-white font-medium p-2"
        (click)="action.isStart ? action.stop() : action.start()"
      >
        {{action.isLoading ? 'Loading...' : action.isStart ? 'Stop scanning' : 'Start scanning' }}
      </button>
      <label for="qrValue" class="mt-4">Or enter the NSS manually:</label>
      <input
        id="qrValue"
        placeholder="eg. 0001823838"
        type="text"
        class="p-2 border-[2px] rounded-md w-60 border-slate-200"
        [(ngModel)]="nss"
      />
      <div *ngIf="errorMessage" class="text-red-600">{{ errorMessage }}</div>
      <div class="flex flex-row gap-3 mt-3">
        <button
          (click)="closePopup.emit()"
          class="border-main border-[2px] rounded-lg w-40 text-main font-semibold p-3"
        >
          Cancel
        </button>
        <button
          class="bg-main rounded-lg w-40 text-white font-semibold p-3"
          (click)="validateNSS()"
        >
          Continue
        </button>
      </div>
    </div>
  `,
})
export class QrScannerComponent {
  @Output() closePopup = new EventEmitter<void>();
  @Output() nssValidated = new EventEmitter<string>();

  nss: string = ''; // Holds the NSS value
  errorMessage: string | null = null; // Error message to display

  onScanSuccess(results: ScannerQRCodeResult[]) {
    if (Array.isArray(results) && results.length > 0) {
      const qrCodeData = results[0]?.value;
      this.nss = qrCodeData || '';
    }
  }

  validateNSS(): void {
    // Validate that NSS is a 9-digit number
    if (!this.nss || !/^\d{9}$/.test(this.nss)) {
      this.errorMessage = 'Please enter a valid 9-digit NSS.';
      return;
    }

    // Emit the NSS to the parent component if valid
    this.errorMessage = null;
    this.nssValidated.emit(this.nss);
    this.closePopup.emit();
  }
}
