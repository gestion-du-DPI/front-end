export interface Consultation {
    consultation_id: number;
    archived: boolean;
    date: string;
    doctor_name: string;
    lasted_for: number;
    sgph: string;
    reason: string;
    priority: string;
    resume: string;
}

export interface UserProfile {
    user_id: number;
    profile_image: string;
    name: string;
    date_of_birth: string;
    nss: string;
    email: string;
    phone_number: string;
    emergency_contact_name: string;
    emergency_contact_phone: string;
    medical_condition: string;
    consultations_list: Consultation[];
}