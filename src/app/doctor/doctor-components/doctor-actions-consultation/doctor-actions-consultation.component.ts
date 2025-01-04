import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-doctor-actions-consultation',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div
      class="bg-white rounded-xl border-2 border-slate-100 flex flex-col w-80 gap-3 py-4 h-full"
    >
      <h2 class="text-main font-semibold text-xl ml-6 text-semibold">
        Doctor actions
      </h2>
      <button
        class="flex hover:text-main flex-row items-center gap-2 group w-full hover:bg-[#ECF1FF] px-4 py-2 font-semibold"
        [routerLink]="['/doctor/consultation-details', consultationId, 'ticket']"
      >
        <div
          class="flex justify-center group-hover:border-[#BBBCFF] w-10 h-10 align-middle items-center rounded-xl border-2 border-slate-200 p-2"
        >
          <img src="ticket-icon.svg" class="w-5 h-5 object-cover" alt="" />
        </div>
        Open a ticket
      </button>
      <button
        class="flex hover:text-main flex-row items-center gap-2 group w-full hover:bg-[#ECF1FF] px-4 py-2 font-semibold"
        [routerLink]="['/doctor/consultation-details', consultationId, 'prescription']"
      >
        <div
          class="flex justify-center group-hover:border-[#BBBCFF] w-10 h-10 align-middle items-center rounded-xl border-2 border-slate-200 p-2"
        >
          <img
            src="prescription-icon.svg"
            class="w-4 h-4 object-cover"
            alt=""
          />
        </div>
        Prescription
      </button>
      <div class="flex flex-row gap-3 justify-center items-center m-3 text-sm">
        <button
          class="w-full rounded-lg text-main bg-second font-semibold text-center py-2"
          [routerLink]="['/doctor/consultation-archived', consultationId]"
        >
          Archive
        </button>
        <button
          class="w-full rounded-lg text-white bg-main font-semibold text-center py-2"
        >
          Close
        </button>
      </div>
    </div>
  `,
  styles: ``,
})
export class DoctorActionsConsultationComponent implements OnInit {
  consultationId!: string; // Use string for flexibility.

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Fetch the `id` from the parent route segment
    this.route.parent?.paramMap.subscribe((params) => {
      const id = params.get('id'); // Fetch the `id` parameter
      console.log(params);
      if (id) {
        this.consultationId = id;
      } else {
        console.error('Consultation ID not found in the route');
      }
    });
  }
}
