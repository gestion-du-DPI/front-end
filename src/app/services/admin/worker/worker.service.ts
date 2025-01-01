import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Worker } from '../../../models/worker';
import { EditWorker } from '../../../models/edit-worker';
import { WorkerToSend } from '../../../models/edit-worker';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class WorkerService {
  private apiUrl = environment.apiUrl; // API URL for workers

  constructor(private http: HttpClient) {}

  getWorkers(): Observable<Worker[]> {
    // return of([]); // Returning static workers data as fallback
    return this.http.get<Worker[]>(`${this.apiUrl}/admin/workers`).pipe(
      catchError((error) => {
        console.error('Error fetching workers:', error);
        // Return a fallback value in case of an error
        return of([]); // Returning static workers data as fallback
      })
    );
  }

  addWorker(worker: Worker): Observable<Worker> {
    console.log('Adding worker:', worker);
    return this.http
      .post<Worker>(`${this.apiUrl}/admin/create/worker`, worker)
      .pipe(
        catchError((error) => {
          console.error('Error adding worker:', error);
          window.alert(error.error.message);
          return throwError(() => new Error('Error adding worker'));
        })
      );
  }

  editWorker(worker: EditWorker): Observable<WorkerToSend> {
    console.log('Editing worker:', worker);
    const workerToSend: WorkerToSend = {
      first_name: worker.first_name,
      last_name: worker.last_name,
      nss: worker.nss,
      address: worker.address,
      phone_number: worker.phone_number,
      email: worker.email,
    };
    return this.http
      .patch<WorkerToSend>(
        `${this.apiUrl}/admin/modifyuser/${worker.user_id}`,
        workerToSend
      )
      .pipe(
        catchError((error) => {
          console.error('Error editing worker:', error);
          return throwError(() => new Error('Error editing worker'));
        })
      );
  }

  deleteWorker(workerId: number): Observable<void> {
    return this.http
      .delete<void>(`${this.apiUrl}/admin/deleteuser/${workerId.toString()}`)
      .pipe(
        catchError((error) => {
          console.error('Error deleting worker:', error);
          return throwError(() => new Error('Error deleting worker'));
        })
      );
  }
}
