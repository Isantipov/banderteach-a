import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  background: string = 'coworking.jpg';
  actorImg: string = 'Ales.png';
  message: string = 'Так игрушки, говоришь? Так может пусть лучше играют?';

}
