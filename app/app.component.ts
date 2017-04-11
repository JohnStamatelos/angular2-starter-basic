import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  styles: [`
    
  `],
  template: `
    <div class="jumbotron text-center">
      <h1>The App Lives!</h1>
      <p>{{ message }}</p>
    </div>

    <contact-page></contact-page>
    <home-page></home-page>
    <about-page></about-page>
  `
})
export class AppComponent {
  message = 'This is the sample message.';
}