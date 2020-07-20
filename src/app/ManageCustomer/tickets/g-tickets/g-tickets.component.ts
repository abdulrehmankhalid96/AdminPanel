import { ShareserviceService } from './../../shareservice.service';
import { AppServiceService } from './../../../app-service.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalManager } from 'ngb-modal';
import { trigger, state, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-g-tickets',
  templateUrl: './g-tickets.component.html',
  styleUrls: ['./g-tickets.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class GTicketsComponent implements OnInit {

  @ViewChild('myModal') myModal;
  private modalRef;
  public tickets_form:FormGroup;
  public all_tickets:any;
  public ReplyForm:FormGroup
  constructor(private modalService: ModalManager,public router:Router,public fb:FormBuilder,
    public service:AppServiceService,public share:ShareserviceService){}

  ngOnInit(): void {
    this.ReplyForm=this.fb.group({
      message:['',Validators.required],
      file:['',Validators.required]

    })
 this.allticket();
  }

  allticket=()=>{
    let x={
      user_id:localStorage.getItem('user_id'),
      auth_token:localStorage.getItem('auth_token')
    }
     this.service.GetAllSupportTickits(x).subscribe((res:any)=>{

       this.all_tickets=res.data;
       console.log(this.all_tickets);
     })
     this.tickets_form=this.fb.group({
       Subject:['',Validators.required],
       Reply:['',Validators.required],
       Attachment :['',Validators.required],
     })
  }

  openModal(){
    this.modalRef = this.modalService.open(this.myModal, {
      title: "Create Case",
    size: "lg",
    modalClass: "",
    hideCloseButton: false,
    centered: false,
    backdrop: true,
    animation: true,
    keyboard: true,
    closeOnOutsideClick: true,
    backdropClass: "modal-backdrop"
    })
}
toView(data){
  this.share.ticketObj=data
  console.log( this.share.ticketObj);
 this.router.navigate(['/Admin/Viewtickets']);
}
submitTicket(){
  let a={
    user_id:localStorage.getItem('user_id'),
    auth_token:localStorage.getItem('auth_token'),
    subject:this.tickets_form.controls['Subject'].value,
    description:this.tickets_form.controls['Reply'].value,
    ticket_attachment:this.file
  }
  let x=this.getFormData(a);
  this.service.CreateNewTickit(x).subscribe((res:any)=>{
    console.log(res);
    this.modalRef=this.modalService.close(this.myModal);
    if(res.status==true){
      this.allticket();
      this.tickets_form.reset();
      this.selectedfilename=''

    }
  })
  console.log(a);
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
public content='content';
public curent=null;
public ticket_which_is_selected:any;
viewChat(i,data){
  this.Replyes=[]
  this.ticket_which_is_selected=data;
  if(this.curent==i){
    this.curent=null;
  }
  else{
    this.curent=i
  }


  if(this.content=='content'){
    this.content='contentShow'
  }
  else if(this.content=='contentShow'){
    this.content='content'
  }
this.replyonticket()
}
public TicketObj;
public Replyes;
public replyonticket(){
  let x={
    user_id:localStorage.getItem('user_id'),
    auth_token:localStorage.getItem('auth_token'),
    ticket_id:this.ticket_which_is_selected.ticket_id

  }
  this.service.GetSupportTickitByID(x).subscribe((res:any)=>{
    console.log(res);
    this.TicketObj=res.data;
    this.Replyes=res.data[0].ticket_replies;
    console.log( this.Replyes)
 })
}
public baseMedial_URL='http://macho-cart.com/nexadmin/server/'
public modalcontent='modal';
public comingSrc;

tofilefunc(url){
  this.comingSrc=this.baseMedial_URL+url
  console.log('hello')
  this.modalcontent='moda2'
}
close(){
  this.modalcontent='modal'
}
sendReply(){
  let x={
    user_id:localStorage.getItem('user_id'),
    auth_token:localStorage.getItem('auth_token'),
    description:this.ReplyForm.controls['message'].value,
    ticket_attachment:this.file,
    ticket_id:this.ticket_which_is_selected.ticket_id
  }
  let y=this.getFormData(x);
  this.service.SubmitReplyOnTickit(y).subscribe((res:any)=>{
    console.log(res);
    this.ReplyForm.reset();
    this.selectedfilename='';

    this.replyonticket();
  })
}
}


