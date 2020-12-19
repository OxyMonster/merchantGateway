import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faTrashAlt, faPlusSquare, faCreditCard, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';



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
 
  activeCategory: string = 'add'; 

  constructor(
    private router: Router
  ) { }


  ngOnInit(): void {
  }

  changeClass(type: string) {
    this.activeCategory = type;
  };

  logOut() {
    localStorage.clear();
    this.router.navigate(['/wallet']);
  }

}
