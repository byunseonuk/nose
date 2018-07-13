import { Component, OnInit } from "@angular/core";
import { RefundF } from '../../../tmpdata/refundF';

import { Appservice } from '../../../service/app.service';
@Component({
  selector: 'refundrequest',
  templateUrl: './refundrequest.html',
  styleUrls: ['../orderinfo.scss']
})
 
export class Refundrequest extends OnInit {
  constructor(private appservice:Appservice){
    super();
  }
  orderlist=[];
  refundlist=[];
  refund;
  ngOnInit(){
    this.orderlist = this.appservice.getorderlist();
    scrollTo(0,0);
    this.refund = new RefundF();
    this.refund.refundcause = '';
  }
  refundp(e,order,index){
    if(e.target.checked){
      this.refundlist.push(order);
    }else {
      this.refundlist.splice(index,1);
    }
  }
  refundreq(){
    this.refund.name="업체";
    this.refund.refundproduct=this.refundlist;
    this.refund.complete=false;
    this.refund.date = new Date().toLocaleDateString;
    console.log(this.refund.refundcause);
    this.appservice.setrefundreq(this.refund);
  }
}