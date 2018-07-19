import { Component, OnInit } from '@angular/core';
import { Appservice } from '../service/app.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent extends OnInit{
  constructor(private appservice:Appservice){
    super();
  }
  logincheck;
  auth;
  ngOnInit(){
    if(this.auth=this.appservice.getlog()){
      this.logincheck=true;
    }else {
      this.logincheck=false;
    }
    if(this.appservice.getlog()=='admin'){
      this.auth= true;
    }else {
      this.auth= false;
    }
  }
  title = 'app works!';
  
}
