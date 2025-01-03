import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientBadgeInfosComponent } from './patient-badge-infos.component';

describe('PatientBadgeInfosComponent', () => {
  let component: PatientBadgeInfosComponent;
  let fixture: ComponentFixture<PatientBadgeInfosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PatientBadgeInfosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientBadgeInfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
