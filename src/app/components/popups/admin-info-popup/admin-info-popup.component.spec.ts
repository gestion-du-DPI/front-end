import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminInfoPopupComponent } from './admin-info-popup.component';

describe('AdminInfoPopupComponent', () => {
  let component: AdminInfoPopupComponent;
  let fixture: ComponentFixture<AdminInfoPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminInfoPopupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminInfoPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
