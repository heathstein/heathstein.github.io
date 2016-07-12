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
var StatusSelector = (function () {
    function StatusSelector() {
        this.select = new core_1.EventEmitter();
        this.statuses = ["started", "completed"];
    }
    StatusSelector.prototype.ngOnInit = function () {
        console.log("this.statuses[0] :", this.statuses[0]);
        this.select.emit(this.statuses[0]);
        console.log("when am i called:  ngOnInit(){ ", this.statuses[0]);
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], StatusSelector.prototype, "select", void 0);
    StatusSelector = __decorate([
        core_1.Component({
            selector: 'status-selector',
            template: "<div style=\"margin-bottom: 8px\">\n        <select class=\"form-control input-sm\" (change)=\"select.emit($event.target.value)\" >\n        <option *ngFor=\"let status of statuses\">{{status}}</option>\n        </select>\n        </div>"
        }), 
        __metadata('design:paramtypes', [])
    ], StatusSelector);
    return StatusSelector;
}());
exports.StatusSelector = StatusSelector;
//# sourceMappingURL=status-selector.js.map