export class Choice {
  id: string;
  text: string;
  effects?: Effect[] = [];
  nextSlide?: string;
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

export class Slide {
  id: string;
  background: string;
  actorImg: string;
  message: string;
  choices: Choice[];
  nextSlide?: string;
}


export const SCENARIO: any = {
  name: "Мова",
  entry: 'first',
  items: {
    first: {
      id: 'first',
      background: 'coworking.jpg',
      actorImg: 'Ales.png',
      message: 'Так игрушки, говоришь? Так может пусть лучше играют?',
      nextSlide: 'second',
      choices: [
        {
          id: 'slide_a_choice_a',
          text: 'Сдаюсь, пусть играют, я опускаю руки',
          effects: [{ kind: EffectKind.CounterInc, counterName: 'a', counterIncValue: 1 }],
          nextSlide: 'third'
        },
        {
          id: 'slide_a_choice_b',
          text: 'Нет, игры отдельно, уроки отдельно!',
          effects: [
            { kind: EffectKind.CounterInc, counterName: 'b', counterIncValue: 2 }
          ]
        },
        {
          id: 'slide_a_choice_c',
          text: 'Хм, может действительно призвать игры в союзники…'
        }
      ]
    },
    second: {
      id: 'second',
      background: 'accelerator.jpg',
      actorImg: 'Alex.png',
      message: 'Second',
      nextSlide: 'third',
    },
    third: {
      id: 'third',
      background: 'accelerator.jpg',
      actorImg: 'mom.png',
      message: 'Slide three',
      nextSlide: 'fourth',
    },
    fourth: {
      background: 'accelerator.jpg',
      actorImg: 'Ales.png',
      message: 'Slide 4',
      nextSlide: 'fifth',
    },
    fifth: {
      background: 'home.jpg',
      actorImg: 'Daria.png',
      message: 'Daria speaking slide 5',
      nextSlide: 'sixth',
    },
    sixth: {
      background: 'cafe.jpg',
      actorImg: 'MC.png',
      message: 'FINITA',
      nextSlide: null
    }

  }
};