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
 * Created by 212544474 on 2/15/2016.
 */
/*
 * Angular
 */
var core_1 = require('@angular/core');
var hero_1 = require('./hero');
var router_1 = require('@angular/router');
var superhero_service_1 = require('./superhero.service');
var SuperheroAdd = (function () {
    function SuperheroAdd(router, service) {
        this.router = router;
        this.service = service;
        this.title = "Add Superhero";
        this.hero = new hero_1.Hero(0, '', '', '', '', '');
    }
    SuperheroAdd.prototype.addSuperHero = function () {
        console.log(this.hero);
        this.service.addHero(this.hero);
        this.goToSuperheros();
    };
    SuperheroAdd.prototype.goToSuperheros = function () {
        this.router.navigate(['/superheros']);
    };
    SuperheroAdd = __decorate([
        core_1.Component({
            selector: 'add-superhero',
            directives: [router_1.ROUTER_DIRECTIVES],
            providers: [superhero_service_1.SuperheroService],
            template: "\n<div class=\"panel panel-primary\">\n    <div class=\"panel-heading\">Add Superhero</div>\n    <div class=\"panel-body\">\n        <!--- FORM --->\n        <form>\n            <div class=\"form-group\">\n                <div *ngIf=\"hero\" style=\"height:auto; overflow:hidden\">\n                <label for=\"\">Superhero Name</label>\n                <input type=\"text\" [(ngModel)]=\"hero.name\"   class=\"form-control\">\n\n                <label for=\"\">Superhero Powers</label>\n                <input type=\"text\" [(ngModel)]=\"hero.powers\"  class=\"form-control\">\n\n                <label for=\"\">Superhero Age</label>\n                <input type=\"text\" [(ngModel)]=\"hero.age\"  class=\"form-control\">\n\n                <label for=\"\">Superhero Height</label>\n                <input type=\"text\" [(ngModel)]=\"hero.height\"  class=\"form-control\">\n\n                <label for=\"\">Superhero Weight</label>\n                <input type=\"text\" [(ngModel)]=\"hero.weight\"  class=\"form-control\">\n                <hr>\n\n                <div class=\"btn btn-sm btn-info\" (click)=\"addSuperHero()\">Add Superhero</div>\n                <div class=\"btn btn-sm btn-warning\" (click)=\"goToSuperheros()\">Cancel</div>\n\n\n                </div>\n\n            </div>\n        </form>\n        <!--- FROM --->\n    </div>\n</div>"
        }), 
        __metadata('design:paramtypes', [router_1.Router, superhero_service_1.SuperheroService])
    ], SuperheroAdd);
    return SuperheroAdd;
}());
exports.SuperheroAdd = SuperheroAdd;
//# sourceMappingURL=superhero.add.js.map