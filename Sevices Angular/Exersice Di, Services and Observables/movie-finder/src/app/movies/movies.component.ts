import { Component, OnInit } from '@angular/core';
import { Movies } from '../models/movies';
import { MoviesService } from '../Services/movies-service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  
  popular!: Movies;
  theaters!: Movies;

  constructor(private moviesService: MoviesService) { 
      
  }

  ngOnInit(): void {

    this.moviesService
        .getPopular()
        .subscribe(data => {
          this.popular = data;
          console.log(this.popular);
        })

    this.moviesService
                      .getTheaters()
                      .subscribe(data => {
                        this.theaters = data;
                        console.log(this.theaters);
                      })    
  }



}
