import { Patient } from "../models/patient";

export const PATIENTS: Patient[] = [
  {
    id: '1',
    name: 'Jane Doe',
    gender: 'Female', // Added gender field
    email: 'jane.doe@example.com',
    phone: '987-654-3210',
    dateOfBirth: '1985-06-15', // Updated to match the dateOfBirth field
    placeOfBirth: 'City', // Added placeOfBirth field
    socialNumber: '987-65-4321',
    address: '123 Elm St, City',
    emergencyContact: 'Jane Doe',
    emergencyPhone: '987-654-3210',
    consultations: 5,
    profilePicture: 'admin.jpg',
  },
  {
    id: '2',
    name: 'Mary Smith',
    gender: 'Female', // Added gender field
    email: 'mary.smith@example.com',
    phone: '234-567-8901',
    dateOfBirth: '1990-08-25', // Updated to match the dateOfBirth field
    placeOfBirth: 'City', // Added placeOfBirth field
    socialNumber: '234-56-7890',
    address: '456 Oak St, City',
    emergencyContact: 'David Smith',
    emergencyPhone: '876-543-2109',
    consultations: 3,
    profilePicture: 'admin.jpg',
  },
  {
    id: '3',
    name: 'Alice Johnson',
    gender: 'Female', // Added gender field
    email: 'alice.johnson@example.com',
    phone: '345-678-9012',
    dateOfBirth: '1982-02-10', // Updated to match the dateOfBirth field
    placeOfBirth: 'City', // Added placeOfBirth field
    socialNumber: '345-67-8901',
    address: '789 Pine St, City',
    emergencyContact: 'Bob Johnson',
    emergencyPhone: '765-432-1098',
    consultations: 8,
    profilePicture: 'admin.jpg',
  },
];
