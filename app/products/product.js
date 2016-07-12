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
 * Created by heathstein on 7/9/16.
 */
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var products_service_1 = require('./products.service');
var Product = (function () {
    // private product;
    function Product(route, router, service) {
        this.route = route;
        this.router = router;
        this.service = service;
        this.color = 'green';
    }
    Product.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            var id = +params['id']; // (+) converts string 'id' to a number
            var that = _this;
            _this.service.getProduct(id).then(function (product) { return that.setUpProduct(product); });
        });
    };
    Product.prototype.setUpProduct = function (product) {
        if (!product) {
            this.gotoProducts();
        }
        this.product = product;
        this.setColor();
    };
    Product.prototype.setColor = function () {
        this.color = 'green';
        if (this.product.inStock === 0) {
            this.color = 'red';
        }
    };
    Product.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    Product.prototype.gotoProducts = function ($event) {
        console.log("$event", $event);
        this.router.navigate(['/products']);
    };
    Product.prototype.purchase = function ($event) {
        console.log("sjdasjdlsjfkjsdhfkjsdhfkldshfk");
    };
    Product.prototype.previous = function (id) {
        var newId = this.service.getPrevious(id);
        console.log("previous :::::::::::::::::::", newId);
        this.router.navigate(['/products', newId]);
    };
    Product.prototype.next = function (id) {
        var newId = this.service.getNext(id);
        console.log("previous :::::::::::::::::::", newId);
        //this.router.navigate(['/products', {id:newid}]);
        this.router.navigate(['/products', newId]);
    };
    Product = __decorate([
        core_1.Component({
            selector: 'product',
            directives: [],
            providers: [products_service_1.ProductsService],
            template: "\n  <div *ngIf=\"product\" style=\"height:auto; overflow:hidden\">\n  \n  <h4 style=\"margin:10px 0px 10px 0px; border-bottom:1px solid #CCCCCC\">Product: {{product.name}}</h4> \n    \n  <div class=\"pull-left\" style=\"margin-right:20px\">\n        <img src=\"{{product.imgUrl}} \" width=\"280px\">\n  </div>\n  \n  <div >\n    \n    <div style=\"height: auto; overflow: hidden; margin-bottom:5px\">\n        <div (click)=\"previous(product.id)\" class=\"pull-left\"><i class=\"fa fa-arrow-left\"></i>Previous </div>\n        <div class=\"pull-left\" style=\"margin:0px 2px 0px 2px;\"> | </div>\n        <div (click)=\"next(product.id)\" class=\"pull-left\"> Next <i class=\"fa fa-arrow-right\"></i></div> \n    </div>  \n       \n     <p><b>Product Id:</b> {{product.id}}</p>\n     <div [ngStyle]=\"{'color': color}\"><b>InStock:</b> {{product.inStock}}</div> \n     <p>{{product.desc}}</p>\n     <p><b>Price:</b> {{product.price}}</p>   \n     <div class=\"btn btn-success\" (click)=\"purchase($event)\">Buy Now</div>\n    \n    </div> \n       \n  </div>\n  \n  <div class=\"btn btn-info\" style=\"margin-top:10px\" (click)=\"gotoProducts($event)\">Back To All Products</div>\n  "
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, products_service_1.ProductsService])
    ], Product);
    return Product;
}());
exports.Product = Product;
//# sourceMappingURL=product.js.map