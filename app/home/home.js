"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by 212544474 on 2/12/2016.
 */
var core_1 = require('@angular/core');
var todo_1 = require('../todo/todo');
var tictactoe_1 = require('../tictactoe/tictactoe');
var canvas_art_1 = require('../canvas-art/canvas-art');
var random_collision_1 = require('../random-collision/random-collision');
var exploded_tiles_1 = require('../exploded-tiles/exploded-tiles');
var Home = (function () {
    function Home() {
    }
    Home = __decorate([
        core_1.Component({
            selector: 'home',
            directives: [todo_1.Todo, tictactoe_1.TicTacToe, canvas_art_1.CanvasArt, random_collision_1.RandomCollision, exploded_tiles_1.ExplodedTiles],
            template: "\n   <h1>Angularjs 2 Playground</h1>\n \n  \n  \n\n        \n        <div class=\"pull-left\" style=\"width:70%\">\n           <canvas-art></canvas-art>\n        </div>\n        \n        <div class=\"pull-left\" style=\"width:30%\">\n            <todo-component></todo-component>\n        </div>\n        \n        \n  \n        \n        \n        \n    <div class=\"clearfix\"></div>\n    \n    <hr />   \n    \n      <exploded-tiles></exploded-tiles>\n    \n    <hr />    \n    <random-collision></random-collision>\n   \n    <h1>Tic Tac Toe</h1>\n    <tic-tac-toe></tic-tac-toe>\n\n    \n       \n   \n    "
        }), 
        __metadata('design:paramtypes', [])
    ], Home);
    return Home;
}());
exports.Home = Home;
//# sourceMappingURL=home.js.map