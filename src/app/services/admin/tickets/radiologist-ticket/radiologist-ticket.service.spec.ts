import { TestBed } from '@angular/core/testing';
import { RadiologistTicketService } from './radiologist-ticket.service';


describe('RadiologistTicketService', () => {
  let service: RadiologistTicketService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RadiologistTicketService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
