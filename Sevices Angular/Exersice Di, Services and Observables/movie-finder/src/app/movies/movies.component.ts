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
  kids!: Movies;
  dramas! : Movies;
  searchResponse: any;
  isSearched!: boolean;

  constructor(private moviesService: MoviesService) { 
      
  }

  search(myQuery : any) {
    let value = myQuery['search']
    this.moviesService.findAMovie(value)
                      .subscribe(data => {
                      this.searchResponse = data;
                      console.log(this.searchResponse)
                      this.isSearched = true;
      
    })
  }

  ngOnInit(): void {

    this.moviesService.getPopular()
                      .subscribe(data => {
                      this.popular = data;
        })

    this.moviesService.getTheaters()
                      .subscribe(data => {
                        this.theaters = data;
                      }) 
                      
    this.moviesService.getKids()
                      .subscribe(data => {
                       this.kids = data; 
                      })

     this.moviesService.getDramas()
                       .subscribe(data=> {
                         this.dramas = data;
                       })                 
  
  }
}
