import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-success',
  templateUrl: './page-success.component.html',
  styleUrls: ['./page-success.component.scss']
})
export class PageSuccessComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    localStorage.clear();
  }

}
