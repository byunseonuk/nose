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

  shopchangePassword(oldPassword: string, newPassword: string): Observable<any> {
    let url = this.serverUrl + '/shopchangePassword';

    return this.http
      .put(url, {oldPassword: oldPassword, newPassword: newPassword});
  }

  shopgetMyUserInfo(queryParams: any): Observable<any> {
    let url = this.serverUrl + '/shopme';

    let params: URLSearchParams = new URLSearchParams();
    
    _.forEach(queryParams, (value, key) => {
      params.set(key, JSON.stringify(value));
    });
    
    return this.http
      .get(url, {search: params});
  }

  logout(): Observable<any> {
    let url = this.serverUrl + '/logout';

    return this.http
      .get(url);
  }
}