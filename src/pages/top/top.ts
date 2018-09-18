import { Component,OnInit} from "@angular/core";
import { DialogService } from "../../service/dialog-message/dialog-message.service";
import { AuthService } from "../../service/auth.service";
import { Appservice } from "../../service/app.service";
@Component({
  selector: 'top',
  templateUrl: './top.html',
  //styleUrls: ['./top.scss']
})
 
export class Top {
  auth;
  name='';
  constructor(private dialogService: DialogService,
              private authService: AuthService,
              private appService: Appservice){}
  ngOnInit(){
    if(this.appService.shop!=null&&this.appService.shop.role==='관리자')
      this.auth=true;
    else
      this.auth=false;
    if(this.appService.shop!=null)
      this.name = this.appService.shop.companyname;
  }

  logout(){
    this.dialogService.loadingSubject.next('spinner');

    this.authService.logout()
      .finally(() => {
        this.dialogService.loadingSubject.next('hide');
      })
      .subscribe(
        () => {
          this.appService.shop = null;
          this.appService.token = null;
          this.appService.sendEvent('logout');
        },
        (err) => {
          this.dialogService.message("알림", '잘못된 요청입니다.');
        }
      )
  }
}