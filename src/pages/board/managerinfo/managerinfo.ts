import { Component, OnInit} from '@angular/core';
import { TestData } from '../mock-testdata';
import { Appservice } from '../../../service/app.service';
import { DialogService } from '../../../service/dialog-message/dialog-message.service';
import { UserService } from '../../../service/user.service';


@Component({
    selector: 'managerinfo',
    templateUrl: './managerinfo.html',
    styleUrls: ['./managerinfo.css']
})
export class ManagerInfo implements OnInit {
    managerInfo;
    constructor(private appService: Appservice,
                private userService: UserService,
                private dialogService: DialogService){}
    ngOnInit(){
        this.appService.user;

        this.managerInfo ={
            manager1:{
              name:'',
              tel:'',
              email:'',
              phone:''
            },
            manager2:{
              name:'',
              tel:'',
              email:'',
              phone:''
            },
            noseworkmanager:{
              name:'',
              tel:'',
              email:'',
              phone:''
            }
          };
        console.log(this.appService.user);
    }


    update() {
          this.dialogService.loadingSubject.next('spinner');
    
          this.appService.user['managerInfo'] = this.managerInfo;
    
          this.userService.update(this.appService.user)
            .finally(() => {
              this.dialogService.loadingSubject.next('hide');
            })
            .subscribe(
              (data) => {
                
              },
              (err) => {
                let subTitle = '';
                switch (err.status) {
                  case 409:
                    subTitle = '이미 사용중인 닉네임입니다.';
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