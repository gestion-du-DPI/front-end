import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QrScannerComponent } from './qr-scanner.component';
import { NgxScannerQrcodeModule } from 'ngx-scanner-qrcode';
import { By } from '@angular/platform-browser';

describe('QrScannerComponent', () => {
  let component: QrScannerComponent;
  let fixture: ComponentFixture<QrScannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QrScannerComponent],
      imports: [NgxScannerQrcodeModule],
    }).compileComponents();

    fixture = TestBed.createComponent(QrScannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should emit `closePopup` when cancel button is clicked', () => {
    spyOn(component.closePopup, 'emit'); // Spy on the closePopup emitter

    const cancelButton = fixture.debugElement.query(
      By.css('button:nth-child(9)')
    );
    cancelButton.nativeElement.click(); // Simulate click on cancel button

    expect(component.closePopup.emit).toHaveBeenCalled(); // Assert that the emit method is called
  });

  it('should emit `nssValidated` with valid NSS when "Continue" button is clicked', () => {
    spyOn(component.nssValidated, 'emit'); // Spy on the nssValidated emitter

    const nssInput = fixture.debugElement.query(By.css('input#qrValue'));
    nssInput.nativeElement.value = '000182383'; // Simulate valid NSS input
    nssInput.nativeElement.dispatchEvent(new Event('input')); // Dispatch input event

    const continueButton = fixture.debugElement.query(
      By.css('button:nth-child(8)')
    );
    continueButton.nativeElement.click(); // Simulate click on continue button

    expect(component.nssValidated.emit).toHaveBeenCalledWith('000182383'); // Assert that the emit method is called with valid NSS
  });

  it('should show an error message for invalid NSS', () => {
    component.nss = 'invalid-nss'; // Set invalid NSS
    component.validateNSS(); // Trigger validation
    fixture.detectChanges(); // Update the view

    const errorMessage = fixture.debugElement
      .query(By.css('.text-red-600'))
      .nativeElement.textContent.trim();

    expect(errorMessage).toBe('Please enter a valid 9-digit NSS.'); // Assert the error message is displayed
  });

  it('should hide the error message for valid NSS', () => {
    component.nss = '000182383'; // Set valid NSS
    component.validateNSS(); // Trigger validation
    fixture.detectChanges(); // Update the view

    const errorMessage = fixture.debugElement.query(By.css('.text-red-600'));

    expect(errorMessage).toBeNull(); // Assert that the error message is not displayed
  });
});
