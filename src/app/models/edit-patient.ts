export interface EditPatient {
  user_id: number;
  first_name: string;
  last_name: string;
  created_at: string;
  nss: string;
  email: string;
  address: string;
  phone_number: string;
  emergency_contact_name: string;
  emergency_contact_phone: string;
  consultation_count: number;
  profile_image: string;
}

export interface PatientToSend {
  first_name: string;
  last_name: string;
  nss: string;
  email: string;
  address: string;
  phone_number: string;
  emergency_contact_name: string;
  emergency_contact_phone: string;
}
