import { Routes } from '@angular/router';

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
    loadComponent: () => import('./admin/admin.component').then((m) => m.Main),
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
          import(
            './admin/admin-pages/edit-profile/edit-profile.component'
          ).then((m) => m.EditProfileComponent),
      },
    ],
  },
  {
    path: 'doctor',
    loadComponent: () =>
      import('./doctor/doctor.component').then((m) => m.DoctorComponent),
    canActivate: [RoleGuard],
    data: { role: UserRole.Doctor },
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'home',
        loadComponent: () =>
          import('./doctor/doctor-pages/workspace/workspace.component').then(
            (m) => m.WorkspaceComponent
          ),
      },
      {
        path: 'patients',
        loadComponent: () =>
          import('./doctor/doctor-pages/patients/patients.component').then(
            (m) => m.PatientsComponent
          ),
      },
      {
        path: 'patient-details/:id',
        loadComponent: () =>
          import(
            './doctor/doctor-pages/patient-details/patient-details.component'
          ).then((m) => m.PatientDetailsComponent),
      },
      {
        path: 'consultation-archived/:id',
        loadComponent: () =>
          import(
            './doctor/doctor-pages/consultation-archived/consultation-archived.component'
          ).then((m) => m.ConsultationArchivedComponent),
      },
      {
        path: 'consultation-details/:id',
        loadComponent: () =>
          import(
            './doctor/doctor-pages/consultation-details/consultation-details.component'
          ).then((m) => m.ConsultationDetailsComponent),
        children: [
          { path: '', redirectTo: 'ticket', pathMatch: 'full' },
          {
            path: 'ticket',
            loadComponent: () =>
              import(
                './doctor/doctor-pages/consultation-details/ticket/ticket.component'
              ).then((m) => m.TicketComponent),
          },
          {
            path: 'prescription',
            loadComponent: () =>
              import(
                './doctor/doctor-pages/consultation-details/prescription/prescription.component'
              ).then((m) => m.PrescriptionComponent),
          },
        ],
      },
      {
        path: 'tickets-history',
        loadComponent: () =>
          import('./doctor/doctor-pages/history/history.component').then(
            (m) => m.HistoryComponent
          ),
      },
      {
        path: 'edit-profile',
        loadComponent: () =>
          import(
            './doctor/doctor-pages/edit-profile/edit-profile.component'
          ).then((m) => m.EditProfileComponent),
      },
    ],
  },
  {
    path: 'nurse',
    loadComponent: () =>
      import('./nurse/nurse.component').then((m) => m.NurseComponent),
    canActivate: [RoleGuard],
    data: { role: UserRole.Nurse },
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'home',
        loadComponent: () =>
          import('./nurse/nurse-pages/dashboard/dashboard.component').then(
            (m) => m.DashboardComponent
          ),
      },
      {
        path: 'patients',
        loadComponent: () =>
          import('./nurse/nurse-pages/patients/patients.component').then(
            (m) => m.PatientsComponent
          ),
      },
      {
        path: 'tickets-history',
        loadComponent: () =>
          import(
            './nurse/nurse-pages/tickets-history/tickets-history.component'
          ).then((m) => m.TicketsHistoryComponent),
      },
      {
        path: 'edit-profile',
        loadComponent: () =>
          import(
            './nurse/nurse-pages/edit-profile/edit-profile.component'
          ).then((m) => m.EditProfileComponent),
      },
    ],
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
          import(
            './radiologist/radiologist-pages/workspace/workspace.component'
          ).then((m) => m.WorkspaceComponent),
      },
      {
        path: 'patients',
        loadComponent: () =>
          import(
            './radiologist/radiologist-pages/patients/patients.component'
          ).then((m) => m.PatientsComponent),
      },
      {
        path: 'tickets-history',
        loadComponent: () =>
          import(
            './radiologist/radiologist-pages/tickets-history/tickets-history.component'
          ).then((m) => m.TicketsHistoryComponent),
      },
      {
        path: 'edit-profile',
        loadComponent: () =>
          import(
            './radiologist/radiologist-pages/edit-profile/edit-profile.component'
          ).then((m) => m.EditProfileComponent),
      },
    ],
  },
  {
    path: 'lab-technician',
    loadComponent: () =>
      import('./lab-technician/lab-technician.component').then((m) => m.Main),
    canActivate: [RoleGuard],
    data: { role: UserRole.LabTechnician },
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'home',
        loadComponent: () =>
          import(
            './lab-technician/lab-technician-pages/workspace/workspace.component'
          ).then((m) => m.WorkspaceComponent),
      },
      {
        path: 'patients',
        loadComponent: () =>
          import(
            './lab-technician/lab-technician-pages/patients/patients.component'
          ).then((m) => m.PatientsComponent),
      },
      {
        path: 'tickets-history',
        loadComponent: () =>
          import(
            './lab-technician/lab-technician-pages/tickets-history/tickets-history.component'
          ).then((m) => m.TicketsHistoryComponent),
      },
      {
        path: 'edit-profile',
        loadComponent: () =>
          import(
            './lab-technician/lab-technician-pages/edit-profile/edit-profile.component'
          ).then((m) => m.EditProfileComponent),
      },
    ],
  },
  {
    path: 'patient',
    loadComponent: () =>
      import('./patient/patient.component').then((m) => m.PatientComponent),
    canActivate: [RoleGuard],
    data: { role: UserRole.Patient },
    children: [
      { path: '', redirectTo: 'consultation-details', pathMatch: 'full' },

      {
        path: 'consultation-details',
        loadComponent: () =>
          import(
            './patient/patient-pages/consultation-details/consultation-details.component'
          ).then((m) => m.ConsultationDetailsComponent),
      },
      {
        path: 'archived-consultation/:id',
        loadComponent: () =>
          import(
            './patient/patient-pages/archived-consultation/archived-consultation.component'
          ).then((m) => m.ArchivedConsultationComponent),
      },
      {
        path: 'edit-profile',
        loadComponent: () =>
          import(
            './patient/patient-pages/edit-profile/edit-profile.component'
          ).then((m) => m.EditProfileComponent),
      },
    ],
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
