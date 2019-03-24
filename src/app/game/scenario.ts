export class Choice {
  id: string;
  text: string;
  effects?: Effect[] = [];
  nextSlide?: string;
  isAvailable: boolean;
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
  initialize: (any) => void; 
}


export const SCENARIO: any = {
  name: "Мова",
  actorNames:
  {
    'Ales.png': 'Алесь',
    'Alex.png': 'Алекс',
    'mom.png': 'Мама'
  },
  counters:
  {
    'global': { type: 'avg', values: [] },
    'a': { type: 'sum', values: [] },
    'b': { type: 'sum', values: [] },
    'c': { type: 'sum', values: [] },
    'd': { type: 'sum', values: [] },
    'e': { type: 'sum', values: [] }
  },
  chosen: {},

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
          id: 'a',
          text: 'Сдаюсь, пусть играют, я опускаю руки',
          effects: [
            { kind: EffectKind.CounterInc, counterName: 'a', counterIncValue: 1 },
            { kind: EffectKind.CounterInc, counterName: 'global', counterIncValue: 10 }],
          nextSlide: 'third'
        },
        {
          id: 'slide_a_choice_b',
          text: 'Нет, игры отдельно, уроки отдельно!',
          effects: [
            { kind: EffectKind.CounterInc, counterName: 'b', counterIncValue: 1 },
            { kind: EffectKind.CounterInc, counterName: 'global', counterIncValue: 20 }
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
      choices: [
        {
          id: 'a',
          text: 'choice a',
          effects: [
            { kind: EffectKind.CounterInc, counterName: 'a', counterIncValue: 1 },
            { kind: EffectKind.CounterInc, counterName: 'global', counterIncValue: 10 }],
          
        },
        {
          id: 'b',
          text: 'choice b',
          effects: [
            { kind: EffectKind.CounterInc, counterName: 'b', counterIncValue: 1 },
            { kind: EffectKind.CounterInc, counterName: 'global', counterIncValue: 20 }
          ]
        },
        {
          id: 'c',
          text: 'choice c',
          effects: [
            { kind: EffectKind.CounterInc, counterName: 'e', counterIncValue: 1 },
            { kind: EffectKind.CounterInc, counterName: 'global', counterIncValue: 50 }
          ]
        }
      ],
      initialize: (scenario) => {
        if(scenario.chosen['first_a']){
          scenario.items.third.background = 'home.jpg';
        }
      }
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