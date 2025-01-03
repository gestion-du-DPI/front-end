import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-patient-actions',
  imports: [CommonModule ],
  template: `
  
    <div
      class=" bg-white rounded-xl border-2 border-slate-100 flex flex-col w-80 gap-3 py-4 h-full"
    >
      <h2 class="text-main font-semibold text-xl ml-6 text-semibold">
        Doctor actions
      </h2>
      <button
  class="flex hover:text-main items-center gap-2 group w-full hover:bg-[#ECF1FF] px-4 py-2 font-semibold whitespace-nowrap"
>
  <div
    class="flex justify-center items-center w-10 h-10 rounded-xl border-2 border-slate-200 p-2 group-hover:border-[#BBBCFF]"
  >
    <img src="email-act.svg" class="w-5 h-5 object-cover" alt="" />
  </div>
  Request a medical certificate
</button>

      <button
        class="flex hover:text-main flex-row items-center gap-2 group w-full hover:bg-[#ECF1FF] px-4 py-2 font-semibold"
      >
        <div
          class="flex justify-center group-hover:border-[#BBBCFF] w-10 h-10 align-middle items-center rounded-xl border-2 border-slate-200 p-2"
        >
          <img src="email-act.svg" class="w-4 h-4 object-cover" alt="" />
        </div>
        Resquest a medical Facture
      </button>
      <button
        class="flex hover:text-main flex-row items-center gap-2 group w-full hover:bg-[#ECF1FF] px-4 py-2 font-semibold"
      >
        <div
          class="flex justify-center group-hover:border-[#BBBCFF] w-10 h-10 align-middle items-center rounded-xl border-2 border-slate-200 p-2"
        >
          <img src="apt.svg" class="w-5 h-5 object-cover" alt="" />
        </div>
        New Appointment
      </button>
    </div>
  `,
  styles: ``
})
export class PatientActionsComponent {

}
