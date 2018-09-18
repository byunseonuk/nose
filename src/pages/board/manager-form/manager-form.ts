import { Component, OnInit} from '@angular/core';
import { TestData } from '../mock-testdata';
import { ShopService } from '../../../service/shop.service';
import { Appservice } from '../../../service/app.service';
import { DialogService } from '../../../service/dialog-message/dialog-message.service';


@Component({
  selector: 'manager-form',
  templateUrl: './manager-form.html',
  styleUrls:['./manager-form.css']
})
export class ManagerForm implements OnInit {

  testdata = TestData;
  shopId;
  shop;
  managerInfo;
  constructor(private shopService:ShopService,
              private appService:Appservice,
              private dialogService:DialogService){
   }
  ngOnInit(){
    this.managerInfo = {
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
    }
    this.shopService.findOne({query:{_id:this.appService.shop._id}})
      .subscribe((shopWrapper)=>{
        this.shop = shopWrapper['shop'];
        if(shopWrapper['shop'].managerInfo)
          this.managerInfo = shopWrapper['shop'].managerInfo;
      });
  }

  submit(){
    let subTitle='';
    this.shop['managerInfo'] = this.managerInfo;
    this.shopService.updateManager(this.shop)
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