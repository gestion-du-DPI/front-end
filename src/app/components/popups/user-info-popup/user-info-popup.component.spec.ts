import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserInfoPopupComponent } from './user-info-popup.component';


describe('UserInfoPopupComponent', () => {
  let component: UserInfoPopupComponent;
  let fixture: ComponentFixture<UserInfoPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserInfoPopupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserInfoPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
