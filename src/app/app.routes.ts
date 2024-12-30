import { Routes } from '@angular/router';
import * as Admin from '../app/admin/admin.component';

// Importing models
import { UserRole } from './models/user-role';

// Importing guards
import { RoleGuard } from './services/auth/role.guard';
import { FirstLoadingGuard } from './services/auth/firstLoading.guard';

// Importing pages
import { LoadingPageComponent } from './components/loading-page/loading-page.component';
import { IsLoggedGuard } from './services/auth/isLogged.guard';


export const appRoutes: Routes = [
  {
    path: '',
    component: LoadingPageComponent,
    canActivate: [FirstLoadingGuard],
  },
  {
    path: 'admin',
    loadComponent: () =>
      import('./admin/admin.component').then((m) => m.Main),
    canActivate: [RoleGuard],
    data: { role: UserRole.Admin },
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'staff',
        loadComponent: () =>
          import('./admin/admin-pages/workers/workers.component').then(
            (m) => m.WorkersComponent
          ),
      },
      {
        path: 'home',
        loadComponent: () =>
          import('./admin/admin-pages/dashboard/dashboard.component').then(
            (m) => m.DashboardComponent
          ),
      },
      {
        path: 'patients',
        loadComponent: () =>
          import('./admin/admin-pages/patients/patients.component').then(
            (m) => m.PatientsComponent
          ),
      },
      {
        path: 'edit-profile',
        loadComponent: () =>
          import('./admin/admin-pages/edit-profile/edit-profile.component').then(
            (m) => m.EditProfileComponent
          ),
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
      import('./radiologist/radiologist.component').then((m) => m.Main),
    canActivate: [RoleGuard],
    data: { role: UserRole.Radiologist },
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'home',
        loadComponent: () =>
          import('./radiologist/radiologist-pages/workspace/workspace.component').then(
            (m) => m.WorkspaceComponent
          ),
      },
      {
        path: 'patients',
        loadComponent: () =>
          import('./radiologist/radiologist-pages/patients/patients.component').then(
            (m) => m.PatientsComponent
          ),
      },
      {
        path: 'tickets-history',
        loadComponent: () =>
          import('./radiologist/radiologist-pages/tickets-history/tickets-history.component').then(
            (m) => m.TicketsHistoryComponent
          ),
      },
      {
        path: 'edit-profile',
        loadComponent: () =>
          import('./radiologist/radiologist-pages/edit-profile/edit-profile.component').then(
            (m) => m.EditProfileComponent
          ),
      },
    ],
  },
  {
    path: 'lab-technician',
    loadComponent: () =>
      import('./lab-technician/lab-technician.component').then(
        (m) => m.Main
      ),
    canActivate: [RoleGuard],
    data: { role: UserRole.LabTechnician },
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'home',
        loadComponent: () =>
          import('./lab-technician/lab-technician-pages/workspace/workspace.component').then(
            (m) => m.WorkspaceComponent
          ),
      },
      {
        path: 'patients',
        loadComponent: () =>
          import('./lab-technician/lab-technician-pages/patients/patients.component').then(
            (m) => m.PatientsComponent
          ),
      },
      {
        path: 'tickets-history',
        loadComponent: () =>
          import('./lab-technician/lab-technician-pages/tickets-history/tickets-history.component').then(
            (m) => m.TicketsHistoryComponent
          ),
      },
      {
        path: 'edit-profile',
        loadComponent: () =>
          import('./lab-technician/lab-technician-pages/edit-profile/edit-profile.component').then(
            (m) => m.EditProfileComponent
          ),
      },
    ],
  },
  {
    path: 'patient',
    loadComponent: () =>
      import('./patient/patient.component').then((m) => m.PatientComponent),
    canActivate: [RoleGuard],
    data: { role: UserRole.Patient },
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./login/login.component').then((m) => m.LoginComponent),
    canActivate: [IsLoggedGuard],
  },
  {
    path: 'unauthorized',
    loadComponent: () =>
      import('./components/unauthorized/unauthorized.component').then(
        (m) => m.UnauthorizedComponent
      ),
  },
  {
    path: '**',
    loadComponent: () =>
      import('./components/not-found/not-found.component').then(
        (m) => m.NotFoundComponent
      ),
  },

];
