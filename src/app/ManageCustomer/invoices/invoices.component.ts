import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.css']
})
export class InvoicesComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit(): void {
  }
  detailinvoice(){
 this.router.navigate(['Admin/AdminInvoices']);
  }
}
