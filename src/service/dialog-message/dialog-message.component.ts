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

// Angular
import { Component } from "@angular/core";
import { MdDialogRef } from "@angular/material";

// Angular Third Party Lib

// Project Sources
// import { getTemplate } from "../../../shared/templates";

@Component({
  selector: 'dialog-message',
  templateUrl: './dialog-message.component.html',
  styleUrls: ['./dialog-message.scss']
})
export class DialogMessage {

  type;

  title;
  message;

  constructor(public dialogRef: MdDialogRef<DialogMessage>) {}

  /*****************************
   *         life cycle
   *****************************/

  ngOnInit() {}

  /*****************************
   *        util functions
   *****************************/

  confirm() {
    this.dialogRef.close(true);
  }

  cancel() {
    this.dialogRef.close(false);
  }
}
