import {Injectable, OnInit} from "@angular/core";
import {InterceptableHttp} from "../lib/ng-http-interceptor";
import { config } from '../app/app.config'; 
import { Observable } from "rxjs";
import { Headers} from '@angular/http';
declare var _;

@Injectable()

export class AuthService{
  private serverUrl = config.serverUrl;
  constructor(private http: InterceptableHttp){}
  
  shopregister(data): Observable<any> {
    let url = this.serverUrl + '/shopregister';
    console.log(data);
    console.log(url);
    // var asdf = this.http
    //   .post(url, data);
    // console.log(asdf);
    // return asdf;
    return this.http.post(url, data);
  }
}