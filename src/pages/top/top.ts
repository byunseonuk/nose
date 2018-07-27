import { Component, OnInit } from "@angular/core";
import { Appservice } from "../../service/app.service";
@Component({
  selector: 'top',
  templateUrl: './top.html',
  //styleUrls: ['./top.scss']
})
 
export class Top extends OnInit{
  auth;
  constructor(private appservice:Appservice){
    super();
  };
  ngOnInit(){
    if(this.appservice.getlog()=='admin'){
      this.auth= true;
    }else {
      this.auth= false;
    }
  }
  
}