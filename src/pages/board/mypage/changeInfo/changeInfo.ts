import { Component, OnInit, HostListener} from '@angular/core';
import { Appservice } from '../../../../service/app.service';
import { AuthService } from '../../../../service/auth.service';
import { DialogService } from '../../../../service/dialog-message/dialog-message.service';
import { ShopService } from '../../../../service/shop.service';


@Component({
    selector: 'changeInfo',
    templateUrl: './changeInfo.html',
    styleUrls:['./changeInfo.scss']
})
export class ChangeInfo extends OnInit{
  shop;
  companyaddr;
  constructor(private appService:Appservice,
              private authService:AuthService,
              private dialogService:DialogService,
              private shopService:ShopService){
    super();
  }
  ngOnInit(){
    this.shop = {
      companyname: '',
      role:'',
      tell:'',
      email:''
    };

    this.companyaddr = {
        zipCode: '',
        address: '',
        detailAddress: ''
    };
    this.shopService.findOne({
      query: {_id: this.appService.shop._id}
    }).subscribe(
      (shopWrapper) => {
        console.log(shopWrapper['shop']);
        this.shop = shopWrapper['shop'];
        if(shopWrapper['shop'].companyaddr){
          this.companyaddr = shopWrapper['shop'].companyaddr;
        }
      },
      (err) => {
        let subTitle = '';
        switch (err.status) {
          case 400:
            subTitle = '사용자를 찾을 수 없습니다.';
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

      console.log(this.shop);
  }

  change(){
    console.log(this.shop);
    let subTitle='';
    this.shop['companyaddr']  = this.companyaddr;
    console.log(this.shop);
    this.shopService.update(this.shop)
      .finally(() => {
      })
      .subscribe(
        () => {
          subTitle = '정보가 변경되었습니다.';
          this.dialogService.message("알림", subTitle);
        },
        (err) => {
          switch(err.status){
            case 400:
              subTitle = '입력한 정보를 확인해주세요.';
              break;
            case 500:
              subTitle = '서버에러';
              break;
            default:
              break;
          }
            this.dialogService.message("알림", subTitle);
        });
  }
}
    