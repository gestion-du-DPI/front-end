import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultationArchivedComponent } from './consultation-archived.component';

describe('ConsultationArchivedComponent', () => {
  let component: ConsultationArchivedComponent;
  let fixture: ComponentFixture<ConsultationArchivedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultationArchivedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultationArchivedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
