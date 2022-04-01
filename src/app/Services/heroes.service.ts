import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {
  readonly BaseUrl = environment.BaseUrl;
  apiUrlTable: string = 'Heroes';
  apiUrlTableC: string = 'https://github.com/fabian7593/CountryAPI';

  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private httpClient: HttpClient) { }

  //Get All
  GetAll() : Observable<any> {
    return this.httpClient.get(this.BaseUrl + this.apiUrlTable)
    .pipe(
      catchError(this.handleError)
    );
  }
  GetAllCount() : Observable<any> {
    return this.httpClient.get(this.apiUrlTableC)
    .pipe(
      catchError(this.handleError)
    );
  }


  // Handle API errors << You Can Add this Function as an Interceptor >>
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  };

}
