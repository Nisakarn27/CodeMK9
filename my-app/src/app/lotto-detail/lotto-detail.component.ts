import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lotto-detail',
  templateUrl: './lotto-detail.component.html',
  styleUrls: ['./lotto-detail.component.css']
})
export class LottoDetailComponent implements OnInit {
  public isClicked = [];
 isHome :boolean;
  constructor() { }

  ngOnInit() {
    this.isHome = false;
  }

  hidePanel(data){


    this.isHome = data;
  }
}
