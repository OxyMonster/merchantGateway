import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtileSericeService {

  constructor(
    private http: HttpClient
  ) { }

  getClientIP() {    
    return this.http.get("http://api.ipify.org/?format=json")
      
  };

  isLoggedIn() { 
    return !!localStorage.getItem('sessionId');
  }; 

  getSessionId() {
    return localStorage.getItem('sessionId');
  };

  getUserName() {
    return localStorage.getItem('userName'); 
  }
}
