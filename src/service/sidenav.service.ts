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
import {Injectable, EventEmitter} from "@angular/core";

@Injectable()
export class SidenavService {

  onSideStateChange: EventEmitter<any>;

  constructor() {
    this.onSideStateChange = new EventEmitter();
  }
}
