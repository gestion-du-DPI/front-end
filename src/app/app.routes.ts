import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { PatientsComponent } from './admin/patients/patients.component';
import { WorkersComponent } from './admin/workers/workers.component';
import { EditProfileComponent } from './admin/edit-profile/edit-profile.component';

import { RoleGuard } from './services/auth/role.guard';

// Main pages : Admin, Doctor, nurse, radiologist, labTechnician, patient
import { DoctorComponent } from './doctor/doctor.component';
import { NurseComponent } from './nurse/nurse.component';
import { RadiologistComponent } from './radiologist/radiologist.component';
import { LabTechnicianComponent } from './lab-technician/lab-technician.component';
import { PatientComponent } from './patient/patient.component';
import { UserRole } from './models/user-role';
import { UnauthorizedComponent } from './components/unauthorized/unauthorized.component';

export const appRoutes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' }, // Default route
  {
    path: 'admin',
    component: DashboardComponent,
    canActivate: [RoleGuard],
    data: { role: UserRole.Admin },
  },
  {
    path: 'doctor',
    component: DoctorComponent,
    canActivate: [RoleGuard],
    data: { role: UserRole.Doctor },
  },
  {
    path: 'nurse',
    component: NurseComponent,
    canActivate: [RoleGuard],
    data: { role: UserRole.Nurse },
  },
  {
    path: 'radiologist',
    component: RadiologistComponent,
    canActivate: [RoleGuard],
    data: { role: UserRole.Radiologist },
  },
  {
    path: 'labTechnician',
    component: LabTechnicianComponent,
    canActivate: [RoleGuard],
    data: { role: UserRole.LabTechnician },
  },
  {
    path: 'patient',
    component: PatientComponent,
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
