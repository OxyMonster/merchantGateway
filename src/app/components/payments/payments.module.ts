import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PayCardComponent } from './pay-card/pay-card.component';
import { PaymentsComponent } from './payments.component';
import { PaymentRoutingModule } from './payments-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { PayWalletModule } from './pay-wallet/pay-wallet.module';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    PaymentsComponent,
    PayCardComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule, 
    PaymentRoutingModule,
    PayWalletModule

  ]
})
export class PaymentsModule { }
