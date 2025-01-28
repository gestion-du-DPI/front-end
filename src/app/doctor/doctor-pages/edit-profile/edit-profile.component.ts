import { Component, OnInit } from '@angular/core';
import { EditProfileService } from '../../../services/doctor/edit-profile/edit-profile.service';
import { DashboardService } from '../../../services/doctor/dashboard/dashboard.service';
import { DocHome } from '../../../models/doc-dashboard';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-profile',
  imports: [FormsModule, CommonModule],
  template: `
    <div class="flex flex-col min-h-screen bg-gray-50">
      <div class="flex flex-col gap-4 lg:mx-16 mx-3">
        <div class="flex justify-between items-center gap-12">
          <div class="p-4">
            <h1 class="text-[34px] text-main font-semibold">Edit Profile</h1>
          </div>
        </div>
      </div>

      <div class="flex flex-col items-center">
        <div
          class="w-[1000px] h-[850px] bg-white py-12 px-20 mt-[20px] border-2 rounded-[24px] border-[#F4F2F2]"
        >
          <div class="w-[800px] h-[500px]">
            <h2 class="text-main text-[25px] font-semibold">
              Change Your Information
            </h2>
            <form
              (ngSubmit)="onSubmit()"
              class="grid grid-cols-12 gap-8 w-full max-w-4xl"
            >
              <!-- Left Side Form -->
              <div class="col-span-7">
                <h2 class="text-lg font-semibold text-main mb-2 pt-4">
                  Edit Profile
                </h2>
                <div class="grid gap-4">
                  <!-- Full Name -->
                  <div class="relative">
                    <img
                      src="edit-name.svg"
                      alt="User Icon"
                      class="absolute mt-2 top-2 left-3 w-6 h-6"
                    />
                    <input
                      type="text"
                      [(ngModel)]="firstName"
                      name="First Name"
                      placeholder="First Name"
                      class="input-field pl-12 border-[1px] py-3 rounded-[4px] w-[350px]"
                      required
                    />
                  </div>

                  <div class="relative">
                    <img
                      src="edit-name.svg"
                      alt="User Icon"
                      class="absolute mt-2 top-2 left-3 w-6 h-6"
                    />
                    <input
                      type="text"
                      [(ngModel)]="lastName"
                      name="Last Name"
                      placeholder="Last Name"
                      class="input-field pl-12 border-[1px] py-3 rounded-[4px] w-[350px]"
                      required
                    />
                  </div>

                  <!-- Social Number -->
                  <div class="relative">
                    <img
                      src="edit-socialNumber.svg"
                      alt="Social Icon"
                      class="absolute mt-2 top-2 left-3 w-6 h-6"
                    />
                    <input
                      type="text"
                      [(ngModel)]="nss"
                      name="nss"
                      placeholder="Social Number"
                      class="input-field pl-12 border-[1px] py-3 rounded-[4px] w-[350px]"
                      required
                    />
                  </div>

                  <!-- Address -->
                  <div class="relative">
                    <img
                      src="edit-adress.svg"
                      alt="Address Icon"
                      class="absolute mt-2 top-2 left-3 w-6 h-6"
                    />
                    <input
                      type="text"
                      [(ngModel)]="address"
                      name="address"
                      placeholder="Address"
                      class="input-field pl-12 border-[1px] py-3 rounded-[4px] w-[350px]"
                      required
                    />
                  </div>

                  <!-- Phone Number -->
                  <div class="relative">
                    <img
                      src="edit-phoneNumber.svg"
                      alt="Phone Icon"
                      class="absolute mt-2 top-2 left-3 w-6 h-6"
                    />
                    <input
                      type="text"
                      [(ngModel)]="phoneNumber"
                      name="phoneNumber"
                      placeholder="Phone Number"
                      class="input-field pl-12 border-[1px] py-3 rounded-[4px] w-[350px]"
                      required
                    />
                  </div>
                </div>

                <!-- Security Section -->
                <h2 class="text-lg font-semibold text-main mt-8 mb-4">
                  Security
                </h2>

                <div class="flex flex-between items-center gap-10">
                  <!-- Email Section -->
                  <div class="mr-[50px]">
                    <div class="relative">
                      <div class="mb-[10px]">
                        <img
                          src="edit-email.svg"
                          alt="Email Icon"
                          class="absolute mt-2 top-2 left-3 w-6 h-6"
                        />
                        <input
                          type="email"
                          [(ngModel)]="email"
                          name="email"
                          placeholder="Enter New Email Address"
                          class="input-field pl-12 border-[1px] py-3 rounded-[4px] w-[350px]"
                        />
                      </div>
                    </div>
                    <div class="relative">
                      <img
                        src="edit-email.svg"
                        alt="Email Icon"
                        class="absolute mt-2 top-2 left-3 w-6 h-6"
                      />
                      <input
                        type="email"
                        [(ngModel)]="confirmEmail"
                        name="email"
                        placeholder="Confirm Email Address"
                        class="input-field pl-12 border-[1px] py-3 rounded-[4px] w-[350px]"
                      />
                    </div>
                  </div>

                  <!-- Password Section -->
                  <div class="ml-[30px]">
                    <div class="relative">
                      <div class="mb-[10px]">
                        <img
                          src="edit-password.svg"
                          alt="Password Icon"
                          class="absolute mt-2 top-2 left-3 w-6 h-6"
                        />
                        <input
                          type="password"
                          [(ngModel)]="password"
                          name="password"
                          placeholder="Enter New Password"
                          class="input-field pl-12 border-[1px] py-3 rounded-[4px] w-[350px]"
                        />
                      </div>
                    </div>
                    <div class="relative">
                      <img
                        src="edit-password.svg"
                        alt="Password Icon"
                        class="absolute mt-2 top-2 left-3 w-6 h-6"
                      />
                      <input
                        type="password"
                        [(ngModel)]="confirmPassword"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        class="input-field pl-12 border-[1px] py-3 rounded-[4px] w-[350px]"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <!-- Right Side Profile -->
              <div class="col-span-5 flex flex-col items-center mt-10 ml-2">
                <div
                  class="w-36 h-36 rounded-full overflow-hidden border-2 border-main mb-4"
                >
                  <img
                    [src]="profileImage"
                    alt="Profile"
                    class="object-cover w-full h-full"
                  />
                </div>
                <label
                  class="px-4 py-2 bg-main text-white rounded shadow hover:cursor-pointer flex items-center"
                >
                  Upload Image
                  <img
                    src="edit-upload.svg"
                    alt="Upload Icon"
                    class="w-5 h-5 ml-2"
                  />
                  <input
                    type="file"
                    #fileInput
                    class="hidden"
                    accept="image/*"
                    (change)="onImageUpload($event)"
                    (click)="onProfilePictureClick(fileInput)"
                  />
                </label>
              </div>

              <!-- Buttons -->
              <div class="flex justify-end w-full max-w-4xl mt-8 col-span-12">
                <button
                  type="button"
                  class="px-6 py-2 bg-[#F5F6FA] text-gray-800 rounded-[8px] mr-4 hover:bg-gray-300"
                  style="font-weight: 400"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  class="px-6 py-2 bg-main text-white rounded-[8px] shadow hover:bg-main"
                  style="font-weight: 500"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [],
})
export class EditProfileComponent implements OnInit {
  data: DocHome = {
    doctor_info: {
      id: 0,
      name: '',
      hospital: '',
      address: '',
      phone_number: '',
      email: '',
      nss: '',
      profile_image: '',
    },
    stats: [],
    recent_patients: [],
    requested_tests: [],
  };

  profileImage: string = ''; // Default profile image URL
  firstName: string = '';
  lastName: string = '';
  nss: string = '';
  address: string = '';
  phoneNumber: string = '';
  email: string = '';
  confirmEmail: string = '';
  password: string = '';
  confirmPassword: string = '';
  loading: boolean = false;

  onProfilePictureClick(fileInput: HTMLInputElement): void {
    fileInput.click();
  }

  constructor(
    private editProfileService: EditProfileService,
    private dashboardService: DashboardService
  ) {}

  ngOnInit(): void {
    this.fetchUserProfile();
    console.log('Edit Profile Component initialized.');
  }

  private fetchUserProfile(): void {
    this.loading = true;
    this.dashboardService.getDashboardData().subscribe(
      (data) => {
        this.data = data;
        this.profileImage = this.data.doctor_info.profile_image;
        this.firstName = this.data.doctor_info.name.split(' ')[0];
        this.lastName = this.data.doctor_info.name.split(' ')[1];
        this.nss = this.data.doctor_info.nss;
        this.address = this.data.doctor_info.address;
        this.phoneNumber = this.data.doctor_info.phone_number;
        console.log(this.data);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  onImageUpload(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      const allowedExtensions = ['jpg', 'jpeg', 'png', 'gif', 'bmp'];
      const fileExtension = file.name.split('.').pop()?.toLowerCase();

      if (!fileExtension || !allowedExtensions.includes(fileExtension)) {
        console.error('Invalid file type.');
        return;
      }

      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.profileImage = e.target.result; // Update image preview
      };
      reader.readAsDataURL(file);

      const formData = new FormData();
      formData.append('image', file);

      this.editProfileService.updateUserProfile(formData).subscribe({
        next: (response) => {
          console.log('Profile updated successfully:', response);
          // window.location.reload();
        },
        error: (err) => {
          console.error('Error updating profile:', err);
        },
      });
    }
  }

  onSubmit(): void {
    if (
      !this.firstName ||
      !this.lastName ||
      !this.nss ||
      !this.address ||
      !this.phoneNumber
    ) {
      console.error('All required fields must be filled.');
      return;
    }

    if (this.email && this.email !== this.confirmEmail) {
      console.error('Emails do not match.');
      return;
    }

    if (this.password && this.password !== this.confirmPassword) {
      console.error('Passwords do not match.');
      return;
    }

    const formData = new FormData();
    formData.append('first_name', this.firstName);
    formData.append('last_name', this.lastName);
    formData.append('nss', this.nss);
    formData.append('address', this.address);
    formData.append('phone_number', this.phoneNumber);

    if (this.email) {
      formData.append('email', this.email);
    }

    if (this.password) {
      formData.append('password', this.password);
    }

    this.editProfileService.updateUserProfile(formData).subscribe({
      next: (response) => {
        console.log('Profile updated successfully:', response);
        window.location.reload();
      },
      error: (err) => {
        console.error('Error updating profile:', err);
      },
    });
  }
}
