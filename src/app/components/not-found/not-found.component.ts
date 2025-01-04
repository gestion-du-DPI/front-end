import { HttpClient } from '@angular/common/http';
import { Component, Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-not-found',
  template: `
    <div
      class="bg-[#455A64] relative flex items-center justify-center min-h-screen text-white"
    >
      <div class="absolute top-0 left-0 bottom-0 overflow-hidden">
        <img src="404.png" alt="image" class="h-full min-h-screen rounded-xl" />
      </div>
      <div
        class="z-50 flex items-center justify-between min-h-screen w-full mx-2 lg:mx-32"
      >
        <div class="w-[40vw]"></div>
        <div
          class="text-center p-6 bg-gray-400 bg-opacity-30 lg:bg-transparent rounded-lg shadow-lg lg:shadow-none"
        >
          <h1 class="text-4xl font-bold">This is a Ghost Page</h1>
          <p class="text-lg mt-6">For your safety, back to home you go!</p>
          <button
            class="mt-10 px-6 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg shadow-md"
            (click)="goBack()"
          >
            Go Home
          </button>
        </div>
      </div>
    </div>
  `,
  styles: [``],
})
export class NotFoundComponent {
  constructor(private http: HttpClient, private router: Router) {}

  goBack() {
    this.router.navigate(['/']);
  }
}
