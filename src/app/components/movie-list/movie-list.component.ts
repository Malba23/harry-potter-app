import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { NgFor, } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Movie } from '../../interfaces/movies.interface';
import { DurationPipe } from "../../pipes/duration.pipe";
import { MoneyFormatPipe } from "../../pipes/money-format.pipe";

@Component({
    standalone: true,
    selector: 'app-movie-list',
    templateUrl: './movie-list.component.html',
    styleUrls: ['./movie-list.component.css'],
    imports: [NgFor, RouterModule, FormsModule, DurationPipe, MoneyFormatPipe]
})
export class MovieListComponent implements OnInit {

  movies!: Movie[];
  filteredMovies!: Movie[];
  titleFilter = '';
  yearFilter?: number;

  constructor(private movieService: MovieService, private router: Router) { }

  ngOnInit(): void {
    this.movieService.getAllMovies().subscribe((data: Movie[]) => {
      this.movies = data;
      this.applyFilters();
    });
  }

  applyFilters(): void {
    this.filteredMovies = this.movies.filter((movie: Movie) => {
      return (
        movie.title.toLowerCase().includes(this.titleFilter.toLowerCase()) &&
        movie.release_date.includes((this.yearFilter ?? 0).toString())
      );
    });
  }

  showMovieDetails(movieId: string): void {
    this.router.navigate(['/movies', movieId]);
  }

}
