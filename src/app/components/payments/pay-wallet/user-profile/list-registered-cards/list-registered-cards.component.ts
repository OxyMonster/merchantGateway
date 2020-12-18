import { Component, OnInit } from '@angular/core';
import { WalletServiceService } from 'src/app/services/wallet-service.service';
import { UtileSericeService } from 'src/app/shared/services/utile-serice.service';

@Component({
  selector: 'app-list-registered-cards',
  templateUrl: './list-registered-cards.component.html',
  styleUrls: ['./list-registered-cards.component.scss']
})
export class ListRegisteredCardsComponent implements OnInit {

  registeredCardsList: any[] = ['gio', 'giorgi', 'xvicha', 'nino'];
  isPayButtonActive: boolean = false; 

  constructor(
    private _utileService: UtileSericeService, 
    private _walletService: WalletServiceService
  ) { }

  ngOnInit(): void {
    this.getRegisteredCards(); 
  }

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

  onCardSelect(selectedCard: any) {
    this.registeredCardsList = []; 
    this.registeredCardsList.push(selectedCard);
    this.isPayButtonActive = true; 
    
  }

}
