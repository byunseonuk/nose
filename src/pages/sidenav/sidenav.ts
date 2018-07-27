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

// Export Lib
declare var _;

// Angular
import {Component, OnInit, NgZone} from '@angular/core';
import {Router} from "@angular/router";

// Angular Third Party Lib
import {Observable} from "rxjs";

// Project Sources
import {SidenavService} from "../../service/sidenav.service";

enum SIDE_NAV_STATUS {
  OPENED,
  HALF_OPENED
}

@Component({
  selector: 'sidenav',
  templateUrl: './sidenav.html',
  styleUrls: ['./sidenav.scss']
})

export class Sidenav implements OnInit {

  state: SIDE_NAV_STATUS;
  side_nav_status = SIDE_NAV_STATUS;

  constructor(private router: Router,
              public ngZone: NgZone,
              public sidenavService: SidenavService) {
  }

  /*****************************
   *         life cycle
   *****************************/

  ngOnInit() {
    this.state = SIDE_NAV_STATUS.OPENED;

    this.sidenavService.onSideStateChange
      .subscribe((param) => {
        this.state = param;
      });

    Observable.fromEvent(window, 'resize')
      .debounceTime(300)
      .subscribe((e) => {
        if (window.innerWidth < 1280)
          this.sidenavService.onSideStateChange.emit(SIDE_NAV_STATUS.HALF_OPENED);
        else
          this.sidenavService.onSideStateChange.emit(SIDE_NAV_STATUS.OPENED);
      });
  }

  /*****************************
   *        util functions
   *****************************/

  navigate(url) {
    this.ngZone.run(() => {
      this.router.navigate([url]);
    });
  }

  isActiveUrl(url) {
    return this.router.url === url;
  }
}
