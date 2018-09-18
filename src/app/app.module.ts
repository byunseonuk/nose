import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Login } from '../pages/login/login'
import { AppComponent } from './app.component';

import { Notice } from '../pages/notice/notice';
import { Product } from '../pages/product/product';
import { routing } from './app.routes';
import { Order } from '../pages/order/order';
import { Top } from '../pages/top/top';
import { ExchangeRefundManage } from '../pages/exchangerefundmanage/exchangerefundmanage';
import { OrderCheck } from '../pages/ordercheck/ordercheck';
import { Shop } from '../pages/shop/shop';

import { ExchangeReturn } from '../pages/order/exchangereturn-form/exchangereturn-form';
import { FroalaEditorModule, FroalaViewModule } from 'angular2-froala-wysiwyg';
import { Appservice } from '../service/app.service';
import { Board } from '../pages/board/board';
import { Mypage } from '../pages/board/mypage/mypage';
import { ManagerInfo } from '../pages/board/managerinfo/managerinfo';
import { SalesStatus } from '../pages/board/salesstatus/salestatus';
import { ServiceCenter } from '../pages/servicecenter/servicecenter';
import { AuthMypage } from '../pages/board/mypage/authmypage/authmypage';
import {Request} from '../pages/servicecenter/request/request';
import {ChartsModule} from 'ng2-charts';
import { ShopForm } from '../pages/shop/shop-form/shop-form';
import { AuthService } from '../service/auth.service';
import {HttpInterceptorModule} from "../lib/ng-http-interceptor/http/module";
import { DialogService } from '../service/dialog-message/dialog-message.service';
import { DialogMessage } from '../service/dialog-message/dialog-message.component';
import { ProductService } from '../service/product.service';
import { ProductForm } from '../pages/product/product-form/productform';
import { NoticeDetail } from '../pages/notice/noticedetail/noticedetail';
import { NoticeService } from '../service/notice.service';
import { NoticeForm } from '../pages/notice/notice-form/notice-form';
import { OrderFrom } from '../pages/order/order-form/order-form';
import { DaumMap } from "../pages/daum-map/daum-map";
import { ProductDetail } from '../pages/product/product-detail/product-detail';
import { MdDialogModule, MdIconRegistry, MaterialModule, MaterialRootModule } from '@angular/material';
import { SidenavService } from '../service/sidenav.service';

import { LoadingComponent } from '../service/loading/loading.component';
import { ShopService } from '../service/shop.service';
import { ChangePassword } from '../pages/board/mypage/changepassword/changepassword';
import { ChangeInfo } from '../pages/board/mypage/changeInfo/changeInfo';
import { ManagerForm } from '../pages/board/manager-form/manager-form';
import { TransactionService } from '../service/transaction.service';
import { PagerComponent } from '../pages/pager/pager.component';
import { ChangeStatusForm } from '../pages/changestatus-form/changestatus-form';
import { ChangePassForm } from '../pages/shop/changepass-form/changepass-form';



@NgModule({
  declarations: [
    AppComponent,
    Login,
    Notice,
    NoticeDetail,
    NoticeForm,
    Product,
    Order,
    Top,
    ExchangeRefundManage,
    OrderCheck,
    ExchangeReturn,
    Board,
    Mypage,
    ManagerInfo,
    SalesStatus,
    ServiceCenter,
    Request,
    OrderFrom,
    AuthMypage,
    ManagerForm,
    ProductForm,
    ShopForm,
    DialogMessage,
    DaumMap,
    ProductDetail,
    ChangePassword,
    ChangeInfo,
    LoadingComponent,
    PagerComponent,
    ChangeStatusForm,
    Shop,
    ChangePassForm
    
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
    MaterialModule,
    MaterialRootModule
  ],
  providers: [
    Appservice,
    AuthService,
    DialogService,
    MdIconRegistry,
    ProductService,
    NoticeService,
    ShopService,
    TransactionService
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    Login,
    ShopForm,
    DialogMessage,
    ProductForm,
    DaumMap,
    NoticeForm,
    ProductDetail,
    ExchangeReturn,
    ChangeStatusForm,
    ShopForm,
    ChangePassForm


  ]
})
export class AppModule { }
