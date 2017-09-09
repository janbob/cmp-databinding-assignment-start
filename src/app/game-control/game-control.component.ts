import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  @Output('eventEmitted') event = new EventEmitter<{number: number}>();

  count:number = 0;
  id: any;

  constructor() { }

  ngOnInit() {
  }

  startGame(){
    this.id = setInterval(() => {
      this.event.emit({number: this.count++});
    }, 1000);
  }

  stopGame(){
    clearInterval(this.id);
  }

}
