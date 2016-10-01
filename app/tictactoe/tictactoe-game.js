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
 * Created by 212544474 on 2/24/2016.
 */
var core_1 = require("@angular/core");
var tictactoe_model_1 = require("./tictactoe-model");
var tictactoe_ai_1 = require("./tictactoe-ai");
var TicTacToeGame = (function () {
    function TicTacToeGame() {
        this.VALUES = ["0", "X"];
        this.LABELS = ["The Computer ", "Player 1"];
        this.skillLevels = [{ label: "Rookie", level: 0 }, { label: "Pro", level: 1 }, { label: "You Cant Win", level: 2 }];
        this.skillLevel = this.skillLevels[0].level;
        this.playerLabel = this.LABELS[this.currentPlayer];
        this.cells = [];
        this.results = new tictactoe_model_1.TicTacToeResults();
        this.winsPlayer1 = 0;
        this.winsPlayer2 = 0;
        this.cat = 0;
    }
    TicTacToeGame.prototype.startGame = function () {
        this.cells = [];
        this.buildBoard();
        this.ticTacToeAI = new tictactoe_ai_1.TicTacToeAI(this.skillLevel, this.cells, this);
        this.results = new tictactoe_model_1.TicTacToeResults();
        this.setRandomPlayer();
        this.whosMove();
    };
    TicTacToeGame.prototype.updateBoard = function (index) {
        this.cells[index].value = this.VALUES[this.currentPlayer];
        this.cells[index].active = false;
        this.checkStatus(this.cells, this.VALUES[this.currentPlayer]);
        this.setPlayer();
    };
    TicTacToeGame.prototype.makePlayerMove = function (_index) {
        if (this.cells[_index].active && !this.results.win && !this.results.tie) {
            this.updateBoard(_index);
            var that = this;
            if (!this.results.win && !this.results.tie)
                setTimeout(function () {
                    that.makeAiMove();
                }, 100);
        }
    };
    TicTacToeGame.prototype.makeAiMove = function () {
        //console.log("AI SHOULD BE MAKING A MOVE" , this.ticTacToeAI.findMove())
        this.updateBoard(this.ticTacToeAI.findMove());
    };
    TicTacToeGame.prototype.buildBoard = function () {
        for (var i = 0; i < 9; i++) {
            this.cells.push(new tictactoe_model_1.TicTacToeModel("", true));
        }
        //console.log("BOARD IS BUILD:" , this.cells);
    };
    TicTacToeGame.prototype.whosMove = function () {
        if (this.currentPlayer === 0) {
            this.makeAiMove();
        }
    };
    TicTacToeGame.prototype.setPlayer = function () {
        //console.log("//////////////////////////// setPlayer //////////////////////////////");
        //console.log(" WAS: " , this.currentPlayer);
        this.currentPlayer = this.currentPlayer === 0 ? 1 : 0;
        this.playerLabel = this.LABELS[this.currentPlayer];
        //console.log(" NOW : " , this.currentPlayer);
        //console.log("//////////////////////////// setPlayer //////////////////////////////");
    };
    TicTacToeGame.prototype.setRandomPlayer = function () {
        this.currentPlayer = Math.round(Math.random());
        this.playerLabel = this.LABELS[this.currentPlayer];
        //console.log("//////////////////////////// setRandomPlayer //////////////////////////////");
        //console.log("this.currentPlayer"  , this.currentPlayer)
        //console.log("//////////////////////////// setRandomPlayer //////////////////////////////");
    };
    TicTacToeGame.prototype.checkStatus = function (tiles, player) {
        //console.log("tiles " , tiles);
        //console.log("player " , player);
        if (this.checkWinner(tiles, player)) {
            //console.log("we have a winner ");
            this.results.win = true;
            this.results.winner = this.currentPlayer;
            this.results.status = '' + this.LABELS[this.currentPlayer] + '   has  won';
            this.markSquares(tiles, player);
            if (player == "X") {
                ++this.winsPlayer1;
            }
            else {
                ++this.winsPlayer2;
            }
            return true;
        }
        if (this.checkTie(this.cells)) {
            this.results.tie = true;
            this.results.winner = null;
            ++this.cat;
            this.results.status = 'We have a Tie! Try Again';
            return true;
        }
    };
    TicTacToeGame.prototype.checkWinner = function (tiles, player) {
        if ((tiles[0].value == player && tiles[1].value == player && tiles[2].value == player) ||
            (tiles[3].value == player && tiles[4].value == player && tiles[5].value == player) ||
            (tiles[6].value == player && tiles[7].value == player && tiles[8].value == player) ||
            (tiles[0].value == player && tiles[3].value == player && tiles[6].value == player) ||
            (tiles[1].value == player && tiles[4].value == player && tiles[7].value == player) ||
            (tiles[2].value == player && tiles[5].value == player && tiles[8].value == player) ||
            (tiles[0].value == player && tiles[4].value == player && tiles[8].value == player) ||
            (tiles[2].value == player && tiles[4].value == player && tiles[6].value == player)) {
            return true;
        }
        else {
            return false;
        }
    };
    TicTacToeGame.prototype.markSquares = function (tiles, player) {
        var status = "winner";
        if (player == "0") {
            status = "loser";
        }
        if (tiles[0].value == player && tiles[1].value == player && tiles[2].value == player) {
            tiles[0].status = status;
            tiles[1].status = status;
            tiles[2].status = status;
        }
        else if (tiles[3].value == player && tiles[4].value == player && tiles[5].value == player) {
            tiles[3].status = status;
            tiles[4].status = status;
            tiles[5].status = status;
        }
        else if (tiles[6].value == player && tiles[7].value == player && tiles[8].value == player) {
            tiles[6].status = status;
            tiles[7].status = status;
            tiles[8].status = status;
        }
        else if (tiles[0].value == player && tiles[3].value == player && tiles[6].value == player) {
            tiles[0].status = status;
            tiles[3].status = status;
            tiles[6].status = status;
        }
        else if (tiles[1].value == player && tiles[4].value == player && tiles[7].value == player) {
            tiles[1].status = status;
            tiles[4].status = status;
            tiles[7].status = status;
        }
        else if (tiles[2].value == player && tiles[5].value == player && tiles[8].value == player) {
            tiles[2].status = status;
            tiles[5].status = status;
            tiles[8].status = status;
        }
        else if (tiles[0].value == player && tiles[4].value == player && tiles[8].value == player) {
            tiles[0].status = status;
            tiles[4].status = status;
            tiles[8].status = status;
        }
        else if (tiles[2].value == player && tiles[4].value == player && tiles[6].value == player) {
            tiles[2].status = status;
            tiles[4].status = status;
            tiles[6].status = status;
        }
        return true;
    };
    TicTacToeGame.prototype.checkTie = function (_board) {
        for (var i = 0; i < _board.length; i++) {
            if (_board[i].active) {
                return false;
            }
        }
        ;
        return true;
    };
    TicTacToeGame = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], TicTacToeGame);
    return TicTacToeGame;
}());
exports.TicTacToeGame = TicTacToeGame;
//# sourceMappingURL=tictactoe-game.js.map