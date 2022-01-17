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

  deleteRequest(id: number) {
    return this.http.delete(this.url+'/'+id);
  }

  postRequest(post: any) {
    return this.http.post(this.url,post)
  }
}
