import { Component, OnInit } from "@angular/core";
import { RefundData } from '../../tmpdata/refunddata';
import { Appservice } from '../../service/app.service';

@Component({
  selector: 'ordermanage',
  templateUrl: './ordermanage.html',
  //styleUrls: ['./ordermanage.scss']
})
 
export class Ordermanage{
  datelist=[
    '2018. 07. 01',
    '2018. 06. 30'
  ];
  complete;
  refundlist = RefundData;
  checkcomplete(c){
    if(c) this.complete='완료'
    else this.complete='미완료';
    return true;
  }
}