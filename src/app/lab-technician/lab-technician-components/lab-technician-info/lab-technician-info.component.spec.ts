import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabTechnicianInfoComponent } from './lab-technician-info.component';

describe('LabTechnicianInfoComponent', () => {
  let component: LabTechnicianInfoComponent;
  let fixture: ComponentFixture<LabTechnicianInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LabTechnicianInfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LabTechnicianInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
