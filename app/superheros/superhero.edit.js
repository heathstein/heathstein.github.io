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
/**
 * Created by 212544474 on 2/15/2016.
 */
/*
 * Angular
 */
var core_1 = require('@angular/core');
//import {RouteParams} from '@angular/router';
var router_1 = require('@angular/router');
var router_2 = require('@angular/router');
var superhero_service_1 = require('./superhero.service');
var _ = require('lodash');
var SuperheroEdit = (function () {
    function SuperheroEdit(route, router, service) {
        this.route = route;
        this.router = router;
        this.service = service;
        this.title = "Edit Superhero";
        // this.id = routeParams.get('id');
    }
    SuperheroEdit.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            var id = +params['id']; // (+) converts string 'id' to a number
            var that = _this;
            _this.service.getSuperHero(id).then(function (hero) { return that.setUpHero(_.cloneDeep(hero)); });
        });
    };
    SuperheroEdit.prototype.setUpHero = function (hero) {
        console.log(hero);
        this.hero = hero;
    };
    SuperheroEdit.prototype.updateSuperHero = function (hero) {
        console.log(hero);
        this.service.updateHero(hero);
        this.router.navigate(['/superheros']);
    };
    SuperheroEdit.prototype.goToSuperheros = function () {
        this.router.navigate(['/superheros']);
    };
    SuperheroEdit = __decorate([
        core_1.Component({
            selector: 'edit',
            directives: [router_1.ROUTER_DIRECTIVES],
            providers: [superhero_service_1.SuperheroService],
            template: "\n<div class=\"panel panel-primary\">\n    <div class=\"panel-heading\">Edit Superhero</div>\n    <div class=\"panel-body\">\n        <!--- FORM --->\n        <form>\n            <div class=\"form-group\">\n                <div *ngIf=\"hero\" style=\"height:auto; overflow:hidden\">\n                <label for=\"\">Superhero Name</label>\n                <input type=\"text\" [(ngModel)]=\"hero.name\"   class=\"form-control\">\n\n                <label for=\"\">Superhero Powers</label>\n                <input type=\"text\" [(ngModel)]=\"hero.powers\"  class=\"form-control\">\n\n                <label for=\"\">Superhero Age</label>\n                <input type=\"text\" [(ngModel)]=\"hero.age\"  class=\"form-control\">\n\n                <label for=\"\">Superhero Height</label>\n                <input type=\"text\" [(ngModel)]=\"hero.height\"  class=\"form-control\">\n\n                <label for=\"\">Superhero Weight</label>\n                <input type=\"text\" [(ngModel)]=\"hero.weight\"  class=\"form-control\">\n                <hr>\n\n                <div class=\"btn btn-sm btn-info\" (click)=\"updateSuperHero(hero)\">Update Superhero</div>\n                <div class=\"btn btn-sm btn-warning\" (click)=\"goToSuperheros()\">Cancel</div>\n\n\n                </div>\n\n            </div>\n        </form>\n        <!--- FROM --->\n    </div>\n</div>\n\n"
        }), 
        __metadata('design:paramtypes', [router_2.ActivatedRoute, router_2.Router, superhero_service_1.SuperheroService])
    ], SuperheroEdit);
    return SuperheroEdit;
}());
exports.SuperheroEdit = SuperheroEdit;
//# sourceMappingURL=superhero.edit.js.map