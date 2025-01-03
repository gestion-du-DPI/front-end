import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConfirmDeleteWorkerPopupComponent } from './confirm-delete-worker-popup.component';
import { By } from '@angular/platform-browser';

describe('ConfirmDeleteWorkerPopupComponent', () => {
  let component: ConfirmDeleteWorkerPopupComponent;
  let fixture: ComponentFixture<ConfirmDeleteWorkerPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConfirmDeleteWorkerPopupComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ConfirmDeleteWorkerPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should emit confirm event when delete button is clicked', () => {
    spyOn(component.confirm, 'emit'); // Spy on the confirm emitter

    const deleteButton = fixture.debugElement.query(
      By.css('button:nth-child(2)')
    );
    deleteButton.nativeElement.click(); // Simulate click on delete button

    expect(component.confirm.emit).toHaveBeenCalled(); // Assert that the emit method is called
  });

  it('should emit cancel event when cancel button is clicked', () => {
    spyOn(component.cancel, 'emit'); // Spy on the cancel emitter

    const cancelButton = fixture.debugElement.query(
      By.css('button:nth-child(1)')
    );
    cancelButton.nativeElement.click(); // Simulate click on cancel button

    expect(component.cancel.emit).toHaveBeenCalled(); // Assert that the emit method is called
  });

  it('should display the correct text in the modal', () => {
    const heading = fixture.debugElement
      .query(By.css('h2'))
      .nativeElement.textContent.trim();
    const paragraph = fixture.debugElement
      .query(By.css('p'))
      .nativeElement.textContent.trim();

    expect(heading).toBe('Confirm Delete');
    expect(paragraph).toBe(
      'Are you sure you want to delete this worker? This action cannot be undone.'
    );
  });

  it('should match the popup element structure', () => {
    const popupElement = fixture.debugElement.query(By.css('div.bg-white'));
    expect(popupElement).toBeTruthy();
    expect(popupElement.nativeElement.classList.contains('rounded-xl')).toBe(
      true
    );
    expect(popupElement.nativeElement.classList.contains('w-[400px]')).toBe(
      true
    );
  });
});
