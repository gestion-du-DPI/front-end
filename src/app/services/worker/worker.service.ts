import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Worker } from '../../models/worker';
import { WORKERS } from '../../mock-data/workers.temp';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root',
})
export class WorkerService {
  private apiUrl = environment.apiUrl+"/workers"; //to be changed if needed

  constructor(private http: HttpClient) {}

  getWorkers(): Observable<Worker[]> {
    // return this.http.get<Worker[]>(this.apiUrl); //uncomment it when integrating, for now we return the static value
    return of(WORKERS);
  }

  addWorker(worker: Worker): Observable<Worker> {
    return this.http.post<Worker>(this.apiUrl, worker);
  }

  editWorker(worker: Worker): Observable<Worker> {
    return this.http.put<Worker>(this.apiUrl, worker);
  }

  deleteWorker(worker: Worker): Observable<Worker> {
    return this.http.delete<Worker>(this.apiUrl, {body: worker});
  }
}
