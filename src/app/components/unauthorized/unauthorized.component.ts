import { HttpClient } from '@angular/common/http';
import { Component, Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-unauthorized',
  template: `
    <div
      class="relative flex items-center justify-center min-h-screen bg-gray-100"
    >
      <!-- Top Logo -->
      <div class="absolute top-4 left-4 m-2 bg-white p-2 rounded-xl shadow-md">
        <img src="logo_404_401.svg" alt="Logo" class="h-16 w-auto rounded-xl" />
      </div>

      <!-- Main Content -->
      <div
        class="flex flex-col items-center justify-between w-full max-w-3xl text-center pt-20 pb-10 space-y-6"
      >
        <!-- Forbidden Image -->
        <img
          src="forbidden_image.png"
          alt="Forbidden"
          class="w-[60vw] max-w-md lg:max-w-full h-auto"
        />

        <!-- Forbidden Text -->
        <h1 class="text-4xl font-bold text-gray-800">Forbidden</h1>
        <p class="text-lg text-gray-600">
          You are not authorized to view this page.
        </p>

        <!-- Go Back Button -->
        <button
          class="mt-4 px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 rounded-lg shadow-lg transition duration-300"
          (click)="goBack()"
        >
          Go Back
        </button>
      </div>
    </div>
  `,
  styles: [
    `
      h1 {
        color: red;
      }
    `,
  ],
})
export class UnauthorizedComponent {
  constructor(private http: HttpClient, private router: Router) {}

  goBack() {
    this.router.navigate(['/']);
  }
}
