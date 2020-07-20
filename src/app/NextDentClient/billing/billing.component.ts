import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css']
})
export class BillingComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit(): void {
  }
  InvoiceShow(){

  this.router.navigate(['NextdentClient/Invoicdetails'])
  }

}
