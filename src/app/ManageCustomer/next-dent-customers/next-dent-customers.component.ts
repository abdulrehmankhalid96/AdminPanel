import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AppServiceService } from "./../../app-service.service";
import { element } from "protractor";
import { Router } from "@angular/router";
@Component({
  selector: "app-next-dent-customers",
  templateUrl: "./next-dent-customers.component.html",
  styleUrls: ["./next-dent-customers.component.css"],
})
export class NExtDentCustomersComponent implements OnInit {
  myForm: FormGroup;
  public submitted = false;
  public AllData = [];
  public submiteMode = true;
  public UpdateMode = false;
  constructor(
    public fb: FormBuilder,
    public service: AppServiceService,
    public router: Router
  ) {}
  public formtoggle = false;
  public getingAllCustomerts = () => {
    let x = {
      user_id: localStorage.getItem("user_id"),
      auth_token: localStorage.getItem("auth_token"),
    };
    this.service.getAllCustomers(x).subscribe((res: any) => {
      this.AllData = res.data;
      res.data.forEach((element: any) => {
        element.data = element.contact_person[0];
      });
      console.log(this.AllData);
    });
  };

  ngOnInit(): void {
    this.getingAllCustomerts();

    this.myForm = this.fb.group({
      customerName: ["", Validators.required],
      Customeraddress: ["", Validators.required],
      customerEmail: ["", Validators.required],
      CustomerphoneNumber: ["", Validators.required],
      CustomerMobile: ["", Validators.required],

      contactPersonName: ["", Validators.required],
      contactPersonPhone: ["", Validators.required],
      ContactPersonEmail: ["", Validators.required],
      ContactPersonMobile: ["", Validators.required],
      contactPersonDesignation: ["", Validators.required],
      userEmail: ["", [Validators.required, Validators.email]],
      username: ["", Validators.required],
      userPassword: ["", [Validators.required, Validators.minLength(8)]],
    });
  }
  togglefunction = () => {
    if (this.formtoggle == false) {
      this.formtoggle = true;
    } else {
      this.formtoggle = false;
    }
  };
  get f() {
    return this.myForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    if (this.myForm.invalid) {
      console.log("form is not valied");
      return;
    } else {
      let x = {
        user_id: localStorage.getItem("user_id"),
        auth_token: localStorage.getItem("auth_token"),

        customer_name: this.myForm.controls["customerName"].value,
        customer_address: this.myForm.controls["Customeraddress"].value,
        customer_email: this.myForm.controls["customerEmail"].value,
        customer_phone: this.myForm.controls["CustomerphoneNumber"].value,
        customer_mobile: this.myForm.controls["CustomerMobile"].value,
        contact_person: {
          contact_person_name: this.myForm.controls["contactPersonName"].value,
          contact_person_designation: this.myForm.controls[
            "contactPersonDesignation"
          ].value,
          contact_person_phone: this.myForm.controls["contactPersonPhone"]
            .value,
          contact_person_mobile: this.myForm.controls["ContactPersonMobile"]
            .value,
          contact_person_email: this.myForm.controls["ContactPersonEmail"]
            .value,
        },
        customer_credentials: {
          email: this.myForm.controls["userEmail"].value,
          user_name: this.myForm.controls["username"].value,
          password: this.myForm.controls["userPassword"].value,
        },
      };
      this.service.Addcustomer(x).subscribe((res: any) => {
        console.log(res);
        if (res.status == true) {
          this.myForm.reset();
          this.submitted = false;
        }
      });
      console.log(JSON.stringify(x));
    }
    // console.log(JSON.stringify(this.myForm.value));
  }
  onReset() {
    this.submitted = false;
    this.myForm.reset();
    this.formtoggle = false;
    this.UpdateMode = false;
    this.submiteMode = true;
  }
  public customerIdFormUpdate: any;
  updateCustomer(client) {
    this.customerIdFormUpdate = client.customer_id;
    console.log(client);
    this.myForm.patchValue({
      customerName: client.customer_name,
      Customeraddress: client.customer_address,
      customerEmail: client.customer_email,
      CustomerphoneNumber: client.customer_phone,
      CustomerMobile: client.customer_mobile,

      contactPersonName: client.data.contact_person_name,
      contactPersonPhone: client.data.contact_person_phone,
      ContactPersonEmail: client.data.contact_person_email,
      ContactPersonMobile: client.data.contact_person_mobile,
      contactPersonDesignation: client.data.contact_person_designation,
      userEmail: "Value Not Coming from server",
      username: "Value Not Coming from server",
      userPassword: "ValueNotComingfromServer",
    });
    this.formtoggle = true;
    this.UpdateMode = true;
    this.submiteMode = false;
  }
  Patch() {}
  addBranch(client) {
    console.log(client);
    this.router.navigate([
      "/Manage/CustomerBranches",
      { customer_id: client.customer_id },
    ]);
  }
  UpdateData() {
    let x = {
      user_id: localStorage.getItem("user_id"),
      auth_token: localStorage.getItem("auth_token"),
      customer_id: this.customerIdFormUpdate,
      customer_name: this.myForm.controls["customerName"].value,
      customer_address: this.myForm.controls["Customeraddress"].value,
      customer_email: this.myForm.controls["customerEmail"].value,
      customer_phone: this.myForm.controls["CustomerphoneNumber"].value,
      customer_mobile: this.myForm.controls["CustomerMobile"].value,
      contact_person: {
        contact_person_name: this.myForm.controls["contactPersonName"].value,
        contact_person_designation: this.myForm.controls[
          "contactPersonDesignation"
        ].value,
        contact_person_phone: this.myForm.controls["contactPersonPhone"].value,
        contact_person_mobile: this.myForm.controls["ContactPersonMobile"]
          .value,
        contact_person_email: this.myForm.controls["ContactPersonEmail"].value,
      },
      customer_credentials: {
        email: this.myForm.controls["userEmail"].value,
        user_name: this.myForm.controls["username"].value,
        password: this.myForm.controls["userPassword"].value,
      },
    };
    this.service.UpdateCustomer(x).subscribe((res: any) => {
      console.log(res);
      this.onReset();
      this.getingAllCustomerts();
    });
  }
}
