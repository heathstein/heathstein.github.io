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
 * Created by 212544474 on 2/16/2016.
 */
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var navigation_1 = require('../navigation/navigation');
var Header = (function () {
    function Header() {
    }
    Header = __decorate([
        core_1.Component({
            selector: 'header',
            directives: [router_1.RouterLink, navigation_1.Navigation],
            templateUrl: "app/layout/header/header.html"
        }), 
        __metadata('design:paramtypes', [])
    ], Header);
    return Header;
}());
exports.Header = Header;
//# sourceMappingURL=header.js.map