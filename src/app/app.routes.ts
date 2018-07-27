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
import { Orderinfo } from "../pages/order/orderinfo";
import { Login } from "../pages/login/login";
import { Ordermanage } from "../pages/ordermanage/ordermanage";
import { Ordercheck } from "../pages/ordercheck/ordercheck";
import { NoticeForm } from "../pages/notice/notice-form/notice-form";
import { Refundrequest } from "../pages/order/refundrequest/refundrequest";
import { ServiceCenter } from "../pages/servicecenter/servicecenter";
import { Board } from "../pages/board/board";
import { Signup } from '../pages/signup/signup';
import { NoticeDetail } from "../pages/notice/noticedetail/noticedetail";
import { ProductForm } from "../pages/product/product-form/productform";
import { OrderFrom } from "../pages/order/order-form/order-form";
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
    label: '주문/배송 관리',
    path: 'ordermanage',
    component: Ordermanage
  },
  {
    label: '상품발주관리',
    path: 'ordercheck',
    component: Ordercheck
  },
  {
    label: '주문/배송관리',
    path: 'orderinfo',
    component: Orderinfo
  },
  {
    label: '로그인',
    path: 'login',
    component: Login
  },
  {
    label: '반품/환불요청',
    path: 'refundrequest',
    component: Refundrequest
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
    component: Signup
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);