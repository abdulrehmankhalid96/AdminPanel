import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { FormGroup } from "@angular/forms";
import { AppServiceService } from "./../../app-service.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-customer-branches",
  templateUrl: "./customer-branches.component.html",
  styleUrls: ["./customer-branches.component.css"],
})
export class CustomerBranchesComponent implements OnInit {
  public toggle_Employe = false;
  public BranchesForm: FormGroup;
  public submitMode: boolean = true;
  public UpdateMode: boolean = false;

  constructor(
    public fb: FormBuilder,
    public service: AppServiceService,
    public activeRouter: ActivatedRoute
  ) {}
  public Status;
  public submitted = false;
  public AllbranchesData: any;
  public branch_id_forUpdate: any;
  public getBranchesStatus = () => {
    let x = {
      user_id: localStorage.getItem("user_id"),
      auth_token: localStorage.getItem("auth_token"),
    };
    this.service.GetBranchesStatus(x).subscribe((res: any) => {
      console.log(res);
      this.Status = res.data;
    });
  };
  public getAllbranches = () => {
    let x = {
      user_id: localStorage.getItem("user_id"),
      auth_token: localStorage.getItem("auth_token"),
    };
    this.service.GetBranch(x).subscribe((res: any) => {
      console.log(res);
      this.AllbranchesData = res.data;
    });
  };

  public customer_id: any;
  ngOnInit(): void {
    this.getBranchesStatus();
    this.getAllbranches();
    this.activeRouter.params.subscribe((params) => {
      this.customer_id = params["customer_id"];
    });
    this.BranchesForm = this.fb.group({
      BranchName: ["", Validators.required],
      City: ["", Validators.required],
      address: ["", Validators.required],
      phone: ["", Validators.required],
      Status: ["", Validators.required],
    });
  }
  toggle_function() {
    this.toggle_Employe = !this.toggle_Employe;
  }
  public OrUpdateBranch = () => {
    let i = {
      user_id: localStorage.getItem("user_id"),
      auth_token: localStorage.getItem("auth_token"),
      branch_name: this.BranchesForm.controls["BranchName"].value,
      customer_id: this.customer_id,
      branch_city: this.BranchesForm.controls["City"].value,
      branch_address: this.BranchesForm.controls["address"].value,
      branch_phone: this.BranchesForm.controls["phone"].value,
      branch_status_id: this.BranchesForm.controls["Status"].value,
      branch_id: this.branch_id_forUpdate,
    };
    this.service.updateBranch(i).subscribe((res: any) => {
      console.log(res);
      if (res.status == true) {
        this.submitMode = true;
        this.UpdateMode = false;
        this.submitted = false;
        this.toggle_Employe = false;
        this.BranchesForm.reset();
      }
      this.getAllbranches();
    });
  };
  public AddBranch = () => {
    let x = {
      user_id: localStorage.getItem("user_id"),
      auth_token: localStorage.getItem("auth_token"),
      branch_name: this.BranchesForm.controls["BranchName"].value,
      customer_id: localStorage.getItem("customer_id"),
      branch_city: this.BranchesForm.controls["City"].value,
      branch_address: this.BranchesForm.controls["address"].value,
      branch_phone: this.BranchesForm.controls["phone"].value,
      branch_status_id: this.BranchesForm.controls["Status"].value,
    };
    console.log(x);

    // this.service.AddBranch(x).subscribe((res: any) => {
    //   console.log(res);
    //   if (res.status == true) {
    //     this.BranchesForm.reset();
    //     this.getAllbranches();
    //     this.submitted = false;
    //   }
    // });
  };
  get f() {
    return this.BranchesForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    if (this.BranchesForm.invalid) {
      console.log("form Is inValed");
      return;
    } else {
      this.AddBranch();
    }
  }

  updatefunction(branches) {
    console.log(branches);
    this.branch_id_forUpdate = branches.branch_id;
    this.BranchesForm.patchValue({
      BranchName: branches.branch_name,
      City: branches.branch_city,
      address: branches.branch_address,
      phone: branches.branch_phone,
      Status: branches.branch_status_id,
    });
    this.submitMode = false;
    this.UpdateMode = true;
    this.toggle_Employe = true;
  }
  updateBranch() {
    this.OrUpdateBranch();
  }
}
