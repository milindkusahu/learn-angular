import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  handleEvent(event: Event) {
    console.log('Function Called', event.type);
    console.log('Function Called', event.target);
    console.log('Function Called', (event.target as Element).className);

    console.log('Value', (event.target as HTMLInputElement).value);
  }
}
