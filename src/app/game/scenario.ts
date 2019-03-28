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
      nextSlide: 's_18_1',
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
    s_18_1: {
      background: 'school.jpg',
      actorImg: 'MC.png',
      message: 'Так, осталось только в магазин за мороженным - и в путь!',
      nextSlide: 's_19',
      choices: []
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
      nextSlide: 's_29',
      choices: [],
      initialize: (scenario) => {
          scenario.items.s_28.message = 'Я ' + scenario.playerName + '. Ты спешишь?';
      }
    },
    s_29: {
      background: 'store.jpg',
      actorImg: 'LI.png',
      message: 'А я Вераніка. Не, не паспяшаю.',
      nextSlide: 's_30',
      choices: []
    },
    s_30: {
      id: 's_30',
      background: 'store.jpg',
      actorImg: 'MC.png',
      message: 'Можна зап-ра-сіць ця-бе ў:',
      nextSlide: 's_31',
      choices: [
        {
          id: 'a',
          text: 'кино',
          effects: [],
          nextSlide: 's_31'
        },
        {
          id: 'b',
          text: 'кафе',
          effects: [],
        },
        {
          id: 'c',
          text: 'парк',
          effects: []
        }
      ]
    },
    s_31: {
      background: 'movie.jpg',
      actorImg: 'LI.png',
      message: 'Ну як табе фільм?',
      nextSlide: 's_32',
      choices: [],
      initialize: (scenario) => {
        var current = scenario.items.s_31; 
        if(scenario.chosen['s_30_a']){
          current.background = 'movie.jpg';
        }
        if(scenario.chosen['s_30_b']){
          current.background = 'cafe.jpg';
          current.message = 'Смачная кава?';
        }
        if(scenario.chosen['s_30_c']){
          current.background = 'park.jpg';
          current.message = 'Якое цудоўнае надвор\'е!';
        }
      }
    },
    s_32: {
      background: 'movie.jpg',
      actorImg: 'MC.png',
      message: 'Супер. Слушай, а почему ты стала разговаривать на мове??',
      nextSlide: 's_33',
      choices: [],
      initialize: (scenario) => {
        var current = scenario.items.s_32; 
        if(scenario.chosen['s_30_a']){
          current.background = 'movie.jpg';
        }
        if(scenario.chosen['s_30_b']){
          current.background = 'cafe.jpg';
          // current.message = 'Смачная кава?';
        }
        if(scenario.chosen['s_30_c']){
          current.background = 'park.jpg';
          // current.message = 'Якое цудоўнае надвор\'е!';
        }
      }
    },
    s_33: {
      background: 'movie.jpg',
      actorImg: 'LI.png',
      message: 'Гэта цяжка растлумачыць, разумееш? Яно ўнутры недзе.?',
      nextSlide: 's_34',
      choices: [],
      initialize: (scenario) => {
        var current = scenario.items.s_33; 
        if(scenario.chosen['s_30_a']){
          current.background = 'movie.jpg';
        }
        if(scenario.chosen['s_30_b']){
          current.background = 'cafe.jpg';
          // current.message = 'Смачная кава?';
        }
        if(scenario.chosen['s_30_c']){
          current.background = 'park.jpg';
          // current.message = 'Якое цудоўнае надвор\'е!';
        }
      }
    },
    s_34: {
      background: 'movie.jpg',
      actorImg: 'LI.png',
      message: ' У мяне быў цудоўны настаўнік беларускай мовы. Аднак я ніяк не магла пачаць размаўляць з ім на мове… Хаця яна мне вельмі падабалася.',
      nextSlide: 's_35',
      choices: [],
      initialize: (scenario) => {
        var current = scenario.items.s_34; 
        if(scenario.chosen['s_30_a']){
          current.background = 'movie.jpg';
        }
        if(scenario.chosen['s_30_b']){
          current.background = 'cafe.jpg';
          // current.message = 'Смачная кава?';
        }
        if(scenario.chosen['s_30_c']){
          current.background = 'park.jpg';
          // current.message = 'Якое цудоўнае надвор\'е!';
        }
      }
    },
    s_35: {
      background: 'movie.jpg',
      actorImg: 'LI.png',
      message: 'Я лічу, што гэта больш, чым мова. Я адчуваю, што калі я размаўляю па-руску, я адмаўляюся ад частачкі сябе,нейкая такая сувязь з мінулым, магія',
      nextSlide: 's_36',
      choices: [],
      initialize: (scenario) => {
        var current = scenario.items.s_35; 
        if(scenario.chosen['s_30_a']){
          current.background = 'movie.jpg';
        }
        if(scenario.chosen['s_30_b']){
          current.background = 'cafe.jpg';
          // current.message = 'Смачная кава?';
        }
        if(scenario.chosen['s_30_c']){
          current.background = 'park.jpg';
          // current.message = 'Якое цудоўнае надвор\'е!';
        }
      }
    },
    s_36: {
      background: 'movie.jpg',
      actorImg: 'LI.png',
      message: 'Гэта робіць мяне адначасова і асаблівай, і часткай нечага важлівага... Мова для мяне стала самым важным выбарам...',
      nextSlide: 's_37',
      choices: [],
      initialize: (scenario) => {
        var current = scenario.items.s_36; 
        if(scenario.chosen['s_30_a']){
          current.background = 'movie.jpg';
        }
        if(scenario.chosen['s_30_b']){
          current.background = 'cafe.jpg';
          // current.message = 'Смачная кава?';
        }
        if(scenario.chosen['s_30_c']){
          current.background = 'park.jpg';
          // current.message = 'Якое цудоўнае надвор\'е!';
        }
      }
    },
    s_37: {
      background: 'movie.jpg',
      actorImg: 'MC.png',
      message: 'Это тяжко - разговаривать в нашей стране на беларускай мове!',
      nextSlide: 's_38',
      choices: [],
      initialize: (scenario) => {
        var current = scenario.items.s_37; 
        if(scenario.chosen['s_30_a']){
          current.background = 'movie.jpg';
        }
        if(scenario.chosen['s_30_b']){
          current.background = 'cafe.jpg';
          
        }
        if(scenario.chosen['s_30_c']){
          current.background = 'park.jpg';        
        }
      }
    },   
     s_38: {
      background: 'movie.jpg',
      actorImg: 'LI.png',
      message: 'Часам гэта так, але збольшага ўсе падтрымліваюць. Бацькі прынялі, праўда, сябры некаторыя вырашылі, што гэта занадта, але так нават лепш…',
      nextSlide: 's_39',
      choices: [],
      initialize: (scenario) => {
        var current = scenario.items.s_38; 
        if(scenario.chosen['s_30_a']){
          current.background = 'movie.jpg';
        }
        if(scenario.chosen['s_30_b']){
          current.background = 'cafe.jpg';
          
        }
        if(scenario.chosen['s_30_c']){
          current.background = 'park.jpg';        
        }
      }
    },    
    s_39: {
      background: 'movie.jpg',
      actorImg: 'MC.png',
      message: 'Знаешь, я цябе даже паважаю!',
      nextSlide: 's_40',
      choices: [],
      initialize: (scenario) => {
        var current = scenario.items.s_39; 
        if(scenario.chosen['s_30_a']){
          current.background = 'movie.jpg';
        }
        if(scenario.chosen['s_30_b']){
          current.background = 'cafe.jpg';
          
        }
        if(scenario.chosen['s_30_c']){
          current.background = 'park.jpg';        
        }
      }
    },    
    s_40: {
      background: 'movie.jpg',
      actorImg: 'LI.png',
      message: 'Вай, ты рэзка стаў беларускамоўным? Я таксама цябе ДАЖЕ паважаю:)',
      nextSlide: 's_41',
      choices: [],
      initialize: (scenario) => {
        var current = scenario.items.s_40; 
        if(scenario.chosen['s_30_a']){
          current.background = 'movie.jpg';
        }
        if(scenario.chosen['s_30_b']){
          current.background = 'cafe.jpg';
          
        }
        if(scenario.chosen['s_30_c']){
          current.background = 'park.jpg';        
        }
      }
    },    
    s_41: {
      background: 'movie.jpg',
      actorImg: 'MC.png',
      message: 'А чым ты вообще интересуешься?',
      nextSlide: 's_42',
      choices: [],
      initialize: (scenario) => {
        var current = scenario.items.s_41; 
        if(scenario.chosen['s_30_a']){
          current.background = 'movie.jpg';
        }
        if(scenario.chosen['s_30_b']){
          current.background = 'cafe.jpg';
          
        }
        if(scenario.chosen['s_30_c']){
          current.background = 'park.jpg';        
        }
      }
    },    
    s_42: {
      background: 'movie.jpg',
      actorImg: 'LI.png',
      message: 'Ну, мяне вельмі цікавіць гісторыя. Ведаеш, у часы ВКЛ беларуская мова была адзінай дзяржаўнай мовай пэўны час? Файна, так? А ты чым цікавішся?',
      nextSlide: 's_43',
      choices: [],
      initialize: (scenario) => {
        var current = scenario.items.s_42; 
        if(scenario.chosen['s_30_a']){
          current.background = 'movie.jpg';
        }
        if(scenario.chosen['s_30_b']){
          current.background = 'cafe.jpg';
          
        }
        if(scenario.chosen['s_30_c']){
          current.background = 'park.jpg';        
        }
      }
    },    
    s_43: {
      background: 'movie.jpg',
      actorImg: 'MC.png',
      message: 'Ты не поверишь, я таксам  историей увлекался, только всемирной! Ну, если честно, забросил это дело. Сейчас мне больше программирование интересно. Там деньги, да и нравится мне это...',
      nextSlide: 's_44',
      choices: [],
      initialize: (scenario) => {
        var current = scenario.items.s_43; 
        if(scenario.chosen['s_30_a']){
          current.background = 'movie.jpg';
        }
        if(scenario.chosen['s_30_b']){
          current.background = 'cafe.jpg';
          
        }
        if(scenario.chosen['s_30_c']){
          current.background = 'park.jpg';        
        }
      }
    },    
    s_44: {
      background: 'movie.jpg',
      actorImg: 'LI.png',
      message: 'Значыць, цябе цікавяць грошы?',
      nextSlide: 's_45',
      choices: [],
      initialize: (scenario) => {
        var current = scenario.items.s_44; 
        if(scenario.chosen['s_30_a']){
          current.background = 'movie.jpg';
        }
        if(scenario.chosen['s_30_b']){
          current.background = 'cafe.jpg';
          
        }
        if(scenario.chosen['s_30_c']){
          current.background = 'park.jpg';        
        }
      }
    },    
    s_45: {
      background: 'movie.jpg',
      actorImg: 'MC.png',
      message: 'Не, я же говорю - тут больше душа к этому лежит. Хотя я и жалею немного, что бросил историю...',
      nextSlide: 's_46',
      choices: [],
      initialize: (scenario) => {
        var current = scenario.items.s_45; 
        if(scenario.chosen['s_30_a']){
          current.background = 'movie.jpg';
        }
        if(scenario.chosen['s_30_b']){
          current.background = 'cafe.jpg';
          
        }
        if(scenario.chosen['s_30_c']){
          current.background = 'park.jpg';        
        }
      }
    },    
    s_46: {
      background: 'movie.jpg',
      actorImg: 'LI.png',
      message: 'Нічога, будзеш са мной камунікаваць - усё вернецца;)',
      nextSlide: 's_47',
      choices: [],
      initialize: (scenario) => {
        var current = scenario.items.s_46; 
        if(scenario.chosen['s_30_a']){
          current.background = 'movie.jpg';
        }
        if(scenario.chosen['s_30_b']){
          current.background = 'cafe.jpg';
          
        }
        if(scenario.chosen['s_30_c']){
          current.background = 'park.jpg';        
        }
      }
    },    
    s_47: {
      background: 'movie.jpg',
      actorImg: 'MC.png',
      message: 'Слушай, а давай куды-небудзь еще сходим, калі ў цябе будет свободное время?',
      nextSlide: 's_48',
      choices: [],
      initialize: (scenario) => {
        var current = scenario.items.s_47; 
        if(scenario.chosen['s_30_a']){
          current.background = 'movie.jpg';
        }
        if(scenario.chosen['s_30_b']){
          current.background = 'cafe.jpg';
          
        }
        if(scenario.chosen['s_30_c']){
          current.background = 'park.jpg';        
        }
      }
    },    
    s_48: {
      background: 'movie.jpg',
      actorImg: 'LI.png',
      message: 'Я не супраць. Да сустрэчы, беларус;)',
      nextSlide: 's_49',
      choices: [],
      initialize: (scenario) => {
        var current = scenario.items.s_48; 
        if(scenario.chosen['s_30_a']){
          current.background = 'movie.jpg';
        }
        if(scenario.chosen['s_30_b']){
          current.background = 'cafe.jpg';
          
        }
        if(scenario.chosen['s_30_c']){
          current.background = 'park.jpg';        
        }
      }
    },    
    s_49: {
      background: 'home.jpg',
      actorImg: 'MC.png',
      message: 'Мам, слушай, а почему мы в семье по-белорусски не разговариваем?',
      nextSlide: 's_50',
      choices: [],
    },   
    s_50: {
      background: 'home.jpg',
      actorImg: 'mom.png',
      message: 'А кто его знает, сынок? Все не разговаривают и мы не разговариваем. Сегодня это не особенно нужно, понимаешь? Мова только в книгах и на плакатах.',
      nextSlide: 's_51',
      choices: []
    },    
    s_51: {
      background: 'home.jpg',
      actorImg: 'MC.png',
      message: [],
      nextSlide: 's_52',
      choices: [
        {
          id: 'a',
          text: 'А может мы не должны быть как все? Я вот сегодня с одним человеком познакомился... Она сама решила по-белорусски говорить. Это ее выбор был.',
          effects: [],
        },
        {
          id: 'a',
          text: 'Ну да, как-то так всё, ты права, мам.',
          effects: [],
        },
        {
          id: 'c',
          text: 'Да, белорусский язык уже изжил себя. Это как латынь. Время его уже прошло, я думаю...',
          effects: []
        }
      ]
    },
    s_52: {
      background: 'home.jpg',
      actorImg: 'MC.png',
      message: 'Маам, какую майку мне надеть  - с Джобсом или с Маском?',
      nextSlide: 's_53',
      choices: []
    },    
    s_53: {
      background: 'home.jpg',
      actorImg: 'mom.png',
      message: 'Что-то ты сегодня сам на себя не похож - что-то важное в школе?',
      nextSlide: 's_54',
      choices: []
    },    
    s_54: {
      background: 'home.jpg',
      actorImg: 'MC.png',
      message: 'Ну, может ... У нас IT-день, так что будут крутые мужики выступать. Может что-то важное возьму для себя. Для будущего айтишника важны связи!',
      nextSlide: 's_55',
      choices: []
    },    
    s_55: {
      background: 'school.jpg',
      actorImg: 'Startuper.png',
      message: 'Hi, guys, I\'m Max! Whats up? Ладно-ладно, я и по-нашему еще не разучился. Просто уже второй год живу в Лондоне. Стипендию за границей получить не так тяжело, как вы думаете. И тут главное - не ваши желания,даже не опыт и знания, а ваша изюминка, цели, которые вы реально поставили... У каждого - свое. Не забывайте про то, что делает вас уникальным...',
      nextSlide: 's_56',
      choices: []
    },    
    s_56: {
      background: 'school.jpg',
      actorImg: 'Coworking man.png',
      message: 'Спадарства! Вітаю! Я хачу ўсіх вас запрасіць да сябе ў каворкінг! Я лічу, што кожнаму з нас будзе там зручна і ўтульна! Паколькі вы маладыя і грошай у вас , я мяркую, ня так і шмат, то я гатовы ўзяць некалькі чалавек бескаштоўна пад сваю апеку! Я веру, што разам мы пабудуем вам вартую будучыню!',
      nextSlide: 's_57',
      choices: []
    },    
    s_57: {
      background: 'school.jpg',
      actorImg: 'Accelerator man.png',
      message: 'Уж не знаю, что вы поняли из речи предыдущего оратора, но я буду говорить на языке, который все знают и все понимают. И вообще, хочу вам сказать, что скоро в мире остануться только три языка - английский, китайский и Java Script. Про остальные можете смело забыть. Гуманитарии вымирают! Если вы чувствуете себя способным на что-то значительное, сделайте все, чтобы это значительное пришлось на IT-сферу.  IT - это деньги, это признание, это власть. ',
      nextSlide: 's_58',
      choices: []
    },    
    s_58: {
      background: 'school.jpg',
      actorImg: 'Accelerator man.png',
      message: 'Запомните - каждое ваше действие может вам помочь в будущем, а может не помочь. В 21 веке всех, кто ошибется с выбором профессии, заменят роботы. Если вы в IT, вы выиграете, я обещаю! И запомните, мое имя - Виктор. Есть идеи? Готовы работать по-взрослому? Приглашаем в наш акселератор!',
      nextSlide: 's_59',
      choices: []
    },    
    s_59: {
      background: 'school.jpg',
      actorImg: 'Daria.png',
      message: 'Привет! Меня зовут Дарья. Почему я здесь? Все просто! Я сделала свой первый стартам в 15, и он... прогорел! И я хочу поделиться этой историей с вами... Что я могу вам посоветовать? Дерзайте! Риск - это не всегда плохо;) Моя жизнь показывает , что поговорка "кто не рискует, тот не пьет шампанского", абсолютно справедливая... Рискуйте! И ничего не бойтесь!',
      nextSlide: 's_60',
      choices: []
    },    
    s_60: {
      background: 'school.jpg',
      actorImg: 'MC.png',
      message: 'Вот это люди, которые чего-то добились... И я бы мог так, только вот один не потяну. Нужно обязательно взять у всех контакты',
      nextSlide: 's_61',
      choices: []
    },    
    s_61: {
      background: 'school.jpg',
      actorImg: 'Alex.png',
      message: 'А как тебе Виктор? Мне кажется, он настоящая акула, знает своё дело.',
      nextSlide: 's_62',
      choices: []
    },    
    s_62: {
      background: 'school.jpg',
      actorImg: 'MC.png',
      message: [],
      nextSlide: 's_63',
      choices: [
        {
          id: 'a',
          text: 'Может он дело свое и знает, но я с ним дела иметь не хочу - хамло какое-то!',
          effects: [],
        },
        {
          id: 'a',
          text: 'По сути, он может и прав, но ведет он себе не очень...',
          effects: [],
        },
        {
          id: 'c',
          text: 'Да, наш человек, с таким далеко пойдешь!',
          effects: []
        }
      ]
    },
    s_63: {
      background: 'school.jpg',
      actorImg: 'Ales.png',
      message: 'Слухай, да мяне сёння родзічы прыехалі, а мне трэба папрацаваць, давай да гэтага мужыка сходзім у каворкінг, раз ён так запрашае.',
      nextSlide: 's_64',
      choices: []
    },    
    s_64: {
      background: 'school.jpg',
      actorImg: 'MC.png',
      message: 'Я тоже со своим интернетом замучался - то работает, то не работает - короче, я с тобой.',
      nextSlide: 's_65',
      choices: []
    },    
    s_65: {
      background: 'coworking.jpg',
      actorImg: 'MC.png',
      message: 'Похоже это здесь, комната 305... А это что  за табличка на двери? Шутка такая или что? Таак: "Прастора беларускай мова. Рускамоўным уваход забаронены."',
      nextSlide: 's_66',
      choices: []
    },    
    s_66: {
      background: 'coworking.jpg',
      actorImg: 'Manager.png',
      message: 'Прывітанне! Заходзьце, не саромейцеся, хлопцы! Што вас спыняе? Нейкія праблемы?',
      nextSlide: 's_67',
      choices: []
    },    
    s_67: {
      background: 'coworking.jpg',
      actorImg: 'MC.png',
      message: [],
      nextSlide: 's_68',
      choices: [
        {
          id: 'a',
          text: 'Проблемы тут похоже у вас! А я пойду отсюда, и поскорее!',
          effects: [],
        },
        {
          id: 'a',
          text: 'Алесь, слушай, выручай. Как там повежливей поздороваться?',
          effects: [],
        },
        {
          id: 'c',
          text: 'Няма праблем сяб-ра! Добры ве-чар? У вас так гацепрыімна.',
          effects: []
        }
      ]
    }, 
    s_68: {
      background: 'coworking.jpg',
      actorImg: 'Ales.png',
      message: 'Ваў, чувак, дзве гадзіны так незаўважна праляцелі! Такі  інтэрнэт цудоўны!',
      nextSlide: 's_69',
      choices: []
    },    
    s_69: {
      background: 'coworking.jpg',
      actorImg: 'MC.png',
      message: 'Да, отлично поработали. И дзякуй, братишка, что помог залогиниться. А то, с этой инструкцией по-белорусски сам черт ногу сломит. Хорошо еще, моих языковых талантов хватило, чтоб кофе с печеньками отыскать!',
      nextSlide: 's_70',
      choices: []
    },    
    s_70: {
      background: 'home.jpg',
      actorImg: 'dad.png',
      message: 'Ну как ваш ИТ-день прошел? Поделишься впечатлениями?',
      nextSlide: 's_71',
      choices: []
    },    
    s_71: {
      background: 'home.jpg',
      actorImg: 'MC.png',
      message: null,
      nextSlide: 's_72',
      choices: [
        {
          id: 'a',
          text: 'Я хочу сам, дома, поработать над собственным проектом',
          effects: [],
        },
        {
          id: 'a',
          text: 'Моё место в стартап-акселераторе',
          effects: [],
        },
        {
          id: 'c',
          text: 'Я нашел отличный коворкинг, в котором можно и работать и тусить',
          effects: []
        }
      ]
    }, 
    s_72: {
      background: 'home.jpg',
      actorImg: 'MC.png',
      message: '',
      nextSlide: 's_73',
      choices: [],
      initialize: (scenario) => {
        var current = scenario.items.s_72; 
        if(scenario.chosen['s_71_a']){
          current.message = 'Зазывал полно, и все чего-то обещают. А вот стоит ли за ними - большой вопрос. Так что, надо бы нам дома с интернетом разобраться и поработаю тут. Не знаю еще, что это будет, может и ИТ, а может и что-то другое, но послушав других, я понял, что пока сам, без чьих-то призывов не разберусь, что мне важно и что меня действительно волнует, дело не двинется';
        }
        if(scenario.chosen['s_71_b']){
          current.message = 'Я нашел человека, который готов даже с такими как мы повозиться и открыть нам двери в мир высоких технологий. Нереально круто! Ты себе не представляешь, каких высот можно достичь, если уже сейчас начать пилить свой стартап!';
        }
        if(scenario.chosen['s_71_c']){
          current.message = 'Я пока не определился с проектом, но нашел место, где мне будет отлично работаться. Прям все одно к одному: и разговор с Вероникой вчерашний, и Миколай этот со своим коворкингом... У них прям здорово и интернет отличный и компы мощные и, представляешь, все по-белаоруски. Я даже не думал, что столько молодых ребят так круто говорят на мове!';
        }
      }
    },
    
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