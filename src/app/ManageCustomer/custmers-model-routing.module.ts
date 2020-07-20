import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { NExtDentCustomersComponent } from "./next-dent-customers/next-dent-customers.component";
import { CustomerBranchesComponent } from "./customer-branches/customer-branches.component";
import { CustomerCareSystemComponent } from "./customer-care-system/customer-care-system.component";
import { PaymentPlaneComponent } from "./payment-plane/payment-plane.component";
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { CustomersComponent } from './customers/customers.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { ReqForBranchComponent } from './req-for-branch/req-for-branch.component';
import { TicketsComponent } from './tickets/tickets.component';
import { GTicketsComponent } from './tickets/g-tickets/g-tickets.component';
import { ViewTicketsComponent } from './tickets/view-tickets/view-tickets.component';
import { AdminInvoiceComponent } from './admin-invoice/admin-invoice.component';

const routes: Routes = [
  // ReqForBranchComponent
  {
    path: "AdminDashboard",
    component: AdminDashboardComponent
  },
  {
    path:"Gtickets",
    component:GTicketsComponent
  },
  {
    path:"Viewtickets",
    component:ViewTicketsComponent
  },
  {
    path: "Invoices",
    component: InvoicesComponent
  },
  {
    path: "ReqForBranch",
    component: ReqForBranchComponent
  },
  // TicketsComponent
  {
    path: "Tickets",
    component: TicketsComponent
  },
  {
    path: "customer",
    component: CustomersComponent
  },
  {
    path: "ManageCustomers",
    component: NExtDentCustomersComponent,
  },
  {
    path: "CustomerBranches",
    component: CustomerBranchesComponent,
  },
  {
    path: "CustomerCare",
    component: CustomerCareSystemComponent,
  },
  {
    path: "PaymentPlane",
    component: PaymentPlaneComponent,
  },
  {
    path:'AdminInvoices',
    component:AdminInvoiceComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],

  exports: [RouterModule],
})
export class CustmersModelRoutingModule {}
