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
  choices: Choice[] = [
    {
      id: 'slide_a_choice_a',
      text: 'Сдаюсь, пусть играют, я опускаю руки'
    },
    {
      id: 'slide_a_choice_b',
      text: 'Нет, игры отдельно, уроки отдельно!'
    },
    {
      id: 'slide_a_choice_c',
      text: 'Хм, может действительно призвать игры в союзники…'
    }
  ]
}

export class Choice {
  id: string;
  text: string;
}
