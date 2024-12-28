import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  template: `
    <div
      class="flex items-center justify-center align-middle min-h-[100vh] bg-white"
    >
      <div
        class="flex flex-wrap justify-center items-center gap-5 lg:justify-between lg:flex-row mx-20"
      >
        <img src="admin.jpg" class="flex lg:max-w-[50%] self-center" alt="" />
        <div class="flex justify-center items-center">
          <div class="flex flex-col gap-5 h-auto">
            <h1 class="font-semibold text-3xl">Welcome User!</h1>
            <h3 class="font-normal text-xl">Let's get you logged in</h3>
            <input
              [(ngModel)]="username"
              placeholder="Username"
              class="border-[1px] border-black border-opacity-20 rounded-md w-96 h-12"
              type="text"
            />
            <input
              [(ngModel)]="password"
              placeholder="Password"
              class="border-[1px] border-black border-opacity-20 rounded-md w-96 h-12"
              type="password"
            />
            <div class="flex flex-row items-center">
              <input type="checkbox" [(ngModel)]="rememberMe" />
              <span class="ml-2">Remember me</span>
              <a href="" class="ml-auto underline text-[#717171]"
                >Forgot password?</a
              >
            </div>
            <button
              (click)="signIn()"
              class="flex flex-row justify-center align-middle h-12 w-96 bg-main gap-4 items-center text-white rounded-md"
            >
              Sign in <img src="forward-icon.svg" alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: ``,
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  rememberMe: boolean = false;

  constructor(private authService: AuthService) {}

  signIn() {
    if (!this.username || !this.password) {
      window.alert('Please fill in both username and password.');
      return;
    } else {
      this.authService.login(this.username, this.password, this.rememberMe);
    }
  }
}
