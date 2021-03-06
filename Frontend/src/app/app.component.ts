import { Component } from '@angular/core';
import { Dropdown } from 'bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Frontend';
  constructor() {
    Array.from(
      document.querySelectorAll('[data-bs-toggle="dropdown"]')
    ).forEach(
      node => new Dropdown(node)
    );
  }
  
}
