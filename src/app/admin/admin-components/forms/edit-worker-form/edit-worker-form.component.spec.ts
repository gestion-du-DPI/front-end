import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { EditWorkerFormComponent } from './edit-worker-form.component';
import { WorkerService } from '../../../../services/admin/worker/worker.service';
import { of, throwError } from 'rxjs';
import { By } from '@angular/platform-browser';

describe('EditWorkerFormComponent', () => {
  let component: EditWorkerFormComponent;
  let fixture: ComponentFixture<EditWorkerFormComponent>;
  let workerServiceMock: jasmine.SpyObj<WorkerService>;

  beforeEach(async () => {
    workerServiceMock = jasmine.createSpyObj('WorkerService', ['editWorker']);

    await TestBed.configureTestingModule({
      declarations: [EditWorkerFormComponent],
      imports: [FormsModule],
      providers: [{ provide: WorkerService, useValue: workerServiceMock }],
    }).compileComponents();

    fixture = TestBed.createComponent(EditWorkerFormComponent);
    component = fixture.componentInstance;
    component.formData = {
      first_name: '',
      last_name: '',
      address: '',
      nss: '',
      phone_number: '',
      email: '',
    };
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should call onCancel when cancel button is clicked', () => {
    spyOn(component, 'onCancel');
    const button = fixture.debugElement.query(By.css('button[type="button"]'));
    button.triggerEventHandler('click', null);
    expect(component.onCancel).toHaveBeenCalled();
  });

  it('should emit cancel event when onCancel is called', () => {
    spyOn(component.cancel, 'emit');
    component.onCancel();
    expect(component.cancel.emit).toHaveBeenCalled();
  });

  it('should call workerService.editWorker on valid form submission', () => {
    component.formData = {
      first_name: 'John',
      last_name: 'Doe',
      address: '123 Street',
      nss: '123456789',
      phone_number: '1234567890',
      email: 'john.doe@example.com',
    };
    workerServiceMock.editWorker.and.returnValue(
      of({
        first_name: 'John',
        last_name: 'Doe',
        address: '123 Street',
        nss: '123456789',
        phone_number: '1234567890',
        email: 'john.doe@example.com',
      })
    );
    fixture.detectChanges();

    const form = fixture.debugElement.query(By.css('form'));
    form.triggerEventHandler('ngSubmit', null);

    expect(workerServiceMock.editWorker).toHaveBeenCalledWith(
      component.formData
    );
  });

  it('should handle error on form submission failure', () => {
    spyOn(window, 'alert');
    workerServiceMock.editWorker.and.returnValue(
      throwError(() => new Error('Error'))
    );

    component.formData = {
      first_name: 'John',
      last_name: 'Doe',
      address: '123 Street',
      nss: '123456789',
      phone_number: '1234567890',
      email: 'john.doe@example.com',
    };
    fixture.detectChanges();

    const form = fixture.debugElement.query(By.css('form'));
    form.triggerEventHandler('ngSubmit', null);

    expect(window.alert).toHaveBeenCalledWith('Error updating worker');
  });

  it('should mark all fields as touched if form is invalid', () => {
    const form = fixture.debugElement.query(By.css('form'));
    form.triggerEventHandler('ngSubmit', null);

    const invalidFields = fixture.debugElement.queryAll(
      By.css('.ng-invalid.ng-touched')
    );
    expect(invalidFields.length).toBeGreaterThan(0);
  });
});
