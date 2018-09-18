declare var _;
import { Component, OnInit } from "@angular/core";
import { Appservice } from '../../service/app.service';
import { TransactionService } from "../../service/transaction.service";
import { ShopService } from "../../service/shop.service";
import { DialogService } from "../../service/dialog-message/dialog-message.service";
import {MdDialog, MdDialogConfig, MdDialogRef} from "@angular/material";
import { ChangeStatusForm } from "../changestatus-form/changestatus-form";

@Component({
  selector: 'exchangerefundmanage',
  templateUrl: './exchangerefundmanage.html',
  //styleUrls: ['./orderinfo.scss']
})
 
export class ExchangeRefundManage extends OnInit{
  options = {
    rows: [],
    selected: null,
    headerHeight: "60px",
    footerHeight: "100px",
    rowHeight: "80px",
    bodyHeight: "640px",
    limit: 8,
    count: 0,
    page: 1,
    sortAscending: 'icon-down',
    sortDescending: 'icon-up',
    pagerLeftArrow: 'prev1',
    pagerRightArrow: 'next1',
    pagerPrevious: 'prevEnd',
    pagerNext: 'nextEnd'
  };
  shopList=[];
  searchKeyword;
  config: MdDialogConfig = new MdDialogConfig();
  dialogProductRef: MdDialogRef<ChangeStatusForm>;
  constructor(private appservice:Appservice,
              private trancationService:TransactionService,
              private shopService:ShopService,
              private dialogService:DialogService,
              private mdDialog: MdDialog){
    super();
  }
  ngOnInit(){

    this.findInvoice({page: this.options.page});
  }


  findInvoice(event){
    this.options.page = event.page;

    let skip = (this.options.page - 1) * this.options.limit;
    let params: any = {
      query: {isDeleted: false,
              $and:[{$or:[{refundRequestedAt: {$exists: true}},
                    {exchangeRequestedAt: {$exists: true}},
                    {refundDoneAt: {$exists: true}},
                    {exchangeDoneAt: {$exists: true}}]}]
              
              },
      limit: this.options.limit,
      skip: skip,
      sort: {createdAt: -1}
    };

    if(this.searchKeyword&&this.searchKeyword!=''){
      let param:any ={
        query:{ isDeleted:false,
                companyname:{$regex:".*"+this.searchKeyword+".*"}
        }
      }
      this.shopService.find(param)
        .subscribe((shopWrapper)=>{
          this.shopList = shopWrapper['shops'];
        });

      if(this.shopList.length>0){
        params.query['$and'].push({$or:[]});
        console.log(params.query['$and'][1]);
        for(let shop of this.shopList){ 
          params.query['$and'][1].push({owner:shop._id});
         }
      }
    }

    this.trancationService.findInvoice(params)
      .subscribe((invoicesWrapper)=>{
        _.forEach(invoicesWrapper['invoices'], (invoice, index) => {
          invoice['no'] = skip + index + 1;
          switch(invoice.status){
            case 'PAYMENT_PENDING':
              invoice['translateStatus'] = '결제대기';
              break;
            case 'PAYMENT_FAILED':
              invoice['translateStatus'] = '결제실패';
              break;
            case 'PAYMENT_DONE':
              invoice['translateStatus'] = '결제완료';
              break;
            case 'ORDER_CANCELLED':
              invoice['translateStatus'] = '주문취소';
              break;
            case 'DELIVERY_PREPARE':
              invoice['translateStatus'] = '배송준비';
              break;
            case 'DELIVERING':
              invoice['translateStatus'] = '배송중';
              break;
            case 'DELIVERED':
              invoice['translateStatus'] = '배송완료';
              break;
            case 'EXCHANGE_REQUESTED':
              invoice['translateStatus'] = '교환요청';
              break;
            case 'EXCHANGE_DONE':
              invoice['translateStatus'] = '교환완료';
              break;
            case 'REFUND_REQUESTED':
              invoice['translateStatus'] = '환불요청';
              break;
            case 'REFUND_DONE':
              invoice['translateStatus'] = '환불완료';
              break;
            case 'ORDER_DONE':
              invoice['translateStatus'] = '주문완료';
              break;
          }
          switch(invoice.paymentType){
            case 'card':
              invoice['translatePaymentType'] = '신용카드';
              break;
            case 'trans':
              invoice['translatePaymentType'] = '실시간 계좌이체';
              break;
            case 'bank':
              invoice['translatePaymentType'] = '무통장 입금';
              break;
          }
          let parma :any ={
            query:{  isDeleted:false,
                      _id:invoice.owner}
          }
          this.shopService.findOne(parma)
            .subscribe((shopWrapper)=>{
              invoice['ownerCompanyName'] = shopWrapper['shop'].companyname;
            });
        });
        this.options['rows'] = invoicesWrapper['invoices'];
        this.options['count'] = invoicesWrapper['total'];
      },
      (err) => {
        let subTitle = '';
        switch (err.status) {
          case 500:
            subTitle = '서버에러';
            break;
          default:
            subTitle = '잘못된 요청입니다.';
            break;
        }
      });
  }

  openChangeStatusForm(invoice){
    this.dialogService.formModal(this.config);
    this.config.disableClose = true;

    this.dialogProductRef = this.mdDialog.open(ChangeStatusForm, this.config);
    if (invoice)
      this.dialogProductRef.componentInstance.invoiceId = invoice._id;

    this.dialogProductRef.afterClosed()
      .subscribe((result) => {
        
      });
  }
}