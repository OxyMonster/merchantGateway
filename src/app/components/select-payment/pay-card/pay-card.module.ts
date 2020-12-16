import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PayCardComponent } from './pay-card.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', component: PayCardComponent },

];


@NgModule({
  declarations: [
    PayCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PayCardModule { }
