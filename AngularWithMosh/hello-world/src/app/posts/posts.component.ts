import { Component, OnInit } from '@angular/core';
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

    this.url = 'https://jsonplaceholder.typicode.com/posts';
   }


   ngOnInit(): void {
     this.service.getAll()
     .subscribe({
        next: posts => {this.posts = posts,
        console.log(posts)},

         error: (err: Response) => {
             if (err.status === 404) {

                alert('Page Not Found');
              }
      },
          complete: () => console.log('Posts are loaded.')
    });
     
  
   }

   createPost(input: HTMLInputElement) {
     let post : any = {title: input.value};
     input.value= '';
     this.service.create(post)
              .subscribe({ 
                next: (newPost: any) => { post['id'] = newPost.id;
                this.posts.splice(0,0,post)
              },

               error: (err : Response) => {

                if (err.status === 404) {
                  alert('Page not found');
                }
              },

               complete: () =>
              { console.log(`Post: ${JSON.stringify(post)} has been created.`)}
            });
   }

   updatePost(id: number){
               this.service.update(id)
               .subscribe(updatedPost => console.log(updatedPost));
      // this.http.put(this.url + '/' + post, JSON.stringify(post))
      //          .subscribe(response => console.log(response));
   }

   deletePost(post: any) {
             this.service.delete(post.id)
              .subscribe({ 

              next: () => {
              let index : number = this.posts.indexOf(post);
              this.posts.splice(index, 1);
              },

              error: (err: Response) => {
                if (err.status === 404) {
                  alert('This post has already been deleted.');
                  
                }

                else throw err; 
              }, 

               complete: () => console.log(`Post: ${JSON.stringify(post)} has been deleted.`)
            });
   }

  

}
