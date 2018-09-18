import {Injectable, OnInit} from "@angular/core";
import {InterceptableHttp} from "../lib/ng-http-interceptor";
import { config } from '../app/app.config'; 
import { Observable } from "rxjs";
import { Headers } from '@angular/http';
import {URLSearchParams} from "@angular/http";

declare var _;

@Injectable()

export class AuthService{
  private serverUrl = config.serverUrl;
  constructor(private http: InterceptableHttp){}

  shoplogin(identifier: string, password: string): Observable<any> {
    let url = this.serverUrl + '/shoplogin';
    console.log(identifier);
    console.log(url);
    return this.http
      .post(url, {identifier: identifier, password: password});
  }
  
  shopregister(data): Observable<any> {
    let url = this.serverUrl + '/shopregister';
    console.log(data);
    console.log(url);
  
    return this.http.post(url, data);
  }

  update(data): Observable<any>{
    let url = this.serverUrl + '/shopUpdate';
    console.log(data);
    return this.http.put(url,data);
  }

  shopChangePassword(id:number, oldPassword: string, newPassword: string): Observable<any> {
    let url = this.serverUrl + '/shop/shopChangePassword';
    
    return this.http
      .put(url, {_id:id, oldPassword: oldPassword, newPassword: newPassword});
  }

  shopChangePass(shopId, newPassword){
    let url = this.serverUrl + '/shopChangePass';
    return this.http.put(url,{shopId:shopId, newPassword:newPassword});
  }

  logout(): Observable<any> {
    let url = this.serverUrl + '/logout';

    return this.http
      .get(url);
  }
}