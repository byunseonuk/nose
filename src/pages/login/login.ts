import { Component, OnInit } from "@angular/core";
import { Log } from '../../tmpdata/login';
import { Appservice } from '../../service/app.service';
@Component({
  selector: 'login',
  templateUrl: './login.html'
})
 
export class Login extends OnInit{
  constructor(private appservice:Appservice){
    super();
  }
  log;
  id;
  password;
  ngOnInit(){
    this.log = Log;
  }
  login(){
    
    for (const id of this.log) {
      if(id.id===this.id){
        if(id.password===this.password){
          this.appservice.setlog(id.id);
        }
      }
    }
  }
  
}