import {MdDialog, MdDialogConfig, MdDialogRef} from "@angular/material";
import { Component, OnInit } from '@angular/core';
import { TPS } from '../../tmpdata/tmpproductdata';
import { OrderProduct } from '../../tmpdata/orderproduct';
import { OrdercheckF } from '../../tmpdata/ordercheckf';
import {ProductForm} from '../product/product-form/productform';
import { Appservice } from '../../service/app.service';
import { ProductService } from '../../service/product.service';
import {DialogService} from "../../service/dialog-message/dialog-message.service";
import { ProductDetail } from "./product-detail/product-detail";

@Component({
  selector: 'product',
  templateUrl: './product.html'
})

export class Product extends OnInit{
  auth;
  order={
    itemList:[],
    //products:[],   서버에서 추가해줌
    totalPrice:0,
    totaldiscountPrice:0,
    totaloriginalPrice:0,
    totalQuantity:0
  }
  
  products;
  nose111 = 0

  
  detail;
  displaymodal=false;
  displaylist=true;
  nowcategory='puppytoy';
  // 
  dialogProductRef: MdDialogRef<ProductForm>;
  config: MdDialogConfig = new MdDialogConfig();
  dialogProductDetailRef: MdDialogRef<ProductDetail>;
  options = {
    rows: [],
    selected: null,
    limit: 8,
    count: 0,
    page: 1,
  };
  constructor(private mdDialog: MdDialog,
              private appservice:Appservice,
              private productservice:ProductService,
              private dialogService:DialogService){
    super();
  }
  ngOnInit(){
    if(this.appservice.shop.role==='관리자'){
      this.auth= true;
    }else {
      this.auth= false;
    }
    this.showpro(this.nowcategory);
    // this.order = (this.appservice.getorderlist()!=null)?this.appservice.getorderlist():this.order;
  }
  
  //
  cart(item) {
    if (this.nose111<= 0) return;
    let orderitem={
      product:null,
      quantity:null,
      originalprice:null,
      saleprice:null,
      price:null,
    };
    // products
    //this.order.products.push(product._id);
    // orderitemlist
    orderitem.product = item;
    orderitem.quantity = this.nose111;
    orderitem.originalprice = item.price*this.nose111;
    orderitem.saleprice = orderitem.originalprice*this.appservice.shop.membership.sale;
    orderitem.price= orderitem.originalprice - orderitem.saleprice ;
    this.order.itemList.push(orderitem);
    this.order.totaloriginalPrice += orderitem.originalprice;
    this.order.totaldiscountPrice += orderitem.saleprice;
    this.order.totalPrice += orderitem.price;
    this.order.totalQuantity+=orderitem.quantity;
  }

  nose11(event: any) {
    this.nose111 = parseInt(event.target.value);
  }

  del_order(idx: any) {
    this.order.totalPrice-=this.order.itemList[idx].price;
    this.order.totaloriginalPrice-=this.order.itemList[idx].originalprice;
    this.order.totaldiscountPrice-=this.order.itemList[idx].saleprice;
    this.order.totalQuantity-=this.order.itemList[idx].quantity;
    this.order.itemList.splice(idx, 1);
    //this.order.products.splice(idx,1);
    
  }
  
  display_modal(detailpro){
    this.detail = detailpro;
    this.displaymodal = true;
  }

  close_modal(){
    this.displaymodal=false;
  }

  pay(){
    this.appservice.setorderList(this.order);
  }

  showpro(ca){
    this.nowcategory=ca;
    this.displaylist=true;
    let skip = 0;
    let params: any = {
      query: {isDeleted: false,
              category: ca
      },
      limit: this.options.limit,
      skip: skip,
      sort: {displayOrder: 1}
    };
    this.productservice.findList(params)
    .subscribe(
      (productsWrapper) => {

        this.options['rows'] = productsWrapper['shopProducts'];
        this.options['count'] = productsWrapper['total'];
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
      }
    );
  }

  openDetailModal(product){
    this.dialogService.productDetailModal(this.config);
    this.config.disableClose = true;

    this.dialogProductDetailRef = this.mdDialog.open(ProductDetail, this.config);
    if (product)
      this.dialogProductDetailRef.componentInstance.product = product;

    this.dialogProductDetailRef.afterClosed()
      .subscribe((result) => {
        
      });
  }
  openProductFormModel(product?) {
    this.dialogService.formModal(this.config);
    this.config.disableClose = true;

    this.dialogProductRef = this.mdDialog.open(ProductForm, this.config);
    if (product)
      this.dialogProductRef.componentInstance.productId = product._id;

    this.dialogProductRef.afterClosed()
      .subscribe((result) => {
        if(result && result.category){
          if(result.category==='nowcategory')
            this.showpro(this.nowcategory);
          else
            this.showpro(result.category);
        }
        
      });
  }
  
  productForm(product?){
    if(product)
      this.productservice.setitemid(product._id);
  }

  productRemove(product){
    this.productservice.productremove(product.id)
    .finally(()=>{})
    .subscribe((result)=>{
      if(result && result.category){
        if(result.category)
        this.showpro(result.category);
      }
    });
  }
}