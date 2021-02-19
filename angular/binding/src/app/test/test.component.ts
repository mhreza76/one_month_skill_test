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

    <input type="text" value="Name">
    
    <!-- property binding  -->
    <!-- not correct way , interpolation is not working with boolean -->
    <input disabled = "{{false}}" id="{{myId}}" type="text" value="testId">
    
    <!-- correct ways -->
    <input [id]="myId" type="text" value="testId">
    <input [disabled]="true" id="{{myId}}" type="text" value="testId">
    <input [disabled]="isDisabled" id="{{myId}}" type="text" value="testId">
    <!-- another way -->
    <input bind-disabled="isDisabled" id="{{myId}}" type="text" value="testId">

    
    
    <!-- Class Binding  -->
    <h2 class="text-success">Graphics xm coming.</h2>
    <h2 class="text-danger" [class]="successClass">Graphics xm coming.</h2>
    <h2 [class.text-danger]="hasError">Graphics xm coming.</h2>
    <h2 [ngClass]="messageClasses">Graphics xm coming.</h2>

    <!-- Style Binding  -->
    <h2 [style.color]="hasError ? 'red' : 'green'">Style Bindings</h2>
    <h2 [style.color]="highlightColor">Style Binding 2</h2>
    <h2 [ngStyle]="titleStyles">Style Binding 3</h2>

    <!-- Event binding  -->
    <button (click)="onClick()">Greet</button>
    <button (click)="onClick2($event)">Event</button>
    <button (click)="greeting='Welcome Online Exam'">Exam</button>
    {{greeting}}

      `,
  styles: [`
    .text-success{
      color: green;
    }

    .text-danger{
      color: red;
    }

    .text-special{
      font-style: italic;
    }

  `]
})
export class TestComponent implements OnInit {

  public name = "Reza";
  public siteUrl = window.location.href;
  
  public myId = "1105060";
  public isDisabled = false;


  public successClass = "text-success";
  public hasError = false;
  public isSpecial = true;
  public messageClasses = {
    "text-success": !this.hasError,
    "text-danger": this.hasError,
    "text-special": this.isSpecial
  }

  public highlightColor = "orange";
  public titleStyles = {
    color: "blue",
    fontStyle: "italic"
  }


  public greeting = "";
  onClick(){
    console.log("working with angular");
    this.greeting = "working with angular";
  }

  onClick2(event){
    console.log(event);
    this.greeting = "working with angular event binding";
  }
  constructor() { }

  ngOnInit(): void {
  }
  
  user(){
    return "This is " + this.name;
  }

}
