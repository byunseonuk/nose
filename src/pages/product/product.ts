import { Component, OnInit } from '@angular/core';
import { TPS } from '../../tmpdata/tmpproductdata';
import { OrderProduct } from '../../tmpdata/orderproduct';
import { OrdercheckF } from '../../tmpdata/ordercheckf';

import { Appservice } from '../../service/app.service';
@Component({
  selector: 'product',
  templateUrl: './product.html',
  styleUrls: ['./product.scss']
})

export class Product extends OnInit{
  constructor(private appservice:Appservice){
    super();
  }
  ngOnInit(){
    if(this.appservice.getlog()=='admin'){
      this.auth= true;
    }else {
      this.auth= false;
    }
    this.products=TPS;
    //정렬 순위 높은순 오름차순
    this.products.sort((left,right)=>{
      if(left.order<right.order) return -1;
      else if(left.order>right.order) return 1;
      else return 0;
    });

  }
  auth;
  nose1 = [];
  order:OrderProduct;
  products;
  nose111 = '';
  ordercheck:OrdercheckF;
  totalprice=0;
  detail;
  displaymodal=false;
  displaylist=true;
  displayupdate=false;
  nowcategory=1;
  updatepro;
  test(name, price) {
    if (this.nose111 == '') return;
    this.order = new OrderProduct();
    this.order.name = name;
    this.order.amount = parseInt(this.nose111);
    this.order.price = price;
    this.totalprice+= price*parseInt(this.nose111);
    this.nose1.push(this.order);

  }
  nose11(event: any) {
    this.nose111 = event.target.value;
  }
  del_order(idx: any) {
    this.totalprice-=this.nose1[idx].price*this.nose1[idx].amount;
    this.nose1.splice(idx, 1);
    
  }
  display_modal(detailpro){
    this.detail = detailpro;
    this.displaymodal = true;
    console.log(detailpro);
    console.log(typeof(detailpro));
  }
  close_modal(){
    this.displaymodal=false;
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
  showpro(ca){
    this.nowcategory=ca;
    this.displaylist=true;
    this.displayupdate=false;
  }
  update(product){
    this.updatepro = product;
    console.log(product);
    this.displaylist=false;
    this.displayupdate=true;
  }
  
}