declare var _;
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {InterceptableHttp} from "../lib/ng-http-interceptor";
import {URLSearchParams} from "@angular/http";

import {config} from "../app/app.config";

@Injectable()
export class NoticeService{
  private serverUrl = config.serverUrl+'/notice';
  constructor(private http: InterceptableHttp){}
  writenotice(data): Observable<any>{
    let url = this.serverUrl+'/create';
    return this.http.post(url,data);
  }

  updatenotice(data): Observable<any>{
    let url = this.serverUrl+'/update';
    return this.http.put(url,data);
  }

  find(queryParams: any): Observable<any>{
    let url = this.serverUrl+'/find';
    let params: URLSearchParams = new URLSearchParams();
    _.forEach(queryParams,(value,key) => {
      params.set(key,JSON.stringify(value));
    });
    // for(var key in queryParams){
    //   params.set(key,JSON.stringify(queryParams[key]));
    // }
    return this.http.get(url,{search:params});
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

  setdetail(id){
    localStorage.setItem("notice_id",id);
  }
  getdetail(){
    let id = parseInt(localStorage.getItem("notice_id"));
    localStorage.removeItem("notice_id");
    return id;
  }
}