import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BankRedirectServiceService } from 'src/app/services/bank-redirect-service.service';
import { CardServiceService } from 'src/app/services/card-service.service';
import { UtileSericeService } from 'src/app/shared/services/utile-serice.service';

@Component({
  selector: 'app-pay-card',
  templateUrl: './pay-card.component.html',
  styleUrls: ['./pay-card.component.scss']
})
export class PayCardComponent implements OnInit {
  
  queryParams: any; 
  clientIP: string; 
  transactionID: string; 

  constructor( 
    private _route: ActivatedRoute,
    private _cardService: CardServiceService,
    private _utileService: UtileSericeService,
    private _bankRedirectService: BankRedirectServiceService
  ) { }

  ngOnInit(): void {
    this.getClientIp();  
    this._route.queryParams.subscribe(data => {
       this.queryParams = data;
        
      })    
  }; 

  getClientIp() { 
    return this._utileService
               .getClientIP()
               .subscribe(data => {this.clientIP = data['ip']}); 
  }; 

  getTransactionID() { 
    const schema  = { 
      "amount": this.queryParams['amount'],
      "clientIpAddr": this.clientIP,
      "description": this.queryParams['description'],
      "languageId": 1,
      "merchantName": this.queryParams['merchantName']
    }

    return this._cardService
               .getTransactionId(schema)
               .subscribe(data => { 
                 console.log(data);
                 
                  this.transactionID = data.data['transId']; 
                  this.redirctTobank();                   
               }, err => {
                 console.log(err);
                 
               })
  }; 

  redirctTobank() {
      return this._bankRedirectService
                 .post({'trans_id': this.transactionID}, this._bankRedirectService.eCommerceURL);
  
  }


}
