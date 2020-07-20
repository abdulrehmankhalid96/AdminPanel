import { Component, OnInit } from "@angular/core";
import { FormGroup, Validators } from "@angular/forms";
import { FormBuilder } from "@angular/forms";
import { AppServiceService } from "./../../app-service.service";

@Component({
  selector: "app-payment-plane",
  templateUrl: "./payment-plane.component.html",
  styleUrls: ["./payment-plane.component.css"],
})
export class PaymentPlaneComponent implements OnInit {
  constructor(public fb: FormBuilder, public service: AppServiceService) {}
  public PaymentPlaneForm: FormGroup;
  public PaymentPlanetoggle: boolean = false;
  public submitted = false;
  public PaymentPlanedata: any;
  public submitMode = true;
  public UpdateMode = false;
  public PlaneIdForUpdate: any;
  public getpaymentPlane = () => {
    let x = {
      user_id: localStorage.getItem("user_id"),
      auth_token: localStorage.getItem("auth_token"),
    };
    this.service.GetpaymentPlane(x).subscribe((res: any) => {
      console.log(res.data);
      this.PaymentPlanedata = res.data;
    });
  };
  ngOnInit(): void {
    this.getpaymentPlane();
    this.PaymentPlaneForm = this.fb.group({
      package_title: ["", Validators.required],
      package_description: ["", Validators.required],
    });
  }
  get f() {
    return this.PaymentPlaneForm.controls;
  }
  toggleForm() {
    this.PaymentPlanetoggle = !this.PaymentPlanetoggle;
  }
  onSubmit() {
    this.submitted = true;
    if (this.PaymentPlaneForm.invalid) {
      console.log("form Is inValed");
      return;
    } else {
      let x = {
        user_id: localStorage.getItem("user_id"),
        auth_token: localStorage.getItem("auth_token"),
        package_title: this.PaymentPlaneForm.controls["package_title"].value,
        package_description: this.PaymentPlaneForm.controls[
          "package_description"
        ].value,
      };
      this.service.AddpaymentPlane(x).subscribe((res: any) => {
        console.log(res);
        if (res.status == true) {
          this.toggleForm();
          this.PaymentPlaneForm.reset();
          this.getpaymentPlane();
        }
      });
      console.log(x);
    }
  }
  updatefunction(data) {
    this.submitMode = false;
    this.UpdateMode = true;
    this.PaymentPlanetoggle = true;
    this.PaymentPlaneForm.patchValue({
      package_title: data.package_title,
      package_description: data.package_description,
    });
    this.PlaneIdForUpdate = data.package_id;
    console.log(data);
  }
  updatePlane() {
    let x = {
      user_id: localStorage.getItem("user_id"),
      auth_token: localStorage.getItem("auth_token"),
      package_title: this.PaymentPlaneForm.controls["package_title"].value,
      package_description: this.PaymentPlaneForm.controls["package_description"]
        .value,
      package_id: this.PlaneIdForUpdate,
    };
    this.service.UpdatepaymentPlane(x).subscribe((res: any) => {
      console.log(res);
      this.getpaymentPlane();
      this.toggleForm();
      this.PaymentPlaneForm.reset();
      this.submitMode = true;
      this.UpdateMode = false;
    });
  }
}
