export class Choice {
  id: string;
  text: string;
  effects?: Effect[] = [];
}

export class Effect {
  kind: EffectKind;
  counterName?: string;
  counterIncValue?: number;
  nextSlide?: string;
}
export enum EffectKind {
  CounterInc = "CounterInc",
  NextSlide = "NextSlide"
}

export class Slide{
  id: string;
  background: string;
  actorImg: string;
  message: string;
  choices: Choice[];
  nextSlide?: string;
}


export const Scenario ={
  name : "Мова",
  items : [
    {
      id:'first',
      background : 'coworking.jpg',
      actorImg: 'Ales.png',
      message:  'Так игрушки, говоришь? Так может пусть лучше играют?',
      nextSlide: 'second',
      choices: [
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
            { kind: EffectKind.NextSlide, nextSlide: 'slide_beta' },
          ]
        },
        {
          id: 'slide_a_choice_c',
          text: 'Хм, может действительно призвать игры в союзники…'
        }
      ]
    },
    {
      id: 'second',
      background : 'accelerator.jpg',
      actorImg: 'Alex.png',
      message:  'Так игрушки, говоришь? Так может пусть лучше играют?',
    }
  ]
}