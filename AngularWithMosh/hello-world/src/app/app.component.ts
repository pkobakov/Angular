import { Component } from '@angular/core';

interface FavoriteEventObject {
  newValue: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title!:string;

  post = {
    title : 'Title',
    isFavorite : true 
  }

  onFavoriteChanged(eventObject: FavoriteEventObject){

  console.log('Favorite changed', eventObject);
}

}
