import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminSidebarComponent } from './admin-sidebar.component';
import { AuthService } from '../../../services/auth/auth.service';
import { ConfirmLogoutPopupComponent } from '../../../components/popups/confirm-logout-popup/confirm-logout-popup.component';
import { RouterTestingModule } from '@angular/router/testing';
import { CommonModule } from '@angular/common';

describe('AdminSidebarComponent', () => {
  let component: AdminSidebarComponent;
  let fixture: ComponentFixture<AdminSidebarComponent>;
  let authServiceSpy: jasmine.SpyObj<AuthService>;

  beforeEach(async () => {
    authServiceSpy = jasmine.createSpyObj('AuthService', ['logout']);

    await TestBed.configureTestingModule({
      declarations: [AdminSidebarComponent, ConfirmLogoutPopupComponent],
      imports: [CommonModule, RouterTestingModule],
      providers: [{ provide: AuthService, useValue: authServiceSpy }],
    }).compileComponents();

    fixture = TestBed.createComponent(AdminSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle sidebar visibility', () => {
    component.toggleSidebar();
    expect(component.isSidebarCollapsed).toBeFalse();

    component.toggleSidebar();
    expect(component.isSidebarCollapsed).toBeTrue();
  });

  it('should show sidebar and text after delay', (done) => {
    component.showSidebar();
    expect(component.isSidebarCollapsed).toBeFalse();

    setTimeout(() => {
      expect(component.showText).toBeTrue();
      done();
    }, 200);
  });

  it('should hide sidebar and text immediately', () => {
    component.hideSideBar();
    expect(component.isSidebarCollapsed).toBeTrue();
    expect(component.showText).toBeFalse();
  });

  it('should display the logout popup on logout', () => {
    component.onLogout();
    expect(component.showLogoutPopup).toBeTrue();
  });

  it('should hide logout popup on cancel', () => {
    component.onCancelLogout();
    expect(component.showLogoutPopup).toBeFalse();
  });

  it('should call AuthService logout and hide popup on confirm', () => {
    component.onConfirmLogout();
    expect(authServiceSpy.logout).toHaveBeenCalled();
    expect(component.showLogoutPopup).toBeFalse();
  });

  it('should stop propagation of click events in navigation items', () => {
    const event = new MouseEvent('click');
    spyOn(event, 'stopPropagation');

    const navItem = fixture.nativeElement.querySelector('li');
    navItem.dispatchEvent(event);

    expect(event.stopPropagation).toHaveBeenCalled();
  });
});
