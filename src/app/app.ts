import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  name: string = 'Milind Sahu';
  data: string | number = 'Hello'; // pipe
  other: any = true;

  updateName() {
    this.data = '30';
  }

  sum(a: number, b: number) {
    console.log(a + b);
  }
}
