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

  //function call with parameter
  getFullName(name){
    alert(name)
  }

  myEvent(evt){
    console.warn(evt)
  }

  currentval="";
  getLiveValue(val){
    console.warn(val)
    this.currentval = val;
  }

  currentval2="";
  getValue(val){
    console.warn(val)
    this.currentval2 = val;
  }

  // property binding
  disableBox = true;
  enableBox(){
    this.disableBox = false;
  } 

  // get form value 
  getUserValue(value)
  {
    console.warn(value)
  }

  //style Binding
  dyColor = "orange";
  err = false;
  updateColor()
  {
    this.dyColor = "blue";
  }

  //data pass to child component
  full_name = "Mahmudul Hasan Reza"
  person = {
    name: "reza",
    age: 24
  }
}
