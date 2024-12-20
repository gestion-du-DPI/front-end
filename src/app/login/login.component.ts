import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  imports: [],
  template: `
    <div
      class="flex items-center justify-center align-middle min-h-screen bg-white"
    >
      <div class="flex flex-row mx-20 gap-20">
        <img src="admin.jpg" class="flex h-[500px] self-center" alt="" />
        <div class="flex flex-col gap-5">
          <h1 class="font-semibold text-3xl">Welcome Admin!</h1>
          <h3 class="font-normal text-xl">Let's get you logged in</h3>
          <input
            class="border-[1px] border-black border-opacity-20 rounded-md w-96 h-12"
            type="text"
          />
          <input
            class="border-[1px] border-black border-opacity-20 rounded-md w-96 h-12"
            type="text"
          />
          <div class="flex flex-row items-center">
            <input type="checkbox" />
            <span class="ml-2">Remember me</span>
            <a href="" class="ml-auto underline text-[#717171]"
              >Forgot password?</a
            >
          </div>
          <button
            class="flex flex-row justify-center align-middle h-12 w-96 bg-main gap-4 items-center text-white rounded-md"
          >
            Sign in <img src="forward-icon.svg" alt="" />
          </button>
          <button
            class="flex flex-row justify-center align-middle h-12 w-96 bg-second gap-4 items-center text-main rounded-md"
          >
            <img src="google-icon.svg" alt="" />Sign in with Google
          </button>
          <button
            class="flex flex-row justify-center align-middle self-center h-12 w-80 bg-[#F5F6FA] gap-4 items-center text-[#15223C] rounded-md"
          >
            <img src="back-icon.svg" alt="" />Back to home page
          </button>
        </div>
      </div>
    </div>
  `,
  styles: ``,
})
export class LoginComponent {}
