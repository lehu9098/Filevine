import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  //Angular makes use of observables as an interface to handle a variety of common asynchronous operations
  getData(n: number): Observable<Object>
  {
    return this.http.get(`https://jsonplaceholder.typicode.com/posts/${n}`);
  }
}
