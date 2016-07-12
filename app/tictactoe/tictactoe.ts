/**
 * Created by 212544474 on 2/23/2016.
 */
/**
 * Created by 212544474 on 2/12/2016.
 */
import {Component,Inject} from "@angular/core";
import {TicTacToeGame} from "./tictactoe-game";
import {TicTacToeAI} from "./tictactoe-ai";

@Component({
    selector:'tic-tac-toe',
    directives: [],
    template:`
    <div class="tictactoe">
    <div class="status">{{ticTacToeGame.results.status}}</div>
    <select [(ngModel)]="ticTacToeGame.skillLevel">
        <option [value]="i.level" *ngFor="#i of ticTacToeGame.skillLevels">{{i.label}}</option>
    </select>
    <button  class="btn btn-default" (click)="startGame()">Start Game</button>
    <div class="score-board">{{ticTacToeGame.playerLabel}}</div>
             <div class="tac-container"><div [ngClass]="{active: cell.active}" *ngFor="#cell of ticTacToeGame.cells; #i = index" (click)="makeMove(i)">{{ cell.value }}</div>
    </div>
    </div>
`




})
// componentServices: [TodoService] //IF WE DO NOT HAVE TodoService Injected Globally ex(bootstrap(MyAppComponent,  [TodoService])



//http://richard.to/projects/tic-tac-toe/main.js
//https://github.com/Mostafa-Samir/Tic-Tac-Toe-AI/blob/master/scripts/game.js

export class TicTacToe{
    ticTacToeGame:TicTacToeGame;

///public todoService:TodoService
    constructor() {
        this.ticTacToeGame = new TicTacToeGame();
     }

    makeMove(_index){
        this.ticTacToeGame.makePlayerMove(_index);
    }


    startGame(){
        this.ticTacToeGame.startGame();
        console.log("test sasdsa")
    }

    setSkillLevel($event){
        console.log($event);
    }


}