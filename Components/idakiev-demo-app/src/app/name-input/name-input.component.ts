import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-name-input',
  templateUrl: './name-input.component.html',
  styleUrls: ['./name-input.component.css']
})
export class NameInputComponent implements OnInit {

  @Input()inputValue = 'Default value here...';

  constructor() { }


  // inputKeyupHandler(event: KeyboardEvent): void {
  //   this.inputValue = (event.target as HTMLInputElement).value;
  // }

  btnClickHandler(value: any): void {
    console.log('btn has clicked', value);
  }

 

  ngOnInit(): void {
  }

}
