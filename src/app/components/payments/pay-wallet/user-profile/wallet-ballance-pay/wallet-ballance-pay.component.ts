import { Component, OnInit } from '@angular/core';
import { WalletServiceService } from 'src/app/services/wallet-service.service';
import { UtileSericeService } from 'src/app/shared/services/utile-serice.service';
import * as shajs from 'sha.js';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wallet-ballance-pay',
  templateUrl: './wallet-ballance-pay.component.html',
  styleUrls: ['./wallet-ballance-pay.component.scss']
})
export class WalletBallancePayComponent implements OnInit {

  isLoading: boolean = false; 
  merchantName: string;
  amount: string; 
  userInfo:any[] = []; 

  constructor(
    private _walletService: WalletServiceService,
    private _utileService: UtileSericeService,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this.merchantName = this._utileService.getMerchantName(); 
    this.amount = this._utileService.getAmount(); 

  }


  getUserInfo() { 
    const schema = {
      "domainId": 2,
      "languageId": 1,
      "sessionId": this._utileService.getSessionId(),
      "username": this._utileService.getUserName()
    }; 
    return this._utileService
               .getUserInfo(schema)
               .subscribe(data => {
                 console.log(data);
                 this.userInfo = [data]; 
               }, err => { 
                 console.log(err);
               })
  }; 
  onWalletPay() {

    this.isLoading = true; 
    
    const schema = {
      "accountNumber": this._utileService.getUserName(),
      "amount": this._utileService.getAmount(),
      "callbackUrl": "",
      "currency": "GEL",
      "description": this._utileService.getDescription(),
      "hash": '',
      "lng": "GE",
      "merchantName": this._utileService.getMerchantName(),
      "orderCode": 1
    }; 
    schema.hash = this._utileService.hashString(
      {
      'merchantName': this._utileService.getMerchantName(),
      'orderCode': 1,
      'amount': this._utileService.getAmount(),
      'currency': schema.currency,
      'description': this._utileService.getDescription(),
      'lng': schema.lng,
    }); 


    
    return this._walletService
               .payByWallet(schema)
               .subscribe( data => {
                 console.log(data);
                 this.isLoading = false;
                 this._router.navigate(['/success'])
               }, err => {
                 console.log(err); 
                 this.isLoading = false;
                 this._router.navigate(['/fail'])


               }); 
  }; 

}
