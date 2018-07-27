declare var _;
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {InterceptableHttp} from "../lib/ng-http-interceptor";
import {URLSearchParams} from "@angular/http";

import {config} from "../app/app.config";

@Injectable()
export class OrderService{
  private serverUrl = config.serverUrl+'/order';
  constructor(private http: InterceptableHttp){}

  create(data: any) :Observable<any>{
    let url = this.serverUrl;
    return this.http.post(url,data);
  }
}