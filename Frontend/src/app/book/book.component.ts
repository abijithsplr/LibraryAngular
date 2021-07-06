import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
id:any;
constructor(private route: ActivatedRoute,private http:HttpClient) { }

book:any;
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.http.get('http://localhost:3000/books/'+this.id)
    .subscribe((data)=>{
      this.book=data;
      console.log(data);
    })
  }

}
