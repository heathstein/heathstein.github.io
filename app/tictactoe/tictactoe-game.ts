/**
 * Created by 212544474 on 2/24/2016.
 */
import {Injectable} from "@angular/core";
import {TicTacToeModel,TicTacToeResults} from "./tictactoe-model";
import {TicTacToeAI} from "./tictactoe-ai";

@Injectable()
export class TicTacToeGame{

    private VALUES = ["0","X"];
    private LABELS = ["The Computer ","Player 1"];
    public skillLevels = [{label:"Rookie",level:0},{label:"Pro",level:1},{label:"You Cant Win",level:2}];
    public skillLevel = this.skillLevels[0].level;
    public currentPlayer:number;
    public playerLabel:String = this.LABELS[this.currentPlayer];
    public cells:Array<TicTacToeModel> = [];
    public results:TicTacToeResults = new TicTacToeResults();
    ticTacToeAI:TicTacToeAI;

    constructor( ){

    }


    startGame(){
        this.cells = [];
        this.buildBoard()
        this.ticTacToeAI = new TicTacToeAI(this.skillLevel, this.cells);
        this.results = new TicTacToeResults();
        this.setRandomPlayer();
        this.whosMove();

        console.log("////////////////////////////////////////////////////////////")
        console.log("//this.skillLevel " , this.skillLevel)
        console.log("////////////////////////////////////////////////////////////")

    }



    updateBoard(index){
            this.cells[index].value = this.VALUES[this.currentPlayer];
            this.cells[index].active = false;
            this.checkStatus(this.cells,this.VALUES[this.currentPlayer]);

        console.log("this.results: " , this.results)

            this.setPlayer();
    }


    makePlayerMove(_index):void{
        if( this.cells[_index].active && !this.results.win && !this.results.tie ){
            this.updateBoard(_index);
            if(!this.results.win && !this.results.tie ){
                this.makeAiMove();
            }

        }
    }



    makeAiMove(){
        console.log("AI SHOULD BE MAKING A MOVE" , this.ticTacToeAI.findMove())
        this.updateBoard(this.ticTacToeAI.findMove());
    }



    buildBoard(){
        for (var i = 0; i < 9; i++){
            this.cells.push(new TicTacToeModel("",true));
        }
        console.log("BOARD IS BUILD:" , this.cells);
    }







    whosMove(){
        if( this.currentPlayer === 0){
            this.makeAiMove();
        }
    }



    setPlayer(){

        console.log("//////////////////////////// setPlayer //////////////////////////////");
        console.log(" WAS: " , this.currentPlayer);
        this.currentPlayer = this.currentPlayer === 0 ? 1 : 0;
        this.playerLabel = this.LABELS[this.currentPlayer];

        console.log(" NOW : " , this.currentPlayer);
        console.log("//////////////////////////// setPlayer //////////////////////////////");


    }

    setRandomPlayer():void{
        this.currentPlayer = Math.round( Math.random() );
        this.playerLabel = this.LABELS[this.currentPlayer];
        console.log("//////////////////////////// setRandomPlayer //////////////////////////////");
        console.log("this.currentPlayer"  , this.currentPlayer)
        console.log("//////////////////////////// setRandomPlayer //////////////////////////////");

    }


   checkStatus(tiles,player) {
       console.log("tiles " , tiles);
       console.log("player " , player);
       if( this.checkWinner(tiles,player) ){
           console.log("we have a winner ");
           this.results.win = true;
           this.results.winner = this.currentPlayer;
           this.results.status = ''+this.LABELS[this.currentPlayer]+'   has  won';
           return true;
       }

      if( this.checkTie() ){
          this.results.tie = true;
          this.results.winner = null;
          this.results.status = 'We have a Tie! Try Again';
          return true;
      }
    }


    checkWinner(tiles,player){
        if(
            (tiles[0].value == player && tiles[1].value == player && tiles[2].value == player) ||
            (tiles[3].value == player && tiles[4].value == player && tiles[5].value == player) ||
            (tiles[6].value == player && tiles[7].value == player && tiles[8].value == player) ||
            (tiles[0].value == player && tiles[3].value == player && tiles[6].value == player) ||
            (tiles[1].value == player && tiles[4].value == player && tiles[7].value == player) ||
            (tiles[2].value == player && tiles[5].value == player && tiles[8].value == player) ||
            (tiles[0].value == player && tiles[4].value == player && tiles[8].value == player) ||
            (tiles[2].value == player && tiles[4].value == player && tiles[6].value == player)
        ){
            return true;
        }else{
            return false;
        }
    }


   checkTie(){
       for (var i = 0; i < this.cells.length; i++) {
           if (this.cells[i].active ) {
               return false;
           }
       }

       return true;
   }




    /*
    filterArray(value){
        console.log("TodoService : " , value )
        this.todos = [new TodoModel("SO WHAT"), ]
    }
    */




}