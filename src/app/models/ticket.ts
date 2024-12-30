export interface Ticket {
    ticketId: string; // Ticket ID
    title: string; // Title of the scan or test
    priority: "low" | "medium" | "critical"; // Priority level
    radiologist: string; // Radiologist's name
    doctor: string; // Doctor's name
    client: string; // Client's name
    consultId: string; // Consultation ID
    ticketDate: string; // Date and time of the ticket in ISO format
  }