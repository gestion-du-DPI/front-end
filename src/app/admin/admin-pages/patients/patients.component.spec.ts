import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of, throwError } from 'rxjs';
import { PatientsComponent } from './patients.component';
import { PatientService } from '../../../services/admin/patient/patient.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PatientsTableComponent } from '../../admin-components/patients-table/patients-table.component';
import { HeaderComponent } from '../../admin-components/header/header.component';
import { QrScannerComponent } from '../../admin-components/popups/qr-scanner/qr-scanner.component';
import * as jest from 'jest-mock';

describe('PatientsComponent', () => {
  let component: PatientsComponent;
  let fixture: ComponentFixture<PatientsComponent>;
  let patientServiceMock: any;

  beforeEach(async () => {
    patientServiceMock = {
      getPatients: jest.fn()
    };

    await TestBed.configureTestingModule({
      imports: [
        CommonModule,
        FormsModule,
        PatientsTableComponent,
        HeaderComponent,
        QrScannerComponent
      ],
      declarations: [PatientsComponent],
      providers: [{ provide: PatientService, useValue: patientServiceMock }]
    }).compileComponents();

    fixture = TestBed.createComponent(PatientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load patients on init', () => {
    const patientsMock = { patients: [{ name: 'John Doe', nss: '123' }] };
    patientServiceMock.getPatients.mockReturnValue(of(patientsMock));
    component.ngOnInit();
    expect(component.patients.length).toBe(1);
    expect(component.filteredPatients.length).toBe(1);
    expect(component.patientsNumber).toBe(1);
  });

  it('should handle error when loading patients', () => {
    patientServiceMock.getPatients.mockReturnValue(throwError('Error'));
    component.ngOnInit();
    expect(component.loading).toBe(false);
    expect(component.patients.length).toBe(0);
  });

  it('should filter patients based on search query', () => {
    component.patients = [
      { first_name: 'John', last_name: 'Doe' },
      { first_name: 'Jane', last_name: 'Smith' }
    ];
    component.searchQuery = 'Jane';
    component.onSearch();
    expect(component.filteredPatients.length).toBe(1);
    expect(component.filteredPatients[0].first_name).toBe('Jane');
  });

  it('should show QR scan popup', () => {
    component.onShowQRscan();
    expect(component.showscanQRpopup).toBe(true);
  });

  it('should hide QR scan popup', () => {
    component.onHideQRscan();
    expect(component.showscanQRpopup).toBe(false);
  });

  it('should validate NSS and find patient', () => {
    component.patients = [{ nss: '123' }];
    component.onNSSValidated('123');
    expect(component.filteredPatients.length).toBe(1);
    expect(component.patientNotFound).toBe(false);
  });

  it('should validate NSS and not find patient', () => {
    component.patients = [{ nss: '123' }];
    component.onNSSValidated('456');
    expect(component.filteredPatients.length).toBe(0);
    expect(component.patientNotFound).toBe(true);
  });
});
