import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Login } from '../pages/login/login'
import { AppComponent } from './app.component';
import { Noticelist } from '../pages/noticelist/noticelist';
import { Notice } from '../pages/notice/notice';
import { Product } from '../pages/product/product';
import { routing } from './app.routes';
import { Orderinfo } from '../pages/order/orderinfo';
import { Top } from '../pages/top/top';
import { Ordermanage } from '../pages/ordermanage/ordermanage';
import { Ordercheck } from '../pages/ordercheck/ordercheck';
import { Writenotice } from '../pages/notice/writenotice/writenotice';
import { Refundrequest } from '../pages/order/refundrequest/refundrequest';
import { FroalaEditorModule, FroalaViewModule } from 'angular2-froala-wysiwyg';
import { Appservice } from '../service/app.service';
import { Board } from '../pages/board/board';
import { Mypage } from '../pages/board/mypage/mypage';
import { ManagerInfo } from '../pages/board/managerinfo/managerinfo';
import { SalesStatus } from '../pages/board/salesstatus/salestatus';
import { ServiceCenter } from '../pages/servicecenter/servicecenter';
import { AuthMypage } from '../pages/board/mypage/authmypage/authmypage';
import { ManagerPage } from '../pages/board/ManagerPage/managerpage';
import {Request} from '../pages/servicecenter/request/request';
import {ChartsModule} from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    Login,
    Noticelist,
    Notice,
    Product,
    Orderinfo,
    Top,
    Ordermanage,
    Ordercheck,
    Writenotice,
    Refundrequest,
    Board,
    Mypage,
    ManagerInfo,
    SalesStatus,
    ServiceCenter,
    Request,
    AuthMypage,
    ManagerPage
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    FroalaEditorModule,
    FroalaViewModule,
    ChartsModule
  ],
  providers: [
    Appservice
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
