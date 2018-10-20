import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MovieService {
  public API = 'http://192.168.0.13:3448';
  public MOVIE_API = this.API + '/allmovies'
  public DELETEAPI = this.API + '/deletemovie'
  public FIND_API = this.API + '/moviesID/'
  public POST_API = this.API + '/addmovie/'
  public UPDATEAPI = this.API + '/updatemovie'
  constructor(public http: HttpClient) {
  }

  getMovies(): Observable<any> {
    return this.http.get(this.MOVIE_API);
  }

  get(id: string) {
    return this.http.get(this.FIND_API + '/' + id);
  }

  save(movie: any): Observable<any> {
    let result: Observable<Object>;
      var formData = new FormData();
      formData.append('name', movie.name);
      formData.append('description', movie.description);
      formData.append('genre', movie.genre );
      formData.append('release_date', movie.release_date)
      result = this.http.post(this.POST_API, formData);
    
    return result.catch(error => Observable.throw(error));
  }


  remove(id: string) {
    return this.http.delete(this.DELETEAPI + '/' + id);
  }
  
}