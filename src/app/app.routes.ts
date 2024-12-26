import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { PatientsComponent } from './admin/patients/patients.component';
import { WorkersComponent } from './admin/workers/workers.component';
import { EditProfileComponent } from './admin/edit-profile/edit-profile.component';


export const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // Default route
  { path: 'home', component: DashboardComponent },
  { path: 'login', component: LoginComponent },
  { path: 'patients', component: PatientsComponent },
  { path: 'staff', component: WorkersComponent },
  { path: 'editprofile', component: EditProfileComponent },
];
