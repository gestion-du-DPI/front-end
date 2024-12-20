import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditWorkerFormComponent } from './edit-worker-form.component';

describe('EditWorkerFormComponent', () => {
  let component: EditWorkerFormComponent;
  let fixture: ComponentFixture<EditWorkerFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditWorkerFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditWorkerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
