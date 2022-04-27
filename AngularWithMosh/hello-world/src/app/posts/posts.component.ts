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
  errorMessage: string = '';
  constructor(private service: PostService, ) {

    this.url = service.url;
   }


   ngOnInit(): void {
     this.service.getPosts()
     .subscribe({
       next: response => {this.posts = response;
        console.log(response)
    }, 

        error: err => {
         this.errorMessage = err;
         alert(err);
      },
      
      complete: () => {console.log('All posts are loaded.')}
    });
     
  }


   createPost(input: HTMLInputElement) {
     let post : any = {title: input.value};
     input.value= '';
     this.service.createPost(post)
              .subscribe({ 
                next: (response: any) => { post['id'] = response.id;
                this.posts.splice(0,0,post)
              },

               error: (err : Response) => {

                if (err.status === 404) {
                  alert('Page not found');
                }
              },

               complete: () =>
              { console.log(`Post: ${JSON.stringify(post)} has been created`)}
            });
   }

   updatePost(id: number){
               this.service.updatePost(id)
               .subscribe(response => console.log(response));
      // this.http.put(this.url + '/' + post, JSON.stringify(post))
      //          .subscribe(response => console.log(response));
   }

   deletePost(post: any) {
             this.service.deletePost(post.id)
              .subscribe({ 

              next: (_response) => {
              let index : number = this.posts.indexOf(post);
              this.posts.splice(index, 1);
              },

              error: (err: Response) => {
                if (err.status === 404) {
                  alert('This post has already been deleted.');
                  
                }

                else {
                  alert('An unexpected error occures.');
                  console.log(err);
                }  
              }, 

               complete: () => console.log(`Post: ${JSON.stringify(post)} has been deleted.`)
            });
   }

  

}