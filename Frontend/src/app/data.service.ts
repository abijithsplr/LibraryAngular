import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public http: HttpClient) { }
  getbooks() {
    return this.http.get('http://localhost:3000/books');
  }
  getauthors() {
    return this.http.get('http://localhost:3000/authors');
  }
  login(item: any) {
    return this.http.post<any>('http://localhost:3000/login', item);
  }
  signup(item: any) {
    return this.http.post('http://localhost:3000/signup', item);
  }
  addauthor(item: any) {
    return this.http.post('http://localhost:3000/addauthor', item);
  }
  addbook(item: any) {
    return this.http.post('http://localhost:3000/addbook', item);
  }
  getlogin() {
    return !!localStorage.getItem('token');
  }
  gettoken() {
    return localStorage.getItem('token');
  }
  getrole(token: any) {
    // console.log(token);
    return this.http.post<any>('http://localhost:3000/getrole', { token })
  }

}
