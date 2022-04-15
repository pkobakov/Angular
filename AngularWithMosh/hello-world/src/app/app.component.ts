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

  title :string = 'Angular with Mosh Hamedani';
  imgUrl:string = 'https://ih1.redbubble.net/image.794225727.9827/st,small,845x845-pad,1000x1000,f8f8f8.u2.jpg';

  courses = [1,2];

  tweet = {
    body: '....',
    likesCount: 10,
    isLiked : true

  };

  post = {
    title : ' ',
    isFavorite : true 
  }

  onFavoriteChanged(eventObject: FavoriteEventObject){

  console.log('Favorite changed', eventObject);
}

}
