/**
 * Created by 212544474 on 2/24/2016.
 */
import {TicTacToeGame} from "./tictactoe-game";
import {TicTacToeModel} from "./tictactoe-model.ts";

export class TicTacToeAI{

    public skillLevel:number;
    public board = [];

    constructor(aiLevel:number = 2 , cells:Array<TicTacToeModel> = [] ){
        this.skillLevel = aiLevel;
        this.board = cells;
    }


    public findMove():number{
        var move:number = 0


        if(this.skillLevel === 0 ){
            move = this.takeANoviceMove();
        }else if(this.skillLevel === 1 ){
            move = this.takeANoviceMove();
        }else if(this.skillLevel === 2 ){
            move = this.takeANoviceMove();
        };

        return move;
    }


    private minimaxValue( ){


    }

    private takeABlindMove( ){


    }

    private takeANoviceMove():number{


        var available = this.getEmptyCells();

        console.log( "available.length :" ,  available.length)

        var randomCell = available[Math.floor(Math.random() * available.length)];

        console.log("randomCell" , randomCell )


        return randomCell;

    }


    private getEmptyCells = function(){
        var indxs = [];
        var index = 0;
        for (var cell of this.board) {
            if(cell.active ){
                indxs.push(index);
            }
            index++;
        }
        return indxs;
    }


}