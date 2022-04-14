import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
  inputs: ['isFavorite']
})
export class FavoriteComponent implements OnInit {


isFavorite!:boolean;

  constructor() { }

  onclick(){
    this.isFavorite = !this.isFavorite;
  }

  ngOnInit(): void {
  }

}
