import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  events:number[] = [];

  isEven(number: number):boolean{
    if(number % 2 == 0){
      return true;
    }
    return false;
  }

  onEventEmitted(eventData:{number: number}){
    this.events.push(eventData.number);
  }
}
