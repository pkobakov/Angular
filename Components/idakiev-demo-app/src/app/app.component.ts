import { Component } from '@angular/core';

const users = [
  {
     firstname: 'Pesho',
     age: 33
  },

  {
     firstname: 'Gosho',
     age: 47
  },

  {
    firstname: 'Misho',
    age: 55
  }
]

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'idakiev-demo-app';
  welcomeMessage = 'Hello from my app';
  isVisible = false;

  users = users;

  constructor(){

  }

  toggleHandler(): void {
    this.isVisible = !this.isVisible;
  }
}
