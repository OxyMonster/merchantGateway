import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PayWalletComponent } from './pay-wallet.component';


const routes: Routes = [
  { path: '', component: PayWalletComponent },

];


@NgModule({
  declarations: [
    PayWalletComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),

  ]
})
export class PayWalletModule { }
