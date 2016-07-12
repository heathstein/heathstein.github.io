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
 * Created by 212544474 on 2/5/2016.
 */
var core_1 = require("@angular/core");
var StartedPipe = (function () {
    function StartedPipe() {
    }
    StartedPipe.prototype.transform = function (value, status) {
        return value.filter(function (item) { return item.status === status; });
    };
    StartedPipe = __decorate([
        core_1.Pipe({
            name: "started"
        }), 
        __metadata('design:paramtypes', [])
    ], StartedPipe);
    return StartedPipe;
}());
exports.StartedPipe = StartedPipe;
//# sourceMappingURL=started-pipe.js.map