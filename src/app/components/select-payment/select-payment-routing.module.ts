import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SelectPaymentComponent } from './select-payment.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';

const routes: Routes = [
  // { path: '', loadChildren: '../page-not-found/page-not-found.module/PageNotFoundModule' },
  { path: 'err', component: PageNotFoundComponent }, 
  { path: '', component: SelectPaymentComponent, children: [
    { path: 'wallet', loadChildren: './pay-wallet/pay-wallet.module#PayWalletModule' }, 
    { path: 'card', loadChildren: './pay-card/pay-card.module#PayCardModule' }, 
  ]},   

];


@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    
  ],
  exports: [RouterModule]
})
export class SelectPaymentRoutingModule { }
