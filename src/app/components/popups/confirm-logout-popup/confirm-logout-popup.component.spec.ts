import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmLogoutPopupComponent } from './confirm-logout-popup.component';

describe('ConfirmLogoutPopupComponent', () => {
  let component: ConfirmLogoutPopupComponent;
  let fixture: ComponentFixture<ConfirmLogoutPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfirmLogoutPopupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmLogoutPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
