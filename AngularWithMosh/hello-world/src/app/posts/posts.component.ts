import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  url : string =  'https://jsonplaceholder.typicode.com/posts';
  posts : any;
  constructor(private http: HttpClient, ) {
    

      http.get(this.url).subscribe(response => {
        this.posts = response;
      });
   }

   createPost(input: HTMLInputElement) {
     let post : any = {title: input.value};
     input.value= '';
     this.http.post(this.url, JSON.stringify(post))
              .subscribe((response : any) => { post['id'] = response['id'];
              this.posts.splice(0,0,post)
            
            });
   }

  ngOnInit(): void {
  }

}
