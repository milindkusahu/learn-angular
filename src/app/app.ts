import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  name = '';
  displayName = '';
  email = '';

  getName(event: Event) {
    this.name = (event.target as HTMLInputElement).value;
  }

  showName() {
    this.displayName = this.name;
  }

  setName() {
    this.name = 'Milind';
  }

  getEmail(val: string) {
    this.email = val;
  }

  setEmail() {
    this.email = 'milindsahu2000@gmail.com';
  }
}
