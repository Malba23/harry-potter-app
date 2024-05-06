import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from '../interfaces/movies.interface';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  getAllMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(`/movies`);
  }

  getMovieDetails(movieId: string): Observable<Movie> {
    return this.http.get<Movie>(`/movies/${movieId}`);
  }
}
