import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmDeletePopupComponent } from './confirm-delete-worker-popup.component';

describe('ConfirmDeletePopupComponent', () => {
  let component: ConfirmDeletePopupComponent;
  let fixture: ComponentFixture<ConfirmDeletePopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfirmDeletePopupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmDeletePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
