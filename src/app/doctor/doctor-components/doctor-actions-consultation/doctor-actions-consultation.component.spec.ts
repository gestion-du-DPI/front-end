import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorActionsConsultationComponent } from './doctor-actions-consultation.component';

describe('DoctorActionsConsultationComponent', () => {
  let component: DoctorActionsConsultationComponent;
  let fixture: ComponentFixture<DoctorActionsConsultationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoctorActionsConsultationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoctorActionsConsultationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
