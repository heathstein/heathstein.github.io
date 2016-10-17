/**
 * Created by 212544474 on 2/12/2016.
 */
import {Component,provide,EventEmitter} from '@angular/core';
import {Todo} from '../todo/todo';
import {TicTacToe} from '../tictactoe/tictactoe';
import {CanvasArt} from '../canvas-art/canvas-art';
import {RandomCollision} from '../random-collision/random-collision';
import {ExplodedTiles} from '../exploded-tiles/exploded-tiles';


@Component({
    selector: 'home',
    directives: [Todo,TicTacToe,CanvasArt,RandomCollision,ExplodedTiles],
    template: `
   <h1>Angularjs 2 Playground</h1>
 
  
  

        
        <div class="pull-left" style="width:70%">
           <canvas-art></canvas-art>
        </div>
        
        <div class="pull-left" style="width:30%">
            <todo-component></todo-component>
        </div>
        
        
  
        
        
        
    <div class="clearfix"></div>
    
    <hr />   
    
      <exploded-tiles></exploded-tiles>
    
    <hr />    
    <random-collision></random-collision>
   
    <h1>Tic Tac Toe</h1>
    <tic-tac-toe></tic-tac-toe>

    
       
   
    `
})
export class Home {
    constructor() {

    }
}
