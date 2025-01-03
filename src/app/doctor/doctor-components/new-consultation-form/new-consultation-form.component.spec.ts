import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewConsultationFormComponent } from './new-consultation-form.component';

describe('NewConsultationFormComponent', () => {
  let component: NewConsultationFormComponent;
  let fixture: ComponentFixture<NewConsultationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewConsultationFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewConsultationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
