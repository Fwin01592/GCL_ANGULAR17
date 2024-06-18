import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  constructor(private router: Router,private location: Location) { }
  
  checkURL(){
    let path=this.location.path();
    if(path=='/login'){
      return false
    }else if(path==""){
      return false
    }else{
      return true;
    }
  }

}
