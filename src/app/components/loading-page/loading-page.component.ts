import { Component } from '@angular/core';

@Component({
  selector: 'app-loading-page',
  template: `
    <div
      class="relative flex flex-col items-center justify-center min-h-[100vh] bg-[#f3f4f6]"
    >
      <div class="absolute top-4 left-4 m-2 bg-white rounded-xl">
        <img
          src="logo_404_401.svg"
          alt="Logo"
          class="w-autox h-16 bg-white rounded-xl"
        />
      </div>
      <div
        class="absolute bottom-0 flex flex-col items-center justify-between min-h-[100vh] pt-[20vh]"
      >
        <div class="flex flex-col items-center justify-center">
          <div class="custom-loader"></div>
          <p class="mt-4 text-lg font-semibold">Loading...</p>
        </div>

        <img src="loading_image.png" alt="pic" class=" w-[65vw] h-auto" />
      </div>
    </div>
  `,
  styles: [
    `
      .custom-loader {
        width: 50px;
        height: 50px;
        border: 5px solid #e2e8f0;
        border-top: 5px solid #3b82f6;
        border-radius: 50%;
        animation: spin 1s linear infinite;
      }

      @keyframes spin {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }
    `,
  ],
})
export class LoadingPageComponent { }
