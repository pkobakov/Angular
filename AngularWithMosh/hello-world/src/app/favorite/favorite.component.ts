import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
})

export class FavoriteComponent implements OnInit {

@Input('isFavorite') isSelected!:boolean;
@Output('change') click = new EventEmitter;


  constructor() { }

  onclick(){
    this.isSelected = !this.isSelected;
    this.click.emit({newValue:this.isSelected});
  }
    

  ngOnInit(): void {
  }

}
