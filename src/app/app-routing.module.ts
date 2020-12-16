import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
     //  & & & Lazy Load * * * *
  { path: '', loadChildren: './components/select-payment/select-payment.module#SelectPaymentModule' }, 
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
