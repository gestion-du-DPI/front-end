import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tickets-table',
  imports: [CommonModule],
  template: `
    <table class="border-collapse justify-self-center table-auto w-full">
      <thead>
        <tr>
          <th>Ticket ID</th>
          <th>Title</th>
          <th class=" cursor-pointer hover:bg-slate-200" (click)="sortByPrioClicked()">
            Priority
          </th>
          <th>Radiologist</th>
          <th class="hidden sm:table-cell">Doctor</th>
          <th class="hidden md:table-cell">Client</th>
          <th class="hidden lg:table-cell">Consult ID</th>
          <th class="hidden lg:table-cell">Ticket Date</th>
        </tr>
      </thead>
      <tbody class="border-[1px] bg-white rounded-lg overflow-hidden">
        <tr *ngFor="let ticket of tickets" class="hover:bg-slate-50">
          <td style=" font-weight:800; font-size:15px">
            #{{ ticket.ticketId }}
          </td>
          <td>{{ ticket.title }}</td>
          <td>
            <span
              [ngClass]="{
                'text-purple-500 bg-purple-100': ticket.priority === 'low',
                'text-yellow-700 bg-yellow-200': ticket.priority === 'medium',
                'text-red-500 bg-red-100': ticket.priority === 'critical'
              }"
              class="font-semibold px-3 py-1 rounded-full"
            >
              {{ ticket.priority }}
            </span>
          </td>
          <td>{{ ticket.radiologist }}</td>
          <td class="hidden sm:table-cell">{{ ticket.doctor }}</td>
          <td class="hidden md:table-cell">{{ ticket.client }}</td>
          <td class="hidden lg:table-cell">{{ ticket.consultId }}</td>
          <td class="hidden lg:table-cell">{{ ticket.ticketDate }}</td>
          <td class="hidden lg:table-cell">
         
        </tr>
      </tbody>
    </table>
  `,
  styles: [
    `
      td {
        padding: 10px 15px;
        text-align: center;
        font-size: 14px;
        font-weight: 600;
        font-family: 'Plus Jakarta Sans', sans-serif;
      }
      th {
        padding: 10px 0px;
        font-weight: 500;
        font-size: 12px;
        color: #667085;
      }
      span {
        font-family: 'Plus Jakarta Sans', sans-serif;
      }
    `,
  ],
})
export class TicketsTableComponent {
  @Input() tickets: any[] = []; // Accept tickets as input
  @Output() sortByPrio = new EventEmitter<void>();
  
  sortByPrioClicked() {
    this.sortByPrio.emit();
  }
}
