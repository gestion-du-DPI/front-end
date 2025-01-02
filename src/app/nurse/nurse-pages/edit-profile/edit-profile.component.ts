import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-profile',
  imports: [ CommonModule],
  template: `
    <div class="flex flex-col bg-gray-50">
      <div class="flex flex-col gap-4 lg:mx-16 mx-3">
        <div class="flex justify-between  items-center gap-12">
          <div class="p-4">
            <h1 class="text-[34px] text-main font-semibold ">Edit Profile</h1>
          </div>
        </div>
      </div>

      <div class="flex flex-grow items-center justify-center">
        <div class="w-full max-w-4xl bg-white py-8 px-6 border-2 rounded-2xl border-[#F4F2F2] shadow-lg">
          <h2 class="text-xl lg:text-2xl text-main font-semibold mb-6">Change Your Information</h2>
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <!-- Left Side Form -->
            <div class="lg:col-span-7 space-y-4">
              <h2 class="text-lg font-semibold text-main">Edit Profile</h2>
              <div class="space-y-4">
                <div class="relative">
                  <img src="name-radio.svg" alt="User Icon" class="absolute left-3 top-2.5 w-6 h-6" />
                  <input type="text" placeholder="Full Name" class="pl-12 w-full border border-gray-300 py-3 rounded-md" />
                </div>
                <div class="relative">
                  <img src="gender.svg" alt="Gender Icon" class="absolute left-3 top-2.5 w-6 h-6" />
                  <input type="text" placeholder="Gender" class="pl-12 w-full border border-gray-300 py-3 rounded-md" />
                </div>
                <div class="relative">
                  <img src="edit-socialNumber.svg" alt="Social Icon" class="absolute left-3 top-2.5 w-6 h-6" />
                  <input type="text" placeholder="Social Number" class="pl-12 w-full border border-gray-300 py-3 rounded-md" />
                </div>
                <div class="relative">
                  <img src="address.svg" alt="Address Icon" class="absolute left-3 top-2.5 w-6 h-6" />
                  <input type="text" placeholder="Address" class="pl-12 w-full border border-gray-300 py-3 rounded-md" />
                </div>
                <div class="relative">
                  <img src="edit-phoneNumber.svg" alt="Phone Icon" class="absolute left-3 top-2.5 w-6 h-6" />
                  <input type="text" placeholder="Phone Number" class="pl-12 w-full border border-gray-300 py-3 rounded-md" />
                </div>
              </div>

              <h2 class="text-lg font-semibold text-main mt-8">Security</h2>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="space-y-4">
                  <div class="relative">
                    <img src="edit-email.svg" alt="Email Icon" class="absolute left-3 top-2.5 w-6 h-6" />
                    <input type="email" placeholder="Enter New Email Address" class="pl-12 w-full border border-gray-300 py-3 rounded-md" />
                  </div>
                  <div class="relative">
                    <img src="edit-email.svg" alt="Email Icon" class="absolute left-3 top-2.5 w-6 h-6" />
                    <input type="email" placeholder="Confirm Email Address" class="pl-12 w-full border border-gray-300 py-3 rounded-md" />
                  </div>
                </div>
                <div class="space-y-4">
                  <div class="relative">
                    <img src="edit-password.svg" alt="Password Icon" class="absolute left-3 top-2.5 w-6 h-6" />
                    <input type="password" placeholder="Enter New Password" class="pl-12 w-full border border-gray-300 py-3 rounded-md" />
                  </div>
                  <div class="relative">
                    <img src="edit-password.svg" alt="Password Icon" class="absolute left-3 top-2.5 w-6 h-6" />
                    <input type="password" placeholder="Confirm Password" class="pl-12 w-full border border-gray-300 py-3 rounded-md" />
                  </div>
                </div>
              </div>
            </div>

            <!-- Right Side Profile -->
            <div class="lg:col-span-5 flex flex-col items-center mt-10 lg:mt-12">
              <div class="w-40 h-40 md:w-44 md:h-44 rounded-full overflow-hidden border-2 border-main">
                <img [src]="profileImage" alt="Profile" class="object-cover w-full h-full" />
              </div>
              <label   class="mt-4 px-4 py-1 w-48 bg-main text-white rounded shadow hover:cursor-pointer flex items-center justify-center"
              >
                Upload Image
                <img src="edit-upload.svg" alt="Upload Icon" class="w-5 h-5 ml-2" />
                <input type="file" accept="image/*" (change)="onImageUpload($event)" class="hidden" />
              </label>
            </div>
          </div>

          <!-- Buttons -->
          <div class="flex justify-end mt-8 space-x-4">
            <button class="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300">Cancel</button>
            <button class="px-4 py-2 bg-main text-white rounded-md shadow hover:bg-main-darker">Save Changes</button>
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