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
/*
 * Angular
 */
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var Products = (function () {
    function Products(router) {
        this.router = router;
    }
    Products.prototype.goToProduct = function (id) {
        this.router.navigate(['/products', id]);
    };
    Products = __decorate([
        core_1.Component({
            selector: 'products',
            directives: [router_1.ROUTER_DIRECTIVES],
            styles: ['nav { border:1px solid #CCCCCC ; padding:4px;}'],
            template: "\n   <nav>\n      <a [routerLink]=\"['./']\">Products</a> | \n      <a [routerLink]=\"['./admin']\">Admin</a> | \n       Enter id: <input #id size=\"6\">\n       <button (click)=\"goToProduct(id.value)\">Go</button>\n    </nav>\n  \n\n  <div class=\"products-area\">\n    <router-outlet></router-outlet>\n  </div>\n  "
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], Products);
    return Products;
}());
exports.Products = Products;
//# sourceMappingURL=products.js.map