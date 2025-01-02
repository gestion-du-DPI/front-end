import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorActionsComponent } from './doctor-actions.component';

describe('DoctorActionsComponent', () => {
  let component: DoctorActionsComponent;
  let fixture: ComponentFixture<DoctorActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoctorActionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoctorActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
