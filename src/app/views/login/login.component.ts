import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { AppServiceService } from "../../app-service.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "login.component.html",
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  public submitted: any;
  constructor(
    public fb: FormBuilder,
    public router: Router,
    public service: AppServiceService
  ) {}
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ["", Validators.required],
      password: ["", Validators.required],
    });
  }
  get f() {
    return this.loginForm.controls;
  }
  onsubmit() {
    this.submitted = true;


    if (this.loginForm.invalid) {
      console.log("form Is inValed");
      return;
    } else {
      let x = {
        email: this.loginForm.controls["email"].value,
        password: this.loginForm.controls["password"].value,
      };


      console.log(x);
      this.service.login(x).subscribe((res: any) => {
        console.log(res);
        if (res.status == true) {
          localStorage.setItem("auth_token", res.data.auth_token),
            localStorage.setItem("user_name", res.data.user_name),
            localStorage.setItem("role_id", res.data.role_id),
            localStorage.setItem("user_id", res.data.user_id);
            localStorage.setItem("customer_id", res.data.customer_id)
            if(res.data.role_id==2){
              this.router.navigate(["Admin/AdminDashboard"]).then(() => {
                this.reset();
                this.submitted = false;
              });
            }
            else if(res.data.role_id==1){
              this.router.navigate(["NextdentClient/ClientDashBoard"]).then(() => {
                this.reset();
                this.submitted = false;
              });
            }

        } else {
          alert("Wrong Email Password");
          this.reset();
        }
      });
    }
  }
  public reset = () => {
    this.loginForm.reset();
  };
  toRegistration() {
    this.router.navigate(["/register"]);
  }

  public userRole = () => {
    var x = localStorage.getItem("Role");
    if (x == "1") {
      this.router.navigate(["/dashboard"]);
    } else {
      this.router.navigate(["/Manage/CustomerBranches"]);
    }
  };
}
