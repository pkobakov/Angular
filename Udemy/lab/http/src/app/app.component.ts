import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { Post } from './post.model';
import { PostsService } from './posts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedPosts: Post[] = [];
  isFetching = false;
  error = null;
  message = 'Error 401, Unauthorized';

  constructor(private http: HttpClient,
              private postsService: PostsService) {}

  ngOnInit() {

    this.isFetching = true;
    this.postsService.fetchPosts()
                      .subscribe(posts => {
                        this.isFetching = false;
                        this.loadedPosts = posts;
                      }, 
                      error => {
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
   }, error => {
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


}