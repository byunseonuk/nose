import { Component, OnInit } from "@angular/core";
import { AuthService } from '../../service/auth.service';
//import {DialogService} from '../../service/dialog-message/dialog-message.service';
//import {MdDialog, MdDialogConfig, MdDialogRef} from "@angular/material";

declare var _;
@Component({
  selector: 'signup',
  templateUrl: './signup.html',
  //styleUrls: ['./signup.scss']
})
 
export class Signup extends OnInit{
  user;
  address;
  testhttp;
  constructor(
    //public dialogRef: MdDialogRef<Signup>,
    private authservice:AuthService)
    //private dialogservice:DialogService)
    {
    super();
  }
  ngOnInit(){
    this.user= {
      identifier:'',
      password:'',
      companyname:'',
      companyaddr:'',
      tel:'',
      email:'',
      managerInfo:{
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
      }
      //nickname:'',
      // deliveryInfo: {
      //   addressInfo: {
      //     zipCode: '',
      //     address: '',
      //     detailAddress: ''
      //   },
      //   phone: null,
      //   name: ''
      // }
    }
  }
  // signup(){
  //   // console.log(this.authservice.shopregister(this.user));
  //   this.authservice.shopregister(this.user)
  //     .finally(()=>{
  //       return 1;
  //     }).subscribe(() =>{
  //       return 1;
  //     });
  // }
  signup(){

    this.authservice.shopregister(this.user)
      .finally(() => {
        //this.dialogservice.loadingSubject.next('hide');
      })
      .subscribe(
        () => {
          //this.dialogRef.close();
        // },
        // (err) => {
        //   let subTitle = '';
        //   switch (err.status) {
        //     case 400:
        //       subTitle = '입력한 정보를 확인해주세요.';
        //       break;
        //     case 409:
        //       subTitle = '닉네임 또는 이메일이 이미 사용중입니다.';
        //       break;
        //     case 500:
        //       subTitle = '서버에러';
        //       break;
        //     default:
        //       subTitle = '잘못된 요청입니다.';
        //       break;
        //   }
          //this.dialogservice.message("알림", subTitle);
        });
  }
}