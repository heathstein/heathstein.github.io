/**
 * Created by 212544474 on 2/12/2016.
 */
import {Component,provide,EventEmitter} from '@angular/core';
import {Todo} from '../todo/todo';
import {TicTacToe} from '../tictactoe/tictactoe';
import {CanvasArt} from '../canvas-art/canvas-art';


@Component({
    selector: 'home',
    directives: [Todo,TicTacToe,CanvasArt],
    template: `
   <h1>Angularjs 2 Playground</h1>
    <div class="row">
        <div class="pull-left" style="width:70%">
            <canvas-art></canvas-art>
        </div>
        
        <div class="pull-left" style="width:30%">
            <todo-component></todo-component>
        </div>
    </div>
    
   
   
    <h1>Tic Tac Toe</h1>
    <tic-tac-toe></tic-tac-toe>
    # Install Typings CLI utility.
    npm install typings --global
    # Search for definitions.
    typings search tape
    # Find an available definition (by name).
    typings search --name react
    `
})
export class Home {
    constructor() {

    }
}