import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
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

  data = [
    {
      name: 'reza',
      age: 24,
      email: 'reza@baiust.edu.bd'
    },
    {
      name: 'munny',
      age: 23,
      // email: 'munny@baiust.edu.bd'
    },
    {
      name: 'daud',
      age: 24,
      email: 'daud@baiust.edu.bd'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
