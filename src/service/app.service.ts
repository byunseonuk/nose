import { Injectable } from '@angular/core';
import { STRING_TYPE } from '@angular/compiler/src/output/output_ast';
@Injectable()
export class Appservice {
  constructor() { }

  setorderList(orderList){
    if(orderList)
      localStorage.setItem('orderlist',JSON.stringify(orderList));
  }
  getorderlist():any {
    let orderlist = localStorage.getItem('orderlist');
    try{
      return JSON.parse(orderlist);
    } catch(e){
      return null;
    }
  }
  setnotice(notice){
    if(notice)
      localStorage.setItem('notice',JSON.stringify(notice));
  }
  getnotice(){
    let notice = localStorage.getItem('notice');
    try{
      return JSON.parse(notice);
    } catch(e){
      return null;
    }
  }

  setordercheck(ordercheck){
    if(ordercheck)
      localStorage.setItem('Ordercheck',JSON.stringify(ordercheck));
  }
  getordercheck(){
    let ordercheck = localStorage.getItem('Ordercheck');
    try{
      return JSON.parse(ordercheck);
    } catch(e){
      return null;
    }
  }

  setrefundreq(refund){
    if(refund)
      localStorage.setItem('refund',JSON.stringify(refund));
  }
  getrefundreq(){
    let refund = localStorage.getItem('refund');
    try{
      return JSON.parse(refund);
    } catch(e){
      return null;
    }
  }

  setwritenotice(writenotice){
    if(writenotice)
      localStorage.setItem('writenotice',JSON.stringify(writenotice));
  }
  getwritenotice(){
    let writenotice = localStorage.getItem('writenotice');
    try{
      return JSON.parse(writenotice);
    } catch(e){
      return null;
    }
  }


}
