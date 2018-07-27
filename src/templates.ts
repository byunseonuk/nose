var templates = { 
'app/app.component' : `<!--
/**
 * Created by PHILIP on 10/07/2017
 * As part of NoseWork
 *
 * Copyright (C) Applicat (www.applicat.co.kr) & PHILIP - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by PHILIP <hbnb7894@gmail.com>, 10/07/2017
 *
 */
-->

<!-- sidenav -->
<sidenav>

  <!-- header -->
  <header>

    <!-- component content-->
    <router-outlet></router-outlet>

  </header>
  <!-- //header -->

</sidenav>
<!-- // sidenav -->

<!--for angular2 material modal-->
<div defaultOverlayTarget></div>

<!-- // loading-->
<loading></loading>
<!-- // loading -->`,
'public/index' : `<!--
/**
 * Created by PHILIP on 27/06/2017
 * As part of NoseWork
 *
 * Copyright (C) Applicat (www.applicat.co.kr) & PHILIP - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by PHILIP <hbnb7894@gmail.com>, 27/06/2017
 *
 */
-->

<!DOCTYPE html>
<html lang="en">
<head>
  <title>NOSEWORK - Admin</title>

  <meta charset="utf-8">
  <meta http-equiv="pragma" content="no-cache" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="NOSEWORK - Admin">
  <!-- base url -->
  <base href="/">
  <link rel="icon" type="image/x-icon" href="assets/img/favicon.ico">
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
  <link rel="stylesheet" href="build/main.css">

  <script type="text/javascript">
    function getIEVersion(){
      var agent = navigator.userAgent;
      var reg = /MSIE\s?(\d+)(?:\.(\d+))?/i;
      var matches = agent.match(reg);
      if (matches != null) {
        return { major: matches[1], minor: matches[2] };
      }
      return { major: "-1", minor: "-1" };
    }

    var ie_version =  getIEVersion();
    if(ie_version.major == 11){
      setTimeout(function(){
        document.getElementById('app-root').classList.add('ie11');
        document.getElementById('ie11-support').classList.add('ie11-show');
      }, 0);
    };
  </script>
</head>
<body>

<!--[if lte IE 9]>
<div>Internet Explorer 10이하 버전은 지원하지 않습니다.</div>
<![endif]-->

<div id="ie11-support" style="display:none">Internet Explorer 11이하 버전은 지원하지 않습니다.</div>

<!--[if (!IE)|(gt IE 9)]><!-->
<app-root>
  <div style="position:absolute;width:100%;height:100%;">
    <img style="position:absolute;top:50%;left:50%;margin-left:-125px;margin-top:-125px;width: 180px;"
         src="assets/img/icon.png">
  </div>
</app-root>
<!--<![endif]-->

<!-- 주소 찾기 api -->
<script type="text/javascript"
        src="https://apis.daum.net/maps/maps3.js?apikey=1d77329135df78c95c219758f5fdddfb&libraries=services"></script>

<script src="build/global.js"></script>
<script src="build/vendor.js"></script>
<script src="build/main.js"></script>

</body>
</html>`,
'pages/faq/faq' : `<!--
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
-->

<div class="faq-container">

  <!-- faq-list-panel -->
  <div class="faq-list-panel">

    <!-- faq-list-header-panel -->
    <div class="faq-list-header-panel">

      <!-- total-panel -->
      <div class="total-panel">
        <div class="total">총 : <span>{{options.count}}</span>개</div>
        <div class="limit">최대 <span>5</span>개 등록가능합니다.</div>
      </div>
      <!-- // total-panel -->

      <!-- edit-panel -->
      <div class="edit-panel">
        <form class="search-panel">
          <input class="input-search"
                 type="text"
                 placeholder="질문 또는 답변을 입력해주세요."
                 [(ngModel)]="searchKeyword"
                 [ngModelOptions]="{standalone: true}">
          <button class="btn-search"
                  type="submit"
                  (click)="loadList({page: 1})">
            검색
          </button>
        </form>
        <button class="btn-create"
                type="button"
                (click)="openFaqFormModel()">
          <span>추가</span>
        </button>
      </div>
      <!-- // edit-panel -->

    </div>
    <!-- // faq-list-header-panel -->

    <!-- faq-list-content-panel -->
    <div class="faq-list-content-panel">

      <!-- grid-panel -->
      <div class="grid-panel">

        <!-- grid-header -->
        <div class="grid-header-panel" [style.height]="options.headerHeight">
          <div class="header-cell" [style.width]="'10%'">no</div>
          <div class="header-cell" [style.width]="'15%'">질문 - 한글</div>
          <div class="header-cell" [style.width]="'15%'">답변 - 한글</div>
          <div class="header-cell" [style.width]="'15%'">질문 - 영어</div>
          <div class="header-cell" [style.width]="'15%'">답변 - 영어</div>
          <div class="header-cell" [style.width]="'10%'">등록일</div>
          <div class="header-cell" [style.width]="'20%'">Action</div>
        </div>
        <!-- // grid-header -->

        <!-- grid-body -->
        <div class="grid-body-panel" [style.height]="options.bodyHeight">
          <div class="row-panel"
               [style.height]="options.rowHeight"
               *ngFor="let row of options.rows">
            <div class="row-cell" [style.width]="'10%'">{{row.no}}</div>
            <div class="row-cell" [style.width]="'15%'">{{row.questionKr}}</div>
            <div class="row-cell" [style.width]="'15%'">{{row.answerKr}}</div>
            <div class="row-cell" [style.width]="'15%'">{{row.questionEn}}</div>
            <div class="row-cell" [style.width]="'15%'">{{row.answerEn}}</div>
            <div class="row-cell" [style.width]="'10%'">{{row.createdAt | date:"yyyy.MM.dd"}}</div>
            <div class="row-cell" [style.width]="'20%'">
              <button class="btn-detail"
                      type="button"
                      (click)="openFaqFormModel(row)">
                상세
              </button>
              <button class="btn-delete"
                      type="button"
                      (click)="faqRemove(row)">
                삭제
              </button>
            </div>
          </div>
        </div>
        <!-- // grid-body -->

        <!-- grid-footer -->
        <div class="grid-footer-panel" [style.height]="options.footerHeight">
          <pager
            [pagerLeftArrowIcon]="options.pagerLeftArrow"
            [pagerRightArrowIcon]="options.pagerRightArrow"
            [pagerPreviousIcon]="options.pagerPrevious"
            [pagerNextIcon]="options.pagerNext"
            [page]="options.page"
            [size]="options.limit"
            [count]="options.count"
            (change)="loadList($event)">
          </pager>
        </div>
        <!-- // grid-footer -->

      </div>
      <!-- // grid-panel -->

    </div>
    <!-- // faq-list-content-panel -->

  </div>
  <!-- // faq-list-panel -->

</div>`,
'pages/genuine/genuine' : `<!--
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
-->

<div class="genuine-container">

  <!-- genuine-list-panel -->
  <div class="genuine-list-panel">

    <!-- genuine-list-header-panel -->
    <div class="genuine-list-header-panel">

      <!-- total-panel -->
      <div class="total-panel">
        <div class="total">총 : <span>{{options.count}}</span>개</div>
      </div>
      <!-- // total-panel -->

      <!-- edit-panel -->
      <div class="edit-panel">
        <form class="search-panel">
          <input class="input-search"
                 type="text"
                 placeholder="시리얼넘버를 입력해주세요."
                 [(ngModel)]="searchKeyword"
                 [ngModelOptions]="{standalone: true}">
          <button class="btn-search"
                  type="submit"
                  (click)="loadList({page: 1})">
            검색
          </button>
        </form>
      </div>
      <!-- // edit-panel -->

    </div>
    <!-- // genuine-list-header-panel -->

    <!-- genuine-list-content-panel -->
    <div class="genuine-list-content-panel">

      <!-- grid-panel -->
      <div class="grid-panel">

        <!-- grid-header-panel -->
        <div class="grid-header-panel" [style.height]="options.headerHeight">
          <div class="header-cell" [style.width]="'10%'">no</div>
          <div class="header-cell" [style.width]="'20%'">시리얼넘버</div>
          <div class="header-cell" [style.width]="'20%'">제품명</div>
          <div class="header-cell" [style.width]="'15%'">사용자</div>
          <div class="header-cell" [style.width]="'15%'">등록일</div>
          <div class="header-cell" [style.width]="'20%'">Action</div>
        </div>
        <!-- // grid-header-panel -->

        <!-- grid-body-panel -->
        <div class="grid-body-panel" [style.height]="options.bodyHeight">
          <div class="row-panel"
               [style.height]="options.rowHeight"
               *ngFor="let row of options.rows">
            <div class="row-cell" [style.width]="'10%'">{{row.no}}</div>
            <div class="row-cell" [style.width]="'20%'">{{row.serialNumber}}</div>
            <div class="row-cell" [style.width]="'20%'">{{row.productName}}</div>
            <div class="row-cell" [style.width]="'15%'">{{row.registered.identifier}}</div>
            <div class="row-cell" [style.width]="'15%'">{{row.registeredAt | date:"yyyy.MM.dd"}}</div>
            <div class="row-cell" [style.width]="'20%'">
              <button class="btn-detail"
                      type="button"
                      (click)="openGenuineFormModel(row)">
                상세
              </button>
              <button class="btn-delete"
                      type="button"
                      (click)="cancelRegistered(row)">
                취소
              </button>
            </div>
          </div>
        </div>
        <!-- // grid-body-panel -->

        <!-- grid-footer-panel -->
        <div class="grid-footer-panel" [style.height]="options.footerHeight">
          <pager
            [pagerLeftArrowIcon]="options.pagerLeftArrow"
            [pagerRightArrowIcon]="options.pagerRightArrow"
            [pagerPreviousIcon]="options.pagerPrevious"
            [pagerNextIcon]="options.pagerNext"
            [page]="options.page"
            [size]="options.limit"
            [count]="options.count"
            (change)="loadList($event)">
          </pager>
        </div>
        <!-- // grid-footer-panel -->

      </div>
      <!-- // grid -->

    </div>
    <!-- genuine-list-content-panel -->

  </div>
  <!-- // genuine-list-panel -->

</div>`,
'pages/header/header' : `<!--
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
-->

<!-- header-container -->
<div class="header-container"
     [ngClass]="{'opened' : state == side_nav_status.OPENED,
                 'half-opened' : state == side_nav_status.HALF_OPENED}">

  <!-- btn-toggleNav -->
  <button md-button
          class="btn-toggleNav"
          (click)="toggleNav()">
    <img *ngIf="state == side_nav_status.OPENED"
         src="assets/img/ic_navicon_left.png">
    <img *ngIf="state == side_nav_status.HALF_OPENED"
         src="assets/img/ic_navicon_right.png">
  </button>
  <!-- // btn-toggleNav -->

  <!-- route-panel -->
  <div class="route-panel">
    <h2>{{getRouteLabel()}}</h2>

    <!-- setting-panel -->
    <div class="setting-panel">

      <!-- btn-setting -->
      <div class="btn-setting"
           #settingMenuTrigger="mdMenuTrigger"
           [mdMenuTriggerFor]="settingMenu">
        <i class="material-icons">settings</i>
        <span>설정</span>
      </div>
      <!-- // btn-setting -->

      <!-- setting-menu -->
      <md-menu class="setting-menu"
               y-position="below"
               #settingMenu
               [overlapTrigger]="false">
        <div class="menu-list-panel">
          <div class="menu-panel"
               (click)="openChangePasswordFormModel()">
            <span>비밀번호 변경</span>
          </div>
          <div class="menu-panel"
               (click)="logout()">
            <span>로그아웃</span>
          </div>
        </div>
      </md-menu>
      <!-- // setting-menu -->

    </div>
    <!-- // setting-panel -->

  </div>
  <!-- // route-panel -->

</div>
<!-- // header-container -->

<!-- // header-child-container -->
<div class="header-child-container">
  <ng-content></ng-content>
</div>
<!-- // header-child-container -->`,
'pages/invoice/invoice' : `<!--
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
-->

<div class="invoice-container">

  <!-- invoice-list-panel -->
  <div class="invoice-list-panel">

    <!-- invoice-list-header-panel -->
    <div class="invoice-list-header-panel">

      <!-- total-panel -->
      <div class="total-panel">
        <div class="total">총 : <span>{{options.count}}</span>개</div>
      </div>
      <!-- // total-panel -->

      <!-- edit-panel -->
      <div class="edit-panel">
        <form class="search-panel">
          <input class="input-search"
                 type="text"
                 placeholder="이메일 또는 닉네임을 입력해주세요."
                 [(ngModel)]="searchKeyword"
                 [ngModelOptions]="{standalone: true}">
          <button class="btn-search"
                  type="submit"
                  (click)="searchUser()">
            검색
          </button>
        </form>
      </div>
      <!-- // edit-panel -->

    </div>
    <!-- // invoice-list-header-panel -->

    <!-- invoice-list-content-panel -->
    <div class="invoice-list-content-panel">

      <!-- grid-panel -->
      <div class="grid-panel">

        <!-- grid-header -->
        <div class="grid-header-panel" [style.height]="options.headerHeight">
          <div class="header-cell" [style.width]="'10%'">no</div>
          <div class="header-cell" [style.width]="'15%'">구매자</div>
          <div class="header-cell" [style.width]="'10%'">결제상태</div>
          <div class="header-cell" [style.width]="'10%'">결제방법</div>
          <div class="header-cell" [style.width]="'10%'">총 수량</div>
          <div class="header-cell" [style.width]="'15%'">결제금액</div>
          <div class="header-cell" [style.width]="'10%'">결제일</div>
          <div class="header-cell" [style.width]="'20%'">Action</div>
        </div>
        <!-- // grid-header -->

        <!-- grid-body -->
        <div class="grid-body-panel" [style.height]="options.bodyHeight">
          <div class="row-panel"
               [style.height]="options.rowHeight"
               *ngFor="let row of options.rows">
            <div class="row-cell" [style.width]="'10%'">{{row.no}}</div>
            <div class="row-cell" [style.width]="'15%'">{{row.owner.identifier}}</div>
            <div class="row-cell" [style.width]="'10%'">{{row.translateStatus}}</div>
            <div class="row-cell" [style.width]="'10%'">{{row.translatePaymentType}}</div>
            <div class="row-cell" [style.width]="'10%'">{{row.totalQuantity}}</div>
            <div class="row-cell" [style.width]="'15%'">{{row.totalAmount | number}}</div>
            <div class="row-cell" [style.width]="'10%'">{{row.createdAt | date:"yyyy.MM.dd HH:mm"}}</div>
            <div class="row-cell" [style.width]="'20%'">
              <button class="btn-detail"
                      type="button"
                      (click)="openInvoiceFormModel(row)">
                상세
              </button>
            </div>
          </div>
        </div>
        <!-- // grid-body -->

        <!-- grid-footer -->
        <div class="grid-footer-panel" [style.height]="options.footerHeight">
          <pager
            [pagerLeftArrowIcon]="options.pagerLeftArrow"
            [pagerRightArrowIcon]="options.pagerRightArrow"
            [pagerPreviousIcon]="options.pagerPrevious"
            [pagerNextIcon]="options.pagerNext"
            [page]="options.page"
            [size]="options.limit"
            [count]="options.count"
            (change)="loadList($event)">
          </pager>
        </div>
        <!-- // grid-footer -->

      </div>
      <!-- // grid-panel -->

    </div>
    <!-- // invoice-list-content-panel -->

  </div>
  <!-- // invoice-list-panel -->

</div>`,
'pages/login/login' : `<!--
/**
 * Created by PHILIP on 10/07/2017
 * As part of NoseWork
 *
 * Copyright (C) Applicat (www.applicat.co.kr) & PHILIP - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by PHILIP <hbnb7894@gmail.com>, 10/07/2017
 *
 */
-->

<div class="login-container">

  <div class="content-panel">

    <h2>로그인</h2>

    <form>
      <div class="input-panel">
        <md-input-container>
          <input mdInput
                 type="email"
                 name="email"
                 placeholder="이메일 주소"
                 maxlength="256"
                 [(ngModel)]="loginInfo.identifier"/>
        </md-input-container>
      </div>
      <div class="input-panel">
        <md-input-container>
          <input mdInput
                 type="password"
                 name="password"
                 placeholder="비밀번호"
                 [(ngModel)]="loginInfo.password"
                 minlength="8"/>
        </md-input-container>
      </div>
      <div class="btn-panel">
        <button type="submit"
                (click)="login()"
                [disabled]="!isValidLogin()">
          <span>로그인</span>
        </button>
      </div>
    </form>
  </div>
</div>
`,
'pages/product/product' : `<!--
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
-->

<div class="product-container">

  <!-- product-list-panel -->
  <div class="product-list-panel">

    <!-- product-list-header-panel -->
    <div class="product-list-header-panel">

      <!-- total-panel -->
      <div class="total-panel">
        <div class="total">총 : <span>{{options.count}}</span>개</div>
      </div>
      <!-- // total-panel -->

      <!-- edit-panel -->
      <div class="edit-panel">
        <form class="search-panel">
          <input class="input-search"
                 type="text"
                 placeholder="상품명을 입력해주세요."
                 [(ngModel)]="searchKeyword"
                 [ngModelOptions]="{standalone: true}">
          <button class="btn-search"
                  type="submit"
                  (click)="loadList({page: 1})">
            검색
          </button>
        </form>
        <button class="btn-create"
                type="button"
                (click)="openProductFormModel()">
          <span>추가</span>
        </button>
      </div>
      <!-- // edit-panel -->

    </div>
    <!-- // product-list-header-panel -->

    <!-- product-list-content-panel -->
    <div class="product-list-content-panel">

      <!-- grid-panel -->
      <div class="grid-panel">

        <!-- grid-header -->
        <div class="grid-header-panel" [style.height]="options.headerHeight">
          <div class="header-cell" [style.width]="'10%'">no</div>
          <div class="header-cell" [style.width]="'20%'">상품명</div>
          <div class="header-cell" [style.width]="'20%'">간단소개</div>
          <div class="header-cell" [style.width]="'10%'">품절여부</div>
          <div class="header-cell" [style.width]="'10%'">가격</div>
          <div class="header-cell" [style.width]="'10%'">등록일</div>
          <div class="header-cell" [style.width]="'20%'">Action</div>
        </div>
        <!-- // grid-header -->

        <!-- grid-body -->
        <div class="grid-body-panel" [style.height]="options.bodyHeight">
          <div class="row-panel"
               [style.height]="options.rowHeight"
               *ngFor="let row of options.rows">
            <div class="row-cell" [style.width]="'10%'">{{row.no}}</div>
            <div class="row-cell" [style.width]="'20%'">{{row.name}}</div>
            <div class="row-cell" [style.width]="'20%'">{{row.summary}}</div>
            <div class="row-cell" [style.width]="'10%'">{{row.soldOut ? '품절' : '재고있음'}}</div>
            <div class="row-cell" [style.width]="'10%'">{{row.price | number}}</div>
            <div class="row-cell" [style.width]="'10%'">{{row.createdAt | date:"yyyy.MM.dd"}}</div>
            <div class="row-cell" [style.width]="'20%'">
              <button class="btn-detail"
                      type="button"
                      (click)="openProductFormModel(row)">
                상세
              </button>
              <button class="btn-delete"
                      type="button"
                      (click)="productRemove(row)">
                삭제
              </button>
            </div>
          </div>
        </div>
        <!-- // grid-body -->

        <!-- grid-footer -->
        <div class="grid-footer-panel" [style.height]="options.footerHeight">
          <pager
            [pagerLeftArrowIcon]="options.pagerLeftArrow"
            [pagerRightArrowIcon]="options.pagerRightArrow"
            [pagerPreviousIcon]="options.pagerPrevious"
            [pagerNextIcon]="options.pagerNext"
            [page]="options.page"
            [size]="options.limit"
            [count]="options.count"
            (change)="loadList($event)">
          </pager>
        </div>
        <!-- // grid-footer -->

      </div>
      <!-- // grid-panel -->

    </div>
    <!-- // product-list-content-panel -->

  </div>
  <!-- // product-list-panel -->

</div>`,
'pages/push/push' : `<!--
/**
 * Created by PHILIP on 10/07/2017
 * As part of NoseWork
 *
 * Copyright (C) Applicat (www.applicat.co.kr) & PHILIP - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by PHILIP <hbnb7894@gmail.com>, 10/07/2017
 *
 */
-->

<div class="push-container">

  <!-- push-content-panel -->
  <div class="push-content-panel">

    <!-- form-container -->
    <div class="form-container">

      <!-- form -->
      <form>

        <!-- form-field-panel -->
        <div class="form-field-panel">

          <div class="form-field">
            <div class="label-panel">
              <h2>
                제목<span class="required">*</span>
              </h2>
            </div>
            <div class="input-panel">
              <input type="text"
                     name="title"
                     placeholder="보내실 푸시메시지 제목을 입력해주세요."
                     [(ngModel)]="push.title">
            </div>
          </div>

          <div class="form-field">
            <div class="label-panel">
              <h2>
                내용<span class="required">*</span>
              </h2>
            </div>
            <div class="input-panel">
              <textarea name="message"
                        placeholder="보내실 푸시메시지 내용을 입력해주세요."
                        [(ngModel)]="push.message"></textarea>
            </div>
          </div>

          <div class="form-field">
            <div class="label-panel">
              <h2>URL</h2>
            </div>
            <div class="input-panel">
              <input type="text"
                     name="url"
                     placeholder="http:// 또는 https:// 모두 함께 입력해주세요."
                     [(ngModel)]="push.data.url">
            </div>
          </div>

        </div>
        <!-- // form-field-panel -->

        <!-- form-button-panel -->
        <div class="form-button-panel">
          <button type="submit"
                  [disabled]="!isValid()"
                  (click)="pushToDevices()">
            전송
          </button>
        </div>
        <!-- // form-button-panel -->

      </form>
      <!-- // form -->

    </div>
    <!-- // form-container -->

  </div>
  <!-- // push-content-panel -->

</div>
`,
'pages/serial/serial' : `<!--
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
-->

<div class="serial-container">

  <!-- serial-list-panel -->
  <div class="serial-list-panel">

    <!-- serial-list-header-panel -->
    <div class="serial-list-header-panel">

      <!-- total-panel -->
      <div class="total-panel">
        <div class="total">총 : <span>{{options.count}}</span>개</div>
      </div>
      <!-- // total-panel -->

      <!-- edit-panel -->
      <div class="edit-panel">
        <form class="search-panel">
          <input class="input-search"
                 type="text"
                 placeholder="시리얼넘버 또는 제품명을 입력해주세요."
                 [(ngModel)]="searchKeyword"
                 [ngModelOptions]="{standalone: true}">
          <button class="btn-search"
                  type="submit"
                  (click)="loadList({page: 1})">
            검색
          </button>
        </form>
        <button class="btn-create"
                type="button"
                (click)="openSerialFormModel()">
          <span>추가</span>
        </button>
      </div>
      <!-- // edit-panel -->

    </div>
    <!-- // serial-list-header-panel -->

    <!-- serial-list-content-panel -->
    <div class="serial-list-content-panel">

      <!-- grid-panel -->
      <div class="grid-panel">

        <!-- grid-header-panel -->
        <div class="grid-header-panel" [style.height]="options.headerHeight">
          <div class="header-cell" [style.width]="'10%'">no</div>
          <div class="header-cell" [style.width]="'20%'">시리얼넘버</div>
          <div class="header-cell" [style.width]="'20%'">제품명</div>
          <div class="header-cell" [style.width]="'15%'">상태</div>
          <div class="header-cell" [style.width]="'15%'">등록일</div>
          <div class="header-cell" [style.width]="'20%'">Action</div>
        </div>
        <!-- // grid-header-panel -->

        <!-- grid-body-panel -->
        <div class="grid-body-panel" [style.height]="options.bodyHeight">
          <div class="row-panel"
               [style.height]="options.rowHeight"
               *ngFor="let row of options.rows">
            <div class="row-cell" [style.width]="'10%'">{{row.no}}</div>
            <div class="row-cell" [style.width]="'20%'">{{row.serialNumber}}</div>
            <div class="row-cell" [style.width]="'20%'">{{row.productName}}</div>
            <div class="row-cell" [style.width]="'15%'">{{row.status == 'Ready' ? '등록대기' : '등록완료'}}</div>
            <div class="row-cell" [style.width]="'15%'">{{row.createdAt | date:"yyyy.MM.dd"}}</div>
            <div class="row-cell" [style.width]="'20%'">
              <button class="btn-detail"
                      type="button"
                      (click)="openSerialFormModel(row)">
                상세
              </button>
              <button class="btn-delete"
                      type="button"
                      (click)="serialRemove(row)">
                삭제
              </button>
            </div>
          </div>
        </div>
        <!-- // grid-body-panel -->

        <!-- grid-footer-panel -->
        <div class="grid-footer-panel" [style.height]="options.footerHeight">
          <pager
            [pagerLeftArrowIcon]="options.pagerLeftArrow"
            [pagerRightArrowIcon]="options.pagerRightArrow"
            [pagerPreviousIcon]="options.pagerPrevious"
            [pagerNextIcon]="options.pagerNext"
            [page]="options.page"
            [size]="options.limit"
            [count]="options.count"
            (change)="loadList($event)">
          </pager>
        </div>
        <!-- // grid-footer-panel -->

      </div>
      <!-- // grid -->

    </div>
    <!-- serial-list-content-panel -->

  </div>
  <!-- // serial-list-panel -->

</div>`,
'pages/sidenav/sidenav' : `<!--
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
-->

<div class="sidenav-container"
     [ngClass]="{'opened' : state == side_nav_status.OPENED,
                   'half-opened' : state == side_nav_status.HALF_OPENED}">

  <!-- sidenav-panel -->
  <div class="sidenav-panel">

    <!-- logo-panel -->
    <div class="logo-panel">
      <!-- logo-open-panel -->
      <div class="logo-open-panel"
           *ngIf="state == side_nav_status.OPENED">
        <img src="assets/img/ic_header_symbol.png">
        <span>NOSEWORK</span>
      </div>
      <!-- // logo-open-panel -->

      <!-- logo-half-panel -->
      <div class="logo-half-panel"
           *ngIf="state == side_nav_status.HALF_OPENED">
        <img src="assets/img/ic_header_symbol.png">
      </div>
      <!-- // logo-half-panel -->

    </div>
    <!-- // logo-panel -->

    <!-- menu-list-panel -->
    <div class="menu-list-panel">

      <!-- 웹 배너 관리 -->
      <div class="menu-panel"
           (click)="navigate('/web-banner')"
           routerLink="/web-banner"
           routerLinkActive="active">
        <i class="material-icons">add_to_queue</i>
        <span *ngIf="state == side_nav_status.OPENED">웹 배너 관리</span>
      </div>
      <!-- // 웹 배너 관리 -->

      <!-- 스토어 배너 관리 -->
      <div class="menu-panel"
           (click)="navigate('/store-banner')"
           routerLink="/store-banner"
           routerLinkActive="active">
        <i class="material-icons">add_to_queue</i>
        <span *ngIf="state == side_nav_status.OPENED">스토어 배너 관리</span>
      </div>
      <!-- // 스토어 배너 관리 -->

      <!-- FAQ 관리 -->
      <div class="menu-panel"
           (click)="navigate('/faq')"
           routerLink="/faq"
           routerLinkActive="active">
        <i class="material-icons">question_answer</i>
        <span *ngIf="state == side_nav_status.OPENED">FAQ 관리</span>
      </div>
      <!-- // FAQ 관리 -->

      <!-- 상품 관리 -->
      <div class="menu-panel"
           (click)="navigate('/product')"
           routerLink="/product"
           routerLinkActive="active">
        <i class="material-icons">toys</i>
        <span *ngIf="state == side_nav_status.OPENED">상품 관리</span>
      </div>
      <!-- // 상품 관리 -->

      <!-- 회원 관리 -->
      <div class="menu-panel"
           (click)="navigate('/user')"
           routerLink="/user"
           routerLinkActive="active">
        <i class="material-icons">person</i>
        <span *ngIf="state == side_nav_status.OPENED">회원 관리</span>
      </div>
      <!-- // 회원 관리 -->

      <!-- 시리얼 관리 -->
      <div class="menu-panel"
           (click)="navigate('/serial')"
           routerLink="/serial"
           routerLinkActive="active">
        <i class="material-icons">format_list_numbered</i>
        <span *ngIf="state == side_nav_status.OPENED">시리얼 관리</span>
      </div>
      <!-- // 시리얼 관리 -->

      <!-- 시리얼 관리 -->
      <div class="menu-panel"
           (click)="navigate('/genuine')"
           routerLink="/genuine"
           routerLinkActive="active">
        <i class="material-icons">fingerprint</i>
        <span *ngIf="state == side_nav_status.OPENED">정품 인증 관리</span>
      </div>
      <!-- // 시리얼 관리 -->

      <!-- 주문 내역 관리 -->
      <div class="menu-panel"
           (click)="navigate('/invoice')"
           routerLink="/invoice"
           routerLinkActive="active">
        <i class="material-icons">receipt</i>
        <span *ngIf="state == side_nav_status.OPENED">주문 내역 관리</span>
      </div>
      <!-- // 주문 내역 관리 -->

      <!-- 푸시알림 -->
      <div class="menu-panel"
           (click)="navigate('/push')"
           routerLink="/push"
           routerLinkActive="active">
        <i class="material-icons">notifications</i>
        <span *ngIf="state == side_nav_status.OPENED">푸시알림</span>
      </div>
      <!-- // 푸시알림 -->

      <!-- 버전 관리 -->
      <div class="menu-panel"
           (click)="navigate('/version')"
           routerLink="/version"
           routerLinkActive="active">
        <i class="material-icons">smartphone</i>
        <span *ngIf="state == side_nav_status.OPENED">버전 관리</span>
      </div>
      <!-- // 버전 관리 -->

    </div>
    <!-- menu-list-panel -->

  </div>
  <!-- // sidenav-panel -->

  <!-- sidenav-child-panel -->
  <div class="sidenav-child-panel">
    <ng-content></ng-content>
  </div>
  <!-- // sidenav-child-panel -->

</div>
`,
'pages/user/user' : `<!--
/**
 * Created by PHILIP on 10/07/2017
 * As part of NoseWork
 *
 * Copyright (C) Applicat (www.applicat.co.kr) & PHILIP - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by PHILIP <hbnb7894@gmail.com>, 10/07/2017
 *
 */
-->

<div class="user-container">

  <!-- user-list-panel -->
  <div class="user-list-panel">

    <!-- user-list-header-panel -->
    <div class="user-list-header-panel">

      <!-- total-panel -->
      <div class="total-panel">
        <div class="total">총 : <span>{{options.count}}</span>개</div>
      </div>
      <!-- // total-panel -->

      <!-- edit-panel -->
      <div class="edit-panel">
        <form class="search-panel">
          <input class="input-search"
                 type="text"
                 placeholder="이메일 또는 닉네임을 입력해주세요."
                 [(ngModel)]="searchKeyword"
                 [ngModelOptions]="{standalone: true}">
          <button class="btn-search"
                  type="submit"
                  (click)="loadList({page: 1})">
            검색
          </button>
        </form>
        <button class="btn-create"
                type="button"
                (click)="openUserFormModel()">
          <span>추가</span>
        </button>
      </div>
      <!-- // edit-panel -->

    </div>
    <!-- // user-list-header-panel -->

    <!-- user-list-content-panel -->
    <div class="user-list-content-panel">

      <!-- grid-panel -->
      <div class="grid-panel">

        <!-- grid-header-panel -->
        <div class="grid-header-panel" [style.height]="options.headerHeight">
          <div class="header-cell" [style.width]="'10%'">no</div>
          <div class="header-cell" [style.width]="'10%'">권한</div>
          <div class="header-cell" [style.width]="'20%'">이메일</div>
          <div class="header-cell" [style.width]="'10%'">닉네임</div>
          <div class="header-cell" [style.width]="'10%'">계정상태</div>
          <div class="header-cell" [style.width]="'20%'">가입일</div>
          <div class="header-cell" [style.width]="'20%'">Action</div>
        </div>
        <!-- // grid-header-panel -->

        <!-- grid-body-panel -->
        <div class="grid-body-panel" [style.height]="options.bodyHeight">
          <div class="row-panel"
               [style.height]="options.rowHeight"
               *ngFor="let row of options.rows">
            <div class="row-cell" [style.width]="'10%'">{{row.no}}</div>
            <div class="row-cell" [style.width]="'10%'">{{row.role}}</div>
            <div class="row-cell" [style.width]="'20%'">{{row.identifier}}</div>
            <div class="row-cell" [style.width]="'10%'">{{row.nickname}}</div>
            <div class="row-cell" [style.width]="'10%'">{{row.isDeleted == false ? '활성화' : '비활성화'}}</div>
            <div class="row-cell" [style.width]="'20%'">{{row.createdAt | date:"yyyy.MM.dd"}}</div>
            <div class="row-cell" [style.width]="'20%'">
              <button class="btn-detail"
                      type="button"
                      (click)="openUserFormModel(row)">
                상세
              </button>
              <button class="btn-delete"
                      type="button"
                      (click)="toggleActivateUserOnlyAdmin(row)">
                상태변경
              </button>
            </div>
          </div>
        </div>
        <!-- // grid-body-panel -->

        <!-- grid-footer-panel -->
        <div class="grid-footer-panel" [style.height]="options.footerHeight">
          <pager
            [pagerLeftArrowIcon]="options.pagerLeftArrow"
            [pagerRightArrowIcon]="options.pagerRightArrow"
            [pagerPreviousIcon]="options.pagerPrevious"
            [pagerNextIcon]="options.pagerNext"
            [page]="options.page"
            [size]="options.limit"
            [count]="options.count"
            (change)="loadList($event)">
          </pager>
        </div>
        <!-- // grid-footer-panel -->

      </div>

    </div>
    <!-- // user-list-content-panel -->

  </div>
  <!-- // user-list-panel -->

</div>`,
'pages/version/version' : `<!--
/**
 * Created by PHILIP on 10/07/2017
 * As part of NoseWork
 *
 * Copyright (C) Applicat (www.applicat.co.kr) & PHILIP - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by PHILIP <hbnb7894@gmail.com>, 10/07/2017
 *
 */
-->

<div class="version-container">

  <!-- version-panel -->
  <div class="version-panel">

    <!-- version-header-panel -->
    <div class="version-header-panel">
      <h2>버전 관리</h2>
      <div>
        <p>버전 관리는 앱이 업데이트 되었을 때, 업데이트를 하지 않은 사용자에게 업데이트를 알려줄 수 있는 기능입니다.</p>
        <p>하단에 업데이트 된 앱의 버전을 입력하고 변경을 누르면 사용자들이 앱을 켰을 때, 표시됩니다.</p>
      </div>
    </div>
    <!-- // version-header-panel -->

    <!-- version-content-panel -->
    <div class="version-content-panel">

      <!-- form-container -->
      <div class="form-container"
           *ngFor="let version of versions">

        <!-- form -->
        <form>

          <!-- form-field-panel -->
          <div class="form-field-panel">

            <div class="form-field">

              <!-- label-panel -->
              <div class="label-panel">
                <h2>
                  {{version.platform}}<span class="required">*</span>
                </h2>
              </div>
              <!-- // label-panel -->

              <!-- update-panel -->
              <div class="update-panel">
                <div class="input-panel">
                  <div>
                    <label for="packageName">패키지명</label>
                    <input id="packageName"
                           type="text"
                           name="packageName"
                           placeholder="앱 패키지명을 입력해주세요."
                           [(ngModel)]="version.packageName">
                  </div>
                  <div>
                    <label for="version">버전</label>
                    <input id="version"
                           type="text"
                           name="version"
                           placeholder="앱 버전을 입력해주세요."
                           [(ngModel)]="version.version">
                  </div>
                </div>
                <div class="btn-panel">
                  <button type="submit"
                          [disabled]="!isValid(version)"
                          (click)="update(version)">
                    변경
                  </button>
                </div>
              </div>
              <!-- // update-panel -->

            </div>

          </div>
          <!-- // form-field-panel -->

        </form>
        <!-- // form -->

      </div>
      <!-- // form-container -->

    </div>
    <!-- // version-content-panel -->

  </div>
  <!-- // version-panel -->

</div>
`,
'shared/components/daum-map/daum-map' : `<!-- 
/**
 * Created by PHILIP on 10/07/2017
 * As part of NoseWork
 *
 * Copyright (C) Applicat (www.applicat.co.kr) & PHILIP - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by PHILIP <hbnb7894@gmail.com>, 10/07/2017
 *
 */
  -->

<div class="daum-map-container">

  <!-- form-panel -->
  <div class="form-panel">

    <!-- label-panel -->
    <div class="label-panel">
      <h2>주소 찾기</h2>

      <!-- btn-close -->
      <div class="btn-close"
           (click)="dismiss()">
        <i class="material-icons">close</i>
      </div>
      <!-- // btn-close -->

    </div>
    <!-- // label-panel -->

    <!-- content-panel -->
    <div class="content-panel">

      <h3>지명 또는 주소로 검색해주세요.</h3>

      <!-- search-panel -->
      <div class="search-panel">
        <form>

          <div class="input-panel">
            <md-input-container>
              <input mdInput
                     type="text"
                     name="searchKeyword"
                     placeholder="지명 또는 주소를 입력"
                     autocomplete="off"
                     [ngModel]="searchKeyword"
                     (ngModelChange)="searchAddress($event)">
            </md-input-container>
          </div>

        </form>

        <!-- search-result-panel -->
        <div class="search-result-panel"
             *ngIf="searchResults.length != 0">

          <!-- item-panel -->
          <div class="item-panel"
               *ngFor="let place of searchResults"
               (click)="setPlace(place)">
            <i class="material-icons">location_on</i>
            <span>{{place.address}} ({{place.title}})</span>
          </div>
          <!-- // item-panel -->

        </div>
        <!-- // search-result-panel -->

      </div>
      <!-- // search-panel -->

    </div>
    <!-- // content-panel -->

    <!-- btn-panel -->
    <div class="btn-panel">
      <button class="btn-confirm"
              (click)="dismiss()">
        <span>확인</span>
      </button>
    </div>
    <!-- // btn-panel -->

  </div>
  <!-- // form-panel -->

</div>`,
'shared/components/dialog-message/dialog-message.component' : `<!--
 * Created by Yoon Yong (Andy) Shin on 23/12/2016
 * As part of Nosework
 *
 * Copyright (C) Applicat (www.applicat.co.kr) & Yoon Yong (Andy) Shin - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Yoon Yong (Andy) Shin <andy.shin@applicat.co.kr>, 23/12/2016
 *
-->

<div class="dialog-message-header">
  <span>{{title}}</span>
</div>
<div class="dialog-message-content">
  {{message}}
</div>
<div class="dialog-message-footer">
  <button class="btn-cancel"
          *ngIf="type === 'confirm'"
          (click)="cancel()">
    취소
  </button>
  <button class="btn-confirm"
          (click)="confirm()">
    확인
  </button>
</div>`,
'shared/components/datepicker/datepicker.component' : `<div class="ui-kit-calendar-container">
  <button class="calendar-btn"
          [mdMenuTriggerFor]="datePicker">
    <img [src]="btnUrl">
  </button>


  <md-menu class="datepicker-calendar"
           #datePicker="mdMenu"
           [overlapTrigger]="false">
    <div class="ui-kit-calendar-cal-container">
      <div class="ui-kit-calendar-cal-top">
        <div class="year-select-area">
          <button class="remove-outline-btn"
                  (click)="prevYear()">
            <img src="assets/img/ic_calendar_arrow_left.png">
          </button>
          <div>{{showDate.format('YYYY')}}</div>
          <button class="remove-outline-btn"
                  (click)="nextYear()">
            <img src="assets/img/ic_calendar_arrow_right.png">
          </button>
        </div>

        <div class="month-select-area">
          <button class="remove-outline-btn"
                  (click)="prevMonth()">
            <img src="assets/img/ic_calendar_arrow_left.png">
          </button>
          <div>{{showDate.locale('ko').format('MMMM')}}</div>
          <button class="remove-outline-btn"
                  (click)="nextMonth()">
            <img src="assets/img/ic_calendar_arrow_right.png">
          </button>
        </div>
      </div>
      <div class="date-container">
        <div class="ui-kit-calendar-day-names">
          <span>일</span>
          <span>월</span>
          <span>화</span>
          <span>수</span>
          <span>목</span>
          <span>금</span>
          <span>토</span>
        </div>
        <div class="ui-kit-calendar-days">
          <button *ngFor="let d of days; let i = index;"
                  (click)="!d.enabled && selectDate($event, i)"
                  [class.today]="d.today"
                  [class.is-active]="d.selected"
                  [disabled]="d.disabled">
            {{ d.day }}
          </button>
        </div>
      </div>
    </div>
  </md-menu>


</div>
`,
'shared/components/loading/loading.component' : `<!--
/**
 * Created by PHILIP on 11/07/2017
 * As part of NoseWork
 *
 * Copyright (C) Applicat (www.applicat.co.kr) & PHILIP - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by PHILIP <hbnb7894@gmail.com>, 11/07/2017
 *
 */
-->

<div class="loading-container"
     *ngIf="loadingState != 'hide'">
  <div class="content">
    <img [src]="loadingImg">
  </div>
</div>`,
'pages/faq/faq-form/faq-form' : `<!--
/**
 * Created by PHILIP on 12/07/2017
 * As part of NoseWork
 *
 * Copyright (C) Applicat (www.applicat.co.kr) - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by PHILIP <hbnb7894@gmail.com>, 12/07/2017
 *
 */
-->

<div class="modal-close-btn"
     (click)="dismiss()">
  <img src="assets/img/ic_close.png"/>
</div>

<div class="form-container"
     [perfect-scrollbar]="{ suppressScrollX: false, suppressScrollY: false }"
     [style.width]="contentSize.width"
     [style.height]="contentSize.height">

  <form>

    <!-- form-label -->
    <div class="form-label">
      <h2>{{formLabel}}</h2>
    </div>
    <!-- // form-label -->

    <!-- form-field-panel -->
    <div class="form-field-panel">

      <div class="form-field">
        <div class="label-panel">
          <h2>
            질문 - 한글<span class="required">*</span>
          </h2>
        </div>
        <div class="input-panel">
          <input type="text"
                 name="questionKr"
                 placeholder="질문을 한글로 입력해주세요."
                 [(ngModel)]="faq.questionKr">
        </div>
      </div>

      <div class="form-field">
        <div class="label-panel">
          <h2>
            답변 - 한글<span class="required">*</span>
          </h2>
        </div>
        <div class="input-panel">
          <textarea name="answerKr"
                    placeholder="답변을 한글로 입력해주세요."
                    [(ngModel)]="faq.answerKr"></textarea>
        </div>
      </div>

      <div class="form-field">
        <div class="label-panel">
          <h2>
            질문 - 영어<span class="required">*</span>
          </h2>
        </div>
        <div class="input-panel">
          <input type="text"
                 name="questionEn"
                 placeholder="질문을 영어로 입력해주세요."
                 [(ngModel)]="faq.questionEn">
        </div>
      </div>

      <div class="form-field">
        <div class="label-panel">
          <h2>
            답변 - 영어<span class="required">*</span>
          </h2>
        </div>
        <div class="input-panel">
          <textarea name="answerEn"
                    placeholder="답변을 영어로 입력해주세요."
                    [(ngModel)]="faq.answerEn"></textarea>
        </div>
      </div>

    </div>
    <!-- // form-field-panel -->

    <!-- form-button-panel -->
    <div class="form-button-panel">
      <button type="button"
              (click)="dismiss()">
        <span>닫기</span>
      </button>
      <button type="submit"
              [disabled]="!isValid()"
              (click)="submit()">
        <span>저장하기</span>
      </button>
    </div>
    <!-- // form-button-panel -->

  </form>

</div>`,
'pages/genuine/genuine-form/genuine-form' : `<!--
/**
 * Created by PHILIP on 12/07/2017
 * As part of NoseWork
 *
 * Copyright (C) Applicat (www.applicat.co.kr) - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by PHILIP <hbnb7894@gmail.com>, 12/07/2017
 *
 */
-->

<div class="modal-close-btn"
     (click)="dismiss()">
  <img src="assets/img/ic_close.png"/>
</div>

<div class="form-container"
     [perfect-scrollbar]="{ suppressScrollX: false, suppressScrollY: false }"
     [style.width]="contentSize.width"
     [style.height]="contentSize.height">

  <form>

    <!-- form-label -->
    <div class="form-label">
      <h2>정품 인증 상세</h2>
    </div>
    <!-- // form-label -->

    <!-- form-field-panel -->
    <div class="form-field-panel">

      <div class="form-field">
        <div class="label-panel">
          <h2>시리얼넘버</h2>
        </div>
        <div class="readonly-panel">
          <p>{{serial.serialNumber}}</p>
        </div>
      </div>

      <div class="form-field">
        <div class="label-panel">
          <h2>제품명</h2>
        </div>
        <div class="readonly-panel">
          <p>{{serial.productName}}</p>
        </div>
      </div>

      <div class="form-field">
        <div class="label-panel">
          <h2>사용자 이메일</h2>
        </div>
        <div class="readonly-panel">
          <p>{{serial.registered.identifier}}</p>
        </div>
      </div>

      <div class="form-field">
        <div class="label-panel">
          <h2>사용자 닉네임</h2>
        </div>
        <div class="readonly-panel">
          <p>{{serial.registered.nickname}}</p>
        </div>
      </div>

      <div class="form-field">
        <div class="label-panel">
          <h2>정품 인증 등록일</h2>
        </div>
        <div class="readonly-panel">
          <p>{{serial.registeredAt | date:'yyyy.MM.dd'}}</p>
        </div>
      </div>

    </div>
    <!-- // form-field-panel -->

    <!-- form-button-panel -->
    <div class="form-button-panel">
      <button type="button"
              (click)="cancelRegistered()">
        <span>정품 인증 취소</span>
      </button>
      <button type="button"
              (click)="dismiss()">
        <span>닫기</span>
      </button>
    </div>
    <!-- // form-button-panel -->

  </form>

</div>`,
'pages/banner/web-banner/web-banner' : `<!--
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
-->

<div class="web-banner-container">

  <!-- web-banner-list-panel -->
  <div class="web-banner-list-panel">

    <!-- web-banner-list-header-panel -->
    <div class="web-banner-list-header-panel">

      <!-- total-panel -->
      <div class="total-panel">
        <div class="total">총 : <span>{{options.count}}</span>개</div>
      </div>
      <!-- // total-panel -->

      <!-- edit-panel -->
      <div class="edit-panel">
        <form class="search-panel">
          <input class="input-search"
                 type="text"
                 placeholder="URL을 입력해주세요."
                 [(ngModel)]="searchKeyword"
                 [ngModelOptions]="{standalone: true}">
          <button class="btn-search"
                  type="submit"
                  (click)="loadList({page: 1})">
            검색
          </button>
        </form>
        <button class="btn-create"
                type="button"
                (click)="openWebBannerFormModel()">
          <span>추가</span>
        </button>
      </div>
      <!-- // edit-panel -->

    </div>
    <!-- // web-banner-list-header-panel -->

    <!-- web-banner-list-content-panel -->
    <div class="web-banner-list-content-panel">

      <!-- grid-panel -->
      <div class="grid-panel">

        <!-- grid-header-panel -->
        <div class="grid-header-panel" [style.height]="options.headerHeight">
          <div class="header-cell" [style.width]="'10%'">no</div>
          <div class="header-cell" [style.width]="'10%'">배너유형</div>
          <div class="header-cell" [style.width]="'15%'">URL</div>
          <div class="header-cell" [style.width]="'20%'">이미지</div>
          <div class="header-cell" [style.width]="'15%'">등록일</div>
          <div class="header-cell" [style.width]="'20%'">Action</div>
        </div>
        <!-- // grid-header-panel -->

        <!-- grid-body-panel -->
        <div class="grid-body-panel" [style.height]="options.bodyHeight">
          <div class="row-panel"
               [style.height]="options.rowHeight"
               *ngFor="let row of options.rows">
            <div class="row-cell" [style.width]="'10%'">{{row.no}}</div>
            <div class="row-cell" [style.width]="'10%'">{{row.category}}</div>
            <div class="row-cell" [style.width]="'15%'">{{row.url}}</div>
            <div class="row-cell image-panel" [style.width]="'20%'">
              <img [src]="resize(80,row.photo.secure_url, true)"/>
            </div>
            <div class="row-cell" [style.width]="'15%'">{{row.createdAt | date:"yyyy.MM.dd"}}</div>
            <div class="row-cell" [style.width]="'20%'">
              <button class="btn-detail"
                      type="button"
                      (click)="openWebBannerFormModel(row)">
                상세
              </button>
              <button class="btn-delete"
                      type="button"
                      (click)="webBannerRemove(row)">
                삭제
              </button>
            </div>
          </div>
        </div>
        <!-- // grid-body-panel -->

        <!-- grid-footer-panel -->
        <div class="grid-footer-panel" [style.height]="options.footerHeight">
          <pager
            [pagerLeftArrowIcon]="options.pagerLeftArrow"
            [pagerRightArrowIcon]="options.pagerRightArrow"
            [pagerPreviousIcon]="options.pagerPrevious"
            [pagerNextIcon]="options.pagerNext"
            [page]="options.page"
            [size]="options.limit"
            [count]="options.count"
            (change)="loadList($event)">
          </pager>
        </div>
        <!-- // grid-footer-panel -->

      </div>
      <!-- // grid -->

    </div>
    <!-- web-banner-list-content-panel -->

  </div>
  <!-- // web-banner-list-panel -->

</div>`,
'pages/header/change-password-form/change-password-form' : `<!--
/**
 * Created by PHILIP on 12/07/2017
 * As part of NoseWork
 *
 * Copyright (C) Applicat (www.applicat.co.kr) - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by PHILIP <hbnb7894@gmail.com>, 12/07/2017
 *
 */
-->

<div class="modal-close-btn"
     (click)="dismiss()">
  <img src="assets/img/ic_close.png"/>
</div>

<div class="form-container"
     [perfect-scrollbar]="{ suppressScrollX: false, suppressScrollY: false }"
     [style.width]="contentSize.width"
     [style.height]="contentSize.height">

  <form>

    <!-- form-label -->
    <div class="form-label">
      <h2>비밀번호 변경하기</h2>
    </div>
    <!-- // form-label -->

    <!-- form-field-panel -->
    <div class="form-field-panel">

      <div class="form-field">
        <div class="label-panel">
          <h2>
            현재 비밀번호<span class="required">*</span>
          </h2>
        </div>
        <div class="input-panel">
          <input type="password"
                 name="currentPassword"
                 placeholder="현재 비밀번호를 입력해주세요."
                 [(ngModel)]="currentPassword">
        </div>
      </div>

      <div class="form-field">
        <div class="label-panel">
          <h2>
            비밀번호<span class="required">*</span>
          </h2>
          <p>영문, 숫자, 특수문자 포함 8자 ~ 12자 이내</p>
        </div>
        <div class="input-panel">
          <input type="password"
                 name="password"
                 placeholder="비밀번호를 입력해주세요."
                 [(ngModel)]="password">
        </div>
      </div>

      <div class="form-field">
        <div class="label-panel">
          <h2>
            비밀번호 확인<span class="required">*</span>
          </h2>
          <p>영문, 숫자, 특수문자 포함 8자 ~ 12자 이내</p>
        </div>
        <div class="input-panel">
          <input type="password"
                 name="passwordConfirm"
                 placeholder="비밀번호를 한번 더 입력해주세요."
                 [(ngModel)]="passwordConfirm">
        </div>
      </div>

    </div>
    <!-- // form-field-panel -->

    <!-- form-button-panel -->
    <div class="form-button-panel">
      <button type="button"
              (click)="dismiss()">
        <span>닫기</span>
      </button>
      <button type="submit"
              [disabled]="!isValid()"
              (click)="changePassword()">
        <span>저장하기</span>
      </button>
    </div>
    <!-- // form-button-panel -->

  </form>

</div>`,
'pages/invoice/change-status-form/change-status-form' : `<!--
/**
 * Created by PHILIP on 12/07/2017
 * As part of NoseWork
 *
 * Copyright (C) Applicat (www.applicat.co.kr) - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by PHILIP <hbnb7894@gmail.com>, 12/07/2017
 *
 */
-->

<div class="modal-close-btn"
     (click)="dismiss()">
  <img src="assets/img/ic_close.png"/>
</div>

<div class="form-container"
     [perfect-scrollbar]="{ suppressScrollX: false, suppressScrollY: false }">

  <div>

    <!-- form-label -->
    <div class="form-label">
      <h2>주문 상태 변경</h2>
    </div>
    <!-- // form-label -->

    <!-- form-field-panel -->
    <div class="form-field-panel">

      <div class="form-field">
        <div class="input-panel">
          <md-select placeholder="주문상태"
                     [(ngModel)]="selectedStatus">
            <div class="select-change-status">
              <md-option *ngFor="let status of statusList"
                         [value]="status">
                {{status.name}}
              </md-option>
            </div>
          </md-select>
        </div>
      </div>

    </div>
    <!-- // form-field-panel -->

    <!-- form-button-panel -->
    <div class="form-button-panel">
      <button type="button"
              (click)="dismiss()">
        <span>닫기</span>
      </button>
      <button type="submit"
              (click)="submit()">
        <span>변경하기</span>
      </button>
    </div>
    <!-- // form-button-panel -->

  </div>

</div>`,
'pages/product/product-form/product-form' : `<!--
/**
 * Created by PHILIP on 12/07/2017
 * As part of NoseWork
 *
 * Copyright (C) Applicat (www.applicat.co.kr) - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by PHILIP <hbnb7894@gmail.com>, 12/07/2017
 *
 */
-->

<div class="modal-close-btn"
     (click)="dismiss()">
  <img src="assets/img/ic_close.png"/>
</div>

<div class="form-container"
     [perfect-scrollbar]="{ suppressScrollX: false, suppressScrollY: false }"
     [style.width]="contentSize.width"
     [style.height]="contentSize.height">

  <form>

    <!-- form-label -->
    <div class="form-label">
      <h2>{{formLabel}}</h2>
    </div>
    <!-- // form-label -->

    <!-- form-field-panel -->
    <div class="form-field-panel">

      <div class="form-field">
        <div class="label-panel">
          <h2>
            상품명<span class="required">*</span>
          </h2>
        </div>
        <div class="input-panel">
          <input type="text"
                 name="name"
                 placeholder="상품명을 입력해주세요."
                 [(ngModel)]="product.name">
        </div>
      </div>

      <div class="form-field">
        <div class="label-panel">
          <h2>
            간단소개<span class="required">*</span>
          </h2>
        </div>
        <div class="input-panel">
          <input type="text"
                 name="summary"
                 placeholder="간단소개를 입력해주세요."
                 [(ngModel)]="product.summary">
        </div>
      </div>

      <div class="form-field">
        <div class="label-panel">
          <h2>
            품절여부<span class="required">*</span>
            <p>옵션 생성시 옵션 품절상태에 따라 자동으로 조정됩니다.</p>
          </h2>
        </div>
        <div class="input-panel">
          <md-radio-group name="soldOut"
                          [(ngModel)]="product.soldOut">
            <md-radio-button [value]="false">
              재고있음
            </md-radio-button>
            <md-radio-button [value]="true">
              품절
            </md-radio-button>
          </md-radio-group>
        </div>
      </div>

      <div class="form-field">
        <div class="label-panel">
          <h2>
            가격<span class="required">*</span>
          </h2>
        </div>
        <div class="input-panel">
          <input type="number"
                 name="price"
                 placeholder="가격을 입력해주세요."
                 [(ngModel)]="product.price">
        </div>
      </div>

      <div class="form-field">
        <div class="label-panel">
          <h2>할인가격</h2>
        </div>
        <div class="input-panel">
          <input type="number"
                 name="salePrice"
                 placeholder="할인가격을 입력해주세요."
                 [(ngModel)]="product.salePrice">
        </div>
      </div>

      <div class="form-field">
        <div class="label-panel">
          <h2>옵션</h2>
          <p>최대 1개까지 등록가능합니다.</p>
        </div>
        <div class="input-panel">

          <!-- option-panel -->
          <div class="option-panel">

            <!-- option-control-panel -->
            <div class="option-control-panel">
              <div class="btn-optionAdd"
                   (click)="optionAdd()">
                <i class="material-icons">add</i>
                <span>옵션 추가</span>
              </div>
              <div class="btn-optionClear"
                   (click)="optionClear()">
                <i class="material-icons">delete_sweep</i>
                <span>옵션 삭제</span>
              </div>
            </div>
            <!-- // option-control-panel -->

            <!-- option-list-panel -->
            <div class="option-list-panel"
                 *ngIf="product.option">

              <!-- option-content-panel -->
              <div class="option-content-panel">

                <!-- option-input-panel -->
                <div class="option-input-panel">
                  <input type="text"
                         name="optionName"
                         placeholder="옵션명을 입력해주세요."
                         [(ngModel)]="product.option.name"
                         [ngModelOptions]="{standalone: true}">
                </div>
                <!-- // option-input-panel -->

                <!-- property-panel -->
                <div class="property-panel">

                  <!-- property-control-panel -->
                  <div class="property-control-panel">
                    <div class="btn-propertyAdd"
                         (click)="propertyAdd()">
                      <i class="material-icons">add</i>
                      <span>속성 추가</span>
                    </div>
                    <div class="btn-propertyClear"
                         (click)="propertyClear()">
                      <i class="material-icons">delete_sweep</i>
                      <span>속성 전체 삭제</span>
                    </div>
                  </div>
                  <!-- // property-control-panel -->

                  <!-- property-list-panel -->
                  <div class="property-list-panel">

                    <!-- property-content-panel -->
                    <div class="property-content-panel"
                         *ngFor="let property of product.option.properties;let propertyIndex = index;">

                      <!-- property-input-panel -->
                      <div class="property-input-panel">
                        <input type="text"
                               name="propertyName"
                               placeholder="속성명을 입력해주세요."
                               [(ngModel)]="property.name"
                               [ngModelOptions]="{standalone: true}">
                        <md-checkbox [(ngModel)]="property.soldOut"
                                     [ngModelOptions]="{standalone: true}"
                                     (change)="changePropertySoldOut()">
                          <span>품절 여부</span>
                        </md-checkbox>

                        <!-- btn-propertyRemove -->
                        <div class="btn-propertyRemove"
                             (click)="propertyRemove(propertyIndex)">
                          <i class="material-icons">remove</i>
                        </div>
                        <!-- // btn-propertyRemove -->

                      </div>
                      <!-- // property-input-panel -->

                    </div>
                    <!-- // property-content-panel -->

                  </div>
                  <!-- // property-list-panel -->

                </div>
                <!-- // property-panel -->

              </div>
              <!-- // option-content-panel -->

            </div>
            <!-- // option-list-panel -->

          </div>
          <!-- // option-panel -->

        </div>
      </div>

      <div class="form-field">
        <div class="label-panel">
          <div class="field-label">
            <h2>
              상품 사진<span class="required">*</span>
            </h2>
            <p>권장 이미지 사이즈와 비율은 380*380 / 1:1 입니다.</p>
          </div>
        </div>
        <div class="input-panel">
          <div class="image-panel">
            <div class="image-full-dropzone"
                 ng2FileDrop
                 (onFileDrop)="upload($event, 'THUMBNAIL')"
                 [uploader]="uploader"
                 *ngIf="!productPhoto">
              <span>
                클릭 또는 업로드할 사진을 끌어와 추가해주세요!
              </span>
            </div>

            <div class="main-image-preview"
                 *ngIf="productPhoto"
                 (click)="photoRemove(productPhoto)">
              <div class="hover-panel">
                <img src="assets/img/bt_img_remove_hover.png"/>
              </div>
              <img src="{{productPhoto.secure_url}}"/>
            </div>
          </div>
        </div>
      </div>

      <div class="form-field">
        <div class="label-panel">
          <div class="field-label">
            <h2>
              상품 상세<span class="required">*</span>
            </h2>
            <p>권장 이미지 너비는 1,180이며, 너비에 맞게 작업된 이미지를 업로드해주세요.</p>
          </div>
        </div>
        <div class="input-panel">
          <div class="image-panel">
            <div class="image-full-dropzone"
                 ng2FileDrop
                 (onFileDrop)="upload($event, 'DETAIL')"
                 [uploader]="uploader"
                 *ngIf="!detailPhoto">
              <span>
                클릭 또는 업로드할 사진을 끌어와 추가해주세요!
              </span>
            </div>

            <div class="main-image-preview"
                 *ngIf="detailPhoto"
                 (click)="photoRemove(detailPhoto)">
              <div class="hover-panel">
                <img src="assets/img/bt_img_remove_hover.png"/>
              </div>
              <img src="{{detailPhoto.secure_url}}"/>
            </div>
          </div>
        </div>
      </div>

    </div>
    <!-- // form-field-panel -->

    <!-- form-button-panel -->
    <div class="form-button-panel">
      <button type="button"
              (click)="dismiss()">
        <span>닫기</span>
      </button>
      <button type="submit"
              [disabled]="!isValid()"
              (click)="submit()">
        <span>저장하기</span>
      </button>
    </div>
    <!-- // form-button-panel -->

  </form>

</div>`,
'pages/invoice/invoice-form/invoice-form' : `<!--
/**
 * Created by PHILIP on 12/07/2017
 * As part of NoseWork
 *
 * Copyright (C) Applicat (www.applicat.co.kr) - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by PHILIP <hbnb7894@gmail.com>, 12/07/2017
 *
 */
-->

<div class="modal-close-btn"
     (click)="dismiss()">
  <img src="assets/img/ic_close.png"/>
</div>

<div class="form-container"
     [perfect-scrollbar]="{ suppressScrollX: false, suppressScrollY: false }"
     [style.width]="contentSize.width"
     [style.height]="contentSize.height">

  <form>

    <!-- form-label -->
    <div class="form-label">
      <h2>주문 내역 수정</h2>
    </div>
    <!-- // form-label -->

    <!-- form-field-panel -->
    <div class="form-field-panel"
         *ngIf="invoice">

      <div class="form-field">
        <div class="label-panel">
          <h2>구매자 이메일 / 닉네임</h2>
        </div>
        <div class="readonly-panel">
          <p>{{invoice.owner.identifier}} / {{invoice.owner.nickname}}</p>
        </div>
      </div>

      <div class="form-field">
        <div class="label-panel">
          <h2>결제상태</h2>
          <p>상태변경시 실제 결제내역이 취소될 수 있으니 주의바랍니다.</p>
        </div>
        <div class="readonly-panel status-panel">
          <p>{{translateStatus}}</p>
          <div class="btn-openChangeStatusForm"
               (click)="openChangeStatusFormModel()">
            <span>주문상태변경</span>
          </div>
        </div>
      </div>

      <div class="form-field">
        <div class="label-panel">
          <h2>결제방법</h2>
        </div>
        <div class="readonly-panel">
          <p>{{translatePaymentType}}</p>
        </div>
      </div>

      <div class="form-field">
        <div class="label-panel">
          <h2>결제일</h2>
        </div>
        <div class="readonly-panel">
          <p>{{invoice.createdAt | date:"yyyy.MM.dd HH:mm"}}</p>
        </div>
      </div>

      <div class="form-field">
        <div class="label-panel">
          <h2>배송지 정보</h2>
        </div>
        <div class="address-panel">
          <p>
            <span>주소</span>{{invoice.deliveryInfo.addressInfo.address}}
          </p>
          <p>
            <span>상세주소</span>{{invoice.deliveryInfo.addressInfo.detailAddress}}
          </p>
          <p>
            <span>전화번호</span>{{invoice.deliveryInfo.phone}}
          </p>
          <p>
            <span>이름</span>{{invoice.deliveryInfo.name}}
          </p>
          <p>
            <span>요구사항</span>{{invoice.note}}
          </p>
        </div>
      </div>

      <div class="form-field">
        <div class="label-panel">
          <h2>상품 리스트</h2>
        </div>
        <div class="item-panel">
          <div class="item-list-panel">
            <div *ngFor="let item of invoice.itemList">
              <p>
                <span>상품명</span>{{item.product.name}}
              </p>
              <p *ngIf="item.selectedOption">
                <span>옵션</span>{{item.selectedOption.name}} - {{item.selectedOption.property.name}}
              </p>
              <p>
                <span>수량</span>{{item.quantity}}
              </p>
              <p>
                <span>원가</span>{{item.product.price * item.quantity | number}} 원
              </p>
              <p>
                <span>할인가</span>{{item.product.salePrice * item.quantity | number}} 원
              </p>
              <p>
                <span>결제금액</span>{{item.totalAmount | number}} 원
              </p>
            </div>
          </div>
          <div class="total-panel">
            <p>
              <span>총 수량</span>{{invoice.totalQuantity}}
            </p>
            <p>
              <span>배송비</span>{{invoice.deliveryPrice | number}} 원
            </p>
            <p>
              <span>상품 총액</span>{{invoice.totalAmount - invoice.deliveryPrice | number}} 원
            </p>
            <p>
              <span>합계</span>{{invoice.totalAmount | number}} 원
            </p>
          </div>
        </div>
      </div>

    </div>
    <!-- // form-field-panel -->

    <!-- form-button-panel -->
    <div class="form-button-panel">
      <button type="button"
              (click)="dismiss()">
        <span>닫기</span>
      </button>
    </div>
    <!-- // form-button-panel -->

  </form>

</div>`,
'pages/serial/serial-form/serial-form' : `<!--
/**
 * Created by PHILIP on 12/07/2017
 * As part of NoseWork
 *
 * Copyright (C) Applicat (www.applicat.co.kr) - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by PHILIP <hbnb7894@gmail.com>, 12/07/2017
 *
 */
-->

<div class="modal-close-btn"
     (click)="dismiss()">
  <img src="assets/img/ic_close.png"/>
</div>

<div class="form-container"
     [perfect-scrollbar]="{ suppressScrollX: false, suppressScrollY: false }"
     [style.width]="contentSize.width"
     [style.height]="contentSize.height">

  <form>

    <!-- form-label -->
    <div class="form-label">
      <h2>{{formLabel}}</h2>
    </div>
    <!-- // form-label -->

    <!-- upload-type-panel -->
    <div class="upload-type-panel"
         *ngIf="!serialId">
      <md-radio-group [ngModelOptions]="{standalone: true}"
                      [(ngModel)]="uploadType">
        <md-radio-button [value]="'SINGLE'">
          직접입력
        </md-radio-button>
        <md-radio-button [value]="'MULTIPLE'">
          업로드
        </md-radio-button>
      </md-radio-group>
    </div>
    <!-- // upload-type-panel -->

    <!-- form-field-panel -->
    <div class="form-field-panel"
         *ngIf="uploadType == 'SINGLE'">

      <div class="form-field">
        <div class="label-panel">
          <h2>
            시리얼넘버<span class="required">*</span>
          </h2>
        </div>
        <div class="input-panel">
          <input type="text"
                 name="serialNumber"
                 placeholder="시리얼넘버를 입력해주세요."
                 [(ngModel)]="serial.serialNumber">
        </div>
      </div>

      <div class="form-field">
        <div class="label-panel">
          <h2>
            제품명<span class="required">*</span>
          </h2>
        </div>
        <div class="input-panel">
          <input type="text"
                 name="productName"
                 placeholder="제품명을 입력해주세요."
                 [(ngModel)]="serial.productName">
        </div>
      </div>

      <div class="form-field">
        <div class="label-panel">
          <h2>
            상태<span class="required">*</span>
          </h2>
        </div>
        <div class="readonly-panel">
          <p>{{serial.status == 'Ready' ? '등록대기' : '등록완료'}}</p>
        </div>
      </div>

    </div>
    <!-- // form-field-panel -->

    <!-- upload-list-panel -->
    <div class="upload-list-panel"
         *ngIf="uploadType == 'MULTIPLE'">

      <!-- upload-panel -->
      <div class="upload-panel">
        <p>CSV파일: </p>
        <input type="file"
               (change)="uploadCSV($event)">
      </div>
      <!-- // upload-panel -->

      <!-- upload-list-header-panel -->
      <div class="upload-list-header-panel">
        <div>no</div>
        <div>시리얼넘버</div>
        <div>제품명</div>
      </div>
      <!-- // upload-list-header-panel -->

      <!-- upload-list-body-panel -->
      <div class="upload-list-body-panel"
           [perfect-scrollbar]="{ suppressScrollX: false, suppressScrollY: false }">
        <div *ngFor="let serial of uploadSerials;let serialIndex = index;">
          <div>
            {{serialIndex + 1}}
          </div>
          <div>
            {{serial.serialNumber}}
          </div>
          <div>
            {{serial.productName}}
          </div>
        </div>
      </div>
      <!-- // upload-list-body-panel -->

    </div>
    <!-- // upload-list-panel -->

    <!-- form-button-panel -->
    <div class="form-button-panel">
      <button type="button"
              (click)="dismiss()">
        <span>닫기</span>
      </button>
      <button type="submit"
              [disabled]="!isValid()"
              (click)="submit()">
        <span>저장하기</span>
      </button>
    </div>
    <!-- // form-button-panel -->

  </form>

</div>`,
'pages/user/user-form/user-form' : `<!--
/**
 * Created by PHILIP on 12/07/2017
 * As part of NoseWork
 *
 * Copyright (C) Applicat (www.applicat.co.kr) - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by PHILIP <hbnb7894@gmail.com>, 12/07/2017
 *
 */
-->

<div class="modal-close-btn"
     (click)="dismiss()">
  <img src="assets/img/ic_close.png"/>
</div>

<div class="form-container"
     [perfect-scrollbar]="{ suppressScrollX: false, suppressScrollY: false }"
     [style.width]="contentSize.width"
     [style.height]="contentSize.height">

  <form>

    <!-- form-label -->
    <div class="form-label">
      <h2>{{formLabel}}</h2>
    </div>
    <!-- // form-label -->

    <!-- form-field-panel -->
    <div class="form-field-panel">

      <div class="form-field">
        <div class="label-panel">
          <h2>
            권한<span class="required">*</span>
          </h2>
        </div>
        <div class="input-panel">
          <md-radio-group name="role"
                          [(ngModel)]="user.role">
            <md-radio-button [value]="'관리자'">
              관리자
            </md-radio-button>
            <md-radio-button [value]="'사용자'">
              사용자
            </md-radio-button>
          </md-radio-group>
        </div>
      </div>

      <div class="form-field">
        <div class="label-panel">
          <h2>
            이메일<span class="required">*</span>
          </h2>
        </div>
        <div class="input-panel">
          <input type="email"
                 name="email"
                 placeholder="이메일을 입력해주세요."
                 maxlength="256"
                 [readonly]="userId"
                 [(ngModel)]="user.identifier">
        </div>
      </div>

      <div class="form-field">
        <div class="label-panel">
          <h2>
            닉네임<span class="required">*</span>
          </h2>
          <p>2자 ~ 8자 이내</p>
        </div>
        <div class="input-panel">
          <input type="text"
                 name="nickname"
                 minlength="2"
                 maxlength="8"
                 placeholder="닉네임을 입력해주세요."
                 [(ngModel)]="user.nickname">
        </div>
      </div>

      <div class="form-field">
        <div class="label-panel">
          <h2>배송지 정보</h2>
        </div>
        <div class="input-panel">

          <!-- address-panel -->
          <div class="address-panel">
            <div class="search-address-panel">
              <p>주소</p>
              <div>
                <input type="text"
                       name="address"
                       readonly
                       placeholder="검색 주소"
                       [(ngModel)]="address">
                <button class="btn-findAddress"
                        type="button"
                        (click)="openDaumMapForm()">
                  <span>주소 찾기</span>
                </button>
              </div>
              <input type="text"
                     name="detailAddress"
                     placeholder="상세 주소"
                     [(ngModel)]="deliveryInfo.addressInfo.detailAddress">
            </div>

            <div>
              <p>전화번호</p>
              <input type="phone"
                     name="phone"
                     placeholder="'-'없이 입력해주세요."
                     [(ngModel)]="deliveryInfo.phone">
            </div>

            <div>
              <p>이름</p>
              <input type="text"
                     name="name"
                     placeholder="받으시는 분 성함을 입력해주세요."
                     [(ngModel)]="deliveryInfo.name">
            </div>
          </div>
          <!-- // address-panel -->

        </div>
      </div>

      <div class="form-field"
           *ngIf="!userId">
        <div class="label-panel">
          <h2>
            비밀번호<span class="required">*</span>
          </h2>
          <p>영문, 숫자, 특수문자 포함 8자 ~ 12자 이내</p>
        </div>
        <div class="input-panel">
          <input type="password"
                 name="password"
                 placeholder="비밀번호를 입력해주세요."
                 [(ngModel)]="password">
        </div>
      </div>

      <div class="form-field"
           *ngIf="!userId">
        <div class="label-panel">
          <h2>
            비밀번호 확인<span class="required">*</span>
          </h2>
          <p>영문, 숫자, 특수문자 포함 8자 ~ 12자 이내</p>
        </div>
        <div class="input-panel">
          <input type="password"
                 name="password"
                 placeholder="비밀번호를 한번 더 입력해주세요."
                 [(ngModel)]="passwordConfirm">
        </div>
      </div>

      <div class="form-field"
           *ngIf="userId">
        <div class="label-panel">
          <h2>
            비밀번호 초기화 요청 횟수<span class="required">*</span>
          </h2>
          <p>하루 최대 5회 요청 가능</p>
        </div>
        <div class="readonly-panel">
          <p>{{user.passwordResetCounter}}</p>
        </div>
      </div>

      <div class="form-field"
           *ngIf="userId">
        <div class="label-panel">
          <h2>
            계정상태<span class="required">*</span>
          </h2>
        </div>
        <div class="readonly-panel">
          <p>{{user.isDeleted == false ? '활성화' : '비활성화'}}</p>
        </div>
      </div>

      <div class="form-field"
           *ngIf="userId">
        <div class="label-panel">
          <h2>
            가입일<span class="required">*</span>
          </h2>
        </div>
        <div class="readonly-panel">
          <p>{{user.createdAt | date:"yyyy.MM.dd"}}</p>
        </div>
      </div>

    </div>
    <!-- // form-field-panel -->

    <!-- form-button-panel -->
    <div class="form-button-panel">
      <button type="button"
              (click)="dismiss()">
        <span>닫기</span>
      </button>
      <button type="button"
              (click)="resetPasswordResetLimit()">
        <span>비밀번호 찾기 초기화</span>
      </button>
      <button type="submit"
              [disabled]="!isValid()"
              (click)="submit()">
        <span>저장하기</span>
      </button>
    </div>
    <!-- // form-button-panel -->

  </form>

</div>`,
'pages/banner/store-banner/store-banner' : `<!--
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
-->

<div class="store-banner-container">

  <!-- store-banner-list-panel -->
  <div class="store-banner-list-panel">

    <!-- store-banner-list-header-panel -->
    <div class="store-banner-list-header-panel">

      <!-- total-panel -->
      <div class="total-panel">
        <div class="total">총 : <span>{{options.count}}</span>개</div>
      </div>
      <!-- // total-panel -->

      <!-- edit-panel -->
      <div class="edit-panel">
        <form class="search-panel">
          <input class="input-search"
                 type="text"
                 placeholder="URL을 입력해주세요."
                 [(ngModel)]="searchKeyword"
                 [ngModelOptions]="{standalone: true}">
          <button class="btn-search"
                  type="submit"
                  (click)="loadList({page: 1})">
            검색
          </button>
        </form>
        <button class="btn-create"
                type="button"
                (click)="openStoreBannerFormModel()">
          <span>추가</span>
        </button>
      </div>
      <!-- // edit-panel -->

    </div>
    <!-- // store-banner-list-header-panel -->

    <!-- store-banner-list-content-panel -->
    <div class="store-banner-list-content-panel">

      <!-- grid-panel -->
      <div class="grid-panel">

        <!-- grid-header-panel -->
        <div class="grid-header-panel" [style.height]="options.headerHeight">
          <div class="header-cell" [style.width]="'10%'">no</div>
          <div class="header-cell" [style.width]="'10%'">배너유형</div>
          <div class="header-cell" [style.width]="'15%'">URL</div>
          <div class="header-cell" [style.width]="'20%'">이미지</div>
          <div class="header-cell" [style.width]="'15%'">등록일</div>
          <div class="header-cell" [style.width]="'20%'">Action</div>
        </div>
        <!-- // grid-header-panel -->

        <!-- grid-body-panel -->
        <div class="grid-body-panel" [style.height]="options.bodyHeight">
          <div class="row-panel"
               [style.height]="options.rowHeight"
               *ngFor="let row of options.rows">
            <div class="row-cell" [style.width]="'10%'">{{row.no}}</div>
            <div class="row-cell" [style.width]="'10%'">{{row.category}}</div>
            <div class="row-cell" [style.width]="'15%'">{{row.url}}</div>
            <div class="row-cell image-panel" [style.width]="'20%'">
              <img [src]="resize(80,row.photo.secure_url, true)"/>
            </div>
            <div class="row-cell" [style.width]="'15%'">{{row.createdAt | date:"yyyy.MM.dd"}}</div>
            <div class="row-cell" [style.width]="'20%'">
              <button class="btn-detail"
                      type="button"
                      (click)="openStoreBannerFormModel(row)">
                상세
              </button>
              <button class="btn-delete"
                      type="button"
                      (click)="storeBannerRemove(row)">
                삭제
              </button>
            </div>
          </div>
        </div>
        <!-- // grid-body-panel -->

        <!-- grid-footer-panel -->
        <div class="grid-footer-panel" [style.height]="options.footerHeight">
          <pager
            [pagerLeftArrowIcon]="options.pagerLeftArrow"
            [pagerRightArrowIcon]="options.pagerRightArrow"
            [pagerPreviousIcon]="options.pagerPrevious"
            [pagerNextIcon]="options.pagerNext"
            [page]="options.page"
            [size]="options.limit"
            [count]="options.count"
            (change)="loadList($event)">
          </pager>
        </div>
        <!-- // grid-footer-panel -->

      </div>
      <!-- // grid -->

    </div>
    <!-- store-banner-list-content-panel -->

  </div>
  <!-- // store-banner-list-panel -->

</div>`,
'pages/banner/web-banner/web-banner-form/web-banner-form' : `<!--
/**
 * Created by PHILIP on 12/07/2017
 * As part of NoseWork
 *
 * Copyright (C) Applicat (www.applicat.co.kr) - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by PHILIP <hbnb7894@gmail.com>, 12/07/2017
 *
 */
-->

<div class="modal-close-btn"
     (click)="dismiss()">
  <img src="assets/img/ic_close.png"/>
</div>

<div class="form-container"
     [perfect-scrollbar]="{ suppressScrollX: false, suppressScrollY: false }"
     [style.width]="contentSize.width"
     [style.height]="contentSize.height">

  <form>

    <!-- form-label -->
    <div class="form-label">
      <h2>{{formLabel}}</h2>
    </div>
    <!-- // form-label -->

    <!-- form-field-panel -->
    <div class="form-field-panel">

      <div class="form-field">
        <div class="label-panel">
          <h2>
            URL<span class="required">*</span>
          </h2>
        </div>
        <div class="input-panel">
          <input type="text"
                 name="url"
                 placeholder="http:// 또는 https:// 모두 함께 입력해주세요."
                 [(ngModel)]="webBanner.url">
        </div>
      </div>

      <div class="form-field">
        <div class="label-panel">
          <div class="field-label">
            <h2>
              배너 사진<span class="required">*</span>
            </h2>
            <p>권장 이미지 사이즈와 비율은 1920*800 / 2.4:1 입니다.</p>
          </div>
        </div>
        <div class="input-panel">
          <div class="image-panel">
            <div class="image-full-dropzone"
                 ng2FileDrop
                 (onFileDrop)="upload($event)"
                 [uploader]="uploader"
                 *ngIf="uploader.queue.length < 1 && !webBanner.photo">
              <span>
                클릭 또는 업로드할 사진을 끌어와 추가해주세요!
              </span>
            </div>

            <div class="main-image-preview"
                 *ngIf="uploader.queue[0] &&
                 uploader.queue[0].result &&
                 uploader.queue[0].result.file.secure_url &&
                 !webBanner.photo">
              <span *ngIf="uploader.queue[0]
                 && !uploader.queue[0].result">
                업로드 중...
              </span>
            </div>

            <div class="main-image-preview"
                 *ngIf="webBanner.photo"
                 (click)="photoRemove()">
              <div class="hover-panel">
                <img src="assets/img/bt_img_remove_hover.png"/>
              </div>
              <img src="{{webBanner.photo.secure_url}}"/>
            </div>
          </div>
        </div>
      </div>

    </div>
    <!-- // form-field-panel -->

    <!-- form-button-panel -->
    <div class="form-button-panel">
      <button type="button"
              (click)="dismiss()">
        <span>닫기</span>
      </button>
      <button type="submit"
              [disabled]="!isValid()"
              (click)="submit()">
        <span>저장하기</span>
      </button>
    </div>
    <!-- // form-button-panel -->

  </form>

</div>`,
'pages/banner/store-banner/store-banner-form/store-banner-form' : `<!--
/**
 * Created by PHILIP on 12/07/2017
 * As part of NoseWork
 *
 * Copyright (C) Applicat (www.applicat.co.kr) - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by PHILIP <hbnb7894@gmail.com>, 12/07/2017
 *
 */
-->

<div class="modal-close-btn"
     (click)="dismiss()">
  <img src="assets/img/ic_close.png"/>
</div>

<div class="form-container"
     [perfect-scrollbar]="{ suppressScrollX: false, suppressScrollY: false }"
     [style.width]="contentSize.width"
     [style.height]="contentSize.height">

  <form>

    <!-- form-label -->
    <div class="form-label">
      <h2>{{formLabel}}</h2>
    </div>
    <!-- // form-label -->

    <!-- form-field-panel -->
    <div class="form-field-panel">

      <div class="form-field">
        <div class="label-panel">
          <h2>
            URL<span class="required">*</span>
          </h2>
        </div>
        <div class="input-panel">
          <input type="text"
                 name="url"
                 placeholder="http:// 또는 https:// 모두 함께 입력해주세요."
                 [(ngModel)]="storeBanner.url">
        </div>
      </div>

      <div class="form-field">
        <div class="label-panel">
          <div class="field-label">
            <h2>
              배너 사진<span class="required">*</span>
            </h2>
            <p>권장 이미지 사이즈와 비율은 1200*480 / 2.5:1 입니다.</p>
          </div>
        </div>
        <div class="input-panel">
          <div class="image-panel">
            <div class="image-full-dropzone"
                 ng2FileDrop
                 (onFileDrop)="upload($event)"
                 [uploader]="uploader"
                 *ngIf="uploader.queue.length < 1 && !storeBanner.photo">
              <span>
                클릭 또는 업로드할 사진을 끌어와 추가해주세요!
              </span>
            </div>

            <div class="main-image-preview"
                 *ngIf="uploader.queue[0] &&
                 uploader.queue[0].result &&
                 uploader.queue[0].result.file.secure_url &&
                 !storeBanner.photo">
              <span *ngIf="uploader.queue[0]
                 && !uploader.queue[0].result">
                업로드 중...
              </span>
            </div>

            <div class="main-image-preview"
                 *ngIf="storeBanner.photo"
                 (click)="photoRemove()">
              <div class="hover-panel">
                <img src="assets/img/bt_img_remove_hover.png"/>
              </div>
              <img src="{{storeBanner.photo.secure_url}}"/>
            </div>
          </div>
        </div>
      </div>

    </div>
    <!-- // form-field-panel -->

    <!-- form-button-panel -->
    <div class="form-button-panel">
      <button type="button"
              (click)="dismiss()">
        <span>닫기</span>
      </button>
      <button type="submit"
              [disabled]="!isValid()"
              (click)="submit()">
        <span>저장하기</span>
      </button>
    </div>
    <!-- // form-button-panel -->

  </form>

</div>`,
}
export function getTemplate(id){return templates[id];}