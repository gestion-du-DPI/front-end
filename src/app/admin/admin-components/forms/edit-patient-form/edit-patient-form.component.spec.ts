import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { EditPatientFormComponent } from './edit-patient-form.component';
import { PatientService } from '../../../../services/admin/patient/patient.service';
import { of, throwError } from 'rxjs';
import { By } from '@angular/platform-browser';

describe('EditPatientFormComponent', () => {
  let component: EditPatientFormComponent;
  let fixture: ComponentFixture<EditPatientFormComponent>;
  let mockPatientService: jasmine.SpyObj<PatientService>;

  beforeEach(async () => {
    mockPatientService = jasmine.createSpyObj('PatientService', [
      'editPatient',
    ]);

    await TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [EditPatientFormComponent],
      providers: [{ provide: PatientService, useValue: mockPatientService }],
    }).compileComponents();

    fixture = TestBed.createComponent(EditPatientFormComponent);
    component = fixture.componentInstance;

    component.formData = {
      user_id: 1,
      first_name: 'John',
      last_name: 'Doe',
      nss: '123456789',
      address: '123 Main Street',
      phone_number: '+123456789',
      email: 'john.doe@example.com',
      emergency_contact_name: 'Jane Doe',
      emergency_contact_phone: '+987654321',
      created_at: '2022-01-01T00:00:00Z',
      consultation_count: 5,
      profile_image: '',
    };

    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should emit cancel event when cancel button is clicked', () => {
    spyOn(component.cancel, 'emit');
    const cancelButton = fixture.debugElement.query(
      By.css('button[type="button"]')
    );
    cancelButton.nativeElement.click();
    expect(component.cancel.emit).toHaveBeenCalled();
  });

  it('should emit save event when form is valid and submitted', () => {
    spyOn(component.save, 'emit');
    mockPatientService.editPatient.and.returnValue(of(component.formData));

    const form = fixture.debugElement.query(By.css('form'));
    form.triggerEventHandler('ngSubmit', null);

    expect(mockPatientService.editPatient).toHaveBeenCalled();
    expect(component.save.emit).toHaveBeenCalled();
  });

  it('should not emit save event when form is invalid', () => {
    spyOn(component.save, 'emit');
    component.formData.first_name = ''; // Invalid first name
    fixture.detectChanges();

    const form = fixture.debugElement.query(By.css('form'));
    form.triggerEventHandler('ngSubmit', null);

    expect(mockPatientService.editPatient).not.toHaveBeenCalled();
    expect(component.save.emit).not.toHaveBeenCalled();
  });

  it('should display validation error messages for invalid inputs', () => {
    component.formData.first_name = ''; // Invalid first name
    fixture.detectChanges();

    const form = fixture.debugElement.query(By.css('form'));
    form.triggerEventHandler('ngSubmit', null);
    fixture.detectChanges();

    const errorMessage = fixture.debugElement.query(
      By.css('div.text-red-600')
    ).nativeElement;
    expect(errorMessage.textContent).toContain('First name is required.');
  });

  it('should handle error from the PatientService', () => {
    spyOn(console, 'error');
    mockPatientService.editPatient.and.returnValue(
      throwError(() => new Error('Error'))
    );

    const form = fixture.debugElement.query(By.css('form'));
    form.triggerEventHandler('ngSubmit', null);

    expect(mockPatientService.editPatient).toHaveBeenCalled();
    expect(console.error).toHaveBeenCalledWith(
      'Error updating patient:',
      jasmine.any(Error)
    );
  });
});
