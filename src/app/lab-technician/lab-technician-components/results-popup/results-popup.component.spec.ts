import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultsPopupComponent } from './results-popup.component';

describe('ResultsPopupComponent', () => {
  let component: ResultsPopupComponent;
  let fixture: ComponentFixture<ResultsPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResultsPopupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultsPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
