import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { PostService } from '../services/post.service';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
     
  url: string;
  posts : any;
  constructor(private service: PostService, ) {

    this.url = service.url;
   }


   ngOnInit(): void {
     this.service.getPosts().subscribe({
       next: response => {
      console.log(response); 
      this.posts = response;
    }, 
       error: err => {alert('An unexpected error occures');
       console.log(err);
      },
      
      complete: () => console.log('All posts are loaded.')
    });
     
  }


   createPost(input: HTMLInputElement) {
     let post : any = {title: input.value};
     input.value= '';
     this.service.createPost(post)
              .subscribe((response : any) => { post['id'] = response['id'];
              this.posts.splice(0,0,post)
            
            });
   }

   updatePost(post: Object){
               this.service.updatePost(post)
               .subscribe(response => console.log(response));
      // this.http.put(this.url + '/' + post, JSON.stringify(post))
      //          .subscribe(response => console.log(response));
   }

   deletePost(post: any) {
             this.service.deletePost(post)
              .subscribe({ 
                
              next: response => {
              let index = this.posts.indexOf(post);
              this.posts.splice(index, 1);
              },

              error: (err: Response) => {
                if (err.status === 404) {
                  alert('This post has already been deleted.');
                  console.log(err);
                }

                else {
                  alert('An unexpected error occures.');
                  console.log(err);
                }  
              }, 

               complete: () => console.log(`Post with id: ${JSON.stringify(post)} has been deleted.`)
            });
   }

  

}
