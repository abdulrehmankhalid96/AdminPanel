import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, } from "rxjs";
import { environment } from "./../environments/environment";

@Injectable({
  providedIn: "root",
})
export class AppServiceService {
  public baseurl = environment.BaseUrl;
  constructor(public http: HttpClient) {}
  public login = (obj): Observable<any> => {
    return this.http.post(this.baseurl + "Admin/LoginUserAdmin", obj);
  };
  Addcustomer = (obj): Observable<any[]> => {
    return this.http.post<any[]>(this.baseurl + "Admin/CreateNewCustomer", obj);
  };
  public getAllCustomers = (obj): Observable<any[]> => {
    return this.http.post<any[]>(this.baseurl + "Admin/GetAllCustomers", obj);
  };
  public GetBranchesStatus = (obj): Observable<any[]> => {
    return this.http.post<any[]>(this.baseurl + "Admin/GetBranchesStatus", obj);
  };
  public AddBranch = (obj): Observable<any[]> => {
    return this.http.post<any[]>(`${this.baseurl}Admin/AddCustomerBranch`, obj);
  };
  public GetBranch = (obj): Observable<any[]> => {
    return this.http.post<any[]>(`${this.baseurl}Admin/GetAllBranches`, obj);
  };
  public updateBranch = (obj): Observable<any[]> => {
    return this.http.post<any[]>(
      `${this.baseurl}Admin/UpdateCustomerBranch`,
      obj
    );
  };
  public AddpaymentPlane = (obj): Observable<any[]> => {
    return this.http.post<any[]>(`${this.baseurl}Admin/AddPaymentPlan`, obj);
  };
  public GetpaymentPlane = (obj): Observable<any[]> => {
    return this.http.post<any[]>(
      `${this.baseurl}Admin/GetAllPaymentPlans`,
      obj
    );
  };
  public UpdatepaymentPlane = (obj): Observable<any[]> => {
    return this.http.post<any[]>(`${this.baseurl}Admin/UpdatePaymentPlan`, obj);
  };
  public UpdateCustomer = (obj) => {
    return this.http.post<any[]>(`${this.baseurl}Admin/UpdateCustomer`, obj);
  };
  public GetPaymentplane=(obj):Observable<any[]>=>{

    return this.http.post<any[]>(this.baseurl+'Admin/GetAllPaymentPlans',obj);

  }

  public updateCustomer=(obj):Observable<any[]>=>{
    return this.http.post<any[]>(this.baseurl+'Admin/UpdateCustomer',obj)
  }

  public GetNewBranchesRequests=(obj):Observable<any[]>=>{
    return this.http.post<any[]>(this.baseurl+'Admin/GetNewBranchesRequests',obj)
  }

  public UpdateCustBranchStatus=(obj):Observable<any[]>=>{
  return this.http.post<any[]>(this.baseurl+'Admin/UpdateCustBranchStatus',obj)
  }
  domin_call=(obj):Observable<any[]>=>{
    return this.http.post<any[]>('http://idealsmile.nexdentlive.com/server/index.php/Admin/AddBranchFromNexAdmin',obj)
  }
  // /Admin/CreateNewTickit
  CreateNewTickit=(obj):Observable<any[]>=>{
    return this.http.post<any[]>(this.baseurl+'/Admin/CreateNewTickit',obj)
  }
  // /Admin/GetAllSupportTickits
  GetAllSupportTickits=(obj):Observable<any[]>=>{
    return this.http.post<any[]>(this.baseurl+'/Admin/GetAllSupportTickits' ,obj);
  }
  // Admin/GetAllSupportTickitsByUserId

  GetAllSupportTickitsByUserId=(obj):Observable<any[]>=>{
    return this.http.post<any[]>(this.baseurl+'Admin/GetAllSupportTickitsByUserId',obj)
  }
  // Admin/GetSupportTickitByID

  GetSupportTickitByID=(obj):Observable<any[]>=>{

       return this.http.post<any[]>(this.baseurl+'Admin/GetSupportTickitByID',obj)

  }
  // Admin/SubmitReplyOnTickit
  SubmitReplyOnTickit=(obj):Observable<any[]>=>{
    return this.http.post<any[]>(this.baseurl+'Admin/SubmitReplyOnTickit',obj)

  }

  addBranch=(obj):Observable<any[]>=>{
  return this.http.post<any[]>(this.baseurl+'Admin/AddCustomerBranch',obj)
  }
  // Admin/GetAllBranchesByCustID
  public branches=(obj):Observable<any[]>=>{
    return this.http.post<any[]>(this.baseurl+'Admin/GetAllBranchesByCustID',obj);
  }
  // Admin/GetAdminDashboard

  GetAdminDashboard=(obj):Observable<any[]>=>{
    return this.http.post<any[]>(this.baseurl+'Admin/GetAdminDashboard',obj)
  }
  // Admin/GetClientDashboard
  GetClientDashboard=(obj):Observable<any[]>=>{
    return this.http.post<any[]>(this.baseurl+'Admin/GetClientDashboard',obj);
  }




}
