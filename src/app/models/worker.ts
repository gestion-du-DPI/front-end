export interface Worker {
  email: string;
  first_name: string;
  last_name: string;
  phone_number: string;
  address: string;
  gender: string;
  nss: string;
  date_of_birth: string;
  place_of_birth: string;
  role: 'Doctor' | 'Nurse' | 'Pharmacist' | 'LabTechnician';
  speciality: string;
}
