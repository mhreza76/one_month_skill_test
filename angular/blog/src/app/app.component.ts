import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blog';
  name = "Reza";
  getName()
  {
    return this.name;
  }
  obj={
    name: "Mahmudul Hasan",
    age: 24
  }
  arr=['reza', 'munny', 'daud']
  a = 100;
  b = 200;
  siteUrl = window.location.href;



}