import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NewPatientFormComponent } from './new-patient-form.component';
import { PatientService } from '../../../../services/admin/patient/patient.service';
import { of, throwError } from 'rxjs';
import { By } from '@angular/platform-browser';

describe('NewPatientFormComponent', () => {
  let component: NewPatientFormComponent;
  let fixture: ComponentFixture<NewPatientFormComponent>;
  let patientServiceMock: jasmine.SpyObj<PatientService>;

  beforeEach(async () => {
    patientServiceMock = jasmine.createSpyObj('PatientService', ['addPatient']);

    await TestBed.configureTestingModule({
      declarations: [NewPatientFormComponent],
      imports: [FormsModule],
      providers: [{ provide: PatientService, useValue: patientServiceMock }],
    }).compileComponents();

    fixture = TestBed.createComponent(NewPatientFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should emit cancel event when onCancel is called', () => {
    spyOn(component.cancel, 'emit');
    component.onCancel();
    expect(component.cancel.emit).toHaveBeenCalled();
  });

  it('should emit confirm event on successful form submission', () => {
    spyOn(component.confirm, 'emit');
    component.formData = {
      email: 'test@example.com',
      first_name: 'John',
      last_name: 'Doe',
      phone_number: '1234567890',
      address: '123 Main St',
      gender: 'Male',
      nss: '123456789',
      date_of_birth: '2000-01-01',
      place_of_birth: 'Cityville',
      emergency_contact_name: 'Jane Doe',
      emergency_contact_phone: '9876543210',
      medical_condition: 'None',
    };

    patientServiceMock.addPatient.and.returnValue(of(component.formData));

    const form = fixture.debugElement.query(By.css('form'));
    form.triggerEventHandler('ngSubmit', null);

    expect(patientServiceMock.addPatient).toHaveBeenCalledWith(component.formData);
    expect(component.confirm.emit).toHaveBeenCalled();
  });

  it('should alert the user on form submission failure', () => {
    spyOn(window, 'alert');
    component.formData = {
      email: 'test@example.com',
      first_name: 'John',
      last_name: 'Doe',
      phone_number: '1234567890',
      address: '123 Main St',
      gender: 'Male',
      nss: '123456789',
      date_of_birth: '2000-01-01',
      place_of_birth: 'Cityville',
      emergency_contact_name: 'Jane Doe',
      emergency_contact_phone: '9876543210',
      medical_condition: 'None',
    };

    patientServiceMock.addPatient.and.returnValue(throwError(() => new Error('Failed')));

    const form = fixture.debugElement.query(By.css('form'));
    form.triggerEventHandler('ngSubmit', null);

    expect(patientServiceMock.addPatient).toHaveBeenCalled();
    expect(window.alert).toHaveBeenCalledWith('Failed');
  });

  it('should mark all fields as touched if the form is invalid', () => {
    const form = fixture.debugElement.query(By.css('form'));
    form.triggerEventHandler('ngSubmit', null);

    const invalidFields = fixture.debugElement.queryAll(By.css('.ng-invalid.ng-touched'));
    expect(invalidFields.length).toBeGreaterThan(0);
  });

  it('should call onCancel when cancel button is clicked', () => {
    spyOn(component, 'onCancel');
    const button = fixture.debugElement.query(By.css('button[type="button"]'));
    button.triggerEventHandler('click', null);
    expect(component.onCancel).toHaveBeenCalled();
  });
});
