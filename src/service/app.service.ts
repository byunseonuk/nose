import { Injectable } from '@angular/core';
import { STRING_TYPE } from '@angular/compiler/src/output/output_ast';
import { EventEmitter } from '@angular/common/src/facade/async';
@Injectable()
export class Appservice {
  constructor() { }

  get user(): any {
    let user = localStorage.getItem('nosework_user');

    try {
      user = JSON.parse(user);
      return user;
    } catch (e) {
      return null;
    }
  };

  set user(_user) {
    if (_user)
      localStorage.setItem('nosework_user', JSON.stringify(_user));
    else
      localStorage.removeItem('nosework_user');
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

  setlog(id){
    if(id)
      localStorage.setItem('id',id);
  }
  getlog(){
    let id = localStorage.getItem('id');
    try{
      return id;
    } catch(e){ 
      return null;
    }
  }

  setplace(place){
    if(place)
      localStorage.setItem('writenotice',JSON.stringify(place));
  }

  getplace(){
    let place = localStorage.getItem('place');
    try{
      return JSON.parse(place);
    } catch(e){
      return null;
    }
  }

}
