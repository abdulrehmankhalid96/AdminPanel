import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgxPaginationModule } from "ngx-pagination";
import { CustmersModelRoutingModule } from "./custmers-model-routing.module";
import { NExtDentCustomersComponent } from "./next-dent-customers/next-dent-customers.component";
import { ReactiveFormsModule } from "@angular/forms";
import { CustomerBranchesComponent } from "./customer-branches/customer-branches.component";
import { CustomerCareSystemComponent } from "./customer-care-system/customer-care-system.component";
import { PaymentPlaneComponent } from './payment-plane/payment-plane.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { CustomersComponent } from './customers/customers.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { ReqForBranchComponent } from './req-for-branch/req-for-branch.component';
import { TicketsComponent } from './tickets/tickets.component';
import { ModalModule } from 'ngb-modal';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { GTicketsComponent } from './tickets/g-tickets/g-tickets.component';
import { ViewTicketsComponent } from './tickets/view-tickets/view-tickets.component';
import { AdminInvoiceComponent } from './admin-invoice/admin-invoice.component';
import {MatTableModule} from '@angular/material/table'
@NgModule({
  declarations: [
    NExtDentCustomersComponent,
    CustomerBranchesComponent,
    CustomerCareSystemComponent,
    PaymentPlaneComponent,
    AdminDashboardComponent,
    CustomersComponent,
    InvoicesComponent,
    ReqForBranchComponent,
    TicketsComponent,
    GTicketsComponent,
    ViewTicketsComponent,
    AdminInvoiceComponent,

  ],
  imports: [
    CommonModule,
    CustmersModelRoutingModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    ModalModule,
    BsDropdownModule,
    MatTableModule
  ],
})
export class CustmersModelModule {}
