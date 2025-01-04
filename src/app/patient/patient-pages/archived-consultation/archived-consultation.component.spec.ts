import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchivedConsultationComponent } from './archived-consultation.component';

describe('ArchivedConsultationComponent', () => {
  let component: ArchivedConsultationComponent;
  let fixture: ComponentFixture<ArchivedConsultationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArchivedConsultationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArchivedConsultationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
