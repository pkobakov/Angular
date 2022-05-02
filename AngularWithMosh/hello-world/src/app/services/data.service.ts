import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { catchError, throwError, map } from 'rxjs';



@Injectable({
  providedIn: 'root'
})

export class DataService {
  
  constructor(@Inject(String) private url: string, private http : HttpClient) { 
   
  }

  getAll () {
    return this.http.get(this.url)
                    .pipe(map((response: any) => response),
                             catchError(this.handleError)
                    );
  }

  create(resource: HTMLInputElement){
    return this.http.post(this.url, JSON.stringify(resource))
                    .pipe(map((response: any) => response),
                          catchError(this.handleError));
  }

  update(resource: any ) {
    return this.http.patch(`${this.url}/${resource.id}`, JSON.stringify({isRead: true}))
                    .pipe(map((response: any) => response),
                          catchError(this.handleError));
  }

  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`).pipe(
      map(response => response),
      catchError(this.handleError)
    ); //only for testing the error handling
    // return  this.http.delete(`${this.url}/${id}`);
   }

   private handleError(error: HttpErrorResponse) {
    let errorMessage: string = '';

    if (error.status === 400) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `Bad Request occurred:', ${error.error}`;
      // console.error('An error occurred:', error.error);
    } 
    
    if (error.status === 404) {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      // console.error(`Backend returned code ${error.status}, body was: `, error.error);
        errorMessage = `Page Not Found. Backend returned code ${error.status}, body was: ${error.error}`;
    }
    // Return an observable with a user-facing error message.

    errorMessage += `\n Something bad happened; please try again later.`
    return throwError(() => new Error(errorMessage));
  }
}




