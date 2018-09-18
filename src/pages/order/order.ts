import { Component, OnInit } from "@angular/core";
import { Appservice } from '../../service/app.service';
import { TransactionService } from "../../service/transaction.service";
import { DialogService } from "../../service/dialog-message/dialog-message.service";
import {MdDialog, MdDialogConfig, MdDialogRef} from "@angular/material";
import { ExchangeReturn } from "./exchangereturn-form/exchangereturn-form";

@Component({
  selector: 'order',
  templateUrl: './order.html',
  //styleUrls: ['./orderinfo.scss']
})
 
export class Order extends OnInit{
  config: MdDialogConfig = new MdDialogConfig();
  dialogExchangeReturnRef: MdDialogRef<ExchangeReturn>;
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
  mode='order';
  constructor(private appservice:Appservice,
              private trancationService:TransactionService,
              private dialogService:DialogService,
              private mdDialog: MdDialog){
    super();
  }
  orderlist=[];
  ngOnInit(){
    this.findInvoice({page: this.options.page});
  }

  findInvoice(event){
    this.options.page = event.page;
    let skip = (this.options.page - 1) * this.options.limit;
    let params: any = {
      query: {isDeleted: false,
              owner: this.appservice.shop._id},
      limit: this.options.limit,
      skip: skip,
      sort: {createdAt: -1}
    };
    if(this.mode=='order'){
      params.query['$and'] = [];
      params.query['$and'].push({refundRequestedAt: {$exists: false}});
      params.query['$and'].push({exchangeRequestedAt: {$exists: false}});
    }
    if(this.mode=='exchangereturn'){
      params.query['$or'] = [];
      params.query['$or'].push({refundRequestedAt: {$exists: true}});
      params.query['$or'].push({exchangeRequestedAt: {$exists: true}});
    }
    this.trancationService.findInvoice(params)
      .subscribe((invoicesWrapper)=>{
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

  
  openReturnRefundForm(invoice){
    this.dialogService.formModal(this.config);
    this.config.disableClose = true;

    this.dialogExchangeReturnRef = this.mdDialog.open(ExchangeReturn, this.config);
    if (invoice)
      this.dialogExchangeReturnRef.componentInstance.invoiceId = invoice._id;

    this.dialogExchangeReturnRef.afterClosed()
      .subscribe((result) => {
        
      });
  }
  
  change(mode){
    this.mode = mode;
    this.findInvoice({page: this.options.page});  

  }

  ReturnRefundCancel(){

  }
}