import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ClientBranchesComponent } from "./client-branches/client-branches.component";
import { ClientDashBoardComponent } from "./client-dash-board/client-dash-board.component";
import { ClientInvoiceComponent } from "./client-invoice/client-invoice.component";
import { ClientPaymentComponent } from "./client-payment/client-payment.component";
import { ProfileSettingComponent } from "./profile-setting/profile-setting.component";
import { BillingComponent } from './billing/billing.component';
import { ShowInvoiceComponent } from './show-invoice/show-invoice.component';
import { TicketsComponent } from './tickets/tickets.component';
import { ViewticketsComponent } from './viewtickets/viewtickets.component';


const routes: Routes = [
  // ClientDashBoardComponent
  {
    path: "DashBoard",
    component: ClientDashBoardComponent,
  },
  // BillingComponent
  {
    path: "Billing",
    component: BillingComponent,
  },
  {
    path: "ticketsView",
    component: ViewticketsComponent,
  },
  {
    path: "ClientBranches",
    component: ClientBranchesComponent,
  },
  {
    path: "ClientDashBoard",
    component: ClientDashBoardComponent,
  },
  {
    path: "ClientInvoice",
    component: ClientInvoiceComponent,
  },
  {
    path: "ClientPayment",
    component: ClientPaymentComponent,
  },
// ShowInvoiceComponent
{
  path: "Invoicdetails",
  component: ShowInvoiceComponent,
},
{
  path: "Ticket",
  component: TicketsComponent,
},
  {
    path: "ProfileSetting",
    component: ProfileSettingComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientRoutingModule {}
