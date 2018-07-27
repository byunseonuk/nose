import { Component, OnInit } from '@angular/core';
import { Appservice } from '../service/app.service';
import {HttpInterceptorService, getHttpOptionsAndIdx, getHttpHeadersOrInit} from "../lib/ng-http-interceptor";
import { DialogService } from '../service/dialog-message/dialog-message.service';
import { Login } from '../pages/login/login';
import {MdDialogRef, MdDialogConfig, MdDialog} from "@angular/material";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent extends OnInit{

  loginDialogRef: MdDialogRef<Login>;
  loginDialogConfig: MdDialogConfig = new MdDialogConfig();
  constructor(public dialog: MdDialog,
              private appservice:Appservice,
              private httpInterceptor: HttpInterceptorService,
              private dialogService: DialogService){
    super();
  }
  logincheck;
  auth;
  ngOnInit(){
    if(this.auth=this.appservice.getlog()){
      this.logincheck=true;
    }else {
      this.logincheck=false;
    }
    this.initialiseInterceptor();
    //this.openLoginDialog();
  }
  title = 'app works!';
  // 
  initialiseInterceptor() {
    this.httpInterceptor.request().addInterceptor((req, method) => {

      let requestOption = getHttpOptionsAndIdx(req, method);
      requestOption.options.withCredentials = true;
      req[requestOption.idx] = requestOption.options;

      // Setting header?
      let requestHeaders = getHttpHeadersOrInit(req, method);
      // if (this.appService.user && this.appService.token){
      //   requestHeaders.set('Authorization', 'Bearer ' + this.appService.token);
      // }

      return req;
    });

    this.httpInterceptor.response().addInterceptor((res, method) => {
      return res
        .map((res) => {
          if (res._body)
            return res.json();
          return res;
        })
        .catch((err) => {
          switch(err.status){
            case 401 :
            case 403 :
              // this.appService.user = null;
              // this.appService.token = null;
              // let loginDialog = _.find(this.dialog._openDialogs, (dialog) => {
              //   return (dialog.componentInstance instanceof Login);
              // });

              // if (!loginDialog)
              //   this.openLoginDialog();
              throw err;
            default :
              throw err;
          }
        });
    });
  }
  openLoginDialog() {
    this.loginDialogConfig.disableClose = true;

    this.loginDialogConfig['width'] = 100 + '%';
    this.loginDialogConfig['height'] = 100 + '%';
    this.loginDialogConfig['disableClose'] = true;

    this.loginDialogRef = this.dialog.open(Login, this.loginDialogConfig);

    this.loginDialogRef.afterClosed().subscribe(result => {
      this.loginDialogRef = null;
    });
  }
}
