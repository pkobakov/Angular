import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './post.model';
import { PostsService } from './posts.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  loadedPosts: Post[] = [];
  isFetching = false;
  error = null;
  message = 'Error 401, Unauthorized.Permission denied';
  private subscription : Subscription;

  constructor(private http: HttpClient,
              private postsService: PostsService) {}

  ngOnInit() {
    this.subscription =  this.postsService.error.subscribe(errorMessage => {

      this.error = errorMessage;
      console.log(errorMessage);
    });

    this.isFetching = true;
    this.postsService.fetchPosts()
                      .subscribe(posts => {
                        this.isFetching = false;
                        this.loadedPosts = posts;
                      }, 
                      error => {
                        this.isFetching = false;
                        error.message = this.message;
                        this.error = error;
                      });
  }

  onCreatePost(postData: { title: string; content: string }) {
    // Send Http request

    
    this.postsService.createAndStorePost(postData.title, postData.content);
  
  }

  onFetchPosts() {
    // Send Http request
   this.isFetching = true;   
   this.postsService.fetchPosts()
   .subscribe( posts => {
    this.isFetching = false;
    this.loadedPosts = posts;
   }, 
   error => {
    this.isFetching = false;
    error.message = this.message;
    this.error = error;
  });


  }

  onClearPosts() {
    // Send Http request
    this.postsService.deletePosts()
                     .subscribe(() => {
                      this.loadedPosts = [];
                     })

  }

  onError() {
    this.error = null;
  }

  ngOnDestroy(): void {
  this.subscription.unsubscribe();
}

}
