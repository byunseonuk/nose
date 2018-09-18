import { Component, OnInit, HostListener} from '@angular/core';
import { Appservice } from '../../../../service/app.service';
import { AuthService } from '../../../../service/auth.service';
import { DialogService } from '../../../../service/dialog-message/dialog-message.service';


@Component({
    selector: 'changepassword',
    templateUrl: './changepassword.html',
    styleUrls:['./changepassword.scss']
})
export class ChangePassword extends OnInit{
  oldPassword;
  newPassword;
  checkNewPassword;
  constructor(private appService:Appservice,
              private authService:AuthService,
              private dialogService:DialogService){
    super();
  }
  ngOnInit(){
    this.oldPassword='';
    this.newPassword='';
    this.checkNewPassword='';
  }

  isValid() {
    let regExpPassword = /^.*(?=^.{8,12}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[*~`!^\-_+@\#$%&\=\(\)]).*$/;

    if (!this.oldPassword || this.oldPassword == '' || !regExpPassword.test(this.oldPassword))
        return false;
    else if(!this.newPassword || this.newPassword == '' || !regExpPassword.test(this.newPassword))
        return false;
    else if(!this.checkNewPassword || this.checkNewPassword == '' || this.newPassword != this.checkNewPassword)
        return false;
    else
        return true;
     //return true;
  }

  changePassword(){
    if(this.isValid()){
      let subTitle = '';
      console.log(this.oldPassword);
      console.log(this.newPassword);
      this.authService.shopChangePassword(this.appService.shop._id,this.oldPassword, this.newPassword)
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
          });
    } else {
      this.dialogService.message("알림", "입력한 정보를 확인해주세요.");
    }
  }
}
    