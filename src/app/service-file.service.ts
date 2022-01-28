import { Injectable } from '@angular/core';
import {  Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceFileService {
  url: string = 'http://localhost:3000/items'
 
  constructor(private http: HttpClient) { }
  getPosts() {
    return this.http.get(this.url)
  }
  deleteRequest(id: any): Observable<any> {
    return this.http.delete(`${this.url}/${id}`);
  }

  postRequest(post: any): Observable<any> {
    return this.http.post(this.url,post)
  }

  putRequest(id: any, data: any): Observable<any> {
    return this.http.put(`${this.url}/${id}`, data)
  }
}
