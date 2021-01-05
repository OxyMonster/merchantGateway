import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faTrashAlt, faPlusSquare, faCreditCard, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { UtileSericeService } from 'src/app/shared/services/utile-serice.service';



@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  faTrashAlt = faTrashAlt;
  faPlusSquare= faPlusSquare
  faCreditCard = faCreditCard;
  faSignOutAlt = faSignOutAlt;
 
  activeCategory: string = 'ballance'; 

  userInfo: any[] = []; 

  constructor(
    private router: Router,
    private _utileService: UtileSericeService
  ) { }


  ngOnInit(): void {
    this.getUserInfo();
  }

  changeClass(type: string) {
    this.activeCategory = type;
  };

  logOut() {
    localStorage.clear();
    this.router.navigate(['/wallet']);
  }; 

  getUserInfo() {
    
    const schema  = {
      "domainId": 2,
      "languageId": 1,
      "sessionId": this._utileService.getSessionId(),
      "username": this._utileService.getUserName()
    };  
    console.log(schema);
    
    return this._utileService
               .getUserInfo(schema)
               .subscribe(data => {
                 this.userInfo = [data['data']]; 
                 console.log(this.userInfo);

                 
               }, err => { 
                 console.log(err);
               })
  }

}
