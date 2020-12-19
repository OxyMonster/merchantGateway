import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PayWalletRoutingModule } from './pay-wallet-routing.module';
import { AuthorizeComponent } from './authorize/authorize.component';
import { PayWalletComponent } from './pay-wallet.component';
import { RouterModule } from '@angular/router';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { RegisterNewCardComponent } from './user-profile/register-new-card/register-new-card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListRegisteredCardsComponent } from './user-profile/list-registered-cards/list-registered-cards.component';
import { DeleteRegisteredCardsComponent } from './user-profile/delete-registered-cards/delete-registered-cards.component';
import { NgPaymentCardModule } from 'ng-payment-card';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedModule } from 'src/app/shared/shared.module';
import { WalletBallancePayComponent } from './user-profile/wallet-ballance-pay/wallet-ballance-pay.component';



@NgModule({
  declarations: [
    PayWalletComponent,
    AuthorizeComponent,
    UserProfileComponent,
    RegisterNewCardComponent,
    ListRegisteredCardsComponent,
    DeleteRegisteredCardsComponent,
    WalletBallancePayComponent,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterModule, 
    FormsModule,
    SharedModule, 
    ReactiveFormsModule,
    NgPaymentCardModule,
    PayWalletRoutingModule,

  ]
})
export class PayWalletModule { }
