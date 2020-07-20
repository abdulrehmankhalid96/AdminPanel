import { AppServiceService } from './../../app-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent implements OnInit {

  constructor(public service:AppServiceService) { }

  ngOnInit(): void {
this.allticket();
  }
  public all_tickets:any;
  allticket=()=>{
    let x={
      user_id:localStorage.getItem('user_id'),
      auth_token:localStorage.getItem('auth_token')
    }
     this.service.GetAllSupportTickits(x).subscribe((res:any)=>{

       this.all_tickets=res.data;
       console.log(this.all_tickets);
     })

  }
}
