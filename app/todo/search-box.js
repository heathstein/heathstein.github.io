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
var SearchBox = (function () {
    function SearchBox() {
        this.update = new core_1.EventEmitter();
    }
    SearchBox.prototype.ngOnInit = function () {
        this.update.emit("");
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], SearchBox.prototype, "update", void 0);
    SearchBox = __decorate([
        core_1.Component({
            selector: 'search-box',
            template: "<div style=\"margin-bottom: 8px;\">\n       \n          <div class=\"input-group\">\n                <span class=\"input-group-addon\"><i class=\"fa fa-search\"></i></span>\n                <input #input  type=\"text\" placeholder=\"search todo list\" class=\"form-control input-sm\" (input)=\"update.emit(input.value)\"  id=\"inputGroupSuccess2\" aria-describedby=\"inputGroupSuccess2Status\">\n              </div>\n       \n      </div>"
        }), 
        __metadata('design:paramtypes', [])
    ], SearchBox);
    return SearchBox;
}());
exports.SearchBox = SearchBox;
//# sourceMappingURL=search-box.js.map