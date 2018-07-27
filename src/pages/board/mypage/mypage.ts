import { Component, OnInit, HostListener} from '@angular/core';
import {throttleable} from "../../../service/util";
import { TestData } from '../mock-testdata';
import { AuthService } from '../../../service/auth.service';
import { DialogService } from '../../../service/dialog-message/dialog-message.service';
import { Appservice } from '../../../service/app.service';




@Component({
    selector: 'mypage',
    templateUrl: './mypage.html',
    styleUrls:['./mypage.css']
})
export class Mypage implements OnInit {
    
    currentPassword;
    password;
    passwordConfirm;

    testdata = TestData;

    constructor(private appService: Appservice,
                private dialogService: DialogService,
                private authService: AuthService){}
    ngOnInit(){
      this.appService.user;
    }

    @HostListener('window:resize')
    @throttleable(5)

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
         //return true;
    }

    shopchangePassword(){
        if(this.isValid()){
          let subTitle = '';
          console.log(this.currentPassword);
          console.log(this.password);
          this.authService.shopchangePassword(this.currentPassword, this.password)
            .finally(() => {
            })
            .subscribe(
              () => {
                subTitle = '새로운 비밀번호가 설정되었습니다.';
                this.dialogService.message("알림", subTitle);
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