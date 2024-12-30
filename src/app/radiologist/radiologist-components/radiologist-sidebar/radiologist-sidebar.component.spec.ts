import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RadiologistSidebarComponent } from './radiologist-sidebar.component';


describe('RadiologistSidebarComponent', () => {
  let component: RadiologistSidebarComponent;
  let fixture: ComponentFixture<RadiologistSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RadiologistSidebarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RadiologistSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
