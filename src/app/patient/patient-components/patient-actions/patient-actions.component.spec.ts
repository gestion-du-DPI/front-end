import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientActionsComponent } from './patient-actions.component';

describe('PatientActionsComponent', () => {
  let component: PatientActionsComponent;
  let fixture: ComponentFixture<PatientActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PatientActionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
