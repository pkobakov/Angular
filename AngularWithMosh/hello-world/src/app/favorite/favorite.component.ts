import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
})
export class FavoriteComponent implements OnInit {



@Input('isFavorite') isSelected!:boolean;

  constructor() { }

  onclick(){
    this.isSelected = !this.isSelected;
  }

  ngOnInit(): void {
  }

}
