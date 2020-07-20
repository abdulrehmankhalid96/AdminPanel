import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PayRoutingModule } from "./pay-routing.module";
import { ClientPaymentsComponent } from "./client-payments/client-payments.component";
import { PaymentPlaneComponent } from './payment-plane/payment-plane.component';
import { InvoiceComponent } from './invoice/invoice.component';

@NgModule({
  declarations: [ClientPaymentsComponent, PaymentPlaneComponent, InvoiceComponent],
  imports: [CommonModule, PayRoutingModule],
})
export class PayModule {}
