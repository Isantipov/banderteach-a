import { Component, OnInit } from '@angular/core';
import { Slide, Choice, Effect, EffectKind, SCENARIO } from './scenario';
// import { Scenario } from './scenario';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  chosen: any = {};

  ngOnInit() {
  }

  onClick(): void {
    if (this.currentSlide.choices == null || this.currentSlide.choices == [])
      this.currentSlide = this.sc.items[this.currentSlide.nextSlide];
  }

  onSelect(choice: Choice, event: Event): void {
    // alert(JSON.stringify(choice));
    var nextSlide = this.currentSlide.nextSlide;
    if (choice.nextSlide != null)
      nextSlide = choice.nextSlide;

    this.chosen[this.currentSlide.id + '_' + choice.id] = true;
    if (choice.effects != null) {
      choice.effects.forEach(effect => {
        this.sc.counters[effect.counterName].values.push(effect.counterIncValue);
      });
    }
    this.currentSlide = this.sc.items[nextSlide];
    event.stopPropagation();
  }

  playerName: string;
  sc = SCENARIO;
  currentSlide: Slide = this.sc.items[this.sc.entry];

  get actorName(): string {
    var actor = this.currentSlide.actorImg;
    if (actor == 'MC.png')
      return this.playerName;
    return this.sc.actorNames[actor];
  }

  gameInitialized: boolean = false;

  initialize(): void {
    this.gameInitialized = true;
  }

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




