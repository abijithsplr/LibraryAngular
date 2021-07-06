import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  newUser: any;

  constructor(private fb: FormBuilder,private serviceObj:DataService ,private rout:Router) { }

  ngOnInit(): void {
    this.newUser = this.fb.group({
      newemail: ['',[Validators.required,  Validators.pattern('^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$')]],
      password: ['',[Validators.required,Validators.pattern('(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{8,}')]],
      rePassword: ['',[Validators.required,Validators.pattern('(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{8,}')]]
    })
}
signup() {
  // console.log(this.loginForm.value);
  this.serviceObj.signup(this.newUser.value)
    .subscribe((data) => {
      alert("success");
      this.rout.navigate(['login']);
    });
}

}
