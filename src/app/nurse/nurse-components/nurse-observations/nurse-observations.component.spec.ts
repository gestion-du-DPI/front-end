import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NurseObservationsComponent } from './nurse-observations.component';

describe('NurseObservationsComponent', () => {
  let component: NurseObservationsComponent;
  let fixture: ComponentFixture<NurseObservationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NurseObservationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NurseObservationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
