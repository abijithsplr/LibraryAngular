import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books: any;
  token: any;
  role: any;
  id: any;
  constructor(public Serviceobj: DataService, private route: ActivatedRoute, private http: HttpClient ,private router:Router) { }

  ngOnInit(): void {
    this.token = localStorage.getItem('token');

    this.Serviceobj.getbooks()
      .subscribe((data) => {
        this.books = data;
      })
    if (!!this.token) {
      this.Serviceobj.getrole(this.token).subscribe((data) => {
        this.role = data.subject;
      });
    }
    else {
      this.role = "guest";
    }
  }
  getaccess(): any {
    if (this.role == "admin") {
      return true;
    }
    else {
      return false;
    }
  }
  deleteBook(id: any) {
    this.id = this.route.snapshot.paramMap.get('id');
    this.http.get('http://localhost:3000/books/delete' + id)
      .subscribe((data) => {
        console.log(data);
        alert('Item deleted');
      })
    this.router.navigate(['']);
  }
  // updateBook(id:any){
  //   this.id = this.route.snapshot.paramMap.get('id');
  //   this.http.get('http://localhost:3000/books/update'+this.id)
  //   .subscribe((data)=>{
  //     console.log(data);
  //   })
  // }

}
