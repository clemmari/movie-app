import { Injectable } from '@angular/core';
import { Quote } from '../models/quote.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Movie } from '../models/movie.model';
@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private url = 'https://mediasignal-quotes.herokuapp.com/';

  constructor(private http: HttpClient) {}

  public getQuotes() {
    const data = this.http.get<Quote>(this.url + 'quotes').toPromise();
    return data;
  }
  public getMovies() {
    return this.http.get<Movie>(this.url + 'movies').toPromise();
  }
}
