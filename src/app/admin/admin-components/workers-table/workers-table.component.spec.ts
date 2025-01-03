import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WorkersTableComponent } from './workers-table.component';
import { WorkerService } from '../../../services/admin/worker/worker.service';
import { of } from 'rxjs';

describe('WorkersTableComponent', () => {
  let component: WorkersTableComponent;
  let fixture: ComponentFixture<WorkersTableComponent>;
  let workerServiceMock: jasmine.SpyObj<WorkerService>;

  beforeEach(async () => {
    // Mock WorkerService
    workerServiceMock = jasmine.createSpyObj('WorkerService', [
      'deleteWorker',
      'editpfpWorker',
    ]);

    await TestBed.configureTestingModule({
      declarations: [WorkersTableComponent],
      providers: [
        { provide: WorkerService, useValue: workerServiceMock },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkersTableComponent);
    component = fixture.componentInstance;

    // Mock workers input
    component.workers = [
      {
        user_id: 1,
        name: 'John Doe',
        role: 'Engineer',
        email: 'john.doe@example.com',
        phone_number: '123-456-7890',
        nss: '000123456',
        address: '123 Main St',
        created_at: new Date('2025-01-01'),
        profile_image: 'profile-image.jpg',
      },
    ];

    fixture.detectChanges(); // Initial render
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should display workers in the table', () => {
    const compiled = fixture.nativeElement;

    expect(compiled.querySelector('tbody tr')).toBeTruthy(); // Ensure row is rendered
    expect(compiled.querySelector('td').textContent).toContain('John Doe'); // Check worker name
    expect(compiled.querySelector('td').textContent).toContain('Engineer'); // Check worker role
  });

  it('should show confirm delete popup when delete icon is clicked', () => {
    const deleteButton = fixture.debugElement.nativeElement.querySelectorAll('.icon')[1];
    deleteButton.click();
    fixture.detectChanges();

    expect(component.showConfirmDeletePopup).toBeTrue();
  });

  it('should call WorkerService to delete worker on confirm delete', () => {
    workerServiceMock.deleteWorker.and.returnValue(of(void 0));
    
    component.workerToDelete = component.workers[0];
    component.onConfirmDelete(); // Simulate confirmation
    fixture.detectChanges();

    expect(workerServiceMock.deleteWorker).toHaveBeenCalledWith(1); // Check if deleteWorker was called with correct user_id
    expect(component.showConfirmDeletePopup).toBeFalse(); // Popup should be hidden
  });

  it('should call WorkerService to update profile picture', () => {
    workerServiceMock.editpfpWorker.and.returnValue(of({}));

    const inputEvent = {
      target: {
        files: [new File(['test'], 'test.jpg', { type: 'image/jpeg' })],
      },
    } as unknown as Event;
    component.onImageUpload(inputEvent, component.workers[0]); // Simulate file input
    fixture.detectChanges();

    expect(workerServiceMock.editpfpWorker).toHaveBeenCalled();
  });

  it('should close confirm delete popup on cancel delete', () => {
    component.showConfirmDeletePopup = true; // Set the popup to be visible
    component.onCancelDelete(); // Simulate cancel action
    fixture.detectChanges();

    expect(component.showConfirmDeletePopup).toBeFalse(); // Popup should be hidden
  });
});
