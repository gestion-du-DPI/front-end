import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphPopUpComponent } from './graph-pop-up.component';

describe('GraphPopUpComponent', () => {
  let component: GraphPopUpComponent;
  let fixture: ComponentFixture<GraphPopUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GraphPopUpComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraphPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
