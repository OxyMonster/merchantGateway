import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectPaymentComponent } from './select-payment.component';
import { SelectPaymentRoutingModule } from './select-payment-routing.module';
import { PayCardModule } from './pay-card/pay-card.module';
import { PayWalletModule } from './pay-wallet/pay-wallet.module';
import { PageNotFoundModule } from '../page-not-found/page-not-found.module';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    SelectPaymentComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    SelectPaymentRoutingModule,
    PayCardModule,
    PayWalletModule,
    PageNotFoundModule
  ]
})
export class SelectPaymentModule { }
