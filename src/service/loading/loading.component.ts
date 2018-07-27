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

// Angular
import {Component, Input} from "@angular/core";

// Project Sources
import {DialogService} from "../dialog-message/dialog-message.service";

@Component({
  selector: 'loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']

})
export class LoadingComponent {

  loadingImg;
  loadingState = 'hide';

  constructor(private dialogService: DialogService) {}

  /*****************************
   *         life cycle
   *****************************/

  ngOnInit() {
    this.setEvents();
  }

  /*****************************
   *        util functions
   *****************************/

  setEvents() {
    this.dialogService.loadingSubject
      .subscribe((loadingState:string)=> {
        this.loadingState = loadingState;
        switch(loadingState){
          case 'spinner':
            this.loadingImg = '../../assets/img/header_symbol.png';
            break;
          default:
            break;
        }
      });
  }

}
