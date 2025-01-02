import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Worker } from '../../models/worker';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class WorkerService {
  private apiUrl = environment.apiUrl + '/workers'; // API URL for workers

  constructor(private http: HttpClient) {}

  getWorkers(): Observable<Worker[]> {
    return this.http.get<Worker[]>(this.apiUrl).pipe(
      catchError((error) => {
        console.error('Error fetching workers:', error);
        // Return a fallback value in case of an error
        return of([]); // Returning static workers data as fallback
      })
    );
  }

  addWorker(worker: Worker): Observable<Worker> {
    return this.http.post<Worker>(this.apiUrl, worker).pipe(
      catchError((error) => {
        console.error('Error adding worker:', error);
        return throwError(() => new Error('Error adding worker'));
      })
    );
  }

  editWorker(worker: Worker): Observable<Worker> {
    return this.http.put<Worker>(`${this.apiUrl}/${worker.id}`, worker).pipe(
      catchError((error) => {
        console.error('Error editing worker:', error);
        return throwError(() => new Error('Error editing worker'));
      })
    );
  }

  deleteWorker(workerId: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${workerId}`).pipe(
      catchError((error) => {
        console.error('Error deleting worker:', error);
        return throwError(() => new Error('Error deleting worker'));
      })
    );
  }
}
