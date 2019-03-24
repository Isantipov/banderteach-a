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


  onSelect(choice: Choice): void {
    alert(JSON.stringify(choice));
  }

  background: string = 'coworking.jpg';
  actorImg: string = 'Ales.png';
  message: string = 'Так игрушки, говоришь? Так может пусть лучше играют?';
  choices: Choice[] = [
    {
      id: 'slide_a_choice_a',
      text: 'Сдаюсь, пусть играют, я опускаю руки',
      effects: [{ kind: EffectKind.CounterInc, counterName: 'a', counterIncValue: 1 }]
    },
    {
      id: 'slide_a_choice_b',
      text: 'Нет, игры отдельно, уроки отдельно!',
      effects: [
        { kind: EffectKind.CounterInc, counterName: 'b', counterIncValue: 2 },
        { kind: EffectKind.Jump, jumpTarget: 'slide_beta' },
      ]
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
  effects?: Effect[] = [];
}

export class Effect {
  kind: EffectKind;
  counterName?: string;
  counterIncValue?: number;
  jumpTarget?: string;
}
enum EffectKind {
  CounterInc = "CounterInc",
  Jump = "Jump"
}
