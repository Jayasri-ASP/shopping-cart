import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceFileService {
  url: string = 'http://localhost:3000/items'
 
  constructor(private http: HttpClient) { }
  getPosts() {
    return this.http.get(this.url)
  }

  getUsers() {
    //return this.http.get("https://run.mocky.io/v3/1e45e371-a0c9-4b53-92b9-53aaec34b063");
    return this.http.get("http://localhost:3000/users/");
  }
  deleteRequest(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }

  postRequest(post: any) {
    return this.http.post(this.url,post)
  }
}
