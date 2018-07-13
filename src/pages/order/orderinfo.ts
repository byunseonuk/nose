import { Component, OnInit } from "@angular/core";
import { Appservice } from '../../service/app.service';

@Component({
  selector: 'orderinfo',
  templateUrl: './orderinfo.html',
  styleUrls: ['./orderinfo.scss']
})
 
export class Orderinfo extends OnInit{
  constructor(private appservice:Appservice){
    super();
  }
  orderlist=[];
  ngOnInit(){
    this.orderlist = this.appservice.getorderlist();
    scrollTo(0,0);
  }
}