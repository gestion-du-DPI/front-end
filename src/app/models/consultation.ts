export interface Consultation {
    id: string;
    title: string;
    patientId: string;  
    doctorId: string;  
    priority: 'Low' | 'Medium' | 'Critical'; 
    reason: string;
    archived: boolean;
    createdAt: string;  
    notes: string | null; 
  }