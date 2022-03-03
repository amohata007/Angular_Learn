import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'firstproject';
  func(){
    return this.title
  }
  fcheck(what){
    alert(what)
  }
  obj = {
    name : "Harry",
    age : 20
  }
  arr = ['ironman','thor','blackpanther','hulk'];
  a=10;
  b=20;
  variable = window.location.href
}
