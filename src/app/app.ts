import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  count: number = 0;

  // increment() {
  //   this.count++;
  // }

  // decrement() {
  //   if (this.count > 0) {
  //     this.count--;
  //   }
  // }

  // reset() {
  //   this.count = 0;
  // }

  handleCounter(val: string) {
    if (val === 'decrement') {
      if (this.count > 0) {
        this.count--;
      }
    } else if (val === 'increment') {
      this.count++;
    } else if (val === 'reset') {
      this.count = 0;
    }
  }
}
