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
    this._route.queryParams.subscribe( data => {
      console.log(data);
      
    this.queryParams = Object.values(data);     
    this.checkQueryParams();

  });    
  }

  checkQueryParams(): void {

    if ( this.queryParams[0], this.queryParams[1], this.queryParams[2] ) {
      this.isMerchantValid = true;

      localStorage.setItem('merchantName', this.queryParams[0]);
      localStorage.setItem('description', this.queryParams[1]); 
      localStorage.setItem('amount', this.queryParams[2]); 

      console.log('correct');
      
    } else {      
      console.log('false');
      this._router.navigate(['err']);
      this.isMerchantValid = false;
    }
  }; 

  redirectToLogin() {
    this._router.navigate(['/wallet']); 
    
  }

}
