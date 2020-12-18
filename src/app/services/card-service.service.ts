import { Injectable, isDevMode } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from "src/environments/environment.prod";

@Injectable({
  providedIn: 'root'
})
export class CardServiceService {

  envURL = environment; 
  
  constructor(
    private _http: HttpClient
  ) { }

  getTransactionId(schema: Object): Observable<any> {
    
    if (!isDevMode()) {
      return this._http.post(environment.urlAddress + 'client/pay-by-card', schema)
    } else {   
      const url = 'api/client/'; 
      return this._http.post(url + 'pay-by-card', schema)
    }; 

  }
}
