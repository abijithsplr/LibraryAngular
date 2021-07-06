import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
authors:any;
token:any;
role:any;
id:any;
  constructor(private Serviceobj:DataService,private route:ActivatedRoute,private http:HttpClient ,private router:Router) { }

  ngOnInit(): void {
    this.token = localStorage.getItem('token');
    this.Serviceobj.getauthors()
    .subscribe((data)=>{
      this.authors=data;
    });
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
  deleteAuthor(id: any) {
    this.id = this.route.snapshot.paramMap.get('id');
    this.http.get('http://localhost:3000/authors/delete' + id)
      .subscribe((data) => {
        console.log(data);
        alert('Item deleted');
      })
    this.router.navigate(['']);
  }
}
