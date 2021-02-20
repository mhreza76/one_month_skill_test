import { Component, OnInit } from '@angular/core';
// import { builtinModules } from 'node:module';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  displayName = false;
  color = 'green';

  public colors = ["red", "blue", "green", "yellow" ];

  constructor() { }

  ngOnInit(): void {
  }

}
