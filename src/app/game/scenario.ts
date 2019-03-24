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
    'LI.png': 'Вераніка'
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
      nextSlide: 's_7',
      choices: []
    },
    s_7: {
      background: 'school.jpg',
      actorImg: 'MC.png',
      message: 'Я конечно понимаю, что ты новенький, но ты же в своей прошлой школе учил мову. А тест, почему-то, все равно не пишешь…Особенный, что ли?',
      nextSlide: 's_8',
      choices: []
    },
    s_8: {
      background: 'school.jpg',
      actorImg: 'Alex.png',
      message: 'Ну можно и так сказать. Мы только-только переехали с родителями из Тарту, поэтому белорусский язык для меня пока что почти как иностранный… Я его только вот сейчас на этих уроках впервые услышал.',
      nextSlide: 's_9',
      choices: []
    },
    s_9: {
      background: 'school.jpg',
      actorImg: 'MC.png',
      message: 'Ну да, тут у нас его редко услышишь, разве что Алеся нашего послушать!',
      nextSlide: 's_10',
      choices: []
    },
    s_10: {
      background: 'school.jpg',
      actorImg: 'Alex.png',
      message: 'Вот мне всегда интересно было, почему белорусы не говорят по-белорусски?',
      nextSlide: 's_11',
      choices: []
    },
    s_11: {
      background: 'school.jpg',
      actorImg: 'MC.png',
      message: 'Не знаю, так исторически сложилось, наверное…',
      nextSlide: 's_12',
      choices: []
    },
    s_12: {
      background: 'school.jpg',
      actorImg: 'Alex.png',
      message: 'У тебя в семье все тоже по-русски разговаривают?',
      nextSlide: 's_13',
      choices: []
    },
    s_13: {
      background: 'school.jpg',
      actorImg: 'MC.png',
      message: 'Ага, ну почти, бабуля на трасянке шпарит. Но так она из деревни!',
      nextSlide: 's_14',
      choices: []
    },
    s_14: {
      background: 'school.jpg',
      actorImg: 'Alex.png',
      message: 'А что такое "трасянка"?',
      nextSlide: 's_15',
      choices: []
    },
    s_15: {
      background: 'school.jpg',
      actorImg: 'MC.png',
      message: 'О, да ты совсем не в теме. Короче, смотри, трасянка - это такая острая смесь с русского и белорусского. Ну, например, "я пайшоў аддыхаць". Ахах.',
      nextSlide: 's_16',
      choices: []
    },
    s_16: {
      background: 'school.jpg',
      actorImg: 'Alex.png',
      message: 'Интересно как! Ну будешь меня просвещать теперь в вопросе таких особенностей?',
      nextSlide: 's_17',
      choices: []
    },
    s_17: {
      background: 'school.jpg',
      actorImg: 'MC.png',
      message: 'Да без проблем. Обращайся!',
      nextSlide: 's_18',
      choices: []
    },
    s_18: {
      background: 'school.jpg',
      actorImg: 'MC.png',
      message: 'Ну всё, наконец-то уроки закончились… Пятница, красота! Куда б пойти?',
      nextSlide: 's_19',
      choices: [
        {
          id: 'a',
          text: 'В кино',
          effects: [],
        },
        {
          id: 'a',
          text: 'В кафе',
          effects: [],
        },
        {
          id: 'c',
          text: 'В парк',
          effects: []
        }
      ]
    },
    s_19: {
      background: 'store.jpg',
      actorImg: 'MC.png',
      message: 'Хмм, что бы выбрать... О, сейчас глянем, что народ берет!',
      nextSlide: 's_20',
      choices: []
    },
    s_20: {
      background: 'store.jpg',
      actorImg: 'MC.png',
      message: 'Слушай, вкусное мороженое вот это, которое ты сейчас взяла?',
      nextSlide: 's_21',
      choices: []
    },
    s_21: {
      background: 'store.jpg',
      actorImg: 'LI.png',
      message: 'Ага, смачнае :)',
      nextSlide: 's_22',
      choices: []
    },
    s_22: {
      background: 'store.jpg',
      actorImg: 'MC.png',
      message: 'То есть вкусное?',
      nextSlide: 's_23',
      choices: []
    },
    s_23: {
      background: 'store.jpg',
      actorImg: 'LI.png',
      message: 'То бок смачнае;)',
      nextSlide: 's_24',
      choices: []
    },
    s_24: {
      background: 'store.jpg',
      actorImg: 'MC.png',
      message: 'Ты только по-белорусски разговаривать умеешь?',
      nextSlide: 's_25',
      choices: []
    },
    s_25: {
      background: 'store.jpg',
      actorImg: 'LI.png',
      message: 'Можа быць, пакуль не праверыш, не даведаешся.',
      nextSlide: 's_26',
      choices: []
    },
    s_26: {
      background: 'store.jpg',
      actorImg: 'MC.png',
      message: 'Ахах, тогда можа мне праверыць?',
      nextSlide: 's_27',
      choices: []
    },
    s_27: {
      background: 'store.jpg',
      actorImg: 'LI.png',
      message: 'Можа:)',
      nextSlide: 's_28',
      choices: []
    },
    s_28: {
      background: 'store.jpg',
      actorImg: 'MC.png',
      message: 'Ахах, тогда можа мне праверыць?',
      nextSlide: 's_27',
      choices: [],
      initialize: (scenario) => {
          scenario.items.s_28.message = 'Я ' + scenario.playerName + '. Ты спешишь?';
      }
    },
    oios_19: {
      background: '',
      actorImg: 'MC.png',
      message: 'Так, осталось только в магазин за мороженным-  и в путь!',
      nextSlide: 's_19',
      choices: [],
      initialize: (scenario) => {
        if(scenario.chosen['s_18_a']){
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