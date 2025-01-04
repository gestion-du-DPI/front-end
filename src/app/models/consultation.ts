export interface Consultation {
  patient_id: number;
  priority: 'Low' | 'Medium' | 'Critical';
  reason: string;
}
