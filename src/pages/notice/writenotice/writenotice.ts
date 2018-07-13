import { Component, OnInit } from "@angular/core";
import { Appservice } from '../../../service/app.service';
import { NoticeForm } from '../../../tmpdata/noticeform';
@Component({
  selector: 'writenotice',
  templateUrl: './writenotice.html',
  styleUrls: ['./writenotice.scss']
})
 
export class Writenotice extends OnInit{
  noticetext;
  noticetitle;
  notice;

  constructor(private appservice:Appservice){
    super();
  }
  ngOnInit(){
    this.notice = new NoticeForm();
  }
  complete(){
    this.notice.number = 1;
    this.notice.title = this.noticetitle;
    this.notice.contents = this.noticetext;
    this.notice.date = new Date().toLocaleDateString();
    this.appservice.setwritenotice(this.notice);
  }
}