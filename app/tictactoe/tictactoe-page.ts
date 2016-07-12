/**
 * Created by 212544474 on 2/23/2016.
 */
/**
 * Created by 212544474 on 2/12/2016.
 */
import {Component,Inject} from "@angular/core";
import {TicTacToe} from "./tictactoe";


@Component({
    selector:'tic-tac-toe-page',
    directives: [TicTacToe],
    template:`
   
        <div class="panel panel-primary" style="margin:10px 0px 0px 0px">
        <div class="panel-heading">
        <h3 class="panel-title">TicTacToe Game</h3>
        </div>
        <div class="panel-body">
          <tic-tac-toe></tic-tac-toe>
        </div>
        </div>`

})

export class TicTacToePage {

    constructor() {
       
    }

}