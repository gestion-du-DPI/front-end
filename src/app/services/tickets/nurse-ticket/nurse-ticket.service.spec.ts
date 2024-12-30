import { TestBed } from '@angular/core/testing';

import { NurseTicketService } from './nurse-ticket.service';

describe('NurseTicketService', () => {
  let service: NurseTicketService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NurseTicketService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
