import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  color: string = '';

  selectColor(val: string) {
    if (val === 'red') {
      this.color = 'red';
    } else if (val === 'green') {
      this.color = 'green';
    } else if (val === 'yellow') {
      this.color = 'yellow';
    } else if (val === 'other') {
      this.color = 'blue';
    } else {
      this.color = 'white';
    }
  }

  handleInput(event: Event) {
    let val = Number((event.target as HTMLInputElement).value);
    if (val === 1) {
      this.color = 'red';
    } else if (val === 2) {
      this.color = 'green';
    } else if (val === 3) {
      this.color = 'yellow';
    } else {
      this.color = 'blue';
    }
  }
}
