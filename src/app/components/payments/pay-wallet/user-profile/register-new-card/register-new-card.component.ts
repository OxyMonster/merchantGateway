import { Component, OnInit } from '@angular/core';
import { WalletServiceService } from 'src/app/services/wallet-service.service';
import { UtileSericeService } from 'src/app/shared/services/utile-serice.service';

@Component({
  selector: 'app-register-new-card',
  templateUrl: './register-new-card.component.html',
  styleUrls: ['./register-new-card.component.scss']
})
export class RegisterNewCardComponent implements OnInit {

  cardName: string; 
  cardNumber: string; 
  clientIP: string; 
  confirmationToken: string; 

  constructor(
    private _utileService: UtileSericeService,
    private _walletService: WalletServiceService
  ){

  };

  ngOnInit(){

    this.getClientIP(); 
    this.getConfirmationToken(); 
  };


  getClientIP() { 

    return this._utileService.getClientIP(); 
  }; 

  getConfirmationToken() { 
    
    const schema = { 
      "domainId": 2,
      "languageId": 1,
      "msisdn": this._utileService.getUserName(),
      "sessionId": this._utileService.getSessionId()
    }; 

    return this._walletService
               .getConfirmationToken(schema)
               .subscribe( data => {
                console.log(data);
                
               })
  }; 


  onCardRegister() { 

    const schema = { 
      "amount": 0,
      "clientIpAddr": this.clientIP,
      "confirmationToken": this.confirmationToken,
      "currency": "GEL",
      "description": "card Register",
      "domainId": 2,
      "languageId": 1,
      "msisdn": this._utileService.getUserName(),
      "registeredCardId": this.cardNumber,
      "registeredCardName": this.cardName,
      "sessionId": this._utileService.getSessionId(),
      "tbcCommand": "Registration"
    };


  }; 

}


