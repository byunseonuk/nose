import { Component, OnInit } from "@angular/core";
import { NoticeData } from '../../tmpdata/noticedata';
import { Appservice } from '../../service/app.service';
import { NoticeForm } from '../../tmpdata/noticeform';
@Component({
  selector: 'noticelist',
  templateUrl: './noticelist.html',
  styleUrls: ['./noticelist.scss']
})
 
export class Noticelist extends OnInit{
  ngOnInit(){
    this.noticedata=NoticeData;
    if(this.appservice.getlog()==='admin'){
      this.auth=true;
    }else {
      this.auth=false;
    }
  }
  constructor(private appservice:Appservice){
    super();
  }
  noticedata=[];
  notice:NoticeForm;
  auth;
  setnotice(number,title,date,contents){
    console.log(number);
    console.log(title);
    console.log(date);
    console.log(contents);
    this.notice=new NoticeForm(); 
    this.notice.number = number;
    this.notice.title = title;
    this.notice.date = date;
    this.notice.contents = contents;
    this.appservice.setnotice(this.notice);
  }
}