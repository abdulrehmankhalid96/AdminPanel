import { AppServiceService } from './../../app-service.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ModalManager } from 'ngb-modal';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';




@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
 public AllData:any;
 private modalRef;
 public branchForm:FormGroup;
 public baseUrl='http://macho-cart.com/nexadmin/server/'
 public submitted = false;
 public  update_Cutomer=false;
 public addcustomer=false;
 public PaymentPlane:any;
 public AddBranchForm:FormGroup
  constructor(public service:AppServiceService,private modalService: ModalManager,public fb:FormBuilder) { }
  @ViewChild('mymodel') mymodel;
  @ViewChild('customer_branches') customer_branches;
@ViewChild('uploadImage') uploadImage ;
@ViewChild('AddBranchModel',{static:false}) AddBranchModel
@ViewChild('dropDownContent',{static:false}) dropDownContent:ElementRef;
  ngOnInit(): void {
    this.AddBranchForm=this.fb.group({
      BranchName:['', Validators.required],
      City:['', Validators.required],
      phone:['',Validators.required],
      address:['',Validators.required],


    })
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


   this.getingAllCustomerts();
  }
  public getingAllCustomerts = () => {
    this.submitted=false;
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
  public title:any='Add new Customer'
  openModal(){
    this.branchForm.reset();
    this.ULR_FOR_Place_Holder='assets/img/brand/avatar-1577909_1280.png';
    let x={
      user_id:localStorage.getItem('user_id'),
      auth_token:localStorage.getItem('auth_token')
    }
    this.service.GetPaymentplane(x).subscribe((res:any)=>{
      console.log('open this MOdel')
      this.PaymentPlane=res.data;
      console.log(res);
    })
    this.addcustomer=true;
    this.update_Cutomer=false;
 // this.title='Add new Customer'
    this.modalRef = this.modalService.open(this.mymodel, {
      title:`${this.title}`,
    size: "lg",
    modalClass: "",
    hideCloseButton: false,
    centered: false,
    backdrop: true,
    animation: true,
    keyboard: true,
    closeOnOutsideClick: true,
    backdropClass: "modal-backdrop"
    })
}
openModalupdatemode(){
  // this.title='Add new Customer'
     this.modalRef = this.modalService.open(this.mymodel, {
       title:`${this.title}`,
     size: "lg",
     modalClass: "",
     hideCloseButton: false,
     centered: false,
     backdrop: true,
     animation: true,
     keyboard: true,
     closeOnOutsideClick: true,
     backdropClass: "modal-backdrop"
     })
 }
 public all_breaches_of_client:any;
allbranches(all){
  console.log(all);
  this.all_breaches_of_client=all.branches
  this.modalRef = this.modalService.open(this.customer_branches, {
    title: "Customer Branches",
  size: "lg",
  modalClass: "",
  hideCloseButton: false,
  centered: false,
  backdrop: true,
  animation: true,
  keyboard: true,
  closeOnOutsideClick: true,
  backdropClass: "modal-backdrop"
  })

}
get f() {
  return this.branchForm.controls;
}
get g() {
  return this.AddBranchForm.controls;
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
      this.modalRef=this.modalService.close(this.mymodel);
       this.branchForm.reset();
       this.filename_whichIs_Selected='';
       this.getingAllCustomerts();
    }
  }


}
fileisEmpty=false
public AddBranch = () => {

  let x = {
    user_id:localStorage.getItem('user_id'),
    auth_token: localStorage.getItem("auth_token"),
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
this.getingAllCustomerts()
      this.submitted = false;
    }
  });
};

public customer_id_for_update:any;
public content_person_ID:any;
public ULR_FOR_Place_Holder='assets/img/brand/avatar-1577909_1280.png'
updateCustomer(customer){
  console.log(customer);
  this.ULR_FOR_Place_Holder=this.baseUrl+customer.company_logo
  this.customer_id_for_update=customer.customer_id
  this.content_person_ID=customer.contact_person[0].contact_person_id;
  // console.log(this.content_person_ID)
  this.title='Update Customer'
  this.addcustomer=false;
  this.update_Cutomer=true;
   this.openModalupdatemode();
   this.title='Add new Customer'

   this.branchForm.patchValue({
    CompanyName:customer.customer_name,
    City:customer.city,
    address:customer.customer_address,
    phone:customer.customer_phone,
    Email:customer.customer_email,
    mobile:customer.customer_mobile,
    
    Contant_person_name:customer.contact_person[0].contact_person_name,
    Contant_person_designation:customer.contact_person[0].contact_person_designation,
    Contant_person_phone:customer.contact_person[0].contact_person_phone,
    Contant_person_mobile:customer.contact_person[0].contact_person_mobile,
    Contant_person_email:customer.contact_person[0].contact_person_email,




   })
  console.log(customer)
}
update(){
  let x = {
    user_id:localStorage.getItem('user_id'),
    auth_token: localStorage.getItem("auth_token"),
    customer_id:this.customer_id_for_update,
    customer_name: this.branchForm.controls["CompanyName"].value,
    customer_phone: this.branchForm.controls["phone"].value,
    customer_email:this.branchForm.controls["Email"].value,
    customer_mobile: this.branchForm.controls["mobile"].value,
    city: this.branchForm.controls["City"].value,
    customer_address: this.branchForm.controls["address"].value,  
    contact_person:{
      contact_person_id:this.content_person_ID,
      contact_person_name:this.branchForm.controls["Contant_person_name"].value,
      contact_person_designation:this.branchForm.controls["Contant_person_designation"].value,
      contact_person_phone:this.branchForm.controls["Contant_person_phone"].value,
      
      
      contact_person_email:this.branchForm.controls["Contant_person_email"].value,
    },  



  };
  console.log(x);
  this.service.updateCustomer(x).subscribe((res: any,) => {
    console.log(res);
    if(res.status==true){
      this.modalRef=this.modalService.close(this.mymodel);
      this.getingAllCustomerts();
    }
  })
}
statusCheck(statu){
console.log(statu);
if(statu==1){
  return 'Created';
}
else if(statu==2){
  return 'Activated'
}

}
cont_p_name(customer){
  // console.log(customer.data.contact_person_name);

  if(customer.contact_person[0]!=undefined){
    return customer.contact_person[0].contact_person_name;
  }


}
uploadImageModal(){
  this.modalRef = this.modalService.open(this.uploadImage, {
    title:`${this.title}`,
  size: "lg",
  modalClass: "",
  hideCloseButton: false,
  centered: false,
  backdrop: true,
  animation: true,
  keyboard: true,
  closeOnOutsideClick: true,
  backdropClass: "modal-backdrop"
  })
}
public filename_whichIs_Selected:any;
public Selected_File_data:any=null;
Addfile(event){
  this.fileisEmpty=false;
  this.filename_whichIs_Selected=event.target.files[0].name;
  this.Selected_File_data=event.target.files[0];
  console.log( this.filename_whichIs_Selected);
  console.log(this.Selected_File_data);
}
public getFormData(object) {
  const formData = new FormData();
  Object.keys(object).forEach((key) => formData.append(key, object[key]));
  return formData;
}
public Customer_Who_want_add_branch:any
AddNewBranch(data){
  console.log(data);
  this.Customer_Who_want_add_branch=data;
  console.log(this.Customer_Who_want_add_branch);
  this.modalRef = this.modalService.open(this.AddBranchModel, {
    title:"Add Branch",
  size: "md",
  modalClass: "",
  hideCloseButton: false,
  centered: false,
  backdrop: true,
  animation: true,
  keyboard: true,
  closeOnOutsideClick: true,
  backdropClass: "modal-backdrop"
  })
}
onSubmitBranch(){
  this.submitted = true;
  if (this.AddBranchForm.invalid) {
    console.log("form Is inValed");
    return;
  } else {
    this.AddBranchFromAdmin();
  }
}
public AddBranchFromAdmin = () => {

  let x = {
    user_id:localStorage.getItem('user_id'),
    auth_token: localStorage.getItem("auth_token"),
    branch_name: this.AddBranchForm.controls["BranchName"].value,
    customer_id:this.Customer_Who_want_add_branch.customer_id,
    city:this.AddBranchForm.controls['City'].value,
    branch_address: this.AddBranchForm.controls["address"].value,
    branch_phone: this.AddBranchForm.controls["phone"].value,
    branch_status_id:1




  };
  console.log(x);
   let a=JSON.stringify(x);
  this.service.addBranch(a).subscribe((res: any) => {
    console.log(res);
    if (res.status == true) {
      this.AddBranchForm.reset();
      this.getingAllCustomerts();
   this.modalRef=this.modalService.close(this.AddBranchModel)
      this.submitted = false;

    }
  });
};
closeBranchModal(){
  this.AddBranchForm.reset();
  this.modalRef=this.modalService.close(this.AddBranchModel);
}

}
