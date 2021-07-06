import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {
  addbookForm: any;
  item:any;
  constructor(private fb: FormBuilder ,private router:Router ,private serviceObj:DataService) { }

  ngOnInit(): void {
    this.addbookForm = this.fb.group({
      title: ['', [Validators.required, Validators.pattern('^([A-Za-z\s]+)$')]],
      author: ['', [Validators.required, Validators.pattern('^([A-Za-z\.\s]+)$')]],
      genre: ['', [Validators.required, Validators.pattern('^([A-Za-z\s]+)$')]],
      img: ['', Validators.required]
    })
  }
  addbook() {
    console.log(this.item);
    this.serviceObj.addbook(this.addbookForm.value)
    .subscribe((data)=>{
      alert('New Book added');
      console.log(data);
      this.router.navigate(['books']);
    })
}


}
