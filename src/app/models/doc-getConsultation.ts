export interface Consultation {
  user_id: number;
  profile_image: string;
  consultation_id: number;
  name: string;
  date_of_birth: string;
  nss: string;
  email: string;
  phone_number: string;
  emergency_contact_name: string;
  emergency_contact_phone: string;
  resume: string;
  archived: boolean;
}
