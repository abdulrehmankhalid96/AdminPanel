import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AppServiceService } from '../../app-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 public ULR_FOR_Place_Holder='assets/img/brand/avatar-1577909_1280.png';
 public branchForm:FormGroup
  fileisEmpty: boolean;
  filename_whichIs_Selected: any;
  Selected_File_data: any;
  submitted: boolean;
  PaymentPlane: any;
  constructor(public fb:FormBuilder, public service:AppServiceService) {
    let x={
      user_id:localStorage.getItem('user_id'),
      auth_token:localStorage.getItem('auth_token')
    }
    this.service.GetPaymentplane(x).subscribe((res:any)=>{
      
      this.PaymentPlane=res.data;
      console.log(res);
    })

   }
  ngOnInit(): void {
    this.branchForm=this.fb.group({
      CompanyName: ["", Validators.required],
      Email: ["", Validators.required],
      phone: ["", Validators.required],
      mobile:['',Validators.required],
      City: ["", Validators.required],
      address: ["", Validators.required],
      PaymentPlane:["", Validators.required],
      Contant_person_name:['',Validators.required],
      Contant_person_designation:['',Validators.required],
      Contant_person_phone:['',Validators.required],
      Contant_person_email:['',Validators.required],
      userName:['',Validators.required],
      Password:['',Validators.required],

    })

   
  }
  Addfile(event){
    this.fileisEmpty=false;
    this.filename_whichIs_Selected=event.target.files[0].name;
    this.Selected_File_data=event.target.files[0];
    console.log( this.filename_whichIs_Selected);
    console.log(this.Selected_File_data);
  }
  get f() {
    return this.branchForm.controls;
  }

  onSubmit() {
    if(this.Selected_File_data==null){
      this.fileisEmpty=true;
      return;
    }
    else{
      this.submitted = true;
      if (this.branchForm.invalid) {
        console.log("form Is inValed");
        return;
      } else {
        this.AddBranch();
        
         this.branchForm.reset();
         this.filename_whichIs_Selected='';
        
      }
    }
  
  
  }
  public AddBranch = () => {

    let x = {
      user_id:"",
      auth_token:"",
      customer_name: this.branchForm.controls["CompanyName"].value,
      customer_phone: this.branchForm.controls["phone"].value,
      customer_email:this.branchForm.controls["Email"].value,
      customer_mobile: this.branchForm.controls["mobile"].value,
      city: this.branchForm.controls["City"].value,
      customer_address: this.branchForm.controls["address"].value,
  contact_person_name:this.branchForm.controls["Contant_person_name"].value,
  contact_person_designation:this.branchForm.controls["Contant_person_designation"].value,
  contact_person_phone:this.branchForm.controls["Contant_person_phone"].value,
  contact_person_email:this.branchForm.controls["Contant_person_email"].value,
  company_logo:this.Selected_File_data,
        user_name:this.branchForm.controls["userName"].value,
        password:this.branchForm.controls["Password"].value,
  
      package_id:this.branchForm.controls["PaymentPlane"].value,
    };
    console.log(x);
    let y= this.getFormData(x);
     console.log(y);
    this.service.Addcustomer(y).subscribe((res: any) => {
      console.log(res);
      if (res.status == true) {
        this.branchForm.reset();

        this.submitted = false;
      }
    });
  };
  public getFormData(object) {
    const formData = new FormData();
    Object.keys(object).forEach((key) => formData.append(key, object[key]));
    return formData;
  }
}
