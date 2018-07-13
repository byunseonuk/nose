import { Component, OnInit} from '@angular/core';
import { testdata } from '../../testdata';
import { TestData } from '../../mock-testdata';

@Component({
    selector: 'authmypage',
    templateUrl: './authmypage.html',
    styleUrls:['./authmypage.css']
})
export class AuthMypage implements OnInit {
    check = 'false';
    loginInfo;
    testdata;
    constructor(){
    }
    ngOnInit(){
        this.testdata=TestData;
        
        
        console.log(this.testdata[0].password);
        this.loginInfo = {
            identifier: '',
            pw: ''
        };
    }

    login(){
        if(this.loginInfo['pw']==this.testdata[0].password){
            this.check = 'True';
        }
    }
}