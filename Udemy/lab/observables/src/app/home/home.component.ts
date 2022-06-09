import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Observer, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit , OnDestroy{

  private firstSubscription: Subscription;
  constructor() { }

  ngOnInit() {

    // this.firstSubscription = interval(1000).subscribe(count => {
    //   console.log(count);
    // });

    const customInterval = Observable.create((observer: Observer<number>) => {
      let count = 0;
      setInterval(() => {observer.next(count);
        if (count == 2) {
          observer.complete();

        }
        if (count>=3) {
          observer.error(new Error('The count is greater than 3!'));
        }
      count++; },
      1000)
    });

   this.firstSubscription = customInterval.subscribe(data => {
      console.log(data);
    }, error => {
     console.log(error);
     alert(error);
    }, 
      complete => {
        alert(complete ='Mission completed!'); 
      });
  }

  ngOnDestroy(): void {
    this.firstSubscription.unsubscribe();
    
  }

}
