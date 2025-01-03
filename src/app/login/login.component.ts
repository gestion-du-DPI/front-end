import { Component } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule],
  template: `
    <div
      class="flex items-center justify-center align-middle min-h-[100vh] bg-white"
    >
      <div
        class="flex flex-wrap justify-center items-center gap-5 lg:justify-between lg:flex-row mx-20"
      >
        <img src="admin.jpg" class="flex lg:max-w-[50%] self-center" alt="" />
        <div class="flex justify-center items-center">
          <div class="flex flex-col gap-5 h-auto" id="login_form">
            <h1 class="font-semibold text-3xl">Welcome User!</h1>
            <h3 class="font-normal text-xl">Let's get you logged in</h3>
            <div>
              <input
                [(ngModel)]="email"
                placeholder="Email"
                id="selenium_email_login"
                class="border-[1px] border-black border-opacity-20 rounded-md w-96 h-12 px-3"
                type="email"
              />
              <div
                *ngIf="showErrors && !isValidEmail(email)"
                class="text-red-500 text-sm"
              >
                Please enter a valid email address.
              </div>
            </div>
            <div>
              <input
                [(ngModel)]="password"
                placeholder="Password"
                id="selenium_password_login"
                class="border-[1px] border-black border-opacity-20 rounded-md w-96 h-12 px-3"
                type="password"
              />
              <div *ngIf="showErrors && !password" class="text-red-500 text-sm">
                Password is required.
              </div>
            </div>
            <div class="flex flex-row items-center">
              <input
                id="selenium_remeber_me_box"
                type="checkbox"
                [(ngModel)]="rememberMe"
              />
              <span class="ml-2">Remember me</span>
            </div>
            <button
              (click)="signIn()"
              id="selenium_login_button"
              class="flex flex-row justify-center disabled:bg-slate-500 align-middle h-12 w-96 bg-main gap-4 items-center text-white rounded-md"
              [disabled]="isLoading"
            >
              <span *ngIf="!isLoading">Sign in</span>
              <div *ngIf="isLoading">
                <img
                  src="logo.png"
                  alt="Loading..."
                  class="w-6 h-6 animate-spin"
                />
              </div>
            </button>
            <div *ngIf="loginError" class="text-red-500 text-sm mt-2">
              {{ loginError }}
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  rememberMe: boolean = false;
  isLoading: boolean = false;
  showErrors: boolean = false;
  loginError: string | null = null;

  constructor(private authService: AuthService) {}

  isValidEmail(email: string): boolean {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/; // Email validation regex
    return emailRegex.test(email);
  }
  async signIn() {
    this.showErrors = true; // Trigger validation messages
    this.loginError = null; // Clear previous errors

    if (!this.isValidEmail(this.email) || !this.password) {
      return;
    }

    this.isLoading = true; // Start the loader

    try {
      await this.authService.login(this.email, this.password, this.rememberMe);
    } catch (err) {
      console.error('Error:', err);
      this.loginError =
        'Login failed: Account does not exist or incorrect credentials.';
    } finally {
      this.isLoading = false;
    }
  }
}
