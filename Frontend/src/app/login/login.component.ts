import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: any;
  isValid: any;
  constructor(
    private fb: FormBuilder,
    private serviceObj: DataService,
    private rout: Router
  ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern('^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$')]],
      password: ['', [Validators.required, Validators.pattern('(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{8,}')]]
    })
  }
  login() {
    // console.log(this.loginForm.value);
    this.serviceObj.login(this.loginForm.value)
      .subscribe((data) => {
        if (data.message) {
          // console.log("failed");
          this.isValid = true;
          this.rout.navigate(['login']);
        }
        else {
          localStorage.setItem('token', data.token);
          this.isValid = false;
          this.rout.navigate(['']);
        }

      })

  }

}
