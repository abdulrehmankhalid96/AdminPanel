import { AppServiceService } from './../../app-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-req-for-branch',
  templateUrl: './req-for-branch.component.html',
  styleUrls: ['./req-for-branch.component.css']
})
export class ReqForBranchComponent implements OnInit {

  constructor(public service:AppServiceService) { }
  public all_requested_branch:any;
  public reqForBranch=()=>{
    let x={
      user_id:localStorage.getItem('user_id'),
      auth_token:localStorage.getItem('auth_token'),
      customer_id:2
         }
         this.service.GetNewBranchesRequests(x).subscribe((res:any)=>{
           console.log(res);
           this.all_requested_branch=res.data;
         })
  }
  ngOnInit(): void {
  this.reqForBranch();
  }
  createBranch(data){
//     branch_address: "House#877 Block b-1 china scheem lahore"
// branch_id: "26"
// branch_name: "Jalal Sons"
// branch_phone: "03001234567"
// branch_status_id: "1"
// city: "Lahore"
// customer_id: "17"
// date_time_created: "0000-00-00 00:00:00"
// date_time_updated: "0000-00-00 00:00:00"
// isDefault: "1"
// user_id_created: "0"
// user_id_updated: "0"
    console.log(data);
    let x={
      user_id:localStorage.getItem('user_id'),
      auth_token:localStorage.getItem('auth_token'),
      branch_status_id:2,
      branch_id:data.branch_id
    }
    let y={
      user_id:localStorage.getItem('user_id'),
      auth_token:localStorage.getItem('auth_token'),
      branch_name:data.branch_name,
      branch_city:data.city,
      branch_address: data.branch_address,
      branch_phone: data.branch_phone,
      branch_status: "Active"
    }
    this.service.UpdateCustBranchStatus(x).subscribe((res:any)=>{
      console.log(res);
      if(res.status==true){
       this.service.domin_call(y).subscribe((res:any)=>{
         console.log(res);
         this.reqForBranch();
       })
      }
    })
  }

}
