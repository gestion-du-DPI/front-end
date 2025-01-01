export interface AdminInfo {
  name: string;
  id: number;
  hospital: string;
  address: string;
  phone_number: string;
  email: string;
  profile_image: string;
}

export interface RoleCounts {
  patients: number;
  doctors: number;
  nurses: number;
  radiologists: number;
  lab_technicians: number;
  consultations: number;
}

export interface TopStaff {
  user_id: number;
  name: string;
  role: string;
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

export interface AdminDashboard {
  admin_info: AdminInfo;
  role_counts: RoleCounts;
  top_staff: TopStaff[];
  stats: Array<{
    [month: string]: { patients: number; consultations: number };
  }>;
  recent_patients: RecentPatient[];
}
