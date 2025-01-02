export interface Prescription {
    hospital: string;
    doctor: string;
    specialty: string;
    date: string;
    patient: {
      name: string;
      age: number;
      gender: string;
    };
    medications: {
      name: string;
      dosage: string;
      frequency: string;
      duration: string;
      instructions: string;
    }[];
    additionalNotes: string[];
    signature: string;
  }
  