import { Component, OnInit } from '@angular/core';
import { WalletServiceService } from 'src/app/services/wallet-service.service';
import { UtileSericeService } from 'src/app/shared/services/utile-serice.service';

@Component({
  selector: 'app-delete-registered-cards',
  templateUrl: './delete-registered-cards.component.html',
  styleUrls: ['./delete-registered-cards.component.scss']
})
export class DeleteRegisteredCardsComponent implements OnInit {
  
  allRegisteredCards: any[]= ['zura', 'oto', 'qeti', 'jemali']; 
  isDeleteBtnActive: boolean = false; 

  constructor(
    private _walletService: WalletServiceService,
    private _utileService: UtileSericeService
  ) { }

  ngOnInit(): void {
    this.getRegisteredCards(); 
  }; 

  getRegisteredCards() { 
    const schema = { 
      "domainId": 2,
      "languageId": 1,
      "msisdn": this._utileService.getUserName(),
      "sessionId": this._utileService.getSessionId()
    }; 

    return this._walletService
               .getRegisteredCards(schema)
               .subscribe( data => { 
                 console.log(data);
                 
               }, err => {
                 console.log(err);
                 
               })
  }; 

  onDelete(selectedCard) {
    this.allRegisteredCards = []; 
    this.allRegisteredCards.push(selectedCard); 
    this.isDeleteBtnActive = true; 
    
  }


}
