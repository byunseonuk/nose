import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from '../../../service/product.service';
import { DialogService } from '../../../service/dialog-message/dialog-message.service';
import {MdDialogRef} from "@angular/material";
import { Product } from '../product';
@Component({
  selector: 'productform',
  templateUrl: './productform.html'
})
 
export class ProductForm extends OnInit{
  product;
  productId;
  categorylist=[
    { cid:'puppytoy' , cname:'강아지장난감' },
    { cid:'puppyfood' , cname:'강아지사료' },
    { cid:'cattoy' , cname:'고양이장난감' },
    { cid:'catfood' , cname:'고양이사료' }
  ];
  constructor(private productservice:ProductService,
              private dialogService:DialogService,
              public dialogRef: MdDialogRef<ProductForm>){
    super();
  }
  ngOnInit(){
      this.product = {
        productname: '',
        summary: '',
        soldOut: false,
        price: null,
        category:'',
        detail:'',
        displayOrder:null
      };
      if(this.productId)
        this.loadproduct();
  }
  test(){
    console.log(this.product.category);
  }
 
  submit(){
    if(this.productId)
      this.update_product();
    else
      this.create_product();

  }

  create_product(){
    this.productservice.productcreate(this.product)
      .finally(()=>{

      }).subscribe(()=>{
        this.dismiss();
      });
  }
 
  update_product(){
    this.productservice.productupdate(this.product)
      .finally(()=>{

      }).subscribe(()=>{
        this.dismiss();
      });
  }

  loadproduct(){
    this.productservice.findOne({
      query: {_id: this.productId},
      populate: ['photos']
    })
      .subscribe(
        (productWrapper) => {
          this.product = productWrapper['shopProduct'];
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
        }
      );
  }

  dismiss(can?) {
    if(can==='cancel')
      this.dialogRef.close({category:'nowcategory'});
    else
      this.dialogRef.close({category:this.product.category});
  }
}