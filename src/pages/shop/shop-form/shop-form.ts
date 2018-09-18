import { Component, OnInit } from "@angular/core";
import { AuthService } from '../../../service/auth.service';
import { DaumMap } from "../../daum-map/daum-map";
import { DialogService } from "..././../service/dialog-message/dialog-message.service";
import {MdDialog, MdDialogConfig, MdDialogRef} from "@angular/material";
import { ShopService } from "../../../service/shop.service";

declare var _;
@Component({
  selector: 'shop-form',
  templateUrl: './shop-form.html',
  //styleUrls: ['./signup.scss']
})
 
export class ShopForm extends OnInit{
  config: MdDialogConfig = new MdDialogConfig();
  dialogDaumMapRef: MdDialogRef<DaumMap>;

  shopId;
  shop; 
  companyaddr;
  testhttp;
  membership;
  membershiplist=[
    { level:'S 등급', sale: 0.15},
    { level:'A 등급', sale: 0.12},
    { level:'B 등급', sale: 0.10},
    { level:'C 등급', sale: 0.07},
    { level:'D 등급', sale: 0.05}
  ];

  constructor(private authservice:AuthService,
              private dialogService:DialogService,
              private mdDialog: MdDialog,
              private shopService:ShopService,
              public dialogRef: MdDialogRef<ShopForm>){
    super();
  }
  ngOnInit(){
    this.shop= {
      identifier:'',
      password:'',
      companyname:'',
      tel:'',
      email:'',
      managerInfo:{
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
    };

    this.companyaddr={
      zipCode:'',
      address:'',
      detailAddress:''
    };

    this.membership={
      level:'',
      sale:0
    };
    if(this.shopId){
      this.shopService.findOne({query:{_id:this.shopId}})
        .subscribe((shopWrapper)=>{
          this.shop = shopWrapper['shop'];
          if(shopWrapper['shop'].membership){
            this.membership = shopWrapper['shop'].membership;
          }
          if(shopWrapper['shop'].companyaddr)
            this.companyaddr = shopWrapper['shop'].companyaddr;
        });
    }

    
  }

  submit(){
    if(this.shopId)
      this.update();
    else 
      this.create();
  }

  create(){
    this.shop['companyaddr'] = this.companyaddr;
    this.shop['membership'] = this.membership;
    this.authservice.shopregister(this.shop)
      .finally(() => {
        this.dialogService.loadingSubject.next('hide');
      })
      .subscribe(
        () => {
          this.dialogRef.close();
        },
        (err) => {
          let subTitle = '';
          switch (err.status) {
            case 400:
              subTitle = '입력한 정보를 확인해주세요.';
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

  update(){
    this.shop['companyaddr'] = this.companyaddr;
    this.shop['membership'] = this.membership;
    this.authservice.update(this.shop)
      .finally(() => {
        this.dialogService.loadingSubject.next('hide');
      })
      .subscribe(
        () => {
          this.dialogRef.close();
        },
        (err) => {
          let subTitle = '';
          switch (err.status) {
            case 400:
              subTitle = '입력한 정보를 확인해주세요.';
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

  openDaumMapForm(){
    this.dialogService.daumMapModal(this.config);
    this.config.disableClose = true;

    this.dialogDaumMapRef = this.mdDialog.open(DaumMap, this.config);

    this.dialogDaumMapRef.afterClosed()
      .subscribe((result) => {
        if(result && result.place){
          if(result.place.zipcode){
            this.companyaddr.zipCode = result.place.zipcode;
            
          }
        
          this.companyaddr.address = result.place.address;
        }
      });
  }
  test(){
    console.log(this.membership);
  }

  dismiss(){
    this.dialogRef.close();
  }

}