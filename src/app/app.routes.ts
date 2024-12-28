import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RoleGuard } from './services/auth/role.guard';
import { FirstLoadingGuard } from './services/auth/firstLoading.guard';
import { UserRole } from './models/user-role';
import { UnauthorizedComponent } from './components/unauthorized/unauthorized.component';
import * as Admin from '../app/admin/admin.component';
export const appRoutes: Routes = [
  {
    // Inside this guard we will check his role and redirect him to the correct page and if not auth nb3thou ll login page
    path: '',
    component: LoginComponent,
    canActivate: [FirstLoadingGuard],
  },
  {
    path: 'admin',
    component: Admin.Main,
    canActivate: [RoleGuard],
    data: { role: UserRole.Admin },
    // This comment is from the documentation
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' }, // Default admin route
      {
        path: 'staff', // child route path
        component: Admin.WorkersComponent, // child route component that the router renders
      },
      {
        path: 'home', // child route path
        component: Admin.DashboardComponent, // child route component that the router renders
      },
      {
        path: 'patients',
        component: Admin.PatientsComponent, // another child route component that the router renders
      },
      {
        path: 'edit-profile',
        component: Admin.EditProfileComponent, // another child route component that the router renders
      },
    ],
  },
  {
    path: 'doctor',
    loadComponent: () =>
      import('./doctor/doctor.component').then((m) => m.DoctorComponent),
    canActivate: [RoleGuard],
    data: { role: UserRole.Doctor },
  },
  {
    path: 'nurse',
    loadComponent: () =>
      import('./nurse/nurse.component').then((m) => m.NurseComponent),
    canActivate: [RoleGuard],
    data: { role: UserRole.Nurse },
  },
  {
    path: 'radiologist',
    loadComponent: () =>
      import('./radiologist/radiologist.component').then(
        (m) => m.RadiologistComponent
      ),
    canActivate: [RoleGuard],
    data: { role: UserRole.Radiologist },
  },
  {
    path: 'labTechnician',
    loadComponent: () =>
      import('./lab-technician/lab-technician.component').then(
        (m) => m.LabTechnicianComponent
      ),
    canActivate: [RoleGuard],
    data: { role: UserRole.LabTechnician },
  },
  {
    path: 'patient',
    loadComponent: () =>
      import('./patient/patient.component').then((m) => m.PatientComponent),
    canActivate: [RoleGuard],
    data: { role: UserRole.Patient },
  },
  { path: 'login', component: LoginComponent },
  { path: 'unauthorized', component: UnauthorizedComponent },

];
