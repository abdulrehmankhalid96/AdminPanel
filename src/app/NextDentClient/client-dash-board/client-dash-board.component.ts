import { AppServiceService } from './../../app-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-dash-board',
  templateUrl: './client-dash-board.component.html',
  styleUrls: ['./client-dash-board.component.css']
})
export class ClientDashBoardComponent implements OnInit {

  constructor(public service:AppServiceService) { }
public MyBranches;
public NextPayment;
public LastPayment;
public BranchesList;

  ngOnInit(): void {
this.dashboarddata();
  }
  public dashboarddata=()=>{
   let x={
     user_id:localStorage.getItem('user_id'),
     auth_token:localStorage.getItem('auth_token'),
     customer_id:localStorage.getItem('customer_id')
   }
   this.service.GetClientDashboard(x).subscribe((res:any)=>{
     console.log(res);
     this.MyBranches=res.data.my_branches_count;
     this.NextPayment=res.data.next_payment_due;
     this.LastPayment=res.data.Last_month_billing_amount
      this.BranchesList=res.data.my_branches
    })
  }
 
}
