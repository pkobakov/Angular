import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Output() notify: EventEmitter<string> = new EventEmitter<string>(); 
  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.notify.emit('Message from child');
  }

}
