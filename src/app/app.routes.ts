/**
 * Created by PHILIP on 12/07/2017
 * As part of NoseWork
 *
 * Copyright (C) Applicat (www.applicat.co.kr) & PHILIP - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by PHILIP <hbnb7894@gmail.com>, 12/07/2017
 *
 */

// Angular
import {ModuleWithProviders} from "@angular/core";
import {RouterModule} from "@angular/router";

// Project Sources
import { AppComponent } from "./app.component";
import { Product } from "../pages/product/product";
import { Notice } from "../pages/notice/notice";
import { Order } from "../pages/order/order";
import { Login } from "../pages/login/login";
import { ExchangeRefundManage } from "../pages/exchangerefundmanage/exchangerefundmanage";
import { OrderCheck } from "../pages/ordercheck/ordercheck";
import { NoticeForm } from "../pages/notice/notice-form/notice-form";
import { ServiceCenter } from "../pages/servicecenter/servicecenter";
import { Board } from "../pages/board/board";
import { ShopForm } from '../pages/shop/shop-form/shop-form';
import { NoticeDetail } from "../pages/notice/noticedetail/noticedetail";
import { ProductForm } from "../pages/product/product-form/productform";
import { OrderFrom } from "../pages/order/order-form/order-form";
import { ChangePassword } from "../pages/board/mypage/changepassword/changepassword";
import { ChangeInfo } from "../pages/board/mypage/changeInfo/changeInfo";
import { ManagerForm } from "../pages/board/manager-form/manager-form";
import {Shop} from "../pages/shop/shop";
export const routes = [
  {
    path: '',
    redirectTo: '/notice',
    pathMatch: 'full',
  },
  {
    label: '공지사항자세히',
    path: 'noticedetail',
    component: NoticeDetail
  },
  {
    label: '공지사항',
    path: 'notice',
    component: Notice
  },
  {
    label: '공지사항작성',
    path: 'notice-form',
    component: NoticeForm
  },
  {
    label: '상품',
    path: 'product',
    component: Product
  },
  {
    label: '상품등록',
    path: 'productform',
    component: ProductForm
  },
  {
    label: '주문/배송 관리',
    path: 'order-form',
    component: OrderFrom
  },
  {
    label: '교환/반품 관리',
    path: 'exchangerefundmanage',
    component: ExchangeRefundManage
  },
  {
    label: '상품발주관리',
    path: 'ordercheck',
    component: OrderCheck
  },
  {
    label: '주문/배송관리',
    path: 'order',
    component: Order
  },
  {
    label: '로그인',
    path: 'login',
    component: Login
  },
  {
    label: '정보게시판',
    path: 'board',
    component: Board
  },
  {
    label: '고객센터',
    path: 'servicecenter',
    component: ServiceCenter
  },
  {
    label: '유저생성',
    path: 'signup',
    component: ShopForm
  },
  {
    label: '비번변경',
    path: 'changepassword',
    component: ChangePassword
  },
  {
    label: '정보변경',
    path: 'changeInfo',
    component: ChangeInfo
  },
  {
    label: '관리자정보변경',
    path: 'manager-form',
    component: ManagerForm
  },
  {
    label: '유저관리',
    path: 'shop',
    component: Shop
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);