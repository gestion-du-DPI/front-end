import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewConsultationPopupComponent } from './new-consultation-popup.component';

describe('NewConsultationPopupComponent', () => {
  let component: NewConsultationPopupComponent;
  let fixture: ComponentFixture<NewConsultationPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewConsultationPopupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewConsultationPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
