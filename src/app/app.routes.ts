import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { PatientsComponent } from './admin/patients/patients.component';
import { WorkersComponent } from './admin/workers/workers.component';
import { EditProfileComponent } from './admin/edit-profile/edit-profile.component';

import { RoleGuard } from './services/auth/role.guard';
import { FirstLoadingGuard } from './services/auth/firstLoading.guard';
import { UserRole } from './models/user-role';
import { UnauthorizedComponent } from './components/unauthorized/unauthorized.component';

export const appRoutes: Routes = [
  {
    // Inside this guard we will check his role and redirect him to the correct page and if not auth nb3thou ll login page
    path: '',
    component: LoginComponent,
    canActivate: [FirstLoadingGuard],
  },
  {
    path: 'admin',
    component: DashboardComponent,
    canActivate: [RoleGuard],
    data: { role: UserRole.Admin },
    // This comment is from the documentation
    // children: [
    //   {
    //     path: 'child-a', // child route path
    //     component: ChildAComponent, // child route component that the router renders
    //   },
    //   {
    //     path: 'child-b',
    //     component: ChildBComponent, // another child route component that the router renders
    //   },
    // ],
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

  // To be added to routes of the admin component by Amel
  { path: 'home', component: DashboardComponent },
  { path: 'patients', component: PatientsComponent },
  { path: 'staff', component: WorkersComponent },
  { path: 'editprofile', component: EditProfileComponent },
];
