import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentsComponent } from './payments.component';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';


const routes: Routes = [
  { path: '', component: PaymentsComponent }, 
  { path: 'wallet', loadChildren: './pay-wallet/pay-wallet.module#PayWalletModule' },
  { path: '**', component: PageNotFoundComponent }   
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PaymentRoutingModule { }
  