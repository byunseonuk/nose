import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from '../../../service/product.service';
import { DialogService } from '../../../service/dialog-message/dialog-message.service';
import {MdDialogRef} from "@angular/material";
import { Product } from '../product';
@Component({
  selector: 'product-detail',
  templateUrl: './product-detail.html'
})
export class ProductDetail extends OnInit{
  product;
  constructor(private dialogService:DialogService,
              private productservice:ProductService,
              public dialogRef: MdDialogRef<ProductDetail>){
    super();
  }
  ngOnInit(){

  }
  dismiss(){
    this.dialogRef.close();
  }
}