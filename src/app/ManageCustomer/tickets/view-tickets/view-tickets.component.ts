import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AppServiceService } from './../../../app-service.service';
import { ShareserviceService } from './../../shareservice.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-view-tickets',
  templateUrl: './view-tickets.component.html',
  styleUrls: ['./view-tickets.component.css']
})
export class ViewTicketsComponent implements OnInit {

  constructor(public share:ShareserviceService,public service:AppServiceService,public fb:FormBuilder) { }
   public recevingObj:any;
   public replyIstrue=false;
   public ReplyForm:FormGroup;
   public Replyes:any;
   public TicketObj:any;
   public baseMedial_URL='http://macho-cart.com/nexadmin/server/'
  ngOnInit(): void {
  this.ReplyForm=this.fb.group({
    message:['',Validators.required],
    file:['',Validators.required]

  })
   this.recevingObj=this.share.ticketObj
  //  this.share.ticketObj=null;
   console.log(this.recevingObj);
  this.replyonticket();


  }

 public replyonticket(){
  let x={
    user_id:localStorage.getItem('user_id'),
    auth_token:localStorage.getItem('auth_token'),
    ticket_id:this.recevingObj.ticket_id

  }
  this.service.GetSupportTickitByID(x).subscribe((res:any)=>{
    console.log(res);
    this.TicketObj=res.data;
    this.Replyes=res.data[0].ticket_replies;
    console.log( this.Replyes)
 })
}
  showreply(){
    console.log('hello');
    this.replyIstrue=!this.replyIstrue
  }
  sendReply(){
     let x={
       user_id:localStorage.getItem('user_id'),
       auth_token:localStorage.getItem('auth_token'),
       description:this.ReplyForm.controls['message'].value,
       ticket_attachment:this.file,
       ticket_id:this.recevingObj.ticket_id
     }
     let y=this.getFormData(x);
     this.service.SubmitReplyOnTickit(y).subscribe((res:any)=>{
       console.log(res);
       this.ReplyForm.reset();
       this.selectedfilename='';
       this.replyIstrue=false;
       this.replyonticket();
     })
  }
  public selectedfilename:any;
public file:any;
catchfile(event){
  this.selectedfilename=event.target.files[0].name
  this.file=event.target.files[0];


  console.log(this.file)
}
public getFormData(object) {
  const formData = new FormData();
  Object.keys(object).forEach((key) => formData.append(key, object[key]));
  return formData;
}
public modalcontent='modal';
public comingSrc
tofilefunc(url){
  this.comingSrc=this.baseMedial_URL+url
  console.log('hello')
  this.modalcontent='moda2'
}
close(){
  this.modalcontent='modal'
}


}
