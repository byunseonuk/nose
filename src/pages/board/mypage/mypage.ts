import { Component, OnInit} from '@angular/core';
import { TestData } from '../mock-testdata';


@Component({
    selector: 'mypage',
    templateUrl: './mypage.html',
    styleUrls:['./mypage.css']
})
export class Mypage implements OnInit {

    testdata = TestData;

    constructor(){}
    ngOnInit(){
    }
}