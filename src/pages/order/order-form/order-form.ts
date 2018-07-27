declare var daum;
import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { Appservice } from '../../../service/app.service';
import { NgModuleCompiler } from "@angular/compiler";

import {DaumMap} from "../../daum-map/daum-map";
import {DialogService} from "../../../service/dialog-message/dialog-message.service";
import {MdDialog, MdDialogConfig, MdDialogRef} from "@angular/material";

@Component({
  selector: 'order-form',
  templateUrl: './order-form.html',
  //styleUrls: ['./order-form.scss']
})
 
export class OrderFrom extends OnInit{
  config: MdDialogConfig = new MdDialogConfig();
  dialogDaumMapRef: MdDialogRef<DaumMap>;
  invoiceId;
  invoice={
    itemList:[],
    paymentType:'',
    isDeleted:false,
    products:[],
    totalsaleprice:0,
    totalprice:0,
    totaloriginalprice:0

  }
  deliveryInfo;
  address;
  place;
  constructor(private appservice:Appservice,
              private dialogService:DialogService,
              private mdDialog: MdDialog,){
    super();
  }
  orderlist;
  ngOnInit(){
    this.orderlist = this.appservice.getorderlist();
    this.orderlist.isDeleted=false;
    console.log(this.orderlist.isDeleted);
    this.deliveryInfo = {
      addressInfo: {
        zipCode: '',
        address: '',
        detailAddress: ''
      },
      phone: null,
      name: ''
    };
    Object.assign(this.invoice,this.orderlist);
    console.log(this.invoice);
  }

  submit(){
    if(this.invoiceId)
      this.create();
    else 
      this.update();
  }
  openDaumMapForm(){
    this.dialogService.daumMapModal(this.config);
    this.config.disableClose = true;

    this.dialogDaumMapRef = this.mdDialog.open(DaumMap, this.config);

    this.dialogDaumMapRef.afterClosed()
      .subscribe((result) => {
        if(result && result.place){
          this.address = '';

          if(result.place.zipcode){
            this.address = '(' + result.place.zipcode + ') ';
            this.deliveryInfo['addressInfo'].zipCode = result.place.zipcode;
          }
          this.address += result.place.address;
          this.deliveryInfo['addressInfo'].address = result.place.address;
        }
      });
  }

  create(){
    
  }

  update(){

  }
  // searchAddress() {
  //   new daum.Postcode({
  //     oncomplete: function(data) :any{
  //         // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.

  //         // 도로명 주소의 노출 규칙에 따라 주소를 조합한다.
  //         // 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
  //         var fullRoadAddr = data.roadAddress; // 도로명 주소 변수
  //         var extraRoadAddr = ''; // 도로명 조합형 주소 변수

  //         // 법정동명이 있을 경우 추가한다. (법정리는 제외)
  //         // 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
  //         if(data.bname !== '' && /[동|로|가]$/g.test(data.bname)){
  //             extraRoadAddr += data.bname;
  //         }
  //         // 건물명이 있고, 공동주택일 경우 추가한다.
  //         if(data.buildingName !== '' && data.apartment === 'Y'){
  //            extraRoadAddr += (extraRoadAddr !== '' ? ', ' + data.buildingName : data.buildingName);
  //         }
  //         // 도로명, 지번 조합형 주소가 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
  //         if(extraRoadAddr !== ''){
  //             extraRoadAddr = ' (' + extraRoadAddr + ')';
  //         }
  //         // 도로명, 지번 주소의 유무에 따라 해당 조합형 주소를 추가한다.
  //         if(fullRoadAddr !== ''){
  //             fullRoadAddr += extraRoadAddr;
  //         }

  //         // 우편번호와 주소 정보를 해당 필드에 넣는다.
  //         this.ad.nativeElement.value = '('+data.zonecode+')'; //5자리 새우편번호 사용
  //         this.ad.nativeElement.value += fullRoadAddr;
  //         let place = {
  //           code: '',
  //           address: ''
  //         } 
  //         place.code = data.zonecode;
  //         place.address = fullRoadAddr;
  //         this.appservice.setplace(place);
  //     }
  //   }).open();

  // }  
}