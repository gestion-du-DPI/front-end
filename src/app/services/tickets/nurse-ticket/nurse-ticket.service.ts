import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';
import { Ticket } from '../../../models/ticket';

@Injectable({
  providedIn: 'root',
})
export class NurseTicketService {
  private apiUrl = `${environment.apiUrl}/nurse-tickets`; // API URL for managing tickets

  constructor(private http: HttpClient) {}

  // Fetch all tickets
  getTickets(): Observable<Ticket[]> {
    return this.http.get<Ticket[]>(this.apiUrl).pipe(
      catchError((error) => {
        console.error('Error fetching tickets:', error);
        return of([]); // Return an empty array as fallback
      })
    );
  }

  // Add a new ticket
  addTicket(ticket: Ticket): Observable<Ticket> {
    return this.http.post<Ticket>(this.apiUrl, ticket).pipe(
      catchError((error) => {
        console.error('Error adding ticket:', error);
        return throwError(() => new Error('Error adding ticket'));
      })
    );
  }

  // Edit an existing ticket
  editTicket(ticket: Ticket): Observable<Ticket> {
    return this.http.put<Ticket>(`${this.apiUrl}/${ticket.ticketId}`, ticket).pipe(
      catchError((error) => {
        console.error('Error editing ticket:', error);
        return throwError(() => new Error('Error editing ticket'));
      })
    );
  }

  // Delete a ticket by ID
  deleteTicket(ticketId: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${ticketId}`).pipe(
      catchError((error) => {
        console.error('Error deleting ticket:', error);
        return throwError(() => new Error('Error deleting ticket'));
      })
    );
  }
}
