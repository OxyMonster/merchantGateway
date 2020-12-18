import { Component, OnInit } from '@angular/core';
import { faTrashAlt, faPlusSquare, faCreditCard } from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  faTrashAlt = faTrashAlt;
  faPlusSquare= faPlusSquare
  faCreditCard = faCreditCard;
 
  activeCategory: string = 'add'; 

  constructor() { }


  ngOnInit(): void {
  }

  changeClass(type: string) {
    this.activeCategory = type;
  }

}
