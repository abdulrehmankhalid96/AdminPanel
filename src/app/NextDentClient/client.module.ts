import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ClientRoutingModule } from "./client-routing.module";
import { ProfileSettingComponent } from "./profile-setting/profile-setting.component";
import { ClientPaymentComponent } from "./client-payment/client-payment.component";
import { ClientInvoiceComponent } from "./client-invoice/client-invoice.component";
import { ClientDashBoardComponent } from "./client-dash-board/client-dash-board.component";
import { ClientBranchesComponent } from "./client-branches/client-branches.component";
import { ClientDashboradComponent } from './client-dashborad/client-dashborad.component';
import { ModalModule } from 'ngb-modal';
import { BillingComponent } from './billing/billing.component';
import { ShowInvoiceComponent } from './show-invoice/show-invoice.component';
import { TicketsComponent } from './tickets/tickets.component';
import { ViewticketsComponent } from './viewtickets/viewtickets.component';


@NgModule({
  declarations: [
    ProfileSettingComponent,
    ClientPaymentComponent,
    ClientInvoiceComponent,
    ClientDashBoardComponent,
    ClientBranchesComponent,
    ClientDashboradComponent,
    BillingComponent,
    ShowInvoiceComponent,
    TicketsComponent,
    ViewticketsComponent,
  ],
  imports: [CommonModule, ClientRoutingModule,ModalModule,
  FormsModule,ReactiveFormsModule
  ],
})
export class ClientModule {}
