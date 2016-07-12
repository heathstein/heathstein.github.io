"use strict";
/**
 * Created by 212544474 on 2/12/2016.
 */
var AlertModel = (function () {
    // new AlertModel("danger","This my message",3000,true),
    function AlertModel(type, message, closeTime, closable) {
        if (type === void 0) { type = ""; }
        if (message === void 0) { message = ""; }
        if (closeTime === void 0) { closeTime = 15000; }
        if (closable === void 0) { closable = true; }
        this.type = type;
        this.message = message;
        this.closeTime = closeTime;
        this.closable = closable;
    }
    AlertModel.prototype.toggle = function () {
        // this.status = this.status == "started" ? "completed" : "started";
        //  console.log("this:  " , this)
    };
    return AlertModel;
}());
exports.AlertModel = AlertModel;
//# sourceMappingURL=alert-model.js.map