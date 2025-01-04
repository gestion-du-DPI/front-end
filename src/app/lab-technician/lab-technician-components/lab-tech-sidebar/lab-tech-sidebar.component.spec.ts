import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LabTechSidebarComponent } from './lab-tech-sidebar.component';


describe('LabTechSidebarComponent', () => {
  let component: LabTechSidebarComponent;
  let fixture: ComponentFixture<LabTechSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LabTechSidebarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LabTechSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
