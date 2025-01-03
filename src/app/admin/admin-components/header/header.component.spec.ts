import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { By } from '@angular/platform-browser';
import { UserBadgeComponent } from '../../../components/user-badge/user-badge.component';
import { NewPatientFormComponent } from '../forms/new-patient-form/new-patient-form.component';
import { FormsModule } from '@angular/forms';
import { DebugElement } from '@angular/core';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let addPatientButton: DebugElement;
  let userBadgeComponent: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        HeaderComponent,
        UserBadgeComponent,
        NewPatientFormComponent,
      ],
      imports: [FormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    addPatientButton = fixture.debugElement.query(
      By.css('#selenium_add_patient_button')
    );
    userBadgeComponent = fixture.debugElement.query(By.css('app-user-badge'));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the add patient button', () => {
    expect(addPatientButton).toBeTruthy();
  });

  it('should toggle the new patient form when the add patient button is clicked', () => {
    // Initially, form should not be displayed
    expect(
      fixture.debugElement.query(By.css('app-new-patient-form'))
    ).toBeNull();

    // Click the button
    addPatientButton.nativeElement.click();
    fixture.detectChanges();

    expect(
      fixture.debugElement.query(By.css('app-new-patient-form'))
    ).toBeTruthy();

    // Click the cancel button in the form
    fixture.debugElement
      .query(By.css('button[type="button"]'))
      .nativeElement.click();
    fixture.detectChanges();

    expect(
      fixture.debugElement.query(By.css('app-new-patient-form'))
    ).toBeNull();
  });

  it('should emit reload event when new patient form is confirmed', () => {
    spyOn(component, 'reloadPatients');

    // Open form
    addPatientButton.nativeElement.click();
    fixture.detectChanges();

    // Trigger confirm
    fixture.debugElement
      .query(By.css('app-new-patient-form'))
      .triggerEventHandler('confirm', null);
    fixture.detectChanges();

    expect(component.reloadPatients).toHaveBeenCalled();
  });

  it('should display the user badge component', () => {
    expect(userBadgeComponent).toBeTruthy();
  });
});
