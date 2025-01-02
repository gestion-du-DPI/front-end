import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultsObservationsComponent } from './results-observations.component';

describe('ResultsObservationsComponent', () => {
  let component: ResultsObservationsComponent;
  let fixture: ComponentFixture<ResultsObservationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResultsObservationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultsObservationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
