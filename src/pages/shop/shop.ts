import { Component, OnInit } from "@angular/core";
import { ShopService } from "service/shop.service";
import { DialogService } from "service/dialog-message/dialog-message.service";
import {MdDialog, MdDialogConfig, MdDialogRef} from "@angular/material";
import { ShopForm } from "./shop-form/shop-form";
import { ChangePassForm } from "./changepass-form/changepass-form";

declare var _;
@Component({
  selector: 'shop',
  templateUrl: './shop.html',
  //styleUrls: ['./signup.scss']
})
 
export class Shop extends OnInit{
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
  config: MdDialogConfig = new MdDialogConfig();
  dialogShopRef: MdDialogRef<ShopForm>;
  dialogShopPassRef: MdDialogRef<ChangePassForm>;
  
  searchKeyword;
  constructor(private shopService:ShopService,
              private dialogService:DialogService,
              private mdDialog: MdDialog){
    super();
  }

  ngOnInit(){
    this.findShop({page: this.options.page});
  }

  findShop(event){
    this.options.page = event.page;

    let skip = (this.options.page - 1) * this.options.limit;
    let params: any = {
      query: {isDeleted: false},
             
      limit: this.options.limit,
      skip: skip,
      sort: {createdAt: -1}
    };

    if (this.searchKeyword){
      params.query['$or'] = [];
      params.query['$or'].push({companyname: {$regex: ".*" + this.searchKeyword + ".*"}});
    }

    this.shopService.find(params)
      .subscribe((shopWrapper)=>{
        this.options['rows'] = shopWrapper['shops'];
      });
  }

  openChangeShopForm(shop?){
    this.dialogService.resizeModal(this.config);
    this.config.disableClose = true;

    this.dialogShopRef = this.mdDialog.open(ShopForm, this.config);
    if(shop)
      this.dialogShopRef.componentInstance.shopId = shop._id;

    this.dialogShopRef.afterClosed()
      .subscribe(result => {
        this.findShop({page: this.options.page});
      });
  }

  openChangePassForm(shop){
    this.dialogService.resizeModal(this.config);
    this.config.disableClose = true;

    this.dialogShopPassRef = this.mdDialog.open(ChangePassForm, this.config);
    if(shop)
      this.dialogShopPassRef.componentInstance.shopId = shop._id;

    this.dialogShopPassRef.afterClosed()
      .subscribe(result => {
        this.findShop({page: this.options.page});
      });
  }

  
}