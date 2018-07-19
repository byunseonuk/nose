import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'proinsert',
  templateUrl: './proinsert.html',
  styleUrls: ['./proinsert.scss']
})
 
export class Proinsert extends OnInit{
  proinfo;
  
  ngOnInit(){
    this.proinfo={
      proname:'',
      price:null,
      order:null,
      detail:''
    }
  }
  category;
  test(){
    console.log("proname: "+this.proinfo['proname']);
    console.log("price: "+this.proinfo['price']);
    console.log("order: "+this.proinfo['order']);
    console.log("detail: "+this.proinfo['detail']);
  }
}