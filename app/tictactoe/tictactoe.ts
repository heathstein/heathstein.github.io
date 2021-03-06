/**
 * Created by 212544474 on 2/23/2016.
 */
/**
 * Created by 212544474 on 2/12/2016.
 */
import {Component,Inject} from "@angular/core";
import {TicTacToeGame} from "./tictactoe-game";

@Component({
    selector:'tic-tac-toe',
    directives: [],
    styles: [`
    .tie {
      background-color: #0e97cb !important;
    }
    .loser{
      background-color: #fb143a !important;
    }
    
    .tictactoe .container{
        margin:0px !important;
        padding:0px; !important;
    }
  
    
    
    .status{
    padding:10px;
    -webkit-border-radius: 4px;
    border-radius: 4px;
    background-color: #33cc33;
    margin-bottom:3px;
    }
    
    
   `],
    template:`
    <div class="tictactoe">
    <div class="status" [ngClass]="{loser: ticTacToeGame.results.winner == 0, tie: ticTacToeGame.results.winner == null } " *ngIf="ticTacToeGame.results.status.length" >{{ticTacToeGame.results.status}}</div>
      <div class="container" >
      <select style="width:150px" class="form-control pull-left input-sm" [(ngModel)]="ticTacToeGame.skillLevel" (ngModelChange)="toNumber()">
        <option  [value]="i.level" *ngFor="let i of ticTacToeGame.skillLevels">{{i.label}}</option>
      </select>
     <button style="margin-left:10px" class="btn btn-info pull-left" (click)="startGame()">Start Game</button>
     </div>
     
    <div class="score-board">{{ticTacToeGame.playerLabel}}</div>
             <div ng-style="{'background-color': cell.color}" class="tac-container"><div [ngClass]="{active: cell.active , winner: cell.status == 'winner', loser: cell.status == 'loser'} " *ngFor="let cell of ticTacToeGame.cells; let i = index" (click)="makeMove(i)">{{ cell.value }}</div>
    </div>
    <div>Player: <b style="color:green">{{ticTacToeGame.winsPlayer1}}</b></div>
    <div>Computer: <b style="color:red">{{ticTacToeGame.winsPlayer2}}</b></div>
    <div>Cat: {{ticTacToeGame.cat}}</div>
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
        this.startGame();
     }

    makeMove(_index){
        this.ticTacToeGame.makePlayerMove(_index);
    }

    toNumber(){
        this.ticTacToeGame.skillLevel = +this.ticTacToeGame.skillLevel;

    }

    startGame(){
        this.ticTacToeGame.startGame();
    }





}