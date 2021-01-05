import { HttpClient } from '@angular/common/http';
import { Injectable, isDevMode } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import * as shajs from 'sha.js';

@Injectable({
  providedIn: 'root'
})
export class UtileSericeService {
  
  environment = environment; 

  constructor(
    private _http: HttpClient
  ) { }

  getClientIP() {    
    return this._http.get("http://api.ipify.org/?format=json")
  };

  isLoggedIn() { 
    return !!localStorage.getItem('sessionId');
  }; 

  getSessionId() {
    return localStorage.getItem('sessionId');
  };

  getUserName() {
    return localStorage.getItem('userName'); 
  };

  getMerchantName() {
    return localStorage.getItem('merchantName'); 
  };

  getDescription() {
    return localStorage.getItem('description'); 
  };

  getAmount() {
    return localStorage.getItem('amount'); 
  };

  getUserInfo(data): Observable<any> { 
    const url = '/client/get-user-info'; 
    
    if (isDevMode()) {

      return this._http.post('api' + url, data)
    } else { 

      return this._http.post(environment.urlAddress + url, data)
    }
  };

  hashString(data: Object) {
    const string =  `akido${data['merchantName']}${data['orderCode']}${data['amount']}${data['currency']}${data['description']}${data['lng']}`;
    return shajs('sha256').update(string).digest('hex');

  }
}
