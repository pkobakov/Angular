import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent implements OnInit {
  laptop: any;
  constructor() { 
    this.laptop = {"make": "Lenovo"}
  }

  login(formData:any) {
    console.log(formData);
  }

  field(data: any) {
    console.log(data);
  }

  ngOnInit(): void {
  }

}
