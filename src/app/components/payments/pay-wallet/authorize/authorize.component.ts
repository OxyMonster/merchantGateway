import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WalletServiceService } from 'src/app/services/wallet-service.service';

@Component({
  selector: 'app-authorize',
  templateUrl: './authorize.component.html',
  styleUrls: ['./authorize.component.scss']
})
export class AuthorizeComponent implements OnInit {

  userName: string;
  password: string; 
  isLoading: boolean = false; 

  constructor(
    private _walletService: WalletServiceService,
    private _router: Router
  ) { }

  ngOnInit(): void {

  }; 

  onAuthorize() {
    this.isLoading = true; 

    const schema = {
      "domainId": 2,
      "languageId": 1,
      "password": this.password,
      "username": this.userName
    }; 
    console.log(schema);
    
    return this._walletService 
               .authorize(schema)
               .subscribe( data => { 

                 this.isLoading = false; 
                 if (data.data['sessionId']) { 

                    localStorage.setItem('sessionId', data.data['sessionId']);
                    localStorage.setItem('userName', this.userName); 
                    this._router.navigate(['wallet/user-profile']); 

                 } else {
                   console.log('arasowri monacemebi');
                 }; 
                 
               }, err => {

                  this.isLoading = false; 
                  console.log(err);
                 
               })
  }; 


  onRegister() {   
    console.log('register');
    
  }

}
