import { Component } from '@angular/core';
import { UserServiceService } from "./user-service.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'basics';

  constructor(private user:UserServiceService){
    this.user.getData().subscribe(data=>{console.warn(data)})
  }
}
