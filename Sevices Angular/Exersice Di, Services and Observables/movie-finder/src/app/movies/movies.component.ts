import { Component, OnInit } from '@angular/core';
import { ObjectUnsubscribedErrorCtor } from 'rxjs/internal/util/ObjectUnsubscribedError';
import { MoviesService } from '../Services/movies-service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  
  popular!: Object;
  constructor(private moviesService: MoviesService) { 

  }

  ngOnInit(): void {
    this.moviesService
        .getPopular()
        .subscribe(data => {
          this.popular = data;
          console.log(data);
        })
  }

}
