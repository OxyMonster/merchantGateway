import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UtileSericeService } from '../services/utile-serice.service';

@Injectable({
  providedIn: 'root'
})


export class AuthGuardGuard implements CanActivate {
  constructor(
    private _utileService: UtileSericeService,
    private _router: Router
  ){}; 

  canActivate(): boolean { 
    if ( this._utileService.isLoggedIn()) { 

      return true
    } else {
      this._router.navigate(['/wallet'])
      return false; 
    }
  }
  
}

