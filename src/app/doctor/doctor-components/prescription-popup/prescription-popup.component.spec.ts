import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrescriptionPopupComponent } from './prescription-popup.component';

describe('PrescriptionPopupComponent', () => {
  let component: PrescriptionPopupComponent;
  let fixture: ComponentFixture<PrescriptionPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrescriptionPopupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrescriptionPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
