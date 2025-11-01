import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  handleClickEvent() {
    alert('Function called');

    this.otherFunction();
  }

  otherFunction() {
    console.log('Other function called');
  }
}
