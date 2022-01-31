import { Injectable } from '@angular/core';
import {  Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServiceFileService {
  url: string = environment.apiUrl
 
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
