"use strict";
var TicTacToeAI = (function () {
    function TicTacToeAI(aiLevel, cells) {
        if (aiLevel === void 0) { aiLevel = 2; }
        if (cells === void 0) { cells = []; }
        this.board = [];
        this.getEmptyCells = function () {
            var indxs = [];
            var index = 0;
            for (var _i = 0, _a = this.board; _i < _a.length; _i++) {
                var cell = _a[_i];
                if (cell.active) {
                    indxs.push(index);
                }
                index++;
            }
            return indxs;
        };
        this.skillLevel = aiLevel;
        this.board = cells;
    }
    TicTacToeAI.prototype.findMove = function () {
        var move = 0;
        if (this.skillLevel === 0) {
            move = this.takeANoviceMove();
        }
        else if (this.skillLevel === 1) {
            move = this.takeANoviceMove();
        }
        else if (this.skillLevel === 2) {
            move = this.takeANoviceMove();
        }
        ;
        return move;
    };
    TicTacToeAI.prototype.minimaxValue = function () {
    };
    TicTacToeAI.prototype.takeABlindMove = function () {
    };
    TicTacToeAI.prototype.takeANoviceMove = function () {
        var available = this.getEmptyCells();
        console.log("available.length :", available.length);
        var randomCell = available[Math.floor(Math.random() * available.length)];
        console.log("randomCell", randomCell);
        return randomCell;
    };
    return TicTacToeAI;
}());
exports.TicTacToeAI = TicTacToeAI;
//# sourceMappingURL=tictactoe-ai.js.map