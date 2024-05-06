import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie, MovieDetails } from '../interfaces/movies.interface';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private baseUrl = 'http://localhost:4200';

  constructor(private http: HttpClient) { }

  getAllMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(`${this.baseUrl}/movies`);
  }

  getMovieDetails(movieId: string): Observable<MovieDetails> {
    return this.http.get<MovieDetails>(`${this.baseUrl}/movies/${movieId}`);
  }
}
