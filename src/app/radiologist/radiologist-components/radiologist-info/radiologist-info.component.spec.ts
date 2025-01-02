import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadiologistInfoComponent } from './radiologist-info.component';

describe('RadiologistInfoComponent', () => {
  let component: RadiologistInfoComponent;
  let fixture: ComponentFixture<RadiologistInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RadiologistInfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RadiologistInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
