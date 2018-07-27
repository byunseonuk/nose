/**
 * Created by PHILIP on 12/07/2017
 * As part of NoseWork
 *
 * Copyright (C) Applicat (www.applicat.co.kr) - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by PHILIP <hbnb7894@gmail.com>, 12/07/2017
 *
 */

// Export Lib
declare var _;

// Angular
import {Component, OnInit, HostListener} from '@angular/core';
import {MdDialogRef} from "@angular/material";

// Project Sources
import {throttleable} from "../../../service/util";
import {DialogService} from "../../../service/dialog-message/dialog-message.service";
import {AuthService} from "../../../service/auth.service";

@Component({
  selector: 'change-password-form',
  templateUrl: './change-password-form.html'
})
export class ChangePasswordForm implements OnInit {

  currentPassword;
  password;
  passwordConfirm;

  contentSize;

  constructor(public dialogRef: MdDialogRef<ChangePasswordForm>,
              private dialogService: DialogService,
              private authService: AuthService) {
  }

  /*****************************
   *         life cycle
   *****************************/

  ngOnInit() {
    this.recalcSize();
  }

  /*****************************
   *        util functions
   *****************************/

  @HostListener('window:resize')
  @throttleable(5)
  recalcSize() {
    this.contentSize = this.dialogService.calcContentSize();
  }

  isValid() {
    let regExpPassword = /^.*(?=^.{8,12}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[*~`!^\-_+@\#$%&\=\(\)]).*$/;

    if (!this.currentPassword || this.currentPassword == '' || !regExpPassword.test(this.currentPassword))
      return false;
    else if(!this.password || this.password == '' || !regExpPassword.test(this.password))
      return false;
    else if(!this.passwordConfirm || this.passwordConfirm == '' || this.password != this.passwordConfirm)
      return false;
    else
      return true;
  }

  dismiss() {
    this.dialogRef.close();
  }

  /*****************************
   *       helper functions
   *****************************/

  changePassword(){
    if(this.isValid()){
      this.dialogService.loadingSubject.next('spinner');

      let subTitle = '';
      this.authService.shopchangePassword(this.currentPassword, this.password)
        .finally(() => {
          this.dialogService.loadingSubject.next('hide');
        })
        .subscribe(
          () => {
            subTitle = '새로운 비밀번호가 설정되었습니다.';
            this.dialogService.message("알림", subTitle);
            this.dismiss();
          },
          (err) => {
            switch(err.status){
              case 400:
                subTitle = '입력한 정보를 확인해주세요.';
                break;
              case 422:
                subTitle = '올바른 패스워드가 아닙니다.';
                break;
              case 500:
                subTitle = '서버에러';
                break;
              default:
                break;
            }
            this.dialogService.message("알림", subTitle);
          }
        );
    } else {
      this.dialogService.message("알림", "입력한 정보를 확인해주세요.");
    }
  }

}
