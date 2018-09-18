import { Component, OnInit } from "@angular/core";
import { Appservice } from '../../../service/app.service';
import { TransactionService } from "../../../service/transaction.service";
import { MdDialogRef } from "@angular/material";
import { DialogService } from "../../../service/dialog-message/dialog-message.service";
@Component({
  selector: './exchangereturn-form',
  templateUrl: './exchangereturn-form.html'
})
export class ExchangeReturn extends OnInit {
  constructor(private appservice:Appservice,
              private transactionService:TransactionService,
              public dialogRef: MdDialogRef<ExchangeReturn>,
              private dialogService:DialogService){
    super();
  }
  invoiceId;
  invoice;
  exchangerefund;
  ngOnInit(){
    this.getInvoice();
  }

  getInvoice(){
    this.transactionService.findOneInvoice(
      {query:{_id: this.invoiceId,
              isDeleted: false}})
      .subscribe((invoiceWrapper)=>{
        this.invoice = invoiceWrapper['invoice'];
        console.log(this.invoice);
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
         this.dialogService.message("알림", subTitle);
      });
  }

  exchangereturnRequest(){
    let subTitle;
    this.transactionService.exchangereturnRequest(this.appservice.shop._id, this.invoiceId, this.exchangerefund)
      .subscribe(()=>{
            if(this.exchangerefund=='EXCHANGE_REQUESTED')
              subTitle = '성공적으로 교환요청 되었습니다.';
            else if(this.exchangerefund=='REFUND_REQUESTED')
              subTitle = '성공적으로 반품요청 되었습니다.';
            this.dialogService.message("알림", subTitle);
            this.dismiss();
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

  dismiss() {
    this.dialogRef.close();
  }
}