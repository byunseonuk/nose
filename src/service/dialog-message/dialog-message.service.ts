/**
 * Created by Yoon Yong (Andy) Shin on 23/12/2016
 * As part of Nosework
 *
 * Copyright (C) Applicat (www.applicat.co.kr) & Yoon Yong (Andy) Shin - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Yoon Yong (Andy) Shin <andy.shin@applicat.co.kr>, 23/12/2016
 *
 */

// Browser Lib
import {Subject} from "rxjs/Subject";

// Angular
import {Injectable} from "@angular/core";
import {MdDialog, MdDialogConfig, MdDialogRef} from "@angular/material";

// Project Sources
import {MODAL_HEIGHT} from "../util";
import {DialogMessage} from "./dialog-message.component";

@Injectable()
export class DialogService {

  dialogRef: MdDialogRef<DialogMessage>;
  config: MdDialogConfig = new MdDialogConfig();
  loadingSubject = new Subject();

  constructor(public dialog: MdDialog) {
    // if (modalHeight < 820)
    this.config['height'] = 'auto';

    // if (modalWidth < 820)
    this.config['width'] = '600px';
  }

  /*****************************
   *        util functions
   *****************************/

  confirm(title, message) {
    this.dialogRef = this.dialog.open(DialogMessage, this.config);
    this.dialogRef.componentInstance.type = 'confirm';
    this.dialogRef.componentInstance.title = title;
    this.dialogRef.componentInstance.message = message;

    return this.dialogRef.afterClosed();
  }

  message(title, message) {
    this.dialogRef = this.dialog.open(DialogMessage, this.config);
    this.dialogRef.componentInstance.title = title;
    this.dialogRef.componentInstance.message = message;

    return this.dialogRef.afterClosed();
  }

  resizeModal(config) {
    config.disableClose = false;
    config['width'] = '900px';
    config['height'] = '820px';
  }

  calcContentSize() {
    let width = '100%';
    let height: any = window.innerHeight;

    if (height < MODAL_HEIGHT)
      height = height + 'px';
    else
      height = MODAL_HEIGHT + 'px';

    return {
      width: width,
      height: height
    }
  }

}