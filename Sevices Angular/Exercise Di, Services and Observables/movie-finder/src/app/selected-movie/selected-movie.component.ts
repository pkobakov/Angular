import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../Services/movies-service';

@Component({
  selector: 'app-selected-movie',
  templateUrl: './selected-movie.component.html',
  styleUrls: ['./selected-movie.component.css']
})



export class SelectedMovieComponent implements OnInit {

  movie: any;

  constructor(private route : ActivatedRoute, private movieService: MoviesService ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      let id = params['id'];
      this.movieService.getMovie(id)
                       .subscribe(data => {
                         this.movie = data;
                         console.log(this.movie)
                       } )
    })
  }

}
