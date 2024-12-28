import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmDeletePatientPopupComponent } from './confirm-delete-patient-popup.component';

describe('ConfirmDeletePatientPopupComponent', () => {
  let component: ConfirmDeletePatientPopupComponent;
  let fixture: ComponentFixture<ConfirmDeletePatientPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfirmDeletePatientPopupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmDeletePatientPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
