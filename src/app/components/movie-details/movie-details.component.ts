import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location, NgIf } from '@angular/common';
import { MovieService } from '../../services/movie.service';
import { MovieDetails } from '../../interfaces/movies.interface';
import { DurationPipe } from "../../pipes/duration.pipe";

@Component({
    standalone: true,
    selector: 'app-movie-details',
    templateUrl: './movie-details.component.html',
    styleUrls: ['./movie-details.component.css'],
    imports: [NgIf, DurationPipe]
})
export class MovieDetailsComponent implements OnInit {

  movieDetails!: MovieDetails;
  movieId: string = '';

  constructor(private route: ActivatedRoute, private movieService: MovieService, private location: Location) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.movieId = params['id'];
      this.movieService.getMovieDetails(this.movieId).subscribe((data: MovieDetails) => {
        this.movieDetails = data;
      });
    });
  }

  goBack(): void {
    this.location.back();
  }

}
