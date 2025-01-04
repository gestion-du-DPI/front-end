import { TestBed } from '@angular/core/testing';

import { NewConsultationService } from './new-consultation.service';

describe('NewConsultationService', () => {
  let service: NewConsultationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewConsultationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
