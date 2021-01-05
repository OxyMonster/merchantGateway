import { HttpClient } from '@angular/common/http';
import { Injectable, isDevMode } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from "../../environments/environment.prod";

@Injectable({
  providedIn: 'root'
})
export class WalletServiceService {

  environment = environment; 
 

  constructor(
    private _http: HttpClient,
  ) { }

  authorize(data: object): Observable<any> {
    const url = 'client/login'; 
    if (isDevMode()) { 
      return this._http.post(environment.urlAddress + url, data); 

    } else { 
      return this._http.post(this.environment.urlAddress + url, data); 
    }
  };

  getConfirmationToken(data: Object): Observable<any> { 
      if (!isDevMode()) { 
        return this._http.post(environment.urlAddress + 'cards/tbc/get-confirmation-token', data); 
      } else { 
        return this._http.post('api/' + 'cards/tbc/get-confirmation-token', data); 
      }
  }; 

  getRegisteredCards(data: Object): Observable<any> { 
    if ( !isDevMode()){
      return this._http.post(environment.urlAddress + 'cards/tbc/registered-cards', data)
    } else {
      return this._http.post('api/' + 'cards/tbc/registered-cards', data)
    }
  };

  payByWallet(data: Object): Observable<any> {
    if ( !isDevMode()){
      return this._http.post(environment.urlAddress + 'client/pay-by-card', data)
    } else {
      return this._http.post('api/' + 'client/pay-by-card', data)
    }
  }; 


}
