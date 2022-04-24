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
        // console.log(response)
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

   updatePost(post: Object){
      this.http.patch(this.url + '/' + post, JSON.stringify({isRead: true}))
               .subscribe(response => console.log(response));
      // this.http.put(this.url + '/' + post, JSON.stringify(post))
      //          .subscribe(response => console.log(response));
   }

   deletePost(post: Object) {
     this.http.delete(`${this.url}/${post}`)
              .subscribe(response => {
                let index = this.posts.indexOf(post);
                this.posts.splice(index, 1);
              });
   }

  ngOnInit(): void {
  }

}
