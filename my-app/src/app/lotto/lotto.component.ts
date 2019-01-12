import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-lotto',
  templateUrl: './lotto.component.html',
  styleUrls: ['./lotto.component.css']
})
export class LottoComponent implements OnInit {
  name = 'Angular 6';
  timeLeft: number = 16200;
  timeLeft1: string;
  interval;
  subscribeTimer: any;

  constructor() { }

  ngOnInit() {
    this.startTimer();
  }
  oberserableTimer() {
    const source = timer(1000, 2000);
    const abc = source.subscribe(val => {
      console.log(val, '-');
      this.subscribeTimer = this.timeLeft - val;
    });
  }
startTimer() {
    this.interval = setInterval(() => {
      if(this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.timeLeft = 160;
      }
          const minutes: number = Math.floor(this.timeLeft / 60);
          const hours: number = Math.floor(minutes / 60);
       this.timeLeft1 =  '0'+hours +' : '+ (minutes - hours * 60) + ' : ' + (this.timeLeft - minutes * 60);
    },1000)
  }

  pauseTimer() {
    clearInterval(this.interval);
  }

}
