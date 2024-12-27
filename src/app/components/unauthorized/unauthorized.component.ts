import { Component } from '@angular/core';

@Component({
  selector: 'app-unauthorized',
  template: `<h1>Access Denied</h1>
    <p>You are not authorized to view this page.</p>`,
  styles: [
    `
      h1 {
        color: red;
      }
    `,
  ],
})
export class UnauthorizedComponent {}
