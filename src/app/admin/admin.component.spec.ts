import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Main } from './admin.component';
import { CommonModule } from '@angular/common';
import { AdminSidebarComponent } from './admin-components/admin-sidebar/admin-sidebar.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('AdminComponent', () => {
  let component: Main;
  let fixture: ComponentFixture<Main>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule, AdminSidebarComponent, RouterTestingModule],
      declarations: [Main],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Main);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
