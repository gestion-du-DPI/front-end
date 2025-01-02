import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientInfosConsultationArchivedComponent } from './patient-infos-consultation-archived.component';

describe('PatientInfosConsultationArchivedComponent', () => {
  let component: PatientInfosConsultationArchivedComponent;
  let fixture: ComponentFixture<PatientInfosConsultationArchivedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PatientInfosConsultationArchivedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientInfosConsultationArchivedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
