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

  entry: 's_1',
  items: {
    's_1': {
      background: 'school.jpg',
      actorImg: 'MC.png',
      message: 'Уфф, наконец можно отдохнуть …. 8 балов за тест по-белорусскому!! Эту бы восьмерку в аттестат, будет вообще очень круто!',
      nextSlide: 's_2',
      choices: []
    },
    's_2': {
      background: 'school.jpg',
      actorImg: 'MC.png',
      message: 'Алесь, ты на что тест написал?',
      nextSlide: 's_3',
      choices: []
    },
    s_3: {
      background: 'school.jpg',
      actorImg: 'Ales.png',
      message: 'А ты як думаеш? Натуральна на "10"! :)',
      nextSlide: 's_4',
      choices: []
    },
    s_4: {
      background: 'school.jpg',
      actorImg: 'MC.png',
      message: 'Ну конечно, если бы мои родители разговаривали на мове, я бы тоже тесты на "10" писал!',
      nextSlide: 's_5',
      choices: []
    },
    s_5: {
      background: 'school.jpg',
      actorImg: 'MC.png',
      message: 'Привет, ты ведь Алекс, да? Ты на сколько тест написал?',
      nextSlide: 's_6',
      choices: []
    },
    s_6: {
      background: 'school.jpg',
      actorImg: 'Alex.png',
      message: 'Привет, друг, я не писал этот тест.',
      nextSlide: 's_6',
      choices: []
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

export const SCENARIO_old: any = {
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