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

// Export Lib
declare var _;

// Angular
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import {MdDialog, MdDialogConfig, MdDialogRef} from "@angular/material";

// Project Sources
import { routes } from "../../app/app.routes";
import { SidenavService } from "../../service/sidenav.service";
import {Appservice} from "../../service/app.service";
import {AuthService} from "../../service/auth.service";
import {DialogService} from "../../service/dialog-message/dialog-message.service";
import {ChangePasswordForm} from "./change-password-form/change-password-form";

enum SIDE_NAV_STATUS {
  OPENED,
  HALF_OPENED
}

@Component({
  selector: 'header',
  templateUrl: './header.html',
  styleUrls: ['./header.scss']
})

export class Header implements OnInit {

  state: SIDE_NAV_STATUS;
  side_nav_status = SIDE_NAV_STATUS;

  dialogFaqRef: MdDialogRef<ChangePasswordForm>;
  config: MdDialogConfig = new MdDialogConfig();

  constructor(public sidenavService: SidenavService,
              private mdDialog: MdDialog,
              private router: Router,
              private dialogService: DialogService,
              private appService: Appservice,
              private authService: AuthService) {
  }

  /*****************************
   *         life cycle
   *****************************/

  ngOnInit() {
    this.state = SIDE_NAV_STATUS.OPENED;

    this.sidenavService.onSideStateChange
      .subscribe((param) => {
        this.state = param;
      });
  }

  /*****************************
   *        util functions
   *****************************/

  toggleNav() {
    if(this.state == SIDE_NAV_STATUS.HALF_OPENED)
      this.state = SIDE_NAV_STATUS.OPENED;
    else
      this.state = SIDE_NAV_STATUS.HALF_OPENED;
    this.sidenavService.onSideStateChange.emit(this.state);
  }

  getRouteLabel(): string {
    if (this.router.url === "/")
      return '';

    let path = this.router.url.substring(this.router.url.lastIndexOf("/") + 1);
    let route = _.find(routes, {path: path});

    return route.label;
  }

  openChangePasswordFormModel(faq?) {
    this.dialogService.resizeModal(this.config);
    this.config.disableClose = true;

    this.dialogFaqRef = this.mdDialog.open(ChangePasswordForm, this.config);

    this.dialogFaqRef.afterClosed()
      .subscribe((result) => {});
  }

  /*****************************
   *       helper functions
   *****************************/

  logout(){
    this.dialogService.loadingSubject.next('spinner');

    this.authService.logout()
      .finally(() => {
        this.dialogService.loadingSubject.next('hide');
      })
      .subscribe(
        () => {
          this.appService.user = null;
          this.appService.token = null;
          this.appService.sendEvent('logout');
        },
        (err) => {
          this.dialogService.message("알림", '잘못된 요청입니다.');
        }
      )
  }

}