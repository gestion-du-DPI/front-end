import { Prescription } from "../models/prescription";

export const MOCK_PRESCRIPTIONS: Prescription[] = [
  {
    hospital: 'Mustapha Bacha Hospital',
    doctor: 'ATIR Zineb',
    specialty: 'Children',
    date: '28/12/2024',
    patient: {
      name: 'SADOUN Amel',
      age: 20,
      gender: 'Female',
    },
    medications: [
      {
        name: 'Lisinopril 20mg',
        dosage: 'One tablespoon',
        frequency: '5 days in the evening',
        duration: '5 days',
        instructions: '',
      },
      {
        name: 'Pregabalin 75mg',
        dosage: 'One capsule',
        frequency: '3 days in the morning',
        duration: '3 days',
        instructions: '',
      },
      {
        name: 'Metformin 500mg',
        dosage: 'One tablet twice',
        frequency: '10 days with meals',
        duration: '10 days',
        instructions: '',
      },
    ],
    additionalNotes: [
      'Take with food to reduce stomach upset.',
      'Avoid driving or operating heavy machinery after taking this medication as it may cause drowsiness.',
    ],
    signature: '________________',
  },
  {
    hospital: 'Mustapha Bacha Hospital',
    doctor: 'Sadoun Amel',
    specialty: 'Children',
    date: '28/12/2024',
    patient: {
      name: 'SADOUN Amel',
      age: 20,
      gender: 'Female',
    },
    medications: [
      {
        name: 'Lisinopril 20mg',
        dosage: 'One tablespoon',
        frequency: '5 days in the evening',
        duration: '5 days',
        instructions: '',
      },
      {
        name: 'Pregabalin 75mg',
        dosage: 'One capsule',
        frequency: '3 days in the morning',
        duration: '3 days',
        instructions: '',
      },
      {
        name: 'Metformin 500mg',
        dosage: 'One tablet twice',
        frequency: '10 days with meals',
        duration: '10 days',
        instructions: '',
      },
    ],
    additionalNotes: [
      'Take with food to reduce stomach upset.',
      'Avoid driving or operating heavy machinery after taking this medication as it may cause drowsiness.',
    ],
    signature: '________________',
  },
  {
    hospital: 'Mustapha Bacha Hospital',
    doctor: 'Mostefai Mounir Sofiane',
    specialty: 'Children',
    date: '28/12/2024',
    patient: {
      name: 'SADOUN Amel',
      age: 20,
      gender: 'Female',
    },
    medications: [
      {
        name: 'Lisinopril 20mg',
        dosage: 'One tablespoon',
        frequency: '5 days in the evening',
        duration: '5 days',
        instructions: '',
      },
      {
        name: 'Pregabalin 75mg',
        dosage: 'One capsule',
        frequency: '3 days in the morning',
        duration: '3 days',
        instructions: '',
      },
      {
        name: 'Metformin 500mg',
        dosage: 'One tablet twice',
        frequency: '10 days with meals',
        duration: '10 days',
        instructions: '',
      },
    ],
    additionalNotes: [
      'Take with food to reduce stomach upset.',
      'Avoid driving or operating heavy machinery after taking this medication as it may cause drowsiness.',
    ],
    signature: '________________',
  },
];
