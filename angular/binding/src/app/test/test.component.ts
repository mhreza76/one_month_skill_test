import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <h2>Welcome {{name}}</h2>
    <h2>{{2+2}}</h2>
    <h2>{{"Mahmudul Hasan " + name}}</h2>
    <h2>{{"name length = " + name.length}}</h2>
    <h2>{{name.toLocaleUpperCase()}}</h2>
    <h2>{{user()}}</h2>
    <h2>{{siteUrl}}</h2>

  `,
  styles: []
})
export class TestComponent implements OnInit {

  public name = "Reza";
  public siteUrl = window.location.href;
  constructor() { }

  ngOnInit(): void {
  }
  
  user(){
    return "This is " + this.name;
  }

}
