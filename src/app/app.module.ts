import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Login } from '../pages/login/login'
import { AppComponent } from './app.component';

import { Notice } from '../pages/notice/notice';
import { Product } from '../pages/product/product';
import { routing } from './app.routes';
import { Orderinfo } from '../pages/order/orderinfo';
import { Top } from '../pages/top/top';
import { Ordermanage } from '../pages/ordermanage/ordermanage';
import { Ordercheck } from '../pages/ordercheck/ordercheck';

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
import { Signup } from '../pages/signup/signup';
import { AuthService } from '../service/auth.service';
import {HttpInterceptorModule} from "../lib/ng-http-interceptor/http/module";
import { DialogService } from '../service/dialog-message/dialog-message.service';
import { DialogMessage } from '../service/dialog-message/dialog-message.component';
import { MdDialogModule, MdIconRegistry, MaterialRootModule } from '@angular/material';
import { ProductService } from '../service/product.service';
import { ProductForm } from '../pages/product/product-form/productform';
import { NoticeDetail } from '../pages/notice/noticedetail/noticedetail';
import { NoticeService } from '../service/notice.service';
import { NoticeForm } from '../pages/notice/notice-form/notice-form';
import { OrderFrom } from '../pages/order/order-form/order-form';
import { DaumMap } from "../pages/daum-map/daum-map";
import { ProductDetail } from '../pages/product/product-detail/product-detail';
@NgModule({
  declarations: [
    AppComponent,
    Login,
    Notice,
    NoticeDetail,
    NoticeForm,
    Product,
    Orderinfo,
    Top,
    Ordermanage,
    Ordercheck,
    Refundrequest,
    Board,
    Mypage,
    ManagerInfo,
    SalesStatus,
    ServiceCenter,
    Request,
    OrderFrom,
    AuthMypage,
    ManagerPage,
    ProductForm,
    Signup,
    DialogMessage,
    DaumMap,
    ProductDetail
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    FroalaEditorModule,
    FroalaViewModule,
    ChartsModule,
    MaterialRootModule,
    HttpInterceptorModule.noOverrideHttp(),
    MdDialogModule.forRoot()
  ],
  providers: [
    Appservice,
    AuthService,
    DialogService,
    MdIconRegistry,
    ProductService,
    NoticeService
  ],
  bootstrap: [AppComponent],
  entryComponents: [

    Login,
    Signup,
    DialogMessage,
    ProductForm,
    DaumMap,
    NoticeForm,
    ProductDetail
  ]
})
export class AppModule { }
