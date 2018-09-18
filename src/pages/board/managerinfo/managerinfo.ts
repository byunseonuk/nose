import { Component, OnInit} from '@angular/core';
import { TestData } from '../mock-testdata';
import { Appservice } from '../../../service/app.service';
import { DialogService } from '../../../service/dialog-message/dialog-message.service';
import { ShopService } from '../../../service/shop.service';


@Component({
    selector: 'managerinfo',
    templateUrl: './managerinfo.html',
    styleUrls: ['./managerinfo.css']
})
export class ManagerInfo implements OnInit {
    managerInfo;
    constructor(private appService: Appservice,
                private shopService: ShopService,
                private dialogService: DialogService){}
    ngOnInit(){
        this.managerInfo ={
            manager1:{
              name:'',
              tel:'',
              email:'',
              phone:''
            },
            manager2:{
              name:'',
              tel:'',
              email:'',
              phone:''
            },
            noseworkmanager:{
              name:'',
              tel:'',
              email:'',
              phone:''
            }
          };
      this.shopService.findOne({query:{_id:this.appService.shop._id}})
          .subscribe(
            (shopWrapper)=>{
              if(shopWrapper)
                this.managerInfo = shopWrapper['shop'].managerInfo;
          });
    }

}