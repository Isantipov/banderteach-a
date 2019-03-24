(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <h1>{{title}}</h1> -->\n<!-- <app-heroes></app-heroes> -->\n<app-game></app-game>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Tour of Heroes';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _heroes_heroes_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./heroes/heroes.component */ "./src/app/heroes/heroes.component.ts");
/* harmony import */ var _hero_detail_hero_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hero-detail/hero-detail.component */ "./src/app/hero-detail/hero-detail.component.ts");
/* harmony import */ var _game_game_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./game/game.component */ "./src/app/game/game.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _heroes_heroes_component__WEBPACK_IMPORTED_MODULE_4__["HeroesComponent"],
                _hero_detail_hero_detail_component__WEBPACK_IMPORTED_MODULE_5__["HeroDetailComponent"],
                _game_game_component__WEBPACK_IMPORTED_MODULE_6__["GameComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/game/game.component.css":
/*!*****************************************!*\
  !*** ./src/app/game/game.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".location {height: 100%;}\r\n.scene {\r\n    position: absolute;\r\n    top: 100px; \r\n    margin: 0 0 2em 0;\r\n    padding: 0;\r\n    width: 75%;\r\n}\r\n.message  {\r\n    position: relative;\r\n    left: 0;\r\n    background-color: #00BFFF;\r\n    margin: .5em;\r\n    padding: .5em .5em;\r\n    border-radius: 4px;\r\n    color: white;\r\n}\r\n.hidden {\r\n    display: none;\r\n}\r\n.actor{\r\n    height: 30vh;\r\n}\r\n.actorName{\r\n    position: relative;\r\n    left: 0;\r\n    background-color: #00BFFF;\r\n    margin: .5em;\r\n    padding: .5em .5em;\r\n    border-radius: 4px;\r\n    color: #2A52BE;\r\n}\r\n.choices{\r\n    list-style-type: none;\r\n    }\r\n.choices li {\r\n        cursor: pointer;\r\n        position: relative;\r\n        left: 0;\r\n        background-color: #EEE;\r\n        margin: .5em;\r\n        padding: .3em 0;\r\n        /* height: 1.6em; */\r\n        border-radius: 4px;\r\n    }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZS9nYW1lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsV0FBVyxhQUFhLENBQUM7QUFDekI7SUFDSSxtQkFBbUI7SUFDbkIsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsV0FBVztDQUNkO0FBQ0Q7SUFDSSxtQkFBbUI7SUFDbkIsUUFBUTtJQUNSLDBCQUEwQjtJQUMxQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixhQUFhO0NBQ2hCO0FBQ0Q7SUFDSSxjQUFjO0NBQ2pCO0FBRUQ7SUFDSSxhQUFhO0NBQ2hCO0FBQ0Q7SUFDSSxtQkFBbUI7SUFDbkIsUUFBUTtJQUNSLDBCQUEwQjtJQUMxQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixlQUFlO0NBQ2xCO0FBQ0Q7SUFDSSxzQkFBc0I7S0FDckI7QUFDRDtRQUNJLGdCQUFnQjtRQUNoQixtQkFBbUI7UUFDbkIsUUFBUTtRQUNSLHVCQUF1QjtRQUN2QixhQUFhO1FBQ2IsZ0JBQWdCO1FBQ2hCLG9CQUFvQjtRQUNwQixtQkFBbUI7S0FDdEIiLCJmaWxlIjoic3JjL2FwcC9nYW1lL2dhbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2NhdGlvbiB7aGVpZ2h0OiAxMDAlO31cclxuLnNjZW5lIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMTAwcHg7IFxyXG4gICAgbWFyZ2luOiAwIDAgMmVtIDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgd2lkdGg6IDc1JTtcclxufVxyXG4ubWVzc2FnZSAge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMEJGRkY7XHJcbiAgICBtYXJnaW46IC41ZW07XHJcbiAgICBwYWRkaW5nOiAuNWVtIC41ZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuLmhpZGRlbiB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uYWN0b3J7XHJcbiAgICBoZWlnaHQ6IDMwdmg7XHJcbn1cclxuLmFjdG9yTmFtZXtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBCRkZGO1xyXG4gICAgbWFyZ2luOiAuNWVtO1xyXG4gICAgcGFkZGluZzogLjVlbSAuNWVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgY29sb3I6ICMyQTUyQkU7XHJcbn1cclxuLmNob2ljZXN7XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAuY2hvaWNlcyBsaSB7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNFRUU7XHJcbiAgICAgICAgbWFyZ2luOiAuNWVtO1xyXG4gICAgICAgIHBhZGRpbmc6IC4zZW0gMDtcclxuICAgICAgICAvKiBoZWlnaHQ6IDEuNmVtOyAqL1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIH0iXX0= */"

/***/ }),

/***/ "./src/app/game/game.component.html":
/*!******************************************!*\
  !*** ./src/app/game/game.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [class.hidden]=\"gameInitialized\">\n\n\n\n  <label>Имя:\n    <input [(ngModel)]=\"playerName\" placeholder=\"твоё имя\" />\n  </label>\n  <button (click)=\"initialize()\">Начать</button>\n</div>\n\n<div (click)=\"onClick()\" [class.hidden]=\"!gameInitialized\">\n  <img class=\"location\" src=\"./assets/{{currentSlide.background}}\" />\n  <div class=\"scene\" style=\"\">\n    <img class=\"actor\" src=\"./assets/{{currentSlide.actorImg}}\" />\n    <div class=\"actorName\">\n      {{actorName}}:\n    </div>\n    <div class=\"message\">\n      {{currentSlide.message}}\n    </div>\n    <ul class=\"choices\">\n      <li *ngFor=\"let choice of currentSlide.choices\" (click)=\"onSelect(choice, $event)\">\n        {{choice.text}}\n      </li>\n    </ul>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/game/game.component.ts":
/*!****************************************!*\
  !*** ./src/app/game/game.component.ts ***!
  \****************************************/
/*! exports provided: GameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameComponent", function() { return GameComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _scenario__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scenario */ "./src/app/game/scenario.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// import { Scenario } from './scenario';
var GameComponent = /** @class */ (function () {
    function GameComponent() {
        this.sc = _scenario__WEBPACK_IMPORTED_MODULE_1__["SCENARIO"];
        this.currentSlide = this.sc.items[this.sc.entry];
        this.gameInitialized = false;
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
    GameComponent.prototype.ngOnInit = function () {
    };
    GameComponent.prototype.onClick = function () {
        if (this.currentSlide.choices == null || this.currentSlide.choices.length == 0)
            this.currentSlide = this.sc.items[this.currentSlide.nextSlide];
    };
    GameComponent.prototype.onSelect = function (choice, event) {
        var _this = this;
        // alert(JSON.stringify(choice));
        var nextSlide = this.currentSlide.nextSlide;
        if (choice.nextSlide != null)
            nextSlide = choice.nextSlide;
        this.sc.chosen[this.currentSlide.id + '_' + choice.id] = true;
        if (choice.effects != null) {
            choice.effects.forEach(function (effect) {
                _this.sc.counters[effect.counterName].values.push(effect.counterIncValue);
            });
        }
        this.activateSlide(nextSlide);
        event.stopPropagation();
    };
    GameComponent.prototype.activateSlide = function (slideId) {
        var next = this.sc.items[slideId];
        if (next.initialize != null) {
            next.initialize(this.sc);
        }
        this.currentSlide = this.sc.items[slideId];
    };
    Object.defineProperty(GameComponent.prototype, "actorName", {
        get: function () {
            var actor = this.currentSlide.actorImg;
            if (actor == 'MC.png')
                return this.playerName;
            return this.sc.actorNames[actor];
        },
        enumerable: true,
        configurable: true
    });
    GameComponent.prototype.initialize = function () {
        this.gameInitialized = true;
    };
    GameComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-game',
            template: __webpack_require__(/*! ./game.component.html */ "./src/app/game/game.component.html"),
            styles: [__webpack_require__(/*! ./game.component.css */ "./src/app/game/game.component.css")]
        })
    ], GameComponent);
    return GameComponent;
}());



/***/ }),

/***/ "./src/app/game/scenario.ts":
/*!**********************************!*\
  !*** ./src/app/game/scenario.ts ***!
  \**********************************/
/*! exports provided: Choice, Effect, EffectKind, Slide, SCENARIO, SCENARIO_old */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Choice", function() { return Choice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Effect", function() { return Effect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EffectKind", function() { return EffectKind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Slide", function() { return Slide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SCENARIO", function() { return SCENARIO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SCENARIO_old", function() { return SCENARIO_old; });
var Choice = /** @class */ (function () {
    function Choice() {
        this.effects = [];
    }
    return Choice;
}());

var Effect = /** @class */ (function () {
    function Effect() {
    }
    return Effect;
}());

var EffectKind;
(function (EffectKind) {
    EffectKind["CounterInc"] = "CounterInc";
    EffectKind["NextSlide"] = "NextSlide";
})(EffectKind || (EffectKind = {}));
var Slide = /** @class */ (function () {
    function Slide() {
    }
    return Slide;
}());

var SCENARIO = {
    name: "Мова",
    actorNames: {
        'Ales.png': 'Алесь',
        'Alex.png': 'Алекс',
        'mom.png': 'Мама'
    },
    counters: {
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
                        { kind: EffectKind.CounterInc, counterName: 'global', counterIncValue: 10 }
                    ],
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
            initialize: function (scenario) {
                if (scenario.chosen['first_a']) {
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
var SCENARIO_old = {
    name: "Мова",
    actorNames: {
        'Ales.png': 'Алесь',
        'Alex.png': 'Алекс',
        'mom.png': 'Мама'
    },
    counters: {
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
                        { kind: EffectKind.CounterInc, counterName: 'global', counterIncValue: 10 }
                    ],
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
                        { kind: EffectKind.CounterInc, counterName: 'global', counterIncValue: 10 }
                    ],
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
            initialize: function (scenario) {
                if (scenario.chosen['first_a']) {
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


/***/ }),

/***/ "./src/app/hero-detail/hero-detail.component.css":
/*!*******************************************************!*\
  !*** ./src/app/hero-detail/hero-detail.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlcm8tZGV0YWlsL2hlcm8tZGV0YWlsLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/hero-detail/hero-detail.component.html":
/*!********************************************************!*\
  !*** ./src/app/hero-detail/hero-detail.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"hero\">\n\n  <h2>{{hero.name | uppercase}} Details</h2>\n  <div><span>id: </span>{{hero.id}}</div>\n  <div>\n    <label>name:\n      <input [(ngModel)]=\"hero.name\" placeholder=\"name\"/>\n    </label>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/hero-detail/hero-detail.component.ts":
/*!******************************************************!*\
  !*** ./src/app/hero-detail/hero-detail.component.ts ***!
  \******************************************************/
/*! exports provided: HeroDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroDetailComponent", function() { return HeroDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _hero__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hero */ "./src/app/hero.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeroDetailComponent = /** @class */ (function () {
    function HeroDetailComponent() {
    }
    HeroDetailComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _hero__WEBPACK_IMPORTED_MODULE_1__["Hero"])
    ], HeroDetailComponent.prototype, "hero", void 0);
    HeroDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-hero-detail',
            template: __webpack_require__(/*! ./hero-detail.component.html */ "./src/app/hero-detail/hero-detail.component.html"),
            styles: [__webpack_require__(/*! ./hero-detail.component.css */ "./src/app/hero-detail/hero-detail.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeroDetailComponent);
    return HeroDetailComponent;
}());



/***/ }),

/***/ "./src/app/hero.ts":
/*!*************************!*\
  !*** ./src/app/hero.ts ***!
  \*************************/
/*! exports provided: Hero */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Hero", function() { return Hero; });
var Hero = /** @class */ (function () {
    function Hero() {
    }
    return Hero;
}());



/***/ }),

/***/ "./src/app/heroes/heroes.component.css":
/*!*********************************************!*\
  !*** ./src/app/heroes/heroes.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* HeroesComponent's private CSS styles */\n.selected {\n  background-color: #CFD8DC !important;\n  color: white;\n}\n.heroes {\n  margin: 0 0 2em 0;\n  list-style-type: none;\n  padding: 0;\n  width: 15em;\n}\n.heroes li {\n  cursor: pointer;\n  position: relative;\n  left: 0;\n  background-color: #EEE;\n  margin: .5em;\n  padding: .3em 0;\n  height: 1.6em;\n  border-radius: 4px;\n}\n.heroes li.selected:hover {\n  background-color: #BBD8DC !important;\n  color: white;\n}\n.heroes li:hover {\n  color: #607D8B;\n  background-color: #DDD;\n  left: .1em;\n}\n.heroes .text {\n  position: relative;\n  top: -3px;\n}\n.heroes .badge {\n  display: inline-block;\n  font-size: small;\n  color: white;\n  padding: 0.8em 0.7em 0 0.7em;\n  background-color: #607D8B;\n  line-height: 1em;\n  position: relative;\n  left: -1px;\n  top: -4px;\n  height: 1.8em;\n  margin-right: .8em;\n  border-radius: 4px 0 0 4px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVyb2VzL2hlcm9lcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDBDQUEwQztBQUMxQztFQUNFLHFDQUFxQztFQUNyQyxhQUFhO0NBQ2Q7QUFDRDtFQUNFLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsV0FBVztFQUNYLFlBQVk7Q0FDYjtBQUNEO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixRQUFRO0VBQ1IsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLG1CQUFtQjtDQUNwQjtBQUNEO0VBQ0UscUNBQXFDO0VBQ3JDLGFBQWE7Q0FDZDtBQUNEO0VBQ0UsZUFBZTtFQUNmLHVCQUF1QjtFQUN2QixXQUFXO0NBQ1o7QUFDRDtFQUNFLG1CQUFtQjtFQUNuQixVQUFVO0NBQ1g7QUFDRDtFQUNFLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIsYUFBYTtFQUNiLDZCQUE2QjtFQUM3QiwwQkFBMEI7RUFDMUIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsVUFBVTtFQUNWLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsMkJBQTJCO0NBQzVCIiwiZmlsZSI6InNyYy9hcHAvaGVyb2VzL2hlcm9lcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogSGVyb2VzQ29tcG9uZW50J3MgcHJpdmF0ZSBDU1Mgc3R5bGVzICovXG4uc2VsZWN0ZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQ0ZEOERDICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5oZXJvZXMge1xuICBtYXJnaW46IDAgMCAyZW0gMDtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBwYWRkaW5nOiAwO1xuICB3aWR0aDogMTVlbTtcbn1cbi5oZXJvZXMgbGkge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VFRTtcbiAgbWFyZ2luOiAuNWVtO1xuICBwYWRkaW5nOiAuM2VtIDA7XG4gIGhlaWdodDogMS42ZW07XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cbi5oZXJvZXMgbGkuc2VsZWN0ZWQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQkJEOERDICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5oZXJvZXMgbGk6aG92ZXIge1xuICBjb2xvcjogIzYwN0Q4QjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0RERDtcbiAgbGVmdDogLjFlbTtcbn1cbi5oZXJvZXMgLnRleHQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTNweDtcbn1cbi5oZXJvZXMgLmJhZGdlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IHNtYWxsO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDAuOGVtIDAuN2VtIDAgMC43ZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICM2MDdEOEI7XG4gIGxpbmUtaGVpZ2h0OiAxZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogLTFweDtcbiAgdG9wOiAtNHB4O1xuICBoZWlnaHQ6IDEuOGVtO1xuICBtYXJnaW4tcmlnaHQ6IC44ZW07XG4gIGJvcmRlci1yYWRpdXM6IDRweCAwIDAgNHB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/heroes/heroes.component.html":
/*!**********************************************!*\
  !*** ./src/app/heroes/heroes.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>{{appTitle}}</h2>\n\n<ul class=\"heroes\">\n  <li *ngFor=\"let hero of heroes\"\n    [class.selected]=\"hero === selectedHero\"\n    (click)=\"onSelect(hero)\">\n    <span class=\"badge\">{{hero.id}}</span> {{hero.name}}\n  </li>\n</ul>\n<!-- <div style=\"height:720px;width:400px;border:2px dashed black\" ></div> -->\n<img src=\"./assets/tree.jpg\"/>\n<app-hero-detail [hero]=\"selectedHero\"></app-hero-detail>\n"

/***/ }),

/***/ "./src/app/heroes/heroes.component.ts":
/*!********************************************!*\
  !*** ./src/app/heroes/heroes.component.ts ***!
  \********************************************/
/*! exports provided: HeroesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroesComponent", function() { return HeroesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _mock_heroes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../mock-heroes */ "./src/app/mock-heroes.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeroesComponent = /** @class */ (function () {
    function HeroesComponent() {
        this.heroes = _mock_heroes__WEBPACK_IMPORTED_MODULE_1__["HEROES"];
        this.appTitle = 'test';
    }
    HeroesComponent.prototype.ngOnInit = function () {
    };
    HeroesComponent.prototype.onSelect = function (hero) {
        this.selectedHero = hero;
        this.appTitle = "selected hero is " + hero.name;
    };
    HeroesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-heroes',
            template: __webpack_require__(/*! ./heroes.component.html */ "./src/app/heroes/heroes.component.html"),
            styles: [__webpack_require__(/*! ./heroes.component.css */ "./src/app/heroes/heroes.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeroesComponent);
    return HeroesComponent;
}());



/***/ }),

/***/ "./src/app/mock-heroes.ts":
/*!********************************!*\
  !*** ./src/app/mock-heroes.ts ***!
  \********************************/
/*! exports provided: HEROES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HEROES", function() { return HEROES; });
var HEROES = [
    { id: 11, name: 'Mr. Nice' },
    { id: 12, name: 'Narco' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritas' },
    { id: 15, name: 'Magneta' },
    { id: 16, name: 'RubberMan' },
    { id: 17, name: 'Dynama' },
    { id: 18, name: 'Dr IQ' },
    { id: 19, name: 'Magma' },
    { id: 20, name: 'Tornado' }
];


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\ivana\Documents\dev\angular-ex-2\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map