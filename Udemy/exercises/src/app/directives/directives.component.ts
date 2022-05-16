import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
showSecret: boolean = false;
  log!: number [];
  constructor() {
    this.log = [];
   }

  onToggle(){
    this.showSecret = !this.showSecret;
    this.log.push(this.log.length + 1);
    console.log(this.log.length)
  }

  ngOnInit(): void {
  }

}
