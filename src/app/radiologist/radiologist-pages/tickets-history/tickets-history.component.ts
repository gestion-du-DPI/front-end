import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserBadgeComponent } from '../../../components/user-badge/user-badge.component';
import { Ticket } from '../../../models/ticket';
import { TicketsTableComponent } from '../../radiologist-components/tickets-table/tickets-table.component';
import { TicketService } from '../../../services/ticket.service';

@Component({
  selector: 'app-tickets',
  imports: [
    TicketsTableComponent,
    CommonModule,
    FormsModule,
    UserBadgeComponent,
  ],
  template: `
    <div class="flex flex-col gap-5 my-5 lg:mx-10">
      <div class="flex flex-col gap-4 mx-3">
        <div
          class="flex flex-row items-center justify-center flex-wrap md:flex-nowrap gap-3 md:gap-12"
        >
          <h1 class="font-semibold text-main text-4xl">Tickets</h1>
          <span
            class="rounded-full bg-[#DBE4FF] font-medium text-xs text-[#3D6DFE] py-1 px-3"
            >{{ ticketsNumber }} tickets</span
          >
          <div class="md:ml-auto">
            <app-user-badge></app-user-badge>
          </div>
        </div>
        <div class="flex flex-row gap-3">
          <div
            class="flex flex-row overflow-hidden items-center bg-white rounded-lg border-[1.5px] p-2 w-96 gap-3"
          >
            <img src="search-icon.svg" alt="Search Icon" />
            <input
              type="text"
              placeholder="Search Ticket by ID here ..."
              class="bg-transparent border-0 focus:outline-none flex-1"
              [(ngModel)]="searchQuery"
              (input)="onSearch()"
            />
          </div>
      
        </div>
      </div>
      <app-tickets-table [tickets]="filteredTickets" (sortByPrio)="sortByPriority()"></app-tickets-table>
    </div>
  `,
  styles: `
  span {
    font-family: 'Plus Jakarta Sans', sans-serif;
  }
  `,
})
export class TicketsHistoryComponent implements OnInit {
  ticketsNumber = 0; // Total number of tickets
  searchQuery = ''; // Tracks the input query

  tickets: Ticket[] = [];
  filteredTickets: Ticket[] = []; // Filtered tickets for display

  isPriorityAscending = false; // Track the sorting order

  constructor(private ticketService: TicketService) {}

  ngOnInit(): void {
    this.loadTickets();
  }

  loadTickets(): void {
    this.ticketService.getTickets().subscribe((data) => {
      this.tickets = data;
      this.filteredTickets = data; // Initially display all tickets
      this.ticketsNumber = data.length; // Update the ticket count
    });
  }

  onSearch(): void {
    const query = this.searchQuery.toLowerCase();
    this.filteredTickets = this.tickets.filter((ticket) =>
      ticket.ticketId.toString().toLowerCase().includes(query)
    );
  }


  sortByPriority(): void {
    const priorityOrder = ['critical', 'medium', 'low'];
    this.filteredTickets.sort((a, b) => {
      const priorityA = priorityOrder.indexOf(a.priority);
      const priorityB = priorityOrder.indexOf(b.priority);

      return this.isPriorityAscending
        ? priorityA - priorityB // Ascending order
        : priorityB - priorityA; // Descending order
    });
    console.table(this.filteredTickets)
    // Toggle sorting order for the next click
    this.isPriorityAscending = !this.isPriorityAscending;
  }
}
