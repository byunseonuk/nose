import { Component, OnInit, HostListener} from '@angular/core';
import {throttleable} from "../../../service/util";
import { TestData } from '../mock-testdata';
import { AuthService } from '../../../service/auth.service';
import { DialogService } from '../../../service/dialog-message/dialog-message.service';
import { Appservice } from '../../../service/app.service';




@Component({
    selector: 'mypage',
    templateUrl: './mypage.html',
    styleUrls:['./mypage.scss']
})
export class Mypage implements OnInit {
    
    currentPassword;
    password;
    passwordConfirm;
    testdata = TestData;
    shop;
    companyaddr;
    testshop;
    params
    constructor(private appService: Appservice,
                private dialogService: DialogService,
                private authService: AuthService){}
    ngOnInit(){
      this.shop = {
        tel:'',
        password:''
      };

      this.companyaddr= {
        addressInfo: {
          zipCode: '',
          address: '',
          detailAddress: ''
        },
        phone: null,
        name: ''
      };
      this.params={
        _id:''
      };
      //his.testshop = this.shopService.findOne();
    }

    @HostListener('window:resize')
    @throttleable(5)

    isValid() {
        let regExpPassword = /^.*(?=^.{8,12}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[*~`!^\-_+@\#$%&\=\(\)]).*$/;

        if (!this.currentPassword || this.currentPassword == '' || !regExpPassword.test(this.currentPassword))
            return false;
        else if(!this.password || this.password == '' || !regExpPassword.test(this.password))
            return false;
        else if(!this.passwordConfirm || this.passwordConfirm == '' || this.password != this.passwordConfirm)
            return false;
        else
            return true;
         //return true;
    }

    changeInfo(){
      
    }

    
}