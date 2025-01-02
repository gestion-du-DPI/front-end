import { TestBed } from '@angular/core/testing';

import { LabTechnicianTicketService } from './lab-technician-ticket.service';

describe('LabTechnicianTicketService', () => {
  let service: LabTechnicianTicketService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LabTechnicianTicketService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
