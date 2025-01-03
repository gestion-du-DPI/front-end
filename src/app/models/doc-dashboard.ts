export interface DoctorInfo {
  id: number;
  name: string;
  hospital: string;
  address: string;
  phone_number: string;
  email: string;
  profile_image: string;
}

export interface Stats {
  [month: string]: {
    patients: number;
    consultations: number;
  };
}

export interface RecentPatient {
  user_id: number;
  name: string;
  created_at: string;
  nss: string;
  email: string;
  address: string;
  phone_number: string;
  emergency_contact_name: string;
  emergency_contact_phone: string;
}

export interface RequestedTest {
  ticket_id: number;
  type: string;
  title: string;
  status: string;
  priority: string;
  patient_id: number;
  patient_name: string;
}

export interface DocHome {
  doctor_info: DoctorInfo;
  stats: Stats[];
  recent_patients: RecentPatient[];
  requested_tests: RequestedTest[];
}
