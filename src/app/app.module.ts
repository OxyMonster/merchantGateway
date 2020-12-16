import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SelectPaymentModule } from './components/select-payment/select-payment.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SelectPaymentModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
