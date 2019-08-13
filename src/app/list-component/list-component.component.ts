import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { Movie } from '../models/movie.model';
import { Quote } from '../models/quote.model';

@Component({
  selector: 'app-list-component',
  templateUrl: './list-component.component.html',
  styleUrls: ['./list-component.component.scss']
})
export class ListComponent implements OnInit {
  public movies: Movie[] = [];
  public quotes: Quote[] = [];
  public noQuotes = false;

  constructor(private movieService: MovieService) {}

  ngOnInit() {
    this.getData();
  }

  /* Fetch movies and quotes */
  private async getData() {
    const [quotes, movies]: any = await Promise.all([
      this.movieService.getQuotes(),
      this.movieService.getMovies()
    ]);
    if (quotes) {
      this.quotes = quotes.sort((a, b) => b.score - a.score);
      this.movies = movies;
    } else {
      this.noQuotes = true;
    }
  }

  /* Fetch movie by id */
  public getMovie(id: number) {
    const movie = this.movies.find((o: Movie) => {
      return o.id === id;
    });
    return movie.title || 'Cant find movie for quote';
  }
}
