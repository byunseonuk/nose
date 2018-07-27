
/**
 * Created by PHILIP on 12/07/2017
 * As part of NoseWork
 *
 * Copyright (C) Applicat (www.applicat.co.kr) & PHILIP - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by PHILIP <hbnb7894@gmail.com>, 12/07/2017
 *
 */

// ExportLib
declare var _;

// Browser Lib
import {Observable} from "rxjs";

// Angular
import {Injectable} from "@angular/core";
import {URLSearchParams} from "@angular/http";

// Angular Third Party Lib


// Project Sources
import {config} from "../app/app.config";
import { InterceptableHttp } from "../lib/ng-http-interceptor";

@Injectable()
export class UserService {
  serverUrl = config.serverUrl + '/shopuser';

  constructor(private http: InterceptableHttp) {}

  findOne(queryParams: any): Observable<any> {
    let url = this.serverUrl + '/findOne';

    let params: URLSearchParams = new URLSearchParams();
    _.forEach(queryParams, (value, key) => {
      params.set(key, JSON.stringify(value));
    });

    return this.http
      .get(url, {search: params});
  }

  update(user: any): Observable<any> {
    return this.http
      .put(this.serverUrl, user);
  }

  remove(_id: string[]): Observable<any> {
    let params: URLSearchParams = new URLSearchParams();
    params.set("_id", _id.toString());

    return this.http
      .delete(this.serverUrl, {search: params});
  }

  toggleActivateUserOnlyAdmin(identifier: string): Observable<any> {
    return this.http
      .put(this.serverUrl + '/toggleActivateUserOnlyAdmin', {identifier: identifier});
  }

  getUserList(queryParams: any): Observable<any> {
    let url = this.serverUrl + '/getUserList';

    let params: URLSearchParams = new URLSearchParams();
    _.forEach(queryParams, (value, key) => {
      params.set(key, JSON.stringify(value));
    });

    return this.http
      .get(url, {search: params});
  }

  resetPasswordResetLimit(id: number): Observable<any> {
    let url = this.serverUrl + '/passwordChange/reset';

    return this.http
      .put(url, {_id: id});
  }

}
