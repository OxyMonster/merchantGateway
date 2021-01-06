import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PayCardComponent } from './pay-card/pay-card.component';
import { PaymentsComponent } from './payments.component';
import { PaymentRoutingModule } from './payments-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { PayWalletModule } from './pay-wallet/pay-wallet.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { PageSuccessComponent } from 'src/app/shared/components/success-fail/page-success/page-success.component';
import { PageFailComponent } from 'src/app/shared/components/success-fail/page-fail/page-fail.component';



@NgModule({
  declarations: [
    PaymentsComponent,
    PayCardComponent,
    PageSuccessComponent,
    PageFailComponent 
  ],
  imports: [
    CommonModule,
    HttpClientModule, 
    PaymentRoutingModule,
    PayWalletModule

  ]
})
export class PaymentsModule { }
