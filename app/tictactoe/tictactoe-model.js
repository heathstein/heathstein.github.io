/**
 * Created by 212544474 on 2/23/2016.
 */
"use strict";
var TicTacToeModel = (function () {
    function TicTacToeModel(value, active) {
        if (value === void 0) { value = ""; }
        if (active === void 0) { active = true; }
        this.value = value;
        this.active = active;
    }
    return TicTacToeModel;
}());
exports.TicTacToeModel = TicTacToeModel;
var TicTacToeResults = (function () {
    function TicTacToeResults(numberClicks, tie, win, winner, status) {
        if (numberClicks === void 0) { numberClicks = 0; }
        if (tie === void 0) { tie = false; }
        if (win === void 0) { win = false; }
        if (winner === void 0) { winner = null; }
        if (status === void 0) { status = ""; }
        this.numberClicks = numberClicks;
        this.tie = tie;
        this.win = win;
        this.winner = winner;
        this.status = status;
    }
    return TicTacToeResults;
}());
exports.TicTacToeResults = TicTacToeResults;
//# sourceMappingURL=tictactoe-model.js.map