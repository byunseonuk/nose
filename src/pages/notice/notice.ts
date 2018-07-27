import { Component, OnInit } from "@angular/core";
import { Appservice } from '../../service/app.service';
import { NoticeForm } from './notice-form/notice-form';
import {NoticeService} from '../../service/notice.service';
import { DialogService } from "../../service/dialog-message/dialog-message.service";
import {MdDialog, MdDialogConfig, MdDialogRef} from "@angular/material";

@Component({
  selector: 'notice',
  templateUrl: './notice.html',
  //styleUrls: ['./notice.scss']
})
 
export class Notice extends OnInit{
  options={
    noticelist:[],
    limit:8,
    page:1,
    count:null
  }
  dialogNoticeRef: MdDialogRef<NoticeForm>;
  config: MdDialogConfig = new MdDialogConfig();
  auth;
  
  constructor(private mdDialog: MdDialog,
              private appservice:Appservice,
              private noticeservice:NoticeService,
              private dialogService:DialogService){
    super();
  }
  
  ngOnInit(){
    if(this.appservice.getlog()==='admin'){
      this.auth=true;
    }else {
      this.auth=false;
    }
    this.getNoticeList();
  }
  openNoticeFormModel(notice?) {
    this.dialogService.noticeformModal(this.config);
    this.config.disableClose = true;

    this.dialogNoticeRef = this.mdDialog.open(NoticeForm, this.config);
    if (notice)
      this.dialogNoticeRef.componentInstance.noticeId = notice._id;

    this.dialogNoticeRef.afterClosed()
      .subscribe((result) => {
        this.getNoticeList();
      });
  }
  getNoticeList(){
    let skip = 0;
    let params: any = {
      query: {isDeleted: false,},
      //limit: 8,
     // skip: skip,
      sort: {createdAt: -1}
    };
    this.noticeservice.find(params)
      .subscribe(
        (noticesWrapper) => {
        // _.forEach(productsWrapper['notices'], (product, index) => {
        //   product['no'] = skip + index + 1;
        // });
        noticesWrapper['notices'].forEach((notice,index)=>{
          notice['no'] = skip+index+1;
        });

          this.options['noticelist'] = noticesWrapper['notices'];
          this.options['count'] = noticesWrapper['total'];

        },
        (err) => {
          let subTitle = '';
          switch (err.status) {
            case 500:
              subTitle = '서버에러';
              break;
            default:
              subTitle = '잘못된 요청입니다.';
              break;
          }
        }
      );
   }
   opendetail(notice){
     this.noticeservice.setdetail(notice._id);
   }
}