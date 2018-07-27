import { Component, OnInit } from "@angular/core";
import { Appservice } from '../../../service/app.service';
import { NoticeService } from '../../../service/notice.service';
import { MdDialogRef } from "@angular/material";
@Component({
  selector: 'notice-form',
  templateUrl: './notice-form.html'
})
 
export class NoticeForm extends OnInit{
  notice;
  noticeId;
  constructor(private appservice:Appservice,
              private noticeservice:NoticeService,
              public dialogRef: MdDialogRef<NoticeForm>){
    super();
  }
  ngOnInit(){
    this.notice={
      title:'',
      contents:'',
      isDeleted:false
    };
    if(this.noticeId)
      this.loadnotice();
    
  }
  complete(){
    if(!this.noticeId)
      this.create();
    else{
      this.update();
    }
  }

  loadnotice(){
    this.noticeservice.findOne({query: {_id: this.noticeId}})
      .subscribe((noticeWrapper)=>{
          this.notice = noticeWrapper['notice'];
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

  create(){
    this.noticeservice.writenotice(this.notice)
    .finally(()=>{
      
    })
    .subscribe(()=>{
      this.dismiss();
    });
  }

  update(){
    this.noticeservice.updatenotice(this.notice)
    .finally(()=>{
      
    })
    .subscribe(()=>{
      this.dismiss();
    });
  }
  dismiss(){
      this.dialogRef.close();
  }
}