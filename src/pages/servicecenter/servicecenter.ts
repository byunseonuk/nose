import { Component, OnInit} from '@angular/core';


@Component({
    selector: 'servicecenter',
    templateUrl: './servicecenter.html',
    styleUrls: ['./servicecenter.css']
})
export class ServiceCenter implements OnInit {

    pageNumber = 'a';
    constructor(){}
    ngOnInit(){
    }

    test(text){
        this.pageNumber = text;
    }
}