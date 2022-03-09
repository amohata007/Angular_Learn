import { Component } from '@angular/core';
import { reduce } from 'rxjs';
import {UserDataService} from './user-data.service'

interface datatype{
  name:string,
  age:number,
  indian:boolean,
  address:any
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'firstproject';
  // using model
  modelcheck(){
    const data:datatype={
      name:"Abhishek Mohata",
      age:25,
      indian:true,
      address:"202,Surat"
    }
    return data;
  }


  // varname='';
  // constructor(private user:UserDataService)
  // {
  //   console.warn(this.user.getData())
  //   let data = this.user.getData();
  //   this.varname=data.name
  // }
  mydata:any;
  constructor(private user:UserDataService)
  {
    this.user.getApiData().subscribe(data=>{
      // console.warn(mydata) 
      this.mydata=data
    })
  }

  currval='';
  func(){
    return this.title
  }
  fcheck(what){
    alert(what)
  }
  printval(val){
    console.warn(val)
    this.currval=val  
  }
  xyz = true;
  checkdiff(){
    this.xyz = false
  }
  obj = {
    name : "Harry",
    age : 20
  }
  arr = ['ironman','thor','blackpanther','hulk'];
  a=10;
  b=20;
  variable = window.location.href

  color = 'blue';
  num = 2321;

  mystr = "hello charLiE";
  today = Date.now();
  curr = 100;

  myarray = 
  [
    {
      name: 'Abhishek',
      age: 25,
      mail: 'a.mohata@gmail.com'
    },
    {
      name: 'Abhi',
      age: 24,
      mail: 'a.mohata11@gmail.com'
    },
    {
      name: 'Riya',
      age: 22,
      mail: 'riya.mohata@gmail.com'
    },
    {
      name: 'Jinu',
      age: 15,
      mail: 'jinu.mohata@gmail.com'
    },
    {
      name: 'lakshya',
      age: 13,
      mail: 'lakshya.mohata@gmail.com'
    }
  ];
  getvalues(val){
    console.warn(val)
  }
}
