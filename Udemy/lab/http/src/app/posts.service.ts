import { HttpClient, HttpEventType, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject, throwError } from "rxjs";
import {map, catchError, tap} from 'rxjs/operators';
import { Post } from "./post.model";


@Injectable()
export class PostsService {
url = 'https://my-first-ng-project-199cc-default-rtdb.firebaseio.com/posts.json';
error = new Subject<string>();
  
 constructor(private http: HttpClient) {
 
 }

 createAndStorePost(title: string, content: string) {
    const postData: Post = {title: title, content: content};
    this.http.post<{name: string}>(this.url, postData,
    {
      observe: 'response'
    }
  )
    .subscribe(response => {
        console.log(response);
    }, error => {
      this.error.next(error.message);
    });

 }

 fetchPosts() {
  let searchParams = new HttpParams();
  searchParams = searchParams.append('print','pretty');
  searchParams = searchParams.append('custom', 'key');
    return this.http.get<{[key: string]: Post}>(
      this.url, {
      headers: new HttpHeaders({
        'Custom-Header': 'Hello',
      }),
      params: searchParams
    })
               .pipe(map(responseData => {
                const postsArray: Post[] = [];
                  for(const key in responseData) {
                    if (responseData.hasOwnProperty(key)) {
                      postsArray.push({...responseData[key], id: key})
                    }
                  }
                  return postsArray;
               }), catchError(responseErr => {
                return throwError(responseErr);
               }));
 }

 deletePosts() {
  return this.http.delete(this.url, {
    observe: 'events'
  })
  .pipe(tap( event => {
    console.log(event);
    if (event.type === HttpEventType.Sent) {
      console.log(event.type);
    }

    if (event.type === HttpEventType.Response) {
      console.log(event.body);
    }
  }))

 }
}