import { Injectable } from "@angular/core";
import { Movies } from "../models/movies";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

const apiKey = '99e0cb754655937a0b0b0d53a9692269';

@Injectable()
export class MoviesService {
    path: string = 'https://api.themoviedb.org/3/';
    searchPath: string = 'https://api.themoviedb.org/3/search/movie?query=';
    popular: string = 'discover/movie?sort_by=popularity.desc';
    theaters: string = 'discover/movie?primary_release_date.gte=2019-09-15&primary_release_date.lte=2021-10-22';
    kids: string = 'discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc';
    dramas: string = 'discover/movie?with_genres=18&primary_release_year=2014';
    movie: string = 'movie/'
    authentication: string = '&api_key=';
    movieAuthentication: string ='?api_key=';

    constructor(private http: HttpClient ){

    }

    findAMovie(myQuery: string) {
        return this.http.get(`${this.searchPath}${myQuery}${this.authentication}${apiKey}`);
    }

    getPopular() : Observable<Movies>{
        return this.http.get<Movies>(`${this.path}${this.popular}${this.authentication}${apiKey}`);
    }

    getTheaters () : Observable<Movies> {
        return this.http.get<Movies>(`${this.path}${this.theaters}${this.authentication}${apiKey}`);
    }

    getKids() : Observable<Movies> {
        return this.http.get<Movies>(`${this.path}${this.kids}${this.authentication}${apiKey}`);
    }

    getDramas (): Observable<Movies> {
        return this.http.get<Movies>(`${this.path}${this.dramas}${this.authentication}${apiKey}`);
    }

    getMovie(id: number) {
         return this.http.get(`${this.path}${this.movie}` + id + `${this.movieAuthentication}${apiKey}`);
    }



}