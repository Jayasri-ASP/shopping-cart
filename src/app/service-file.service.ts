import { Injectable } from '@angular/core';
import {  Observable, catchError, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServiceFileService {
  url: string = environment.apiUrl
 
  constructor(private http: HttpClient) { }
  getPosts() {
    return this.http.get(this.url)
    .pipe(
      catchError(this.handleError)
    )
  }
  deleteRequest(id: number): Observable<any> {
    return this.http.delete(`${this.url}/${id}`).pipe(
      catchError(this.handleError)
    )
  }

  postRequest(post: Object): Observable<any> {
    return this.http.post(this.url,post).pipe(
      catchError(this.handleError)
    )
  }

  putRequest(id: number, data: Object): Observable<any> {
    return this.http.put(`${this.url}/${id}`, data).pipe(
      catchError(this.handleError)
    )
  }

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
