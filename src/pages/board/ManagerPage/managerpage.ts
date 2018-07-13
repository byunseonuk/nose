import { Component, OnInit} from '@angular/core';
import { TestData } from '../mock-testdata';


@Component({
    selector: 'managerpage',
    templateUrl: './managerpage.html',
    styleUrls:['./managerpage.css']
})
export class ManagerPage implements OnInit {

    testdata = TestData;

    constructor(){}
    ngOnInit(){
    }
}