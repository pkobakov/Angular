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
  welcomeMessage = 'Welcome to my demo app';
  isVisible = false;
  imageUrl : string;

  users = users;

  constructor(){

    this.imageUrl = 'https://us.123rf.com/450wm/domenicogelermo/domenicogelermo1909/domenicogelermo190900265/129438391-front-portrait-of-the-woman-with-beauty-face-isolated.jpg?ver=6';

  }

  toggleHandler(): void {
    this.isVisible = !this.isVisible;
  }
}
