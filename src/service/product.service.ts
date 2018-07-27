import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {InterceptableHttp} from "../lib/ng-http-interceptor";
import {URLSearchParams} from "@angular/http";

import {config} from "../app/app.config";

@Injectable()
export class ProductService{
  private serverUrl = config.serverUrl+ '/shopProduct';
  constructor(private http: InterceptableHttp){}
  
  productcreate(data): Observable<any>{
    let url = this.serverUrl + '/create';
    console.log("OK");
    console.log(data);
    return this.http.post(url, data);
  }

  productupdate(data): Observable<any>{
    let url = this.serverUrl + '/update';
    return this.http.put(url, data);
  }

  productremove(_id): Observable<any>{
    let url = this.serverUrl+ '/remove';
    let params: URLSearchParams = new URLSearchParams();
    params.set("_id", _id.toString());

    return this.http
      .delete(url, {search: params});
  }

  findList(queryParams: any): Observable<any>{
    let url = this.serverUrl + '/findList';
    let params: URLSearchParams = new URLSearchParams();
    for(var key in queryParams){
      params.set(key,JSON.stringify(queryParams[key]));
    }
    console.log(params);
    return this.http
      .get(url, {search: params});
  }

  findOne(queryParams: any): Observable<any>{
    let url = this.serverUrl + '/findOne';
    let params: URLSearchParams = new URLSearchParams();
    for(var key in queryParams){
      params.set(key,JSON.stringify(queryParams[key]));
    }
    return this.http
      .get(url, {search: params});
  }

  setitemid(id){
    localStorage.setItem("product_id",id);
  }

  getitemid(){
    let id = parseInt(localStorage.getItem("product_id"));
    localStorage.removeItem("product_id");
    return id;
  }
}