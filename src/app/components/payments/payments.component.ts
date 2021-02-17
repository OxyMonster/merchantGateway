import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss'] 
})
export class PaymentsComponent implements OnInit {
  queryParams: Object; 
  isMerchantValid: boolean; 
 
  constructor(
    private _router: Router,
    private _route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getSetQueryParams();

  }


  getSetQueryParams() {
    
    this._route.queryParams.subscribe( data => {
    this.queryParams = data;   
    console.log(this.queryParams);
    this.saveParamsToLocalStorage();
    });
  };

  saveParamsToLocalStorage(): void {

    if ( this.queryParams['amount'] ) {
      this.isMerchantValid = true;  
      // * * * Clear localStorage * * * 
      localStorage.clear();
      localStorage.setItem('merchantName', this.queryParams['merchantName']);
      localStorage.setItem('description', this.queryParams['description']); 
      localStorage.setItem('amount', this.queryParams['amount']); 

      console.log('correct');
      
    } else {      
      console.log('false');
      this._router.navigate(['err']);
      this.isMerchantValid = false;
    }
  }; 

  redirectToLogin() {
    this._router.navigate(['/wallet']); 

  };

}
