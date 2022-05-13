import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
 @Input()
 element!: {type: string, name: string, content: string};
  constructor() { }

  ngOnInit(): void {
  }

}
