import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  role: any;
  token: any;
  constructor(public ServiceObj: DataService, private router: Router) { }

  ngOnInit(): void {
    this.token = localStorage.getItem('token');
    this.ServiceObj.getlogin();
    if (!!this.token) {
      this.ServiceObj.getrole(this.token).subscribe((data) => {
        this.role = data.subject;
      });
    }
    else {
      this.role = "guest";
    }
  }
  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }
  getaccess(): any {
    if (this.role == "admin") {
      return true;
    }
    else {
      return false;
    }
  }

}
