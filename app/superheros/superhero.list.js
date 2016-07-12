/**
 * Created by heathstein on 7/10/16.
 */
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
var http_1 = require('@angular/http');
var router_1 = require('@angular/router');
var superhero_service_1 = require('./superhero.service');
var SuperheroList = (function () {
    function SuperheroList(http, router, service) {
        this.http = http;
        this.router = router;
        this.service = service;
    }
    SuperheroList.prototype.ngOnInit = function () {
        var _this = this;
        // this.makeRequest();
        this.service.getSuperHeros().then(function (heros) { return _this.heros = heros; });
    };
    /*
    makeRequest(): void {
        let url = "json/people.json";
        // let url = 'http://jsonplaceholder.typicode.com/posts/1';
        this.loading = true;
        var self = this;
        this.http.request(url)
            .subscribe((res: Response) => {
                this.data = res.json();
                console.log("------------------------------------: " , this.data)
                this.loading = false;
            });
    }
    */
    SuperheroList.prototype.edit = function (item) {
        console.log("item:", item);
        //this.router.navigate(['./EditItem', {id: item.id}]);
    };
    SuperheroList.prototype.logError = function (error) {
        console.log(error);
    };
    SuperheroList.prototype.logData = function (data) {
        console.log(data);
        this.data = data;
    };
    SuperheroList.prototype.editSuperhero = function (id) {
        this.router.navigate(['/superheros', id]);
    };
    SuperheroList.prototype.addSuperhero = function () {
        this.router.navigate(['/superheros/add']);
        /* var newUser = {"id": 0, "name": "Heath Stein"}
         console.log(this.data)
         this.data.push({
             "id": 3,
             "name": "New Superhero",
             "powers": "Coder",
             "age": 44,
             "height": "6'1",
             "weight": "210"
         }); */
    };
    SuperheroList.prototype.removeHero = function (hero) {
        console.log(hero);
        this.service.deleteHero(hero);
    };
    SuperheroList = __decorate([
        core_1.Component({
            directives: [],
            providers: [superhero_service_1.SuperheroService],
            templateUrl: "app/superheros/superheroLists.html"
        }), 
        __metadata('design:paramtypes', [http_1.Http, router_1.Router, superhero_service_1.SuperheroService])
    ], SuperheroList);
    return SuperheroList;
}());
exports.SuperheroList = SuperheroList;
//# sourceMappingURL=superhero.list.js.map