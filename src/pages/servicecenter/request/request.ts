import { Component, OnInit} from '@angular/core';



@Component({
    selector: 'request',
    templateUrl: './request.html',
    styleUrls: ['./request.css']
})
export class Request implements OnInit {


    abc=false;
    constructor(){}
    ngOnInit(){
    }
    modifydisplay(text){
        this.abc=text;
    }
    
    
}