import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientBadgeComponent } from './patient-badge.component';

describe('PatientBadgeComponent', () => {
  let component: PatientBadgeComponent;
  let fixture: ComponentFixture<PatientBadgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PatientBadgeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
