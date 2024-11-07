import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: 'counter.component.html'
})

export class CounterComponent {
  public counter:number = 10;
  constructor() { }
  increaseCounter(value:number):void{
    this.counter+=value;
  }
  decreaseCounter():void{
    this.counter--;
  }
  resetCounter():void{
    this.counter = 10;
  }

}

