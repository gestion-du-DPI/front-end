import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalCardsContainerComponent } from './medical-cards-container.component';

describe('MedicalCardsContainerComponent', () => {
  let component: MedicalCardsContainerComponent;
  let fixture: ComponentFixture<MedicalCardsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MedicalCardsContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicalCardsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
