import { Component } from '@angular/core';
import { TPS } from '../../tmpdata/tmpproductdata';
import { OrderProduct } from '../../tmpdata/orderproduct';
import { OrdercheckF } from '../../tmpdata/ordercheckf';

import { Appservice } from '../../service/app.service';
@Component({
  selector: 'product',
  templateUrl: './product.html',
  styleUrls: ['./product.scss']
})

export class Product {
  constructor(private appservice:Appservice){}
  nose1 = [];
  order:OrderProduct;
  products = TPS;
  nose111 = '';
  ordercheck:OrdercheckF;


  test(name, price) {
    if (this.nose111 == '') return;
    this.order = new OrderProduct();
    this.order.name = name;
    this.order.amount = parseInt(this.nose111);
    this.order.price = price;
    this.nose1.push(this.order);

  }
  nose11(event: any) {
    this.nose111 = event.target.value;
  }
  del_order(idx: any) {
    this.nose1.splice(idx, 1);
  }
  pay(){
    this.ordercheck = new OrdercheckF;
    this.ordercheck.name='업체1';
    this.ordercheck.orderp=this.nose1;
    this.ordercheck.paymentdate= new Date().toLocaleDateString();
    this.ordercheck.paymentstate='입금전';
    this.ordercheck.totalprice = 1000000;
    this.appservice.setordercheck(this.ordercheck);
    this.appservice.setorderList(this.nose1);
  }
}