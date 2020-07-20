import { AppServiceService } from './../../app-service.service';
import { FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit,
} from "@angular/core";
import { ModalManager } from 'ngb-modal';

@Component({
  selector: "app-client-branches",
  templateUrl: "./client-branches.component.html",
  styleUrls: ["./client-branches.component.css"],
})
export class ClientBranchesComponent implements OnInit, AfterViewInit {
  ngAfterViewInit(): void {}
  @ViewChild('myModal') myModal;
  private modalRef;
  public branchForm:FormGroup;
  public submitted = false;
  public Client_AllBRanch:any;
  BaseUrlFormImage='http://macho-cart.com/nexadmin/server/'
  constructor(private modalService: ModalManager,public fb:FormBuilder,public service:AppServiceService){}
  ngOnInit(): void {

    this.getBranchByID();
    this.branchForm=this.fb.group({
      BranchName: ["", Validators.required],
      City: ["", Validators.required],
      address: ["", Validators.required],
      phone: ["", Validators.required],


    })

  }
  getBranchByID=()=>{
    let x={
      user_id:localStorage.getItem('user_id'),
      auth_token:localStorage.getItem('auth_token'),
      customer_id:localStorage.getItem('customer_id')
    }
    this.service.branches(x).subscribe((res:any)=>{

      this.Client_AllBRanch=res.data;
      console.log(this.Client_AllBRanch);
    })
  }
  onSubmit() {
    this.submitted = true;
    if (this.branchForm.invalid) {
      console.log("form Is inValed");
      return;
    } else {
      this.AddBranch();
    }
  }

  public AddBranch = () => {

    let x = {
      user_id:localStorage.getItem('user_id'),
      auth_token: localStorage.getItem("auth_token"),
      branch_name: this.branchForm.controls["BranchName"].value,
      customer_id:localStorage.getItem('customer_id'),
      city:this.branchForm.controls['City'].value,
      branch_address: this.branchForm.controls["address"].value,
      branch_phone: this.branchForm.controls["phone"].value,
      branch_status_id:1




    };
    console.log(x);
     let a=JSON.stringify(x);
    this.service.addBranch(a).subscribe((res: any) => {
      console.log(res);
      if (res.status == true) {
        this.branchForm.reset();
     this.modalRef=this.modalService.close(this.myModal)
        this.submitted = false;
      }
    });
  };
  get f() {
    return this.branchForm.controls;
  }
  openModal(){
    this.modalRef = this.modalService.open(this.myModal, {
      title: "Requets For New Branch",
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
CloseBranchPopup(){
  this.branchForm.reset();
this.modalRef=this.modalService.close(this.myModal)
}
}
