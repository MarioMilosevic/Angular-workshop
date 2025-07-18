import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
  <p></p>
  `,
  styles: [
    `
      ol {
        color: red;
        list-style-type: upper-roman;
      }
    `,
  ],
})
export class AppComponent {
  userName = "MarioUser"
}
