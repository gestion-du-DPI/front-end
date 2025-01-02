export type Priority = 'Critical' | 'Medium' | 'low';

export interface Patient {
  name: string;
  id: string;
  avatar: string;
}

export interface MedicalTest {
  id: string;
  type: string;
  priority: Priority;
  doctor: string;
  patient: Patient;
}
