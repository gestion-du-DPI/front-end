import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WorkersComponent } from './workers/workers.component';
import { PatientsComponent } from './patients/patients.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // Default route
  { path: 'home', component: DashboardComponent },
  { path: 'login', component: LoginComponent },
  { path: 'patients', component: PatientsComponent },
  { path: 'staff', component: WorkersComponent },
];
