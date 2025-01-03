import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DashboardComponent } from './dashboard.component';
import { DashboardService } from '../../../services/admin/dashboard/dashboard.service';
import { of } from 'rxjs';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let dashboardService: DashboardService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, DashboardComponent],
      providers: [DashboardService],
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    dashboardService = TestBed.inject(DashboardService);

    spyOn(dashboardService, 'getDashboardData').and.returnValue(
      of({
        admin_info: {
          id: 1,
          hospital: 'Test Hospital',
          name: 'Admin',
          address: '123 Admin St',
          phone_number: '123456789',
          email: 'admin@example.com',
          created_at: '2023-01-01',
          updated_at: '2023-01-01',
          profile_image: 'admin-profile.jpg',
          patients_count: 100,
          workers_count: 50,
        },
        role_counts: {
          patients: 100,
          doctors: 50,
          nurses: 30,
          radiologists: 10,
          lab_technicians: 5,
          consultations: 200,
        },
        stats: [{ January: { patients: 50, consultations: 100 } }],
        recent_patients: [
          {
            user_id: 1,
            name: 'John Doe',
            phone_number: '123456789',
            nss: '123-45-6789',
            email: 'john@example.com',
            address: '123 Main St',
            emergency_contact_name: 'Jane Doe',
            emergency_contact_phone: '987654321',
            created_at: '2023-01-01',
          },
        ],
        top_staff: [{ user_id: 1, name: 'Dr. Smith', role: 'Doctor' }],
      })
    );

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch and set dashboard data correctly', () => {
    expect(component.hospitalName).toBe('Test Hospital');
    expect(component.name).toBe('Admin');
    expect(component.totalPatients).toBe(100);
    expect(component.totalDoctors).toBe(50);
    expect(component.totalNurses).toBe(30);
    expect(component.totalRadiologists).toBe(15); // radiologists + lab_technicians
    expect(component.totalConsultations).toBe(200);
    expect(component.recentPatients.length).toBe(1);
    expect(component.topMedicalStaff.length).toBe(1);
  });

  it('should render the dashboard overview correctly', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome in');
    expect(compiled.querySelector('h2').textContent).toContain('Admin');
    expect(
      compiled
        .querySelector('app-card[title="Total Patients"]')
        .getAttribute('count')
    ).toBe('100');
    expect(
      compiled
        .querySelector('app-card[title="Total Doctors"]')
        .getAttribute('count')
    ).toBe('50');
    expect(
      compiled
        .querySelector('app-card[title="Total Nurses"]')
        .getAttribute('count')
    ).toBe('30');
    expect(
      compiled
        .querySelector('app-card[title="Lab/Radiologists"]')
        .getAttribute('count')
    ).toBe('15');
    expect(
      compiled
        .querySelector('app-card[title="Total Consultations"]')
        .getAttribute('count')
    ).toBe('200');
  });
});
