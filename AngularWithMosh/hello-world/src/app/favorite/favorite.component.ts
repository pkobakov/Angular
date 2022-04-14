import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
})
export class FavoriteComponent implements OnInit {



@Input() isFavorite!:boolean;

  constructor() { }

  onclick(){
    this.isFavorite = !this.isFavorite;
  }

  ngOnInit(): void {
  }

}
