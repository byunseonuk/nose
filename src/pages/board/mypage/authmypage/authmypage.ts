import { Component, OnInit} from '@angular/core';
import { Appservice } from '../../../../service/app.service';
import { AuthService } from 'service/auth.service';
import { DialogService } from 'service/dialog-message/dialog-message.service';

@Component({
    selector: 'authmypage',
    templateUrl: './authmypage.html',
    styleUrls:['./authmypage.css']
})
export class AuthMypage implements OnInit {
    check = 'false';
    loginInfo;
    validationText;
    testdata;
    
    constructor(private appService: Appservice,
                private authService: AuthService,
                private dialogService: DialogService){
    }
    ngOnInit(){
        this.appService.user.identifier;
        this.loginInfo = {
            identifier: '',
            password: ''
        };
        this.validationText = '';
    }


    login() {
        this.dialogService.loadingSubject.next('spinner');
        console.log("아이디는" + this.loginInfo['identifier']);

        this.authService.shoplogin(this.appService.user.identifier, this.loginInfo['password'])
        .finally(() => {
            this.dialogService.loadingSubject.next('hide');
        })
        .subscribe(
            (userWrapper) => {
            if(userWrapper['user']){
                if(userWrapper['user'].role != '관리자') {
                this.dialogService.message("알림", "관리자만 접속 할수 있는 공간 입니다.");
                } else if(userWrapper['user'].isDeleted) {
                this.dialogService.message("알림", "비활성화된 계정입니다. 다른 관리자에게 요청해주세요.");
                } else {
                    this.check = "True";
                }
            } else if(!userWrapper['user']){
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
    
    }
}