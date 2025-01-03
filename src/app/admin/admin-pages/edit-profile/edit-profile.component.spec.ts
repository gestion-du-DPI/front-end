import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';
import { EditProfileComponent } from './edit-profile.component';
import { EditProfileService } from '../../../services/admin/edit-profile/edit-profile.service';
import { of, throwError } from 'rxjs';

describe('EditProfileComponent', () => {
  let component: EditProfileComponent;
  let fixture: ComponentFixture<EditProfileComponent>;
  let editProfileService: EditProfileService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, FormsModule],
      declarations: [EditProfileComponent],
      providers: [EditProfileService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditProfileComponent);
    component = fixture.componentInstance;
    editProfileService = TestBed.inject(EditProfileService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch user profile on init', () => {
    const mockProfile = {
      profile_image: 'image_url',
      first_name: 'John',
      last_name: 'Doe',
      hospital: 'Hospital Name',
      nss: '123456789',
      address: '123 Street',
      phone_number: '1234567890',
      email: 'john.doe@example.com'
    };

    spyOn(editProfileService, 'getUserProfile').and.returnValue(of(mockProfile));
    component.ngOnInit();
    expect(component.profileImage).toBe(mockProfile.profile_image);
    expect(component.firstName).toBe(mockProfile.first_name);
    expect(component.lastName).toBe(mockProfile.last_name);
    expect(component.hospitalName).toBe(mockProfile.hospital);
    expect(component.nss).toBe(mockProfile.nss);
    expect(component.address).toBe(mockProfile.address);
    expect(component.phoneNumber).toBe(mockProfile.phone_number);
    expect(component.email).toBe(mockProfile.email);
  });

  it('should handle error when fetching user profile', () => {
    spyOn(editProfileService, 'getUserProfile').and.returnValue(throwError('Error'));
    spyOn(console, 'error');
    component.ngOnInit();
    expect(console.error).toHaveBeenCalledWith('Error fetching user profile:', 'Error');
  });

  it('should update profile image on image upload', () => {
    const mockFile = new File([''], 'test.png', { type: 'image/png' });
    const event = { target: { files: [mockFile] } } as unknown as Event;

    spyOn(editProfileService, 'updateUserProfile').and.returnValue(of({ success: true }));
    spyOn(component, 'onImageUpload').and.callThrough();

    component.onImageUpload(event);
    expect(component.onImageUpload).toHaveBeenCalledWith(event);
  });

  it('should handle form submission', () => {
    component.firstName = 'John';
    component.lastName = 'Doe';
    component.hospitalName = 'Hospital Name';
    component.nss = '123456789';
    component.address = '123 Street';
    component.phoneNumber = '1234567890';

    spyOn(editProfileService, 'updateUserProfile').and.returnValue(of({ success: true }));
    spyOn(component, 'onSubmit').and.callThrough();

    component.onSubmit();
    expect(component.onSubmit).toHaveBeenCalled();
  });

  it('should handle form submission errors', () => {
    component.firstName = 'John';
    component.lastName = 'Doe';
    component.hospitalName = 'Hospital Name';
    component.nss = '123456789';
    component.address = '123 Street';
    component.phoneNumber = '1234567890';

    spyOn(editProfileService, 'updateUserProfile').and.returnValue(throwError('Error'));
    spyOn(console, 'error');

    component.onSubmit();
    expect(console.error).toHaveBeenCalledWith('Error updating profile:', 'Error');
  });
});
