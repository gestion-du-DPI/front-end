import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PatientsTableComponent } from './patients-table.component';
import { PatientService } from '../../../services/admin/patient/patient.service';
import { By } from '@angular/platform-browser';
import { ConfirmDeletePatientPopupComponent } from '../popups/confirm-delete-patient-popup/confirm-delete-patient-popup.component';
import { EditPatientFormComponent } from '../forms/edit-patient-form/edit-patient-form.component';
import { FormsModule } from '@angular/forms';

describe('PatientsTableComponent', () => {
  let component: PatientsTableComponent;
  let fixture: ComponentFixture<PatientsTableComponent>;
  let patientServiceStub: jasmine.SpyObj<PatientService>;

  beforeEach(async () => {
    patientServiceStub = jasmine.createSpyObj('PatientService', [
      'deletePatient',
      'editpfpPatient',
    ]);

    await TestBed.configureTestingModule({
      declarations: [
        PatientsTableComponent,
        ConfirmDeletePatientPopupComponent,
        EditPatientFormComponent,
      ],
      providers: [{ provide: PatientService, useValue: patientServiceStub }],
      imports: [FormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(PatientsTableComponent);
    component = fixture.componentInstance;

    // Mock patient data
    component.patients = [
      {
        user_id: 1,
        name: 'John Doe',
        email: 'john@example.com',
        phone_number: '123456789',
        nss: '12345678',
        address: '123 Main St',
        emergency_contact_name: 'Jane Doe',
        emergency_contact_phone: '987654321',
        consultation_count: 10,
      },
    ];

    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should display patients in the table', () => {
    const rows = fixture.debugElement.queryAll(By.css('tbody tr'));
    expect(rows.length).toBe(1); // Since we have only one patient
  });

  it('should display the correct patient information in the table', () => {
    const cells = fixture.debugElement.queryAll(By.css('tbody tr td'));
    expect(cells[0].nativeElement.textContent.trim()).toBe('John Doe');
    expect(cells[1].nativeElement.textContent.trim()).toBe('john@example.com');
    expect(cells[2].nativeElement.textContent.trim()).toBe('123456789');
  });

  it('should show the confirm delete popup when clicking delete icon', () => {
    const deleteButton = fixture.debugElement.query(
      By.css('img[alt="delete"]')
    );
    deleteButton.nativeElement.click();
    fixture.detectChanges();

    const popup = fixture.debugElement.query(
      By.css('app-confirm-delete-patient-popup')
    );
    expect(popup).toBeTruthy();
  });

  it('should close the confirm delete popup when canceling', () => {
    const deleteButton = fixture.debugElement.query(
      By.css('img[alt="delete"]')
    );
    deleteButton.nativeElement.click();
    fixture.detectChanges();

    const cancelButton = fixture.debugElement.query(
      By.css('app-confirm-delete-patient-popup button[alt="cancel"]')
    );
    cancelButton.nativeElement.click();
    fixture.detectChanges();

    const popup = fixture.debugElement.query(
      By.css('app-confirm-delete-patient-popup')
    );
    expect(popup).toBeNull();
  });

  it('should show the edit patient popup when clicking edit icon', () => {
    const editButton = fixture.debugElement.query(By.css('img[alt="edit"]'));
    editButton.nativeElement.click();
    fixture.detectChanges();

    const popup = fixture.debugElement.query(By.css('app-edit-patient-form'));
    expect(popup).toBeTruthy();
  });

  it('should reload patients when profile picture is updated', () => {
    const reloadSpy = spyOn(component, 'reloadPatients');
    const fileInput = fixture.debugElement.query(By.css('input[type="file"]'));
    const file = new File(['dummy content'], 'profile.jpg', {
      type: 'image/jpeg',
    });
    const event = new Event('change');
    Object.defineProperty(fileInput.nativeElement, 'files', {
      value: [file],
    });

    fileInput.nativeElement.dispatchEvent(event);
    fixture.detectChanges();

    expect(reloadSpy).toHaveBeenCalled();
  });
});
