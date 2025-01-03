import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientInfosArchivedConsultationComponent } from './patient-infos-archived-consultation.component';

describe('PatientInfosArchivedConsultationComponent', () => {
  let component: PatientInfosArchivedConsultationComponent;
  let fixture: ComponentFixture<PatientInfosArchivedConsultationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PatientInfosArchivedConsultationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientInfosArchivedConsultationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
