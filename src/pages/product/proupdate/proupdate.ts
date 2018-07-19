import { Component, OnInit, Input } from "@angular/core";
import { TmpProduct } from '../../../tmpdata/tmprocduct';
@Component({
  selector: 'proupdate',
  templateUrl: './proupdate.html',
  styleUrls: ['./proupdate.scss']
})
 
export class Proupdate extends OnInit{
  @Input() updatepro:TmpProduct;
  ngOnInit(){
  }
  category;
  test(){
    console.log("proname: "+this.updatepro['proname']);
    console.log("price: "+this.updatepro['price']);
    console.log("order: "+this.updatepro['order']);
    console.log("detail: "+this.updatepro['detail']);
  }
}