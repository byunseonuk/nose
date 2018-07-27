import { Component, OnInit } from "@angular/core";
import { Appservice } from '../../service/app.service';

@Component({
  selector: 'orderinfo',
  templateUrl: './orderinfo.html',
  //styleUrls: ['./orderinfo.scss']
})
 
export class Orderinfo extends OnInit{
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
  constructor(private appservice:Appservice){
    super();
  }
  orderlist=[];
  ngOnInit(){
    this.orderlist = this.appservice.getorderlist();
    scrollTo(0,0);
  }
}