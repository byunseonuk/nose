import { Component, OnInit } from "@angular/core";
import { NoticeForm } from '../../tmpdata/noticeform';
import { NoticeData } from '../../tmpdata/noticedata';
import { Appservice } from '../../service/app.service';

@Component({
  selector: 'notice',
  templateUrl: './notice.html',
  styleUrls: ['./notice.scss']
})
 
export class Notice extends OnInit{
  ngOnInit(){
    this.notice = this.appservice.getnotice(); 
    //this.notice = this.appservice.getwritenotice();
    // var contents=document.getElementById('contents');
    // contents.innerHTML=this.notice['contents'];
    // this.title = this.notice.title;
    // this.contents = this.notice.contents;
    // this.date = this.notice.date;
  }
  constructor(public appservice:Appservice){
    super();
  }
  notice:NoticeForm;
  title;
  date;
  contents;
}