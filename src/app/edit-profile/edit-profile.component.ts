import { Component } from '@angular/core';
import { HeaderComponent } from '../components/header/header.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-profile',
  imports: [HeaderComponent, CommonModule],
  template: `
    <div class="flex flex-col bg-gray-50">
      <div class="flex flex-col gap-4 lg:mx-16 mx-3">
        <div class="flex justify-between  items-center gap-12">
          <div class="p-4">
            <h1 class="text-[34px] text-main font-semibold ">Edit Profile</h1>
          </div>
          <app-header></app-header>
        </div>
      </div>

      <div class="flex flex-col items-center">
  <div
    class="w-[1000px] h-[800px] bg-white py-12 px-20 mt-[20px] border-2 rounded-[24px] border-[#F4F2F2]"
  >
    <div class="w-[800px] h-[500px]">
      <h2 class="text-main text-[25px] font-semibold">
        Change Your Information
      </h2>
      <div class="grid grid-cols-12 gap-8 w-full max-w-4xl">
        <!-- Left Side Form -->
        <div class="col-span-7">
          <!-- Edit Profile Section -->
          <h2 class="text-lg font-semibold text-main mb-2 pt-4">
            Edit Profile
          </h2>
          <div class="grid gap-4">
            <div class="relative">
              <img
                src="edit-name.svg"
                alt="User Icon"
                class="absolute mt-2 top-2 left-3 w-6 h-6"
              />
              <input
                type="text"
                placeholder="Full Name"
                class="input-field pl-12 border-[1px] py-3 rounded-[4px] w-[350px]"
              />
            </div>
            <div class="relative">
              <img
                src="edit-hospital.svg"
                alt="Hospital Icon"
                class="absolute mt-2 top-2 left-3 w-6 h-6"
              />
              <input
                type="text"
                placeholder="Hospital Name"
                class="input-field pl-12 border-[1px] py-3 rounded-[4px] w-[350px]"
              />
            </div>
            <div class="relative">
              <img
                src="edit-socialNumber.svg"
                alt="Social Icon"
                class="absolute mt-2 top-2 left-3 w-6 h-6"
              />
              <input
                type="text"
                placeholder="Social Number"
                class="input-field pl-12 border-[1px] py-3 rounded-[4px] w-[350px]"
              />
            </div>
            <div class="relative">
              <img
                src="edit-adress.svg"
                alt="Address Icon"
                class="absolute mt-2 top-2 left-3 w-6 h-6"
              />
              <input
                type="text"
                placeholder="Address"
                class="input-field pl-12 border-[1px] py-3 rounded-[4px] w-[350px]"
              />
            </div>
            <div class="relative">
              <img
                src="edit-phoneNumber.svg"
                alt="Phone Icon"
                class="absolute mt-2 top-2 left-3 w-6 h-6"
              />
              <input
                type="text"
                placeholder="Phone Number"
                class="input-field pl-12 border-[1px] py-3 rounded-[4px] w-[350px]"
              />
            </div>
          </div>

          <h2 class="text-lg font-semibold text-main mt-8 mb-4">Security</h2>

          <div class="grid grid-cols-2 gap-4">
            <!-- Email Fields -->
             <div class="flex flex-between items-center gap-10">
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
                placeholder="Confirm Email Address"
                class="input-field pl-12 border-[1px] py-3 rounded-[4px] w-[350px]"
              />
            </div>
            </div>
            <div class="ml-[30px]">
            <!-- Password Fields -->
            <div class="relative">
              <div class="mb-[10px]">
              <img
                src="edit-password.svg"
                alt="Password Icon"
                class="absolute mt-2 top-2 left-3 w-6 h-6"
              />
              <input
                type="password"
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
                placeholder="Confirm Password"
                class="input-field pl-12 border-[1px] py-3 rounded-[4px] w-[350px]"
              />
            </div>
          </div>
        </div>
        </div>
        </div>

        <!-- Right Side Profile -->
         
        <div class="col-span-5 flex flex-col items-center mt-10 ml-2 ">
         
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
                    accept="image/*"
                    (change)="onImageUpload($event)"
                    class="hidden"
                  />
                </label>
      </div>
      </div>

      <!-- Buttons -->
      <div class="flex justify-end w-full max-w-4xl mt-8 ">
        <button
          class="px-6 py-2 bg-[#F5F6FA] text-gray-800 rounded-[8px] mr-4 hover:bg-gray-300"
          style="font-weight: 400px;"
        >
          Cancel
        </button>
        <button
          class="px-6 py-2 bg-main text-white  rounded-[8px] shadow hover:bg-main"
          style="font-weight: 500px;"
        >
          Save Changes
        </button>
      </div>
    </div>
  </div>
</div>

</div>

  `,
  styles: ``,
})
export class EditProfileComponent {
  name: string = 'Dr. Sadoun';
  profileImage: string = 'admin-pfp.jpg'; // Default profile image

  onImageUpload(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.profileImage = e.target.result; // Update the profile image source
      };
      reader.readAsDataURL(input.files[0]); // Read the selected image file
    }
  }
}
