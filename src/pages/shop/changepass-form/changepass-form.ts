import { Component, OnInit } from "@angular/core";
import { ShopService } from "../../../service/shop.service";
import { AuthService } from "../../../service/auth.service";
import { MdDialogRef } from "@angular/material";
import { DialogService } from "../../../service/dialog-message/dialog-message.service";

@Component({
  selector: 'changepass-form',
  templateUrl: './changepass-form.html'
})

export class ChangePassForm extends OnInit{
  shopId;
  shop;
  newPassword='';
  newPasswordcheck='';
  constructor(private shopService:ShopService,
              private authService:AuthService,
              private dialogService:DialogService,
              private dialogRef:MdDialogRef<ChangePassForm>){
    super();
  }

  ngOnInit(){
    this.shop={
      companyname:''
    }
    this.loadShop();
  }

  loadShop(){
    this.shopService.findOne({query:{_id:this.shopId}})
      .subscribe((shopWrapper)=>{
        this.shop = shopWrapper['shop'];
      });
  }

  submit(){
    let subTitle = '';
    this.authService.shopChangePass(this.shopId,this.newPassword)
      .finally(()=>{
        this.dialogService.loadingSubject.next('hide');
      })
      .subscribe(()=>{
        subTitle='변경완료';
        this.dialogService.message("알림", subTitle);
        this.dialogRef.close();
      },
      (err) => {
        switch (err.status) {
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
  dismiss(){
    this.dialogRef.close();
  }
}