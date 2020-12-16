import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CardServiceService } from 'src/app/services/card-service.service';
import { UtileSericeService } from 'src/app/services/utile-serice.service';

@Component({
  selector: 'app-select-payment',
  templateUrl: './select-payment.component.html',
  styleUrls: ['./select-payment.component.scss']
})
export class SelectPaymentComponent implements OnInit {
  
  queryParams: Object; 
  clientIp: string; 
  isMerchantValid = false; 

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _cardService: CardServiceService,
    private _utileService: UtileSericeService

  ) { }

  ngOnInit(): void {

      this.getClientIp(); 
      this._route.queryParams.subscribe( data => {
        console.log(data);
        
      this.queryParams = Object.values(data);     
      this.checkQueryParams(data);
      this.checkIsMerchantValid();
    });
    
  
  }; 

  getClientIp() { 

    return this._utileService
               .getClientIP()
               .subscribe(data => {        

                 this.clientIp = data['ip']
               }, err => { 
                 console.log(err);
                 
               })
  };
  
  checkQueryParams(params): void {

    if ( this.queryParams[0], this.queryParams[1], this.queryParams[2] ) {
      console.log('correct');
      
    } else {      
      console.log('false');
      this._router.navigate(['err']);
    }
  };



  checkIsMerchantValid() {
    const schema = {
      
        "amount": this.queryParams[2],
        "clientIpAddr": this.clientIp,
        "description": this.queryParams[1],
        "languageId": 1,
        "merchantName": this.queryParams[0]
      
    };

    return this._cardService
               .getTransactionId(schema)
               .subscribe(data => {
                 data['isSuccess'] ? this.isMerchantValid = true : this.isMerchantValid = false; 
                 
               }, err => {
                 console.log(err);
                 this.isMerchantValid = false; 
               })
  };

  onPaymentSelect(payType: string): void {

    if ( payType === 'wallet') {
// && Set query Parameters fot wallet
      this._router.navigate(
        ['/wallet'], 
        { queryParams: 
          { 
            merchantName: this.queryParams[0],
            description: this.queryParams[1],
            amount: this.queryParams[2]
  
          }, 
        queryParamsHandling: 'merge' }
        );

    } else { 
// && Set query Parameters fot card
      this._router.navigate(
        ['/card'], 
        { queryParams: 
          { 
            merchantName: this.queryParams[0],
            description: this.queryParams[1],
            amount: this.queryParams[2]
  
          }, 
        queryParamsHandling: 'merge' }
        );
    }
  };

}
