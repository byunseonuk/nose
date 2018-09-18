import { Injectable } from '@angular/core';
import { STRING_TYPE } from '@angular/compiler/src/output/output_ast';
import { EventEmitter } from '@angular/common/src/facade/async';
@Injectable()
export class Appservice {
  constructor() { }

  get shop(): any {
    let shop = localStorage.getItem('nosework_shop');

    try {
      shop = JSON.parse(shop);
      return shop;
    } catch (e) {
      return null;
    }
  };

  set shop(_shop) {
    if (_shop)
      localStorage.setItem('nosework_shop', JSON.stringify(_shop));
    else
      localStorage.removeItem('nosework_shop');
  };

  get token(): any {
    let token = localStorage.getItem('nosework_token');

    try {
      token = JSON.parse(token);
      return token;
    } catch (e) {
      return null;
    }
  };

  set token(_token: any) {
    if (_token)
      localStorage.setItem('nosework_token', JSON.stringify(_token));
    else
      localStorage.removeItem('nosework_token');
  };

  appEvent: EventEmitter<any> = new EventEmitter();

  sendEvent(eventName: string, data?: any) {
    let eventData: {name: string, data?: any} = {name: eventName};
    if (data) eventData.data = data;
    this.appEvent.emit(eventData);
  }

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



}
