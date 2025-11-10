import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  users = ['Milind', 'Tony', 'Ankit', 'Vinay', 'Mukul'];

  students = [
    { name: 'Milind', age: 26, email: 'milindsahu2000@gmail.com' },
    { name: 'Aarav', age: 22, email: 'aarav.mehta@example.com' },
    { name: 'Sneha', age: 24, email: 'sneha.patil@example.com' },
    { name: 'Rohit', age: 25, email: 'rohit.sharma@example.com' },
    { name: 'Priya', age: 23, email: 'priya.kapoor@example.com' },
    { name: 'Vikas', age: 27, email: 'vikas.singh@example.com' },
    { name: 'Neha', age: 21, email: 'neha.joshi@example.com' },
  ];
}
