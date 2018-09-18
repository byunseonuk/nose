import { Component, OnInit } from "@angular/core";
import { Appservice } from '../../service/app.service';
import { TransactionService } from "../../service/transaction.service";
import { DialogService } from "../../service/dialog-message/dialog-message.service";
import {MdDialog, MdDialogConfig, MdDialogRef} from "@angular/material";
import { ShopService } from "../../service/shop.service";

@Component({
  selector: 'changestatus-form',
  templateUrl: './changestatus-form.html',
  //styleUrls: ['./orderinfo.scss']
})
 
export class ChangeStatusForm extends OnInit{
  invoiceId;
  invoice;
  shop;
  selectedStatus;
  statusList;
  constructor(private appservice:Appservice,
              private shopService:ShopService,
              private trancationService:TransactionService,
              private dialogService:DialogService,
              public dialogRef: MdDialogRef<ChangeStatusForm>,
              private mdDialog: MdDialog){
    super();
  }
  ngOnInit(){
    this.invoice ={
      itemList:[]
    }
    this.shop = {
      companyname:''
    }
    this.statusList = [
      {name: '주문취소', value: 'ORDER_CANCELLED'},
      {name: '배송준비', value: 'DELIVERY_PREPARE'},
      {name: '배송중', value: 'DELIVERING'},
      {name: '배송완료', value: 'DELIVERED'},
      {name: '교환요청', value: 'EXCHANGE_REQUESTED'},
      {name: '교환완료', value: 'EXCHANGE_DONE'},
      {name: '환불요청', value: 'REFUND_REQUESTED'},
      {name: '환불완료', value: 'REFUND_DONE'},
      {name: '주문완료', value: 'ORDER_DONE'}
    ];
    this.loadInvoice();
    if(this.invoice!=null)
      this.loadShop();
  }

  loadInvoice(){
    let params: any = {
      query: {isDeleted: false,
              _id:this.invoiceId}
    };
    this.trancationService.findOneInvoice(params)
      .subscribe((invoicesWrapper)=>{
        this.invoice = invoicesWrapper['invoice'];
        console.log(this.invoice);
      });
  }

  loadShop(){    
    let params: any = {
      query: {isDeleted: false,
              _id:this.invoice.createdBy}
    };
    this.shopService.findOne(params)
      .subscribe((shopWrapper)=>{
        this.shop = shopWrapper['shop'];
        console.log(this.shop);
      });
  }

  changeStatus(){
    this.dialogService.loadingSubject.next('spinner');

    let paymentId = this.invoice.payments[0]._id;
    console.log(paymentId);
    this.trancationService.changeStatus(paymentId, this.selectedStatus)
      .finally(() => {
        this.dialogService.loadingSubject.next('hide');
      })
      .subscribe(
        (invoiceWrapper) => {
          this.dialogService.message("알림", '변경이 완료되었습니다.');
          this.dismiss();
        },
        (err) => {
          let subTitle = '';
          switch (err.status) {
            case 400:
              subTitle = '주문 내역을 찾을 수 없습니다.';
              break;
            case 422:
              subTitle = '고객센터 또는 PG사로 문의가 필요합니다.';
              break;
            case 500:
              subTitle = '서버에러';
              break;
            default:
              subTitle = '잘못된 요청입니다.';
              break;
          }
          this.dialogService.message("알림", subTitle);
        }
      );
  }

  dismiss() {
    this.dialogRef.close();
  }
}