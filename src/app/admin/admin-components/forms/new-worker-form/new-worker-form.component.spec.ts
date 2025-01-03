import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { NewWorkerFormComponent } from './new-worker-form.component';
import { WorkerService } from '../../../../services/admin/worker/worker.service';
import { of, throwError } from 'rxjs';

describe('NewWorkerFormComponent', () => {
  let component: NewWorkerFormComponent;
  let fixture: ComponentFixture<NewWorkerFormComponent>;
  let mockWorkerService: jasmine.SpyObj<WorkerService>;

  beforeEach(async () => {
    mockWorkerService = jasmine.createSpyObj('WorkerService', ['addWorker']);

    await TestBed.configureTestingModule({
      declarations: [NewWorkerFormComponent],
      imports: [FormsModule, ReactiveFormsModule],
      providers: [{ provide: WorkerService, useValue: mockWorkerService }],
    }).compileComponents();

    fixture = TestBed.createComponent(NewWorkerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should display validation errors when required fields are empty and form is submitted', () => {
    const saveButton = fixture.debugElement.query(
      By.css('button[type="submit"]')
    );
    saveButton.triggerEventHandler('click', null);

    fixture.detectChanges();

    const firstNameError = fixture.debugElement.query(
      By.css('div.text-red-600')
    );
    expect(firstNameError.nativeElement.textContent).toContain(
      'First Name is required'
    );
  });

  it('should call WorkerService.addWorker when form is valid and submitted', () => {
    component.formData = {
      first_name: 'John',
      last_name: 'Doe',
      gender: 'Male',
      date_of_birth: '1990-01-01',
      place_of_birth: 'Algiers',
      address: '123 Main St',
      nss: '123456789',
      phone_number: '1234567890',
      email: 'john.doe@example.com',
      role: 'Doctor',
      speciality: 'Cardiology',
    } as any;

    mockWorkerService.addWorker.and.returnValue(
      of({
        first_name: 'John',
        last_name: 'Doe',
        gender: 'Male',
        date_of_birth: '1990-01-01',
        place_of_birth: 'Algiers',
        address: '123 Main St',
        nss: '123456789',
        phone_number: '1234567890',
        email: 'john.doe@example.com',
        role: 'Doctor',
        speciality: 'Cardiology',
      })
    );

    const saveButton = fixture.debugElement.query(
      By.css('button[type="submit"]')
    );
    saveButton.triggerEventHandler('click', null);

    expect(mockWorkerService.addWorker).toHaveBeenCalledWith(
      component.formData
    );
  });

  it('should emit save event when form is successfully submitted', () => {
    spyOn(component.save, 'emit');
    component.formData = {
      first_name: 'John',
      last_name: 'Doe',
      gender: 'Male',
      date_of_birth: '1990-01-01',
      place_of_birth: 'Algiers',
      address: '123 Main St',
      nss: '123456789',
      phone_number: '1234567890',
      email: 'john.doe@example.com',
      role: 'Doctor',
      speciality: 'Cardiology',
    } as any;

    mockWorkerService.addWorker.and.returnValue(
      of({
        first_name: 'John',
        last_name: 'Doe',
        gender: 'Male',
        date_of_birth: '1990-01-01',
        place_of_birth: 'Algiers',
        address: '123 Main St',
        nss: '123456789',
        phone_number: '1234567890',
        email: 'john.doe@example.com',
        role: 'Doctor',
        speciality: 'Cardiology',
      })
    );
    const saveButton = fixture.debugElement.query(
      By.css('button[type="submit"]')
    );
    saveButton.triggerEventHandler('click', null);

    expect(component.save.emit).toHaveBeenCalled();
  });

  it('should handle errors gracefully when WorkerService.addWorker fails', () => {
    spyOn(console, 'error');
    mockWorkerService.addWorker.and.returnValue(
      throwError(() => new Error('Error adding worker'))
    );

    const saveButton = fixture.debugElement.query(
      By.css('button[type="submit"]')
    );
    saveButton.triggerEventHandler('click', null);

    expect(console.error).toHaveBeenCalledWith(
      'Error adding worker:',
      jasmine.any(Error)
    );
  });

  it('should emit cancel event when cancel button is clicked', () => {
    spyOn(component.cancel, 'emit');

    const cancelButton = fixture.debugElement.query(
      By.css('button[type="button"]')
    );
    cancelButton.triggerEventHandler('click', null);

    expect(component.cancel.emit).toHaveBeenCalled();
  });
});
