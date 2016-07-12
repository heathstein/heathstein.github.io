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
 * Created by 212544474 on 2/12/2016.
 */
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var Navigation = (function () {
    function Navigation() {
        // console.log("test: " , $('.tooltipped') );
    }
    Navigation = __decorate([
        core_1.Component({
            selector: 'navigation',
            host: { 'class': 'gt-top-nav pull-right' },
            directives: [router_1.ROUTER_DIRECTIVES],
            template: "<ul class=\"gt-header-nav\">\n        <li [routerLink]=\"['/home']\"><a class=\"active\" >Home</a><div class=\"gt-badge badge-xs badge-green\">3</div></li>\n        <li [routerLink]=\"['/particle-swarm']\"><a class=\"\" >Particle Swarm</a><div class=\"gt-badge badge-xs badge-blue\">12</div></li>\n        <li [routerLink]=\"['/tictactoe']\"><a class=\"\" >Tic Tac Toe</a><div class=\"gt-badge badge-xs badge-blue\">12</div></li>\n        <li [routerLink]=\"['/superheros']\"><a class=\"\" >Superheros</a><div class=\"gt-badge badge-xs badge-red\">1</div></li>\n        <li [routerLink]=\"['/products']\"><a class=\"\" >Products</a><div class=\"gt-badge badge-xs badge-blue\">12</div></li>\n    </ul>"
        }), 
        __metadata('design:paramtypes', [])
    ], Navigation);
    return Navigation;
}());
exports.Navigation = Navigation;
//# sourceMappingURL=navigation.js.map