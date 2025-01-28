import { TestBed } from '@angular/core/testing';

import { GetConsultationService } from './get-consultation.service';

describe('GetConsultationService', () => {
  let service: GetConsultationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetConsultationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
