import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentsComponent } from './payments.component';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { PageSuccessComponent } from 'src/app/shared/components/success-fail/page-success/page-success.component';
import { PageFailComponent } from 'src/app/shared/components/success-fail/page-fail/page-fail.component';


const routes: Routes = [
  { path: '', component: PaymentsComponent }, 
  { path: 'wallet', loadChildren: './pay-wallet/pay-wallet.module#PayWalletModule' },
  { path: 'success', component: PageSuccessComponent },
  { path: 'fail', component: PageFailComponent }, 
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
  