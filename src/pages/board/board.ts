import { Component, OnInit} from '@angular/core';


@Component({
    selector: 'board',
    templateUrl: './board.html',
    styleUrls: ['./board.css']
})
export class Board implements OnInit {

    pageNumber = 'a';
    constructor(){}
    ngOnInit(){
    }

    test(text){
        this.pageNumber = text;
    }
}