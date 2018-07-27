/**
 * Created by PHILIP on 10/07/2017
 * As part of NoseWork
 *
 * Copyright (C) Applicat (www.applicat.co.kr) & PHILIP - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by PHILIP <hbnb7894@gmail.com>, 10/07/2017
 *
 */

// Export Lib
declare var _;

// Angular
import {Component, OnInit, OnDestroy} from "@angular/core";
import {MdDialogRef, MdDialogConfig, MdDialog} from "@angular/material";

// Angular Third Party Lib
import {HttpInterceptorService, getHttpOptionsAndIdx, getHttpHeadersOrInit} from "../lib/ng-http-interceptor";

// Project Sources
import {Appservice} from "../service/app.service";
import {AuthService} from "../service/auth.service";
import {DialogService} from "../service/dialog-message/dialog-message.service";
import {Login} from "../pages/login/login";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit, OnDestroy {

  appEventDisposor;
  loginDialogRef: MdDialogRef<Login>;
  loginDialogConfig: MdDialogConfig = new MdDialogConfig();

  constructor(public dialog: MdDialog,
              private httpInterceptor: HttpInterceptorService,
              private appService: Appservice,
              private dialogService: DialogService,
              private authService: AuthService) {}

  /*****************************
   *         life cycle
   *****************************/

  ngOnInit(){
    if (this.appEventDisposor) this.appEventDisposor.unsubscribe();
    this.appEventDisposor = this.appService.appEvent.subscribe(this.appEventHandler.bind(this));
    this.initialiseInterceptor();

    if(this.appService.user)
      this.loadAdmin();
    else
      this.openLoginDialog();
  }

  ngOnDestroy() {
    if (this.appEventDisposor)
      this.appEventDisposor.unsubscribe();
  }

  /*****************************
   *        util functions
   *****************************/

  appEventHandler(event) {
    switch (event.name) {
      case 'login':
        this.loadAdmin();
        break;
      case 'logout':
        this.openLoginDialog();
        break;
      default:
        break;
    }
  }

  initialiseInterceptor() {
    this.httpInterceptor.request().addInterceptor((req, method) => {

      let requestOption = getHttpOptionsAndIdx(req, method);
      requestOption.options.withCredentials = true;
      req[requestOption.idx] = requestOption.options;

      // Setting header?
      let requestHeaders = getHttpHeadersOrInit(req, method);
      if (this.appService.user && this.appService.token){
        requestHeaders.set('Authorization', 'Bearer ' + this.appService.token);
      }

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
              this.appService.user = null;
              this.appService.token = null;
              let loginDialog = _.find(this.dialog._openDialogs, (dialog) => {
                return (dialog.componentInstance instanceof Login);
              });

              if (!loginDialog)
                this.openLoginDialog();
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

  /*****************************
   *       helper functions
   *****************************/

  loadAdmin() {
    this.authService.shopgetMyUserInfo({})
      .subscribe(
        (data) => {
          if (!data.user || data.user.role !== "관리자") {
            this.appService.user = null;
            return this.dialogService.message("알림", "관리자만 접속 할수 있는 공간 입니다.")
              .subscribe(() => {
                this.authService.logout().subscribe();
                window.location.href = "https://nosework-official.com";
              });
          }
        });
  }

}