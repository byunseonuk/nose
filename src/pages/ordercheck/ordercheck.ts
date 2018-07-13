import { Component, OnInit } from "@angular/core";
import { OrdercheckF } from '../../tmpdata/ordercheckf';

import { OrderCheckData } from '../../tmpdata/ordercheckdata';

import { Appservice } from '../../service/app.service';

@Component({
  selector: 'ordercheck',
  templateUrl: './ordercheck.html',
  styleUrls: ['./ordercheck.scss']
})
 
export class Ordercheck extends OnInit{
  constructor(private appservice:Appservice){
    super();
  }
  ordercheck;
  orderchecklist=OrderCheckData;
  ngOnInit(){
    this.ordercheck = this.appservice.getordercheck();
  }
}