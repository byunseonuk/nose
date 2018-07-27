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
import { Proinsert } from '../pages/product/proinsert/proinsert';
import { Proupdate} from '../pages/product/proupdate/proupdate';
import { Signup } from '../pages/signup/signup';
import { AuthService } from '../service/auth.service';
import {HttpInterceptorModule} from "../lib/ng-http-interceptor/http/module";
import { DialogService } from '../service/dialog-message/dialog-message.service';
import { DialogMessage } from '../service/dialog-message/dialog-message.component';
import { MdDialogModule, MdIconRegistry, MaterialModule, MaterialRootModule } from '@angular/material';
import { ChangePasswordForm } from '../pages/header/change-password-form/change-password-form';
import { SidenavService } from '../service/sidenav.service';
import { Header } from '../pages/header/header';
import { Sidenav } from '../pages/sidenav/sidenav';
import { LoadingComponent } from '../service/loading/loading.component';
import {PerfectScrollbarModule, PerfectScrollbarConfigInterface} from 'angular2-perfect-scrollbar';

const PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};


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
    ManagerPage,
    Proinsert,
    Proupdate,
    Signup,
    DialogMessage,
    //test
    Header,
    ChangePasswordForm,
    Sidenav,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    FroalaEditorModule,
    FroalaViewModule,
    ChartsModule,
    HttpInterceptorModule.noOverrideHttp(),
    MaterialModule,
    MaterialRootModule,
    PerfectScrollbarModule.forRoot(PERFECT_SCROLLBAR_CONFIG),
  ],
  providers: [
    Appservice,
    AuthService,
    DialogService,
    MdIconRegistry,
    //test
    SidenavService
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    Login,
    Signup,
    DialogMessage,
    //test
    ChangePasswordForm

  ]
})
export class AppModule { }
