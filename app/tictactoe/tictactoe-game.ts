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
    public winsPlayer1 = 0;
    public winsPlayer2 = 0;
    public cat = 0;

    constructor( ){

    }


    startGame(){
        this.cells = [];
        this.buildBoard()
        this.ticTacToeAI = new TicTacToeAI(this.skillLevel, this.cells, this);
        this.results = new TicTacToeResults();
        this.setRandomPlayer();
        this.whosMove();
    }



    updateBoard(index){
            this.cells[index].value = this.VALUES[this.currentPlayer];
            this.cells[index].active = false;
            this.checkStatus(this.cells,this.VALUES[this.currentPlayer]);
            this.setPlayer();
    }


    makePlayerMove(_index):void{
        if( this.cells[_index].active && !this.results.win && !this.results.tie ){

            this.updateBoard(_index);
            var that = this;

            if(!this.results.win && !this.results.tie )

                setTimeout(function(){
                    that.makeAiMove();
                }, 100);


        }
    }



    makeAiMove(){
        //console.log("AI SHOULD BE MAKING A MOVE" , this.ticTacToeAI.findMove())
        this.updateBoard(this.ticTacToeAI.findMove());
    }



    buildBoard(){
        for (var i = 0; i < 9; i++){
            this.cells.push(new TicTacToeModel("",true));
        }
        //console.log("BOARD IS BUILD:" , this.cells);
    }




    whosMove(){
        if( this.currentPlayer === 0){
            this.makeAiMove();
        }
    }



    setPlayer(){

        //console.log("//////////////////////////// setPlayer //////////////////////////////");
        //console.log(" WAS: " , this.currentPlayer);
        this.currentPlayer = this.currentPlayer === 0 ? 1 : 0;
        this.playerLabel = this.LABELS[this.currentPlayer];

        //console.log(" NOW : " , this.currentPlayer);
        //console.log("//////////////////////////// setPlayer //////////////////////////////");


    }

    setRandomPlayer():void{
        this.currentPlayer = Math.round( Math.random() );
        this.playerLabel = this.LABELS[this.currentPlayer];
        //console.log("//////////////////////////// setRandomPlayer //////////////////////////////");
        //console.log("this.currentPlayer"  , this.currentPlayer)
        //console.log("//////////////////////////// setRandomPlayer //////////////////////////////");

    }


   checkStatus(tiles,player) {
       //console.log("tiles " , tiles);
       //console.log("player " , player);
       if( this.checkWinner(tiles,player) ){
           //console.log("we have a winner ");
           this.results.win = true;
           this.results.winner = this.currentPlayer;
           this.results.status = ''+this.LABELS[this.currentPlayer]+'   has  won';
           this.markSquares(tiles,player);

           if(player == "X"){
               ++this.winsPlayer1;
           }else{
               ++this.winsPlayer2
           }

           return true;
       }

      if( this.checkTie(this.cells) ){
          this.results.tie = true;
          this.results.winner = null;
          ++this.cat;
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


    private markSquares(tiles,player){
        
        
        var status = "winner";
        
        if(player == "0"){
            status = "loser";
        }
        
        
        if(tiles[0].value == player && tiles[1].value == player && tiles[2].value == player ){
            tiles[0].status = status;
            tiles[1].status = status;
            tiles[2].status = status;
        }else if(tiles[3].value == player && tiles[4].value == player && tiles[5].value == player){
            tiles[3].status = status;
            tiles[4].status = status;
            tiles[5].status = status;
        }else if(tiles[6].value == player && tiles[7].value == player && tiles[8].value == player){
            tiles[6].status = status;
            tiles[7].status = status;
            tiles[8].status = status;
        }else if(tiles[0].value == player && tiles[3].value == player && tiles[6].value == player){
            tiles[0].status = status;
            tiles[3].status = status;
            tiles[6].status = status;
        }else if(tiles[1].value == player && tiles[4].value == player && tiles[7].value == player){
            tiles[1].status = status;
            tiles[4].status = status;
            tiles[7].status = status;
        }else if(tiles[2].value == player && tiles[5].value == player && tiles[8].value == player){
            tiles[2].status = status;
            tiles[5].status = status;
            tiles[8].status = status;
        }else if(tiles[0].value == player && tiles[4].value == player && tiles[8].value == player){
            tiles[0].status = status;
            tiles[4].status = status;
            tiles[8].status = status;
        }else if(tiles[2].value == player && tiles[4].value == player && tiles[6].value == player){
            tiles[2].status = status;
            tiles[4].status = status;
            tiles[6].status = status;
        }
        return true;

    }






   checkTie(_board){
       for (var i = 0; i < _board.length; i++) {
           if (_board[i].active ) {
               return false;
           }
       };
       return true;
   }




    /*
    filterArray(value){
        //console.log("TodoService : " , value )
        this.todos = [new TodoModel("SO WHAT"), ]
    }
    */




}