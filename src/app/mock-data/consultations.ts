export interface Consultation {
  id: number; // Added id property
  date: string;
  doctor: string;
  createdOn: string;
  lastedFor: string;
  SGPH: string;
  reason: string;
  status: "pending" | "completed" | "failed";
  briefing: string;
}

export const consultations: Consultation[] = [
  {
    id: 1,
    date: "Jun 12",
    doctor: "Dr. Mostefai",
    createdOn: "15:32",
    lastedFor: "----",
    SGPH: "Pending",
    reason: "a black man shot him three times",
    status: "pending",
    briefing: "The patient was shot three times and is under observation."
  },
  {
    id: 2,
    date: "Jun 12",
    doctor: "Dr. Mostefai",
    createdOn: "15:32",
    lastedFor: "21 days",
    SGPH: "Pending",
    reason: "a black man shot him three times",
    status: "pending",
    briefing: "The patient's condition is improving, pending further tests."
  },
  {
    id: 3,
    date: "Jun 12",
    doctor: "Dr. Mostefai",
    createdOn: "15:32",
    lastedFor: "21 days",
    SGPH: "Pending",
    reason: "a black man shot him three times",
    status: "pending",
    briefing: "Awaiting doctor's review to finalize treatment plan."
  },
  {
    id: 4,
    date: "Jun 12",
    doctor: "Dr. Mostefai",
    createdOn: "15:32",
    lastedFor: "21 days",
    SGPH: "Completed",
    reason: "a black man shot him three times",
    status: "completed",
    briefing: "The patient has fully recovered after successful treatment."
  },
  {
    id: 5,
    date: "Jun 12",
    doctor: "Dr. Mostefai",
    createdOn: "15:32",
    lastedFor: "21 days",
    SGPH: "Failed",
    reason: "a black man shot him three times",
    status: "failed",
    briefing: "Unfortunately, the treatment was unsuccessful."
  }
];
