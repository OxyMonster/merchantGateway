import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CardServiceService {

  constructor(
    private _http: HttpClient
  ) { }

  getTransactionId(schema: Object): Observable<any> {
    const url = 'api/client'; 

    return this._http.post(url + '/pay-by-card', schema)
  }
}
