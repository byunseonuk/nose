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
import { Product } from "../pages/product/product";
import { Notice } from "../pages/notice/notice";
import { Noticelist } from "../pages/noticelist/noticelist";
import { Orderinfo } from "../pages/order/orderinfo";
import { Login } from "../pages/login/login";
import { Ordermanage } from "../pages/ordermanage/ordermanage";
import { Ordercheck } from "../pages/ordercheck/ordercheck";
import { Writenotice } from "../pages/notice/writenotice/writenotice";
import { Refundrequest } from "../pages/order/refundrequest/refundrequest";
import { ServiceCenter } from "../pages/servicecenter/servicecenter";
import { Board } from "../pages/board/board";

export const routes = [
  {
    label: '공지사항자세히',
    path: 'notice',
    component: Notice
  },
  {
    label: '공지사항',
    path: 'noticelist',
    component: Noticelist
  },
  {
    label: '상품',
    path: 'product',
    component: Product
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
    label: '공지사항작성',
    path: 'writenotice',
    component: Writenotice
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
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);