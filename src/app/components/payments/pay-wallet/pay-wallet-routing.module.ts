import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PayWalletComponent } from './pay-wallet.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthorizeComponent } from './authorize/authorize.component';
import { AuthGuardGuard } from 'src/app/shared/guards/auth-guard.guard';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { RegisterNewCardComponent } from './user-profile/register-new-card/register-new-card.component';
import { ListRegisteredCardsComponent } from './user-profile/list-registered-cards/list-registered-cards.component';
import { DeleteRegisteredCardsComponent } from './user-profile/delete-registered-cards/delete-registered-cards.component';
import { WalletBallancePayComponent } from './user-profile/wallet-ballance-pay/wallet-ballance-pay.component';

const routes: Routes = [
  { path: '', component: PayWalletComponent, children: [
    { path: '', redirectTo: 'login', pathMatch: 'full' }, 
    { path: 'login', component: AuthorizeComponent },
    { path: 'user-profile', canActivate: [AuthGuardGuard], component: UserProfileComponent, children: [
      { path: '', redirectTo: 'register-new-card', pathMatch: 'full' },
      { path: 'register-new-card', component: RegisterNewCardComponent },
      { path: 'my-cards', component: ListRegisteredCardsComponent },
      { path: 'delete-cards', component: DeleteRegisteredCardsComponent },
      { path: 'wallet-ballance', component: WalletBallancePayComponent },

    ]}
  ]}, 
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PayWalletRoutingModule { }
