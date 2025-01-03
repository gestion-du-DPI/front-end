import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WorkersComponent } from './workers.component';
import { WorkerService } from '../../../services/admin/worker/worker.service';
import { of, throwError } from 'rxjs';

describe('WorkersComponent', () => {
  let component: WorkersComponent;
  let fixture: ComponentFixture<WorkersComponent>;
  let workerService: jasmine.SpyObj<WorkerService>;

  beforeEach(async () => {
    const workerServiceSpy = jasmine.createSpyObj('WorkerService', [
      'getWorkers',
    ]);

    await TestBed.configureTestingModule({
      imports: [WorkersComponent],
      providers: [{ provide: WorkerService, useValue: workerServiceSpy }],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkersComponent);
    component = fixture.componentInstance;
    workerService = TestBed.inject(
      WorkerService
    ) as jasmine.SpyObj<WorkerService>;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should handle error when loading workers', () => {
    workerService.getWorkers.and.returnValue(throwError('Error'));

    component.ngOnInit();

    expect(workerService.getWorkers).toHaveBeenCalled();
    expect(component.workers.length).toBe(0);
    expect(component.filteredWorkers.length).toBe(0);
    expect(component.workersNumber).toBe(0);
  });

  it('should filter workers by name', () => {
    component.workers = [
      { name: 'John Doe', role: 'Doctor' },
      { name: 'Jane Smith', role: 'Nurse' },
    ];
    component.searchQuery = 'John';
    component.searchByName = true;

    component.onSearch();

    expect(component.filteredWorkers.length).toBe(1);
    expect(component.filteredWorkers[0].name).toBe('John Doe');
  });

  it('should filter workers by role', () => {
    component.workers = [
      { name: 'John Doe', role: 'Doctor' },
      { name: 'Jane Smith', role: 'Nurse' },
    ];
    component.searchQuery = 'Nurse';
    component.searchByName = false;

    component.onSearch();

    expect(component.filteredWorkers.length).toBe(1);
    expect(component.filteredWorkers[0].role).toBe('Nurse');
  });

  it('should toggle search filter', () => {
    component.searchByName = true;

    component.toggleSearchFilter();

    expect(component.searchByName).toBe(false);

    component.toggleSearchFilter();

    expect(component.searchByName).toBe(true);
  });
});
