declare var _;
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {InterceptableHttp} from "../lib/ng-http-interceptor";
import {URLSearchParams} from "@angular/http";

import {config} from "../app/app.config";

@Injectable()
export class ShopService{
  private serverUrl = config.serverUrl+ '/shop';
  constructor(private http: InterceptableHttp){}
  checkshopid(_id: number, password: string): Observable<any>{
    let url = this.serverUrl+'/checkshopid';
    return this.http.post(url,{_id: _id, password: password});
  }
  update(data): Observable<any>{
    let url = this.serverUrl;
    console.log(data);
    return this.http.put(url,data);
  }
  findOne(queryParams: any): Observable<any>{
    let url = this.serverUrl + '/findOne';

    let params: URLSearchParams = new URLSearchParams();
    _.forEach(queryParams,(value,key) => {
      params.set(key,JSON.stringify(value));
    });
    
    return this.http
      .get(url, {search: params});
  }
  
  find(queryParams:any):Observable<any>{
    let url = this.serverUrl + '/find';
    let params: URLSearchParams = new URLSearchParams();
    _.forEach(queryParams,(value,key) => {
      params.set(key,JSON.stringify(value));
    });
    return this.http.get(url,{search: params});
  }

  updateManager(data): Observable<any> {
    let url = this.serverUrl+'/updateManager';

    return this.http
      .put(url, data);
  }
}