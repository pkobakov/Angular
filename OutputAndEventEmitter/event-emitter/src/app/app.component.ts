import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Event Emitter Demo';
  outsideMessage!: string;
  constructor() {

  }

  getMessageFromChild(message: string) {
      this.outsideMessage = message;
  }
}
