export type Priority = 'Critical' | 'Medium' | 'low';

export interface Patient {
  name: string;
  id: string;
  avatar: string;
}

export interface MedicalTest {
  id: string;
  type: 'COVID-19 PCR Test' | 'Iron Studies' | 'Lipid Profile';
  priority: Priority;
  doctor: string;
  patient: Patient;
}
