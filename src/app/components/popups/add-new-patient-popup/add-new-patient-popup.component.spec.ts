import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewPatientPopupComponent } from './add-new-patient-popup.component';

describe('AddNewPatientPopupComponent', () => {
  let component: AddNewPatientPopupComponent;
  let fixture: ComponentFixture<AddNewPatientPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddNewPatientPopupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddNewPatientPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
