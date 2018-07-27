
declare var _;
declare var daum;

// Angular
import {Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import {MdDialogRef} from "@angular/material";

// Project Sources

@Component({
  selector: 'daum-map',
  templateUrl: 'daum-map.html',
  styleUrls: ['daum-map.scss']
})
export class DaumMap implements OnInit {

  //place search service
  placesService;
  searchResults;

  searchKeyword;
  selectPlace;

  constructor(public dialogRef: MdDialogRef<DaumMap>) {}

  /*****************************
   *         life cycle
   *****************************/

  ngOnInit(){
    this.placesService = new daum.maps.services.Places();
    this.searchResults = [];

    this.searchKeyword = '';
    this.selectPlace = null;
  }

  /*****************************
   *        util functions
   *****************************/
  searchAddress(keyword) {
    if(keyword != "") {
      this.searchResults = [];
      let callback = function(status, result) {
        if (status === daum.maps.services.Status.OK) {
          this.searchResults = result.places;
        }
      };
      //*.bind(this) --> closer로 placesService의 scope이 아닌 현재 ts의 scope을 적용
      this.placesService.keywordSearch(keyword, callback.bind(this));
    }
  }

  setPlace(place) {
    this.searchResults = [];
    this.searchKeyword = '';

    if(place.zipcode)
     this.searchKeyword = '(' + place.zipcode + ') ';
    this.searchKeyword += place.address;

    this.selectPlace = place;
  }

  dismiss() {
    this.dialogRef.close({place: this.selectPlace});
  }
}
