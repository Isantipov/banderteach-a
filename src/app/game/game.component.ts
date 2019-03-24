import { Component, OnInit } from '@angular/core';
import {Slide, Choice, Effect, EffectKind, SCENARIO} from  './scenario';
// import { Scenario } from './scenario';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  onSelect(choice: Choice): void {
    alert(JSON.stringify(choice));
  }
  playerName: string;
  sc = SCENARIO;
  currentSlide: Slide = this.sc.items[this.sc.entry]; 
  
//   {
//   id: 'first',
//   background : 'coworking.jpg',
//   actorImg: 'Ales.png',
//   message: 'Так игрушки, говоришь? Так может пусть лучше играют?',
//   choices: [
//     {
//       id: 'slide_a_choice_a',
//       text: 'Сдаюсь, пусть играют, я опускаю руки',
//       effects: [{ kind: EffectKind.CounterInc, counterName: 'a', counterIncValue: 1 }]
//     },
//     {
//       id: 'slide_a_choice_b',
//       text: 'Нет, игры отдельно, уроки отдельно!',
//       effects: [
//         { kind: EffectKind.CounterInc, counterName: 'b', counterIncValue: 2 },
//         { kind: EffectKind.NextSlide, nextSlide: 'slide_beta' },
//       ]
//     },
//     {
//       id: 'slide_a_choice_c',
//       text: 'Хм, может действительно призвать игры в союзники…'
//     }
//   ]
// }
}
 



