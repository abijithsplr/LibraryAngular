import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-addauthor',
  templateUrl: './addauthor.component.html',
  styleUrls: ['./addauthor.component.css']
})
export class AddauthorComponent implements OnInit {
  addauthorform: any;
  constructor(private fb: FormBuilder ,private serviceObj:DataService, private router:Router) { }

  ngOnInit(): void {
    this.addauthorform = this.fb.group({
      name: ['', [Validators.required, Validators.pattern('^([A-Za-z\.\s]+)$')]],
      language: ['', [Validators.required, Validators.pattern('(^[A-Za-z\s,]+)$')]],
      dob: ['',[Validators.required,Validators.pattern(/^([0-2][0-9]|(3)[0-1])(\s)(((0)[0-9])|((1)[0-2]))(\s)\d{4}$/)] ],
      content: ['', Validators.required],
      img: ['', Validators.required]
    })
  }
  addauthor() {
    console.log(this.addauthorform.value);
    this.serviceObj.addauthor(this.addauthorform.value)
    .subscribe((data)=>{
      alert('New Author added');
      console.log(data);
      this.router.navigate(['authors']);
    })

  }

}
