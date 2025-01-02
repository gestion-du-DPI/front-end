import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttachmentsTableComponent } from './attachments-table.component';

describe('AttachmentsTableComponent', () => {
  let component: AttachmentsTableComponent;
  let fixture: ComponentFixture<AttachmentsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AttachmentsTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttachmentsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
