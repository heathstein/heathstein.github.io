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
var core_1 = require('@angular/core');
var hero_1 = require('./hero');
var SUPERHEROS = [
    new hero_1.Hero(1, "Superman", "All", "1087", "6'1", "1200"),
    new hero_1.Hero(2, "The Incredible Hulk", "Strength", "54", "6'4", "550"),
    new hero_1.Hero(3, "Batman", "Inventiveness", "44", "6'1", "210")
];
var int = 3;
var superheroPromise = Promise.resolve(SUPERHEROS);
var SuperheroService = (function () {
    function SuperheroService() {
    }
    SuperheroService.prototype.getSuperHeros = function () { return superheroPromise; };
    SuperheroService.prototype.getSuperHero = function (id) {
        return superheroPromise
            .then(function (heros) { return heros.find(function (hero) { return hero.id === id; }); });
    };
    SuperheroService.prototype.addHero = function (hero) {
        int++;
        hero.id = int;
        SUPERHEROS.push(hero);
    };
    SuperheroService.prototype.updateHero = function (hero) {
        var index = SUPERHEROS.indexOf(hero);
        var goodIndex = _.findIndex(SUPERHEROS, { 'id': hero.id });
        console.log("goodIndex : ", goodIndex);
        console.log("index : ", index);
        console.log(hero);
        SUPERHEROS[goodIndex] = hero;
    };
    SuperheroService.prototype.deleteHero = function (hero) {
        var index = SUPERHEROS.indexOf(hero);
        SUPERHEROS.splice(index, 1);
    };
    SuperheroService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], SuperheroService);
    return SuperheroService;
}());
exports.SuperheroService = SuperheroService;
//# sourceMappingURL=superhero.service.js.map