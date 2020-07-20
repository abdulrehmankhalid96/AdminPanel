import { AppServiceService } from './../../app-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  constructor(public service:AppServiceService) { }
  public New_users:any;
  public this_month_trans_comp:any;
  public this_month_trans_pending:any
  public customer_tickets:any;
  public this_month_collections:any;
  public new_customer_data:any;
  public Pre_mounth_tra:any;
  public Pre_pre_mounth_tra:any;


  ngOnInit(): void {
    let x={
      user_id:localStorage.getItem('user_id'),
      auth_token:localStorage.getItem('auth_token')
    }
 this.service.GetAdminDashboard(x).subscribe((res:any)=>{
   console.log(res);
   this.New_users=res.data.new_users_requests;
   this.customer_tickets=res.data.customer_tickets;
   this.this_month_trans_comp=res.data.this_month_trans_comp;
   this.this_month_trans_pending=res.data.this_month_trans_pending;
   this.new_customer_data=res.data.new_customers
   this.this_month_collections=res.data.this_month_collections
   this.Pre_mounth_tra=res.data.prev_month_collections;
   this.Pre_pre_mounth_tra=res.data.before_prev_month_collections




 })
  }
  public mounth=['January','February','March','April','May','June','July','August','September','October','November','December']
  public CurrentYear;
  getCurrentMount(){
    let d=new Date();
    let year=d.getFullYear();
    let x=d.getMonth();
    let sum=this.mounth[x]+' '+year

    return sum;
  }
  getPerMount(){
    let d=new Date();
    let year=d.getFullYear();
    let x=d.getMonth();
    let sum=this.mounth[x-1]+' '+year

    return sum;
  }
  getPre_preMOunt(){
    let d=new Date();
    let year=d.getFullYear();
    let x=d.getMonth();
    let sum=this.mounth[x-2]+' '+year

    return sum;
  }
}
