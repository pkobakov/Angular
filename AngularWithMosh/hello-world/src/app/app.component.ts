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

  task = {
    title: 'review application',
    asignee :{ 
       name: 'John Smith'
    }
  }

  canSave = true;

  title :string = 'Angular with Mosh Hamedani';
  imgUrl:string = 'https://ih1.redbubble.net/image.794225727.9827/st,small,845x845-pad,1000x1000,f8f8f8.u2.jpg';
  moshImg: string = 'https://pbs.twimg.com/profile_images/981311875643195393/dS0t6BQ8_400x400.jpg';

  courses = [
    {id: 1, name: 'courseOne'},
    {id: 2, name: 'courseTwo'},
    {id: 3, name: 'courseThree'}];

  onAdd(){
    const newCourse = {id:4, name: 'courseFour'};
    this.courses.push(newCourse);

  }  

  onRemove(course:any) {

    let index =  this.courses.indexOf(course);
    this.courses.splice(index,1);
  }

 //  viewMode = 'map';

//   courses = [1,2];

//   tweet = {
//     body: '....',
//     likesCount: 10,
//     isLiked : true

//   };

//   post = {
//     title : ' ',
//     isFavorite : true 
//   }

//   onFavoriteChanged(eventObject: FavoriteEventObject){

//   console.log('Favorite changed', eventObject);
// }

}
