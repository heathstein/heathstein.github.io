/**
 * Created by 212544474 on 2/24/2016.
 */
import {TicTacToeGame} from "./tictactoe-game";
import {TicTacToeModel} from "./tictactoe-model.ts";

export class TicTacToeAI{

    public skillLevel:number;
    public board = [];

    constructor(aiLevel:number = 2 , cells:Array<TicTacToeModel> = [], public game: TicTacToeGame){
        this.skillLevel = aiLevel;
        this.board = cells;
    }


    public findMove():number{
        var move:number = 0;
        
        console.log("this.skillLevel ---------------- :" , this.skillLevel)

        if(this.skillLevel === 0 ){
            move = this.takeABlindMove();
        }else if(this.skillLevel === 1 ){
            move = this.takeANoviceMove();
        }else if(this.skillLevel === 2 ){
            move = this.takeAMasterMove();
        };

        return move;
    }


    private minimaxValue( ){


    }

    private takeABlindMove( ){
        var available = this.getEmptyCells(this.board);
        var randomCell = available[Math.floor(Math.random() * available.length)];
        return randomCell;
    }

    private takeANoviceMove():number{
        var move = 0;
        if (Math.random() >= 0.85){
            move = this.takeABlindMove();
            console.log("Blind Move");
        }else{
            move = this.takeAMasterMove();
            console.log("Master Move");
        }
      return move;
    }

    private takeAMasterMove():number{


        var bestMoveValue = -100;
        var move = 0;
        var available = this.getEmptyCells(this.board);


        if(available.length === 9){
            if(Math.random() >= 0.6){
                return 0;
            }else{
                return 4;
            }
        }

        for (var i = 0; i < available.length; i++) {
            var newBoard = this.cloneBoard(this.board);
            newBoard[available[i]].value = "0";
            newBoard[available[i]].active = false;
            var predictedMoveValue = this.minValue(newBoard);

            console.log("predictedMoveValue: " , predictedMoveValue);

            if (predictedMoveValue > bestMoveValue) {
                bestMoveValue = predictedMoveValue;
                console.log("move : " , available[i])
                move = available[i];
            }
        }
        return move;
    }


   private minValue(_board) {
        if (this.game.checkWinner(_board,"0")) {
            //console.log("we have a winner?" , _board);
            return 1;
        } else if (this.game.checkWinner(_board,"X")) {
           // console.log("we have a winner?" , _board);
            return -1;
        } else if (this.game.checkTie(_board)) {
            return 0;
        } else {
            var bestMoveValue = 100;
            var move = 0;
            var available = this.getEmptyCells(_board);
            for (var i = 0; i < available.length; i++) {
                    var newBoard = this.cloneBoard(_board);
                    newBoard[available[i]].value = "X";
                    newBoard[available[i]].active = false;

                    var predictedMoveValue = this.maxValue(newBoard);
                    if (predictedMoveValue < bestMoveValue) {
                        bestMoveValue = predictedMoveValue;
                        move = available[i];
                    }


                }
            }
            return bestMoveValue;

    }




    private maxValue(_board){

        if (this.game.checkWinner(_board,"0")) {
            return 1;
        } else if (this.game.checkWinner(_board,"X")) {
            return -1;
        } else if (this.game.checkTie(_board)) {
            return 0;
        } else {
                var bestMoveValue = -100;
                var move = 0;
                var available = this.getEmptyCells(_board);
                for (var i = 0; i < available.length; i++) {

                    var newBoard = this.cloneBoard(_board);
                    newBoard[available[i]].value = "0";
                    newBoard[available[i]].active = false;
                  //  console.log("_board" , _board)


                   // console.log("newBoard: " , newBoard)

                        var predictedMoveValue = this.minValue(newBoard);
                        if (predictedMoveValue > bestMoveValue) {
                            bestMoveValue = predictedMoveValue;
                            move = available[i];
                        }


                }
                return bestMoveValue;
            }
         };







        /*

        TicTacToeMiniMax.prototype.findMove = function(board) {
            var bestMoveValue = -100;
            var move = 0;
            for (var i = 0; i < board.length; i++) {
                var newBoard = this.makeMove(i, this.maxPlayer, board);
                if (newBoard) {
                    var predictedMoveValue = this.minValue(newBoard);
                    if (predictedMoveValue > bestMoveValue) {
                        bestMoveValue = predictedMoveValue;
                        move = i;
                    }
                }
            }
            return move;
        };
       */



    private minMaxMove(_depth,_board,_player){
        var depth = ++_depth;
        var available = this.getEmptyCells(_board);
        var newPlayer = ((_player === "0" ) ? "X" : "0");
        for (var i = 0; i < available.length; i++) {
            var newBoard = this.cloneBoard(_board);
            newBoard[available[i]].value = _player;
            newBoard[available[i]].active = false;

            if( this.game.checkWinner(newBoard,_player) ){
                return 10
            }else if ( this.game.checkWinner(newBoard,newPlayer)  ){
                return -10
            }else if( this.game.checkTie(newBoard)){
                return 0;
            }else{
                this.minMaxMove(depth, newBoard, newPlayer);

            }
        }
    }

    private cloneBoard(_board){
        return  _.cloneDeep(_board)
    }



    private getEmptyCells = function(_board){
        var indxs = [];
        var index = 0;
        for (var cell of _board) {
            if(cell.active ){
                indxs.push(index);
            }
            index++;
        }
        return indxs;
    }


}