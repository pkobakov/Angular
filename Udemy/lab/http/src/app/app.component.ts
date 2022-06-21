import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { Post } from './post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedPosts: Post[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {

    this.fetchPosts();
  }

  onCreatePost(postData: { title: string; content: string }) {
    // Send Http request

    this.http.post<{name: string}>('https://my-first-ng-project-199cc-default-rtdb.firebaseio.com/posts.json', postData)
              .subscribe(response => console.log(postData));

  }

  onFetchPosts() {
    // Send Http request
   this.fetchPosts();


  }

  onClearPosts() {
    // Send Http request
  }

  private fetchPosts() {
    this.http.get<{[key: string]: Post}>('https://my-first-ng-project-199cc-default-rtdb.firebaseio.com/posts.json')
             .pipe(map(responseData => {
              const postsArray: Post[] = [];
                for(const key in responseData) {
                  if (responseData.hasOwnProperty(key)) {
                    postsArray.push({...responseData[key], id: key})
                  }
                }
                return postsArray;
             }))
             .subscribe(posts => this.loadedPosts = posts);
  }
}
