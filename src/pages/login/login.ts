import { Component, OnInit } from "@angular/core";
import { Appservice } from '../../service/app.service';
import { AuthService } from "../../service/auth.service";
import { DialogService } from "../../service/dialog-message/dialog-message.service";
import { MdDialogRef, MdDialog } from "@angular/material";
@Component({
  selector: 'login',
  templateUrl: './login.html'
})
 
// export class Login extends OnInit{
//   constructor(private appservice:Appservice){
//     super();
//   }
//   log;
//   id;
//   password;
//   ngOnInit(){
//     this.log = Log;
//   }
//   login(){
    
//     for (const id of this.log) {
//       if(id.id===this.id){
//         if(id.password===this.password){
//           this.appservice.setlog(id.id);
//         }
//       }
//     }
//   }
  
// }

export class Login implements OnInit {

  loginInfo;
  validationText;

  constructor(public dialog: MdDialog,
              public dialogRef: MdDialogRef<Login>,
              private appService: Appservice,
              private authService: AuthService,
              private dialogService: DialogService) {}

  /*****************************
   *         life cycle
   *****************************/

  ngOnInit() {
    this.loginInfo = {
      identifier: '',
      password: ''
    };
    this.validationText = '';
  }

  /*****************************
   *        util functions
   *****************************/

  isValidLogin() {
   // let regExpMail = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
    let regExpPassword = /^.*(?=^.{8,12}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[*~`!^\-_+@\#$%&\=\(\)]).*$/;

   if (!this.loginInfo['password'] || this.loginInfo['password ']== '') {
      this.validationText = '비밀번호를 확인해주세요.';
      return false;
    } else if(!regExpPassword.test(this.loginInfo['password'])){
      this.validationText = '영문, 숫자, 특수문자 포함 8자 ~ 12자 이내로 입력해주세요.';
      return false;
    } else {
      return true;
    }
  }

  /*****************************
   *       helper functions
   *****************************/

  login() {
    if(this.isValidLogin()){
      this.dialogService.loadingSubject.next('spinner');
      console.log("아이디는" + this.loginInfo['identifier']);

      this.authService.shoplogin(this.loginInfo['identifier'], this.loginInfo['password'])
        .finally(() => {
          this.dialogService.loadingSubject.next('hide');
        })
        .subscribe(
          (userWrapper) => {
            if(userWrapper['shop']){
              if(userWrapper['shop'].isDeleted) {
                this.dialogService.message("알림", "비활성화된 계정입니다. 다른 관리자에게 요청해주세요.");
              } else {
                this.appService.shop = userWrapper['shop'];
                this.appService.token = userWrapper['token'];
                this.appService.sendEvent('login');
                this.dialogRef.close('login');
              }
            } else if(!userWrapper['shop']){
              this.dialogService.message("알림", "등록되지 않은 사용자입니다.");
            }
          },
          (err) => {
            let subTitle = '';
            switch (err.status) {
              case 400:
                subTitle = "아이디 또는 비밀번호를 확인해주세요.";
                break;
              case 401:
                subTitle = '등록되지 않은 사용자입니다.';
                if(err._body){
                  let message = JSON.parse(err._body).message;
                  if(message == 'WrongPassword')
                    subTitle = '비밀번호를 확인해주세요.';
                  else if(message == 'UnActivateUser')
                    subTitle = '비활성화된 계정입니다.';
                }
                break;
              case 500:
                subTitle = '서버에러';
                break;
              default:
                subTitle = '잘못된 요청입니다.';
                break;
            }
            this.dialogService.message("알림", subTitle);
          });
    } else {
      this.dialogService.message("알림", this.validationText);
    }
  }

}