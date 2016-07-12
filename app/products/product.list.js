/**
 * Created by heathstein on 7/9/16.
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
var router_1 = require('@angular/router');
var products_service_1 = require('./products.service');
var ProductList = (function () {
    function ProductList(router, service) {
        this.router = router;
        this.service = service;
    }
    ProductList.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getProducts().then(function (products) { return _this.products = products; });
    };
    ProductList.prototype.onSelect = function (product) {
        this.router.navigate(['/products', product.id]);
    };
    ProductList = __decorate([
        core_1.Component({
            selector: 'product-admin',
            directives: [],
            providers: [products_service_1.ProductsService],
            template: "\n \n <style>\n     .row-striped:nth-of-type(odd){\n      background-color: #efefef;\n    }\n    \n    .row-striped:nth-of-type(even){\n      background-color: #ffffff;\n    }\n    \n    .row{\n    padding: 5px;\n    }\n</style>\n \n <div class=\"panel panel-primary\" style=\"margin:10px 0px 0px 0px\">\n  <div class=\"panel-heading\">\n    <h3 class=\"panel-title\">Product List</h3>\n  </div>\n  <div class=\"panel-body\">\n     <div class=\"container-fluid\">  \n      <div class=\"row row-striped\" *ngFor=\"let product of products\" (click)=\"onSelect(product)\">\n             <div class=\"col-xs-1\"> <span class=\"badge\">{{product.id}}</span> </div>\n             <div class=\"col-md-1\"><img src=\"{{product.imgUrl}}\" width=\"60px\"></div>\n             <div class=\"col-md-3\"> {{product.name}}</div>\n             <div class=\"col-md-1\">{{product.price}}</div>\n      </div>\n  </div>\n\n  </div>\n</div>\n \n \n  \n \n"
        }), 
        __metadata('design:paramtypes', [router_1.Router, products_service_1.ProductsService])
    ], ProductList);
    return ProductList;
}());
exports.ProductList = ProductList;
//# sourceMappingURL=product.list.js.map