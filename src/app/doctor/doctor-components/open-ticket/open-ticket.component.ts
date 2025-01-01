import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-open-ticket',
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <div class="mx-auto bg-white p-6 rounded-xl shadow-md w-full max-w-[800px]">
      <h2 class="text-xl font-semibold text-main mb-6">Open A Ticket</h2>
      <form [formGroup]="ticketForm" (ngSubmit)="onSubmit()" class="space-y-4">
      <div class="flex flex-row flex-wrap justify-between gap-3">
      <!-- Ticket To -->
        <div class="flex-1">
          <label class="block text-sm font-medium text-gray-700 mb-2" for="ticketTo">
            Ticket To <span class="text-red-500">*</span>
          </label>
          <select
            id="ticketTo"
            formControlName="ticketTo"
            class="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-main focus:border-main"
          >
            <option value="">Select Option</option>
            <option value="IRM">IRM</option>
            <option value="Support">Support</option>
            <option value="Billing">Billing</option>
          </select>
          <div *ngIf="submitted && f['ticketTo'].errors?.['required']" class="text-sm text-red-500 mt-1">
            Ticket To is required.
          </div>
        </div>

        <!-- Severity -->
        <div class="flex-1">
          <label class="block text-sm font-medium text-gray-700 mb-2" for="severity">
            Severity <span class="text-red-500">*</span>
          </label>
          <select
            id="severity"
            formControlName="severity"
            class="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-main focus:border-main"
          >
            <option value="">Select Option</option>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
          <div *ngIf="submitted && f['severity'].errors?.['required']" class="text-sm text-red-500 mt-1">
            Severity is required.
          </div>
        </div>
        </div> 
        <!-- Ticket Title -->
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2" for="title">
            Ticket Title <span class="text-red-500">*</span>
          </label>
          <input
            id="title"
            type="text"
            formControlName="title"
            class="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-main focus:border-main"
            placeholder="e.g., IRM"
          />
          <div *ngIf="submitted && f['title'].errors?.['required']" class="text-sm text-red-500 mt-1">
            Ticket Title is required.
          </div>
        </div>

        <!-- Description -->
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2" for="description">
            Description <span class="text-red-500">*</span>
          </label>
          <textarea
            id="description"
            formControlName="description"
            class="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-main focus:border-main"
            rows="4"
            placeholder="e.g., Hypertension (diagnosed in 2018),"
          ></textarea>
          <div *ngIf="submitted && f['description'].errors?.['required']" class="text-sm text-red-500 mt-1">
            Description is required.
          </div>
        </div>

        <!-- Submit Button -->
        <div>
          <button
            type="submit"
            class="w-full bg-main text-white font-semibold py-2 px-4 rounded-md hover:bg-main-dark transition"
          >
            Send Ticket
          </button>
        </div>
      </form>
    </div>
  `,
  styles: [],
})
export class OpenTicketComponent {
  ticketForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) {
    this.ticketForm = this.fb.group({
      ticketTo: ['', Validators.required],
      severity: ['', Validators.required],
      title: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.ticketForm.invalid) {
      return;
    }

    // Process the valid form (e.g., send data to API)
    console.log('Ticket Submitted:', this.ticketForm.value);
  }

  // Helper function to access form controls easily in the template
  get f() {
    return this.ticketForm.controls;
  }
}
