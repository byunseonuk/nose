import { Component, OnInit } from "@angular/core";
import { Appservice } from '../../../service/app.service';
import { NoticeService } from "../../../service/notice.service";
import { DialogService } from "service/dialog-message/dialog-message.service";
import {MdDialog, MdDialogConfig, MdDialogRef} from "@angular/material";
import { NoticeForm } from "../notice-form/notice-form";

@Component({
  selector: 'noticedetail',
  templateUrl: './noticedetail.html',
  //styleUrls: ['./noticedetail.scss']
})
 
export class NoticeDetail extends OnInit{
  noticeid;
  auth;
  notice;
  dialogNoticeRef: MdDialogRef<NoticeForm>;
  config: MdDialogConfig = new MdDialogConfig();
  constructor(private mdDialog: MdDialog,
              private appservice:Appservice,
              private noticeservice:NoticeService,
              private dialogService:DialogService){
    super();
  }
  ngOnInit(){
    this.noticeid =this.noticeservice.getdetail(); 
    this.notice ={
      title:'',
      contents:''
    }
    if(this.appservice.getlog()==='admin'){
      this.auth=true;
    }else {
      this.auth=false;
    }
    this.loadNotice();
    
  }
  loadNotice(){
    this.noticeservice.findOne({query: {_id: this.noticeid}})
      .subscribe((noticeWrapper)=>{
          this.notice = noticeWrapper['notice'];
          document.getElementById('contents').innerHTML=this.notice['contents'];
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
          // this.dialogService.message("알림", subTitle);
        }
      );
  }

  openNoticeFormModel(notice?) {
    this.dialogService.noticeformModal(this.config);
    this.config.disableClose = true;

    this.dialogNoticeRef = this.mdDialog.open(NoticeForm, this.config);
    if (notice)
      this.dialogNoticeRef.componentInstance.noticeId = notice._id;

    this.dialogNoticeRef.afterClosed()
      .subscribe((result) => {
        this.loadNotice();
    });
  }
}